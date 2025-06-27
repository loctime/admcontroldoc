"use client"

import FeatureCard from "./FeatureCard"
import FeaturesList from "./FeaturesList"

export default function Features() {
  const features = [
    {
      image: "/canva/folder3.png", // Asegúrate de mover la imagen a /public/cards/
      title: "Backups en segundos",
      description: "Guarda todos tus documentos de forma segura, rápida y automática.",
    },
    {
      image: "/canva/documentoPDF.png",
      title: "Imágenes a PDF",
      description: "Convierte tus imágenes en PDF automáticamente.",
    },
    {
      image: "/canva/AlmacenamientoInterno.png",
      title: "Tus propias carpetas",
      description: "Organiza tus documentos como quieras.",
    },
    {
      image: "/canva/aprobacionTrazabilidad.png",
      title: "Aprobación y trazabilidad",
      description: "Control total sobre quien sube, aprueba y revisa cada documento.",
    },
  ]

  return (
    <section className="py-8 bg-background" id="features">
      <h2 className="text-4xl font-bold text-center mb-2">
        Sistema de gestión automática de documentos empresariales
      </h2>
      <br />
      <br />
      
      {/* Layout de dos columnas: imagen + texto */}
      <div className="container mx-auto px-4 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
          {/* Columna de imagen */}
          <div className="flex justify-center lg:justify-start">
            <img 
              src="/images/seguimientoDocumentos.jpeg" 
              alt="ControlDoc: Sistema de control documental y trazabilidad empresarial" 
              className="
                w-full 
                max-w-md 
                rounded-xl 
                shadow-xl 
                ring-1 
                ring-border 
                dark:ring-border 
                transition 
                duration-300 
                hover:shadow-2xl
                hover:scale-[1.01]
              " 
            />
          </div>
          
          {/* Columna de texto */}
          <div className="text-center lg:text-left max-w-3xl">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[2.25rem] font-bold text-primary mb-4 leading-snug">
              ControlDoc centraliza, automatiza y simplifica la gestión documental de tu organización. 
            </h3>
            <p className="text-base sm:text-lg xl:text-[1.05rem] text-muted-foreground mb-6 leading-relaxed">
              Plataforma de control documental para empresas que brinda gestión integral desde la carga guiada hasta la validación final, asegurando cumplimiento normativo, trazabilidad y disponibilidad de todos los documentos requeridos. Optimiza procesos, reduce riesgos y garantiza control total.
            </p>
            <ul className="space-y-2 text-left">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                Seguimiento en tiempo real de todos los documentos empresariales.
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                Automatización de documentos laborales con lectura inteligente.
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                Historial completo de documentos aprobados y cumplimiento normativo.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <p className="text-center text-gray-500 mb-8 text-2xl">
        Cómo puede ControlDoc ayudarte a gestionar tus documentos empresariales
      </p>
      <FeaturesList features={features} />
    </section>
  )
}
