import type { User } from "firebase/auth"
import type { RegisterFormData } from "./register.types" // Assuming RegisterFormData is declared in another file

export interface AuthUser {
  uid: string
  email: string | null
  displayName: string | null
  photoURL: string | null
  emailVerified: boolean
  createdAt: string
  lastLoginAt: string
}

export interface UserProfile {
  uid: string
  email: string
  firstName: string
  lastName: string
  company?: string
  role: "admin" | "user" | "viewer"
  plan: "basic" | "pro" | "enterprise"
  createdAt: string
  updatedAt: string
  isActive: boolean
}

export interface AuthState {
  user: AuthUser | null
  profile: UserProfile | null
  isLoading: boolean
  isAuthenticated: boolean
  error: string | null
}

export interface AuthContextType extends AuthState {
  signInWithEmail: (email: string, password: string, rememberMe?: boolean) => Promise<void>
  signUpWithEmail: (userData: RegisterFormData) => Promise<void>
  signOut: () => Promise<void>
  sendPasswordReset: (email: string) => Promise<void>
  updateUserProfile: (data: Partial<UserProfile>) => Promise<void>
  clearError: () => void
}

// Convertir Firebase User a AuthUser
export function mapFirebaseUserToAuthUser(firebaseUser: User): AuthUser {
  return {
    uid: firebaseUser.uid,
    email: firebaseUser.email,
    displayName: firebaseUser.displayName,
    photoURL: firebaseUser.photoURL,
    emailVerified: firebaseUser.emailVerified,
    createdAt: firebaseUser.metadata.creationTime || new Date().toISOString(),
    lastLoginAt: firebaseUser.metadata.lastSignInTime || new Date().toISOString(),
  }
}
