//components/Funcionalidades/FeaturesPro.tsx
"use client"

import { UploadCloud, History, CheckCircle2, UserCog, EyeIcon } from "lucide-react"
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
      icon: EyeIcon,
      title: "Lectura automática de documentos",
      description: "Lectura automática de documentos con para extraer información requerida.",
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
      title="Facilidad de uso"
      subtitle="ControlDoc trabaja para ti."
      gradientHeader=""
      gradientCard=""
      borderColor=""
      bgSection=""
      shadowCard="shadow-xl"
    />
  )
}
