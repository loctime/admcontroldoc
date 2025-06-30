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

  // Imagen dinámica según tema
  const getHeroImage = () => {
    if (!mounted) return "/images/morochar.png"
    return theme === 'dark' ? "/images/rubior.png" : "/images/morochar.png"
  }

  return (
    <section className="flex flex-col items-center text-center py-12 px-4 bg-transparent">
      {/* Bloque superior centrado */}
      <div className="max-w-3xl w-full">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Control Documental Total</h1>
        <p className="text-lg text-gray-300 mb-6">
          ControlDoc te ayuda a gestionar y auditar todos los documentos con trazabilidad completa y alertas automáticas.
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
          <button className="border border-white text-white font-semibold py-2 px-6 rounded hover:bg-white hover:text-blue-900 transition">
            Ver Demo
          </button>
        </div>
      </div>

      {/* Bloque inferior dividido */}
      <div className="flex flex-col-reverse md:flex-row justify-between items-center max-w-6xl w-full mt-16 gap-12">
        {/* Texto izquierdo */}
        <div className="flex-1 text-left text-gray-200">
          <h2 className="text-3xl font-bold text-white mb-4">ControlDoc: Gestión documental automática y sin errores</h2>
          <p className="mb-6">
            Olvidate de los vencimientos, la carga manual y los documentos perdidos. Con ControlDoc, automatizás alertas, guiás a tu equipo y mantenés todo actualizado al instante.
          </p>
          <ul className="flex flex-wrap gap-4 text-sm mb-4">
            <li className="bg-blue-800 py-2 px-4 rounded">Alertas</li>
            <li className="bg-blue-800 py-2 px-4 rounded">Biblioteca</li>
            <li className="bg-blue-800 py-2 px-4 rounded">Carpetas</li>
            <li className="bg-blue-800 py-2 px-4 rounded">Registros</li>
          </ul>
          <p className="mb-4 font-semibold">Más control. Menos errores.</p>
          <a href="#" className="text-blue-400 underline hover:text-blue-300">Probalo ahora y simplificá tu gestión</a>
        </div>

        {/* Imagen y carrusel derecho */}
        <div className="flex-1 flex flex-col items-center relative">
          <Image
            src={getHeroImage()}
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
