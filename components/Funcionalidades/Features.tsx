//components/Funcionalidades/Features.tsx
"use client"

import { FileCheck, Bell, ShieldCheck, PieChart } from "lucide-react"
import FeaturesList from "./FeaturesList"

export default function Features() {
  const features = [
    {
      icon: FileCheck,
      title: "Control Documental Total",
      description: "Gestión centralizada de documentos requeridos para empresas, personal, vehículos y más.",
    },
    {
      icon: Bell,
      title: "Alertas Automáticas",
      description: "Notificaciones por vencimientos, faltantes o revisión vía email o WhatsApp.",
    },
    {
      icon: ShieldCheck,
      title: "Cumplimiento Normativo",
      description: "Adaptado a Ley 19.587, Decretos 911/96 y estándares legales vigentes.",
    },
    {
      icon: PieChart,
      title: "Panel de Estadísticas",
      description: "Visualización clara del estado documental por sucursal, entidad y categoría.",
    },
  ]

  return (
    <FeaturesList
      features={features}
      sectionId="features"
      title="Funcionalidades Clave"
      subtitle="Todo lo que tu empresa necesita para un control documental profesional, rápido y seguro."
      gradientHeader="bg-gradient-to-r from-cyan-400 to-blue-500"
      gradientCard="bg-gradient-to-br from-cyan-500 to-blue-600"
      borderColor="border-gray-800 hover:border-cyan-500"
      bgSection="bg-gradient-to-b from-neutral-950 to-neutral-900"
      shadowCard="shadow-lg"
    />
  )
}
