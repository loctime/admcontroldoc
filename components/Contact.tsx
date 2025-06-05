"use client"

import type React from "react"

import { useState } from "react"
import { useLanguage } from "../context/LanguageContext"
import { Send, Mail, Phone, MapPin } from "lucide-react"

export default function Contact() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Aquí integrarías con Firebase/Firestore
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            {t("contact_title")}
          </h2>
          <p className="text-xl text-gray-300">Estamos aquí para ayudarte</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Nombre"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-cyan-500/20 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-cyan-500/20 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <textarea
                  placeholder="Mensaje"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-cyan-500/20 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors resize-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 flex items-center justify-center"
              >
                Enviar Mensaje
                <Send className="w-5 h-5 ml-2" />
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-300">contacto@empresa.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold">Teléfono</h3>
                <p className="text-gray-300">+34 900 123 456</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold">Ubicación</h3>
                <p className="text-gray-300">Madrid, España</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
