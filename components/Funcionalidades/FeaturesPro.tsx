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
    <section className="py-8 w-full max-w-full mx-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-8">Funcionalidades Avanzadas</h2>
        <p className="text-center text-muted-foreground mb-8 text-xl">
          Características profesionales para una gestión documental completa
        </p>
        
        <div className="w-full">
          <FeaturesList features={proFeatures} />
        </div>
      </div>
    </section>
  )
}
