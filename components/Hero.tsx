"use client"

import { ArrowRight, CheckCircle2, Zap, CheckCircle } from "lucide-react"
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

  // Determinar qué imagen mostrar según el tema
  const getHeroImage = () => {
    if (!mounted) return "/images/morochar.png" // Default para SSR
    return theme === 'dark' ? "/images/rubior.png" : "/images/morochar.png"
  }
  
  return (
    <section className="relative pt-20 pb-20 px-4 sm:px-6 lg:px-8 bg-transparent">
     {/* Imagen de fondo para todo el Hero - eliminado para usar solo el fondo global */}
      
      <div className="w-full max-w-6xl mx-auto relative z-10">
        <div className="mb-8">
          <div className="flex justify-center mb-4">
            <div className="inline-flex items-center px-4 py-2 rounded-full  border border-primary/20">
              <Zap className="w-4 h-4 text-primary mr-2" />
              <span className="text-primary text-sm">Tecnología Avanzada</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary text-center">
            Control Documental Total
          </h1>

          <p className="font-serif text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            ControlDoc te ayuda a gestionar y auditar todos los documentos con trazabilidad completa y alertas automáticas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5493364345088"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-primary to-primary/80 px-8 py-4 rounded-lg font-semibold hover:from-primary/80 hover:to-primary transition-all duration-200 flex items-center justify-center"
            >
              Contactar
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <button className="px-8 py-4 rounded-lg border border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-200">
              Ver Demo
            </button>
          </div>
        </div>

        {/* Nueva sección con fondo e imagen del hombre */}
        <div className="relative w-full h-[600px] rounded-xl overflow-hidden mt-16 flex items-center justify-between">
          

          {/* Contenedor de texto a la izquierda */}
          <div className="relative z-10 w-full md:w-1/2 pl-6 md:pl-12 text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              ControlDoc: Gestión documental automática y sin errores
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              Olvidate de los vencimientos, la carga manual y los documentos perdidos.
              Con ControlDoc, automatizás alertas, guiás a tu equipo y mantenés todo actualizado al instante.
            </p>

            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span className="text-primary font-medium">Alertas</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span className="text-primary font-medium">Biblioteca</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span className="text-primary font-medium">Carpetas</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span className="text-primary font-medium">Registros</span>
              </div>
            </div>

            <div className="space-y-3">
              <p className="flex items-center gap-2 text-primary font-semibold">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                Más control. Menos errores.
              </p>
              <p className="flex items-center gap-2 text-primary font-semibold">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                Probalo ahora y simplificá tu gestión.
              </p>
            </div>
          </div>

          {/* Imagen del hombre a la derecha - cambia según el tema */}
          <div className="relative z-10 w-1/2 hidden md:flex justify-end pr-6 md:pr-12">
            <Image
              src={getHeroImage()}
              alt={mounted && theme === 'dark' ? "Hombre usando ControlDoc en modo oscuro" : "Hombre usando ControlDoc en modo claro"}
              width={500}
              height={500}
              className="object-contain transition-opacity duration-300"
              priority
            />
          </div>
        </div>

        {/* Video tutorial de registro */}
        <div className="mt-16 flex flex-col items-center">
          <h3 className="text-lg font-semibold mb-4 text-center">Cómo registrarte en ControlDoc</h3>
          <div className="relative pb-[56.25%] w-full max-w-2xl rounded-xl overflow-hidden">
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-xl"
              src="https://embed.app.guidde.com/playbooks/kSoCKcHx6s5XV6E1LXhxYN"
              title="Registro en ControlDoc"
              frameBorder={0}
              referrerPolicy="unsafe-url"
              allowFullScreen
              allow="clipboard-write"
              sandbox="allow-popups allow-popups-to-escape-sandbox allow-scripts allow-forms allow-same-origin allow-presentation"
            />
          </div>
          <details className="mt-4 w-full max-w-2xl  rounded p-4 text-left text-sm cursor-pointer">
            <summary className="font-semibold text-primary mb-2 cursor-pointer">Ver transcripción del video</summary>
            <div className="mt-2 text-gray-700 dark:text-gray-200 whitespace-pre-line">
              00:02: ¿Recibiste una invitación para cargar documentación? Ya seas parte de una empresa o estés trabajando como contratista, este es el primer paso para empezar.

00:06: Haz clic en "No tenés cuenta" para registrarte y comenzar a subir los documentos que tu empresa necesita.

00:14: ControlDoc te ayuda a tener todo organizado en un solo lugar y con seguimiento en tiempo real.

00:24: Ingresa un correo válido. Es importante que sea real porque ahí vas a recibir novedades importantes y es la única forma de recuperar tu cuenta si perdés la contraseña.

00:37: Ingresa tu CUIT.

00:40: Ingresa el nombre de tu empresa o, si sos un usuario, tu nombre.

00:45: Ingresa tu número de teléfono de contacto.

00:48: Tu dirección.

00:51: Una contraseña segura. No la compartas con nadie.

00:55: Haz clic en "Registrar ahora". Espera que un administrador apruebe tu solicitud y pronto vas a poder subir tus documentos.
            </div>
          </details>
        </div>
      </div>
    </section>
  )
}
