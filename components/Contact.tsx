"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Send, Mail, Phone, MapPin, MessageCircle, Facebook, Instagram, CheckCircle, AlertCircle } from "lucide-react"
import emailjs from '@emailjs/browser'

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Inicializar EmailJS
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '')
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Enviar email usando EmailJS
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'controldoc@controldoc.app',
          reply_to: formData.email,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
      )

      if (result.status === 200) {
        setSubmitStatus('success')
        setFormData({ name: "", email: "", message: "" })
        console.log('Email enviado exitosamente:', result)
      } else {
        setSubmitStatus('error')
        console.error('Error al enviar email:', result)
      }
    } catch (error) {
      setSubmitStatus('error')
      console.error('Error al enviar email:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  // Colores dinámicos según tema
  const getColors = () => {
    if (!mounted) return {
      title: "text-white",
      subtitle: "text-gray-300",
      label: "text-gray-200",
      text: "text-gray-300",
      inputBg: "bg-gray-900/50",
      inputText: "text-white"
    }
    
    return theme === 'dark' ? {
      title: "text-white",
      subtitle: "text-gray-300",
      label: "text-gray-200", 
      text: "text-gray-300",
      inputBg: "bg-gray-900/50",
      inputText: "text-white"
    } : {
      title: "text-gray-900",
      subtitle: "text-gray-700",
      label: "text-gray-700",
      text: "text-gray-600",
      inputBg: "bg-gray-50",
      inputText: "text-gray-900"
    }
  }

  const colors = getColors()

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-3xl font-bold mb-8 text-center ${colors.title}`}>Contacto</h2>
          <p className={`text-xl ${colors.subtitle}`}>Estamos aquí para ayudarte</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Mensaje de éxito */}
              {submitStatus === 'success' && (
                <div className="flex items-center space-x-2 p-4 bg-green-100 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <p className="text-green-800 dark:text-green-200">¡Mensaje enviado exitosamente! Te responderemos pronto.</p>
                </div>
              )}

              {/* Mensaje de error */}
              {submitStatus === 'error' && (
                <div className="flex items-center space-x-2 p-4 bg-red-100 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                  <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
                  <p className="text-red-800 dark:text-red-200">Error al enviar el mensaje. Por favor, intenta nuevamente.</p>
                </div>
              )}

              <div>
                <label htmlFor="name" className={`block text-sm font-medium mb-1 ${colors.label}`}>
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`w-full px-4 py-3 ${colors.inputBg} ${colors.inputText} border border-cyan-500/20 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors`}
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label htmlFor="email" className={`block text-sm font-medium mb-1 ${colors.label}`}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`w-full px-4 py-3 ${colors.inputBg} ${colors.inputText} border border-cyan-500/20 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors`}
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label htmlFor="message" className={`block text-sm font-medium mb-1 ${colors.label}`}>
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`w-full px-4 py-3 ${colors.inputBg} ${colors.inputText} border border-cyan-500/20 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors resize-none`}
                  required
                  disabled={isSubmitting}
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 flex items-center justify-center text-white disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Enviando...
                  </>
                ) : (
                  <>
                    Enviar Mensaje
                    <Send className="w-5 h-5 ml-2" />
                  </>
                )}
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className={`font-semibold ${colors.title}`}>Email</h3>
                <p className={colors.text}>controldoc@controldoc.app</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className={`font-semibold ${colors.title}`}>Teléfono</h3>
                <p className={colors.text}>+54 9 294 492-1510</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className={`font-semibold ${colors.title}`}>Ubicación</h3>
                <p className={colors.text}>Argentina</p>
              </div>
            </div>

            {/* Botones de redes sociales */}
            <div className="pt-4">
              <h3 className={`font-semibold mb-4 ${colors.title}`}>Síguenos en redes sociales</h3>
              <div className="flex space-x-4">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/5492944921510"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-green-500 hover:bg-green-600 rounded-lg transition-all duration-200 hover:scale-110"
                  aria-label="Contactar por WhatsApp"
                >
                  <MessageCircle className="w-6 h-6 text-white" />
                </a>

                {/* Facebook */}
                <a
                  href="https://facebook.com/controldoc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all duration-200 hover:scale-110"
                  aria-label="Seguir en Facebook"
                >
                  <Facebook className="w-6 h-6 text-white" />
                </a>

                {/* Instagram */}
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
          </div>
        </div>
      </div>
    </section>
  )
}
