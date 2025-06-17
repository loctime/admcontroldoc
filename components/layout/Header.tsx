"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, FileText } from "lucide-react"


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()


  const navigation = [
    { name: "Inicio", href: "/" },
    { name: "Funcionalidades", href: "/funcionalidades" },
    { name: "Precios", href: "/precios" },
    { name: "Clientes", href: "/clientes" },
    { name: "Equipo", href: "/equipo" },
    { name: "Contacto", href: "/contacto" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <FileText className="h-8 w-8 text-cyan-400" />
            <span
              className="text-xl font-bold"
              style={{ color: '#1c74ec', textShadow: '0 0.3px 2px #54bce8, 0 0px 0.3px #54bce8' }}
            >
              ControlDoc
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-cyan-400 ${
                  pathname === item.href ? "text-cyan-400" : "text-gray-300"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>


            

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:text-white">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900 rounded-lg mt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 text-base font-medium transition-colors ${
                    pathname === item.href
                      ? "text-cyan-400 bg-gray-800"
                      : "text-gray-300 hover:text-white hover:bg-gray-800"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
