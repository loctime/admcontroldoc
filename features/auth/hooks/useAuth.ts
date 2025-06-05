"use client"

import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"

export function useAuth() {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error("useAuth debe ser usado dentro de AuthProvider")
  }

  return context
}

// Hook para verificar si el usuario está autenticado
export function useRequireAuth() {
  const { isAuthenticated, isLoading } = useAuth()

  return {
    isAuthenticated,
    isLoading,
    shouldRedirect: !isLoading && !isAuthenticated,
  }
}

// Hook para verificar roles
export function useUserRole() {
  const { profile } = useAuth()

  const hasRole = (role: string) => profile?.role === role
  const hasAnyRole = (roles: string[]) => profile?.role && roles.includes(profile.role)

  return {
    role: profile?.role,
    isAdmin: hasRole("admin"),
    isUser: hasRole("user"),
    isViewer: hasRole("viewer"),
    hasRole,
    hasAnyRole,
  }
}

// Hook para verificar planes
export function useUserPlan() {
  const { profile } = useAuth()

  const hasPlan = (plan: string) => profile?.plan === plan
  const hasMinimumPlan = (plan: string) => {
    const planHierarchy = ["basic", "pro", "enterprise"]
    const userPlanIndex = profile?.plan ? planHierarchy.indexOf(profile.plan) : -1
    const requiredPlanIndex = planHierarchy.indexOf(plan)
    return userPlanIndex >= requiredPlanIndex
  }

  return {
    plan: profile?.plan,
    isBasic: hasPlan("basic"),
    isPro: hasPlan("pro"),
    isEnterprise: hasPlan("enterprise"),
    hasPlan,
    hasMinimumPlan,
  }
}
