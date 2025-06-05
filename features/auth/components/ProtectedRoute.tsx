"use client"

import { useEffect, type ReactNode } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"

interface ProtectedRouteProps {
  children: ReactNode
  requiredRole?: string
  requiredPlan?: string
  redirectTo?: string
}

export default function ProtectedRoute({
  children,
  requiredRole,
  requiredPlan,
  redirectTo = "/login",
}: ProtectedRouteProps) {
  const { isAuthenticated, isLoading, profile } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    // Esperar a que termine de cargar
    if (isLoading) return

    // Redirigir si no está autenticado
    if (!isAuthenticated) {
      navigate(redirectTo, { replace: true })
      return
    }

    // Verificar rol si es requerido
    if (requiredRole && profile?.role !== requiredRole) {
      navigate("/unauthorized", { replace: true })
      return
    }

    // Verificar plan si es requerido
    if (requiredPlan) {
      const planHierarchy = ["basic", "pro", "enterprise"]
      const userPlanIndex = profile?.plan ? planHierarchy.indexOf(profile.plan) : -1
      const requiredPlanIndex = planHierarchy.indexOf(requiredPlan)

      if (userPlanIndex < requiredPlanIndex) {
        navigate("/upgrade", { replace: true })
        return
      }
    }
  }, [isAuthenticated, isLoading, profile, requiredRole, requiredPlan, navigate, redirectTo])

  // Mostrar loading mientras verifica autenticación
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-500"></div>
      </div>
    )
  }

  // No mostrar nada si no está autenticado (se está redirigiendo)
  if (!isAuthenticated) {
    return null
  }

  // Verificaciones adicionales de rol y plan
  if (requiredRole && profile?.role !== requiredRole) {
    return null
  }

  if (requiredPlan) {
    const planHierarchy = ["basic", "pro", "enterprise"]
    const userPlanIndex = profile?.plan ? planHierarchy.indexOf(profile.plan) : -1
    const requiredPlanIndex = planHierarchy.indexOf(requiredPlan)

    if (userPlanIndex < requiredPlanIndex) {
      return null
    }
  }

  return <>{children}</>
}
