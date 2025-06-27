"use client"

import Link from "next/link"
import { FileText, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {

  const navigation = {
    product: [
      { name: "Unir PDF automáticamente", href: "/unir-pdf" }, // SEO first
      { name: "Funcionalidades", href: "/funcionalidades" },
      { name: "Precios", href: "/precios" },
      { name: "Demo", href: "/contacto" },
    ],
    company: [
      { name: "Contacto", href: "/contacto" },
      { name: "Blog", href: "#" },
      { name: "Carreras", href: "#" },
    ],
    legal: [
      { name: "Privacidad", href: "/legal" },
      { name: "Términos", href: "/terminos" },
      { name: "Cookies", href: "/cookies" }, // Asegúrate de crear esta página si es necesario
      { name: "Legal", href: "/legal" },
    ],
    support: [
      { name: "Centro de Ayuda", href: "#" },
      { name: "Documentación", href: "#" },
      { name: "API", href: "#" },
      { name: "Estado del Sistema", href: "#" },
    ],
  }

  return (
    <footer className="bg-gray-900/50 border-t border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <FileText className="w-8 h-8 text-cyan-400" />
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                ControlDoc
              </span>
            </Link>
            <p className="text-gray-300 mb-6 max-w-md">Plataforma integral para la gestión inteligente de documentos empresariales</p>
            <div className="space-y-2">
              <div className="flex items-center text-gray-400">
                <Mail className="w-4 h-4 mr-2" />
                <span className="text-sm">contacto@controldoc.app</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Phone className="w-4 h-4 mr-2" />
                <span className="text-sm">+34 900 123 456</span>
              </div>
              <div className="flex items-center text-gray-400">
                <MapPin className="w-4 h-4 mr-2" />
                <span className="text-sm">Madrid, España</span>
              </div>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-white mb-4">Producto</h3>
            <ul className="space-y-2">
              {navigation.product.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-white mb-4">Empresa</h3>
            <ul className="space-y-2">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-white mb-4">Soporte</h3>
            <ul className="space-y-2">
              {navigation.support.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-cyan-500/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">&copy; 2024 ControlDoc. Todos los derechos reservados.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <span className="sr-only">LinkedIn</span>
                {/* ...icon... */}
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <span className="sr-only">Twitter</span>
                {/* ...icon... */}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
