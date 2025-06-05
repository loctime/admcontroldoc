//components/Funcionalidades/FeaturesPro.tsx
"use client"

import { UploadCloud, History, CheckCircle2, UserCog } from "lucide-react"
import FeaturesList from "./FeaturesList"

export default function FeaturesPro() {
  const proFeatures = [
    {
      icon: UploadCloud,
      title: "Carga Guiada de Documentos",
      description: "Carga paso a paso con validaciones y archivos de ejemplo para cada requerimiento.",
    },
    {
      icon: History,
      title: "Historial de Versiones",
      description: "Registro automático de cada cambio con trazabilidad completa y fechas de revisión.",
    },
    {
      icon: CheckCircle2,
      title: "Revisión y Firma Interna",
      description: "Proceso de aprobación manual con observaciones, firma interna y fecha de validación.",
    },
    {
      icon: UserCog,
      title: "Gestión Avanzada de Roles",
      description: "Permisos personalizados para administradores, revisores y usuarios externos.",
    },
  ]

  return (
    <FeaturesList
      features={proFeatures}
      sectionId="features-pro"
      title="Funcionalidades Pro"
      subtitle="Lleva tu gestión documental al siguiente nivel con herramientas exclusivas del plan avanzado."
      gradientHeader="bg-gradient-to-r from-purple-400 to-indigo-500"
      gradientCard="bg-gradient-to-br from-purple-500 to-indigo-600"
      borderColor="border-indigo-700 hover:border-purple-500"
      bgSection="bg-gradient-to-b from-neutral-900 to-black"
      shadowCard="shadow-xl"
    />
  )
}
