"use client"

import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import InfraestructuraCarousel from "./InfraestructuraCarousel"

export default function Hero() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Imagen dinámica según tema (sin hydration mismatch)
  const heroImage = mounted && theme === 'dark' ? "/images/rubior.png" : "/images/morochar.png";

  // Colores dinámicos según tema (sin hydration mismatch)
  const getTextColors = () => {
    if (!mounted) return {
      title: "text-white",
      subtitle: "text-gray-300",
      body: "text-gray-200",
      link: "text-blue-400"
    }
    
    return theme === 'dark' ? {
      title: "text-white",
      subtitle: "text-gray-300", 
      body: "text-gray-200",
      link: "text-blue-400"
    } : {
      title: "text-gray-900",
      subtitle: "text-gray-700",
      body: "text-gray-600", 
      link: "text-blue-600"
    }
  }

  const colors = mounted ? getTextColors() : {
    title: "text-gray-900",
    subtitle: "text-gray-700",
    body: "text-gray-600",
    link: "text-blue-600"
  };

  return (
    <section className="flex flex-col items-center text-center py-12 px-4 bg-transparent">
      {/* Bloque superior centrado */}
      <div className="max-w-3xl w-full pt-1">
        <Image
          src="/logos/controldoc-logo.png"
          alt="Logo ControlDoc"
          width={256}
          height={256}
          className="mx-auto w-64 h-auto mb-2"
          priority
        />
        <p className={`text-lg mb-6 ${colors.subtitle}`}>
          Gestiona y auditar todos los documentos con trazabilidad completa y alertas automáticas.
        </p>
        <div className="flex justify-center gap-4 flex-wrap mb-2">
          <a
            href="https://wa.me/5493364345088"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded transition"
          >
            Contactar
            <ArrowRight className="inline ml-2 w-5 h-5 align-middle" />
          </a>
        </div>
      </div>

      {/* Bloque inferior dividido */}
      <div className="flex flex-col-reverse md:flex-row justify-between items-center max-w-6xl w-full mt-16 gap-12">
        {/* Texto izquierdo */}
        <div className={`flex-1 text-left ${colors.body}`}>
          <h2 className={`text-3xl font-bold mb-4 ${colors.title}`}>
            ControlDoc: Gestión documental avanzada y automatizada
          </h2>
          <p className="mb-6">
            ControlDoc es una plataforma integral de gestión documental diseñada para organizaciones que necesitan recopilar, procesar, revisar y aprobar documentos provenientes de múltiples empresas o entidades.
          </p>
          <p className="mb-6">
            El sistema ofrece capacidades avanzadas de procesamiento automático de documentos como extracción de texto mediante OCR, análisis inteligente de archivos y flujos de trabajo estructurados para la revisión y aprobación, con controles administrativos basados en roles.
          </p>
          <ul className="flex flex-wrap gap-4 text-sm mb-4">
            <li className="bg-blue-800 py-2 px-4 rounded text-white">OCR</li>
            <li className="bg-blue-800 py-2 px-4 rounded text-white">Análisis IA</li>
            <li className="bg-blue-800 py-2 px-4 rounded text-white">Workflows</li>
            <li className="bg-blue-800 py-2 px-4 rounded text-white">Control Roles</li>
          </ul>
          <p className="mb-4 font-semibold">
            Automatizá cada paso y llevá tu gestión documental a otro nivel.
          </p>
          <a href="#" className={`underline hover:opacity-80 transition ${colors.link}`}>
            Probalo ahora y simplificá tu gestión
          </a>
        </div>

        {/* Imagen y carrusel derecho */}
        <div className="flex-1 flex flex-col items-center relative">
          <Image
            src={heroImage}
            alt={mounted && theme === 'dark' ? "Hombre usando ControlDoc en modo oscuro" : "Hombre usando ControlDoc en modo claro"}
            width={420}
            height={420}
            className="max-w-full rounded shadow-lg object-contain"
            priority
          />
          <div className="-mt-12 w-full">
            <InfraestructuraCarousel />
          </div>
        </div>
      </div>
    </section>
  )
}
