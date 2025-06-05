"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { translations, type TranslationKeys } from "../lib/i18n"

interface LanguageContextType {
  language: "es" | "en"
  setLanguage: (lang: "es" | "en") => void
  t: (key: keyof TranslationKeys) => string
  isLoading: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<"es" | "en">("es")
  const [isLoading, setIsLoading] = useState(true)

  // Cargar idioma desde localStorage
  useEffect(() => {
    const savedLanguage = localStorage.getItem("controldoc-language") as "es" | "en" | null
    if (savedLanguage && (savedLanguage === "es" || savedLanguage === "en")) {
      setLanguageState(savedLanguage)
    } else {
      // Detectar idioma del navegador
      const browserLanguage = navigator.language.startsWith("es") ? "es" : "en"
      setLanguageState(browserLanguage)
    }
    setIsLoading(false)
  }, [])

  const setLanguage = (lang: "es" | "en") => {
    setLanguageState(lang)
    localStorage.setItem("controldoc-language", lang)

    // Actualizar HTML lang attribute
    document.documentElement.lang = lang
  }

  const t = (key: keyof TranslationKeys): string => {
    return translations[language][key] || key
  }

  // Actualizar HTML lang attribute cuando cambie el idioma
  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  return <LanguageContext.Provider value={{ language, setLanguage, t, isLoading }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error("useLanguage must be used within LanguageProvider")
  return context
}
