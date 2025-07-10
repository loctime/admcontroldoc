"use client"

import type React from "react"
import { useTheme } from "next-themes"
import { Mail, Phone, MapPin, MessageCircle, Facebook, Instagram } from "lucide-react"

export default function Contact() {
  const { theme } = useTheme()

  // Colores dinámicos según tema (sin hydration mismatch)
  const getColors = () => {
    return theme === 'dark' ? {
      title: "text-white",
      subtitle: "text-gray-300",
      text: "text-gray-300",
    } : {
      title: "text-gray-900",
      subtitle: "text-gray-700",
      text: "text-gray-600",
    }
  }

  const colors = typeof window === 'undefined' ? {
    title: "text-gray-900",
    subtitle: "text-gray-700",
    text: "text-gray-600",
  } : getColors();

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-3xl font-bold mb-8 text-center ${colors.title}`}>Contacto</h2>
          <p className={`text-xl ${colors.subtitle}`}>Estamos aquí para ayudarte</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              {/* Email */}
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className={`font-semibold ${colors.title}`}>Email</h3>
                <a 
                  href="mailto:controldoc@controldoc.app" 
                  className={`${colors.text} hover:text-cyan-500 transition-colors`}
                >
                  controldoc@controldoc.app
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              {/* Teléfono (WhatsApp) */}
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className={`font-semibold ${colors.title}`}>WhatsApp</h3>
                <a 
                  href="https://wa.me/5492944921510" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${colors.text} hover:text-green-500 transition-colors`}
                >
                  +54 9 294 492-1510
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              {/* Ubicación */}
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className={`font-semibold ${colors.title}`}>Ubicación</h3>
                <p className={colors.text}>Argentina</p>
              </div>
            </div>

            {/* Botones de redes sociales */}
            {/*
            <div className="pt-4">
              <h3 className={`font-semibold mb-4 ${colors.title}`}>Síguenos en redes sociales</h3>
              <div className="flex space-x-4">
                {/* WhatsApp 
                <a
                  href="https://wa.me/5492944921510"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-green-500 hover:bg-green-600 rounded-lg transition-all duration-200 hover:scale-110"
                  aria-label="Contactar por WhatsApp"
                >
                  <MessageCircle className="w-6 h-6 text-white" />
                </a>

                {/* Facebook 
                <a
                  href="https://facebook.com/controldoc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all duration-200 hover:scale-110"
                  aria-label="Seguir en Facebook"
                >
                  <Facebook className="w-6 h-6 text-white" />
                </a>

                {/* Instagram 
                <a
                  href="https://instagram.com/controldoc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-lg transition-all duration-200 hover:scale-110"
                  aria-label="Seguir en Instagram"
                >
                  <Instagram className="w-6 h-6 text-white" />
                </a>
              </div>
            </div>
            */}
          </div>
        </div>
      </div>
    </section>
  )
}
