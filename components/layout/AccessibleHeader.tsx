"use client"

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Globe, FileText, BookOpen } from "lucide-react";

export default function AccessibleHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const navigation = [
    { name: "Inicio", href: "/" },
    { name: "Funcionalidades", href: "/funcionalidades" },
    { name: "Precios", href: "/precios" },
    { name: "Clientes", href: "/clientes" },
    { name: "Contacto", href: "/contacto" },
    { name: "Wiki", href: "/wiki/inicio", icon: BookOpen },
  ]

  const isActive = (path: string) => pathname === path;

  // Cerrar menú con Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false)
        menuButtonRef.current?.focus()
      }
    }

    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [isOpen])

  // Trap focus en menú móvil
  useEffect(() => {
    if (isOpen && mobileMenuRef.current) {
      const focusableElements = mobileMenuRef.current.querySelectorAll("a[href], button:not([disabled])")
      const firstElement = focusableElements[0] as HTMLElement
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement

      const handleTabKey = (e: KeyboardEvent) => {
        if (e.key === "Tab") {
          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              e.preventDefault()
              lastElement.focus()
            }
          } else {
            if (document.activeElement === lastElement) {
              e.preventDefault()
              firstElement.focus()
            }
          }
        }
      }

      document.addEventListener("keydown", handleTabKey)
      firstElement?.focus()

      return () => document.removeEventListener("keydown", handleTabKey)
    }
  }, [isOpen])

  return (
    <header className="fixed w-full top-0 z-50 bg-black/90 backdrop-blur-sm border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            href="/"
            className="flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded-lg p-1"
            aria-label="ControlDoc - Ir a página principal"
          >
            <FileText className="w-8 h-8 text-cyan-400" aria-hidden="true" />
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              ControlDoc
            </span>
          </Link>

          <nav className="hidden md:flex space-x-8" role="navigation" aria-label="Navegación principal">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded px-2 py-1 ${
                  isActive(item.href) ? "text-cyan-400" : "text-gray-300 hover:text-cyan-400"
                }`}
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                {item.icon ? <item.icon className="inline w-5 h-5 mr-1 align-text-bottom" aria-hidden="true" /> : null}
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            {/* Botón de idioma y login eliminados por falta de contexto */}
          </div>

          <button
            ref={menuButtonRef}
            className="md:hidden focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded p-1"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
          </button>
        </div>

        {isOpen && (
          <div
            ref={mobileMenuRef}
            id="mobile-menu"
            className="md:hidden py-4 border-t border-cyan-500/20"
            role="navigation"
            aria-label="Navegación móvil"
          >
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded px-2 py-1 ${
                    isActive(item.href) ? "text-cyan-400" : "text-gray-300 hover:text-cyan-400"
                  }`}
                  onClick={() => setIsOpen(false)}
                  aria-current={isActive(item.href) ? "page" : undefined}
                >
                  {item.icon ? <item.icon className="inline w-5 h-5 mr-1 align-text-bottom" aria-hidden="true" /> : null}
                  {item.name}
                </Link>
              ))}
              <Link
                href="/login"
                className="text-cyan-400 hover:text-cyan-300 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded px-2 py-1"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
