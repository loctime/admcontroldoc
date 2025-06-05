"use client"

import { useState } from "react"
import { useLanguage } from "../context/LanguageContext"
import { Menu, X, Globe } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  return (
    <header className="fixed w-full top-0 z-50 bg-black/90 backdrop-blur-sm border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              LOGO
            </h1>
          </div>

          <nav className="hidden md:flex space-x-8">
            {["features", "pricing", "team", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
              >
                {t(`nav_${item}`)}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => setLanguage(language === "es" ? "en" : "es")}
              className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span>{language.toUpperCase()}</span>
            </button>
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200">
              Login
            </button>
          </div>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 border-t border-cyan-500/20">
            <nav className="flex flex-col space-y-4">
              {["features", "pricing", "team", "contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {t(`nav_${item}`)}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
