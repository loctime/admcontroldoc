import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut as firebaseSignOut,
  sendPasswordResetEmail,
  updateProfile,
  type User,
} from "firebase/auth"
import { doc, setDoc, getDoc, updateDoc } from "firebase/firestore"
import { auth, db } from "../../../lib/firebase/config"
import type { RegisterFormData, UserProfile } from "../types/auth.types"

class AuthService {
  // Iniciar sesión con email y contraseña
  async signInWithEmail(email: string, password: string): Promise<User> {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      return userCredential.user
    } catch (error: any) {
      throw this.handleAuthError(error)
    }
  }

  // Registrar nuevo usuario
  async signUpWithEmail(userData: RegisterFormData): Promise<User> {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, userData.email, userData.password)
      const user = userCredential.user

      // Actualizar perfil de Firebase Auth
      await updateProfile(user, {
        displayName: `${userData.firstName} ${userData.lastName}`,
      })

      // Crear perfil en Firestore
      await this.createUserProfile(user.uid, userData)

      return user
    } catch (error: any) {
      throw this.handleAuthError(error)
    }
  }

  // Cerrar sesión
  async signOut(): Promise<void> {
    try {
      await firebaseSignOut(auth)
    } catch (error: any) {
      throw this.handleAuthError(error)
    }
  }

  // Enviar email de recuperación de contraseña
  async sendPasswordReset(email: string): Promise<void> {
    try {
      await sendPasswordResetEmail(auth, email)
    } catch (error: any) {
      throw this.handleAuthError(error)
    }
  }

  // Crear perfil de usuario en Firestore
  private async createUserProfile(uid: string, userData: RegisterFormData): Promise<void> {
    const userProfile: UserProfile = {
      uid,
      email: userData.email,
      firstName: userData.firstName,
      lastName: userData.lastName,
      company: userData.company || "",
      role: "user", // Rol por defecto
      plan: "basic", // Plan por defecto
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      isActive: true,
    }

    await setDoc(doc(db, "users", uid), userProfile)
  }

  // Obtener perfil de usuario desde Firestore
  async getUserProfile(uid: string): Promise<UserProfile | null> {
    try {
      const userDoc = await getDoc(doc(db, "users", uid))
      return userDoc.exists() ? (userDoc.data() as UserProfile) : null
    } catch (error) {
      console.error("Error fetching user profile:", error)
      return null
    }
  }

  // Actualizar perfil de usuario
  async updateUserProfile(uid: string, data: Partial<UserProfile>): Promise<void> {
    try {
      const updateData = {
        ...data,
        updatedAt: new Date().toISOString(),
      }
      await updateDoc(doc(db, "users", uid), updateData)
    } catch (error: any) {
      throw this.handleAuthError(error)
    }
  }

  // Manejar errores de autenticación
  private handleAuthError(error: any): Error {
    const errorMessages: Record<string, string> = {
      "auth/user-not-found": "No existe una cuenta con este email",
      "auth/wrong-password": "Contraseña incorrecta",
      "auth/email-already-in-use": "Ya existe una cuenta con este email",
      "auth/weak-password": "La contraseña es muy débil",
      "auth/invalid-email": "Email inválido",
      "auth/user-disabled": "Esta cuenta ha sido deshabilitada",
      "auth/too-many-requests": "Demasiados intentos fallidos. Intenta más tarde",
      "auth/network-request-failed": "Error de conexión. Verifica tu internet",
    }

    const message = errorMessages[error.code] || "Error de autenticación desconocido"
    return new Error(message)
  }
}

export const authService = new AuthService()
