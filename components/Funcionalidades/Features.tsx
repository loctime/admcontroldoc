//components/Funcionalidades/Features.tsx
"use client"

import { FileCheck, Bell, ShieldCheck, Folder } from "lucide-react"
import FeaturesList from "./FeaturesList"

export default function Features() {
  const features = [
    {
      icon: FileCheck,
      title: "Imagenes a PDF",
      description: "Convierte tus imagenes en PDF automaticamente.",
    },
    {
      icon: Bell,
      title: "Backups en segundos",
      description: "Backups de tus documentos en segundos.",
    },
    {
      icon: ShieldCheck,
      title: "Aprobaciones con trazabilidad",
      description: "Control total sobre quién sube, aprueba y visualiza cada documento.",
    },
    {
      icon: Folder,
      title: "Almacén de documentos",
      description: "Almacena documentos en carpetas privadas o publicas.",
    },
  ]

  return (
    <FeaturesList
      features={features}
      sectionId="features"
      title="Gestion automática de documentos"
      subtitle="Como puede ControlDoc ayudarte a gestionar tus documentos"
      gradientHeader="bg-gradient-to-r from-primary/70 to-primary"
      gradientCard="bg-gradient-to-br from-primary to-primary/60 data-[theme=light]:bg-glass data-[theme=light]:bg-none"
      borderColor="border-border hover:border-primary"
      bgSection="bg-background"
      shadowCard="shadow-lg"
    />
  )
}
