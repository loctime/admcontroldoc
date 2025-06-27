//components/Funcionalidades/FeaturesPro.tsx
"use client"

import { UploadCloud, History, CheckCircle2, UserCog, EyeIcon } from "lucide-react"
import FeaturesList from "./FeaturesList"

export default function FeaturesPro() {
  const proFeatures = [
    {
      image: "/canva/cargaGuiada.png",
      icon: UploadCloud,
      title: "Carga Guiada de Documentos",
      description: "Carga paso a paso con validaciones y archivos de ejemplo para cada requerimiento.",
    },
    {
      image: "/canva/historialVersiones.png",
      icon: History,
      title: "Historial de Versiones",
      description: "Registro automático de cada cambio con trazabilidad completa y fechas de revisión.",
    },
    {
      image: "/canva/lecturaAutomatica.png",
      icon: EyeIcon,
      title: "Lectura automática de documentos",
      description: "Extrae automáticamente información clave de los documentos subidos.",
    },
    {
      image: "/canva/gestionRoles.png",
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
      /* Se aplica el gradiente azul corporativo para que el título sea visible y consistente */
      gradientHeader="bg-gradient-to-r from-primary/70 to-primary"
      gradientCard=""
      borderColor=""
      bgSection=""
      shadowCard="shadow-xl"
    />
  )
}
