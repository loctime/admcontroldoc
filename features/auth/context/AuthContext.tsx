"use client"

import { createContext, useEffect, useState, type ReactNode } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "../../../lib/firebase/config"
import { authService } from "../services/auth.service"
import type { AuthContextType, AuthState, UserProfile, RegisterFormData } from "../types/auth.types"
import { mapFirebaseUserToAuthUser } from "../types/auth.types"

export const AuthContext = createContext<AuthContextType | undefined>(undefined)

interface AuthProviderProps {
  children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [state, setState] = useState<AuthState>({
    user: null,
    profile: null,
    isLoading: true,
    isAuthenticated: false,
    error: null,
  })

  // Escuchar cambios en el estado de autenticación
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      try {
        if (firebaseUser) {
          const authUser = mapFirebaseUserToAuthUser(firebaseUser)
          const userProfile = await authService.getUserProfile(firebaseUser.uid)

          setState({
            user: authUser,
            profile: userProfile,
            isLoading: false,
            isAuthenticated: true,
            error: null,
          })
        } else {
          setState({
            user: null,
            profile: null,
            isLoading: false,
            isAuthenticated: false,
            error: null,
          })
        }
      } catch (error) {
        console.error("Error loading user data:", error)
        setState((prev) => ({
          ...prev,
          isLoading: false,
          error: "Error cargando datos del usuario",
        }))
      }
    })

    return unsubscribe
  }, [])

  // Iniciar sesión con email y contraseña
  const signInWithEmail = async (email: string, password: string, rememberMe = false): Promise<void> => {
    try {
      setState((prev) => ({ ...prev, isLoading: true, error: null }))

      await authService.signInWithEmail(email, password)

      // Configurar persistencia si rememberMe es true
      if (rememberMe) {
        localStorage.setItem("controldoc-remember", "true")
      } else {
        localStorage.removeItem("controldoc-remember")
      }
    } catch (error: any) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }))
      throw error
    }
  }

  // Registrar nuevo usuario
  const signUpWithEmail = async (userData: RegisterFormData): Promise<void> => {
    try {
      setState((prev) => ({ ...prev, isLoading: true, error: null }))
      await authService.signUpWithEmail(userData)
    } catch (error: any) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }))
      throw error
    }
  }

  // Cerrar sesión
  const signOut = async (): Promise<void> => {
    try {
      await authService.signOut()
      localStorage.removeItem("controldoc-remember")
    } catch (error: any) {
      setState((prev) => ({
        ...prev,
        error: error.message,
      }))
      throw error
    }
  }

  // Enviar email de recuperación de contraseña
  const sendPasswordReset = async (email: string): Promise<void> => {
    try {
      setState((prev) => ({ ...prev, error: null }))
      await authService.sendPasswordReset(email)
    } catch (error: any) {
      setState((prev) => ({
        ...prev,
        error: error.message,
      }))
      throw error
    }
  }

  // Actualizar perfil de usuario
  const updateUserProfile = async (data: Partial<UserProfile>): Promise<void> => {
    if (!state.user) throw new Error("Usuario no autenticado")

    try {
      setState((prev) => ({ ...prev, error: null }))
      await authService.updateUserProfile(state.user.uid, data)

      // Actualizar estado local
      setState((prev) => ({
        ...prev,
        profile: prev.profile ? { ...prev.profile, ...data } : null,
      }))
    } catch (error: any) {
      setState((prev) => ({
        ...prev,
        error: error.message,
      }))
      throw error
    }
  }

  // Limpiar errores
  const clearError = (): void => {
    setState((prev) => ({ ...prev, error: null }))
  }

  const contextValue: AuthContextType = {
    ...state,
    signInWithEmail,
    signUpWithEmail,
    signOut,
    sendPasswordReset,
    updateUserProfile,
    clearError,
  }

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
}
