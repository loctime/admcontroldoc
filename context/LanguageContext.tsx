"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

interface LanguageContextType {
  language: "es" | "en"
  setLanguage: (lang: "es" | "en") => void
  t: (key: string) => string
}

const translations = {
  es: {
    // Navigation
    nav_home: "Inicio",
    nav_features: "Funcionalidades",
    nav_pricing: "Precios",
    nav_clients: "Clientes",
    nav_team: "Equipo",
    nav_contact: "Contacto",
    nav_login: "Acceder",

    // Home
    hero_title: "Gestión Inteligente de Documentos",
    hero_subtitle:
      "Controla, organiza y gestiona todos tus documentos empresariales desde una plataforma segura y eficiente",
    hero_cta: "Probar Demo",
    hero_cta_secondary: "Ver Funcionalidades",

    // Features
    features_title: "Funcionalidades Principales",
    features_subtitle: "Todo lo que necesitas para gestionar tus documentos",

    // Pricing
    pricing_title: "Planes y Precios",
    pricing_subtitle: "Elige el plan perfecto para tu empresa",

    // Footer
    footer_rights: "Todos los derechos reservados",
    footer_description: "Plataforma integral para la gestión inteligente de documentos empresariales",
  },
  en: {
    // Navigation
    nav_home: "Home",
    nav_features: "Features",
    nav_pricing: "Pricing",
    nav_clients: "Clients",
    nav_team: "Team",
    nav_contact: "Contact",
    nav_login: "Login",

    // Home
    hero_title: "Intelligent Document Management",
    hero_subtitle: "Control, organize and manage all your business documents from a secure and efficient platform",
    hero_cta: "Try Demo",
    hero_cta_secondary: "View Features",

    // Features
    features_title: "Key Features",
    features_subtitle: "Everything you need to manage your documents",

    // Pricing
    pricing_title: "Plans & Pricing",
    pricing_subtitle: "Choose the perfect plan for your business",

    // Footer
    footer_rights: "All rights reserved",
    footer_description: "Comprehensive platform for intelligent business document management",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<"es" | "en">("es")

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.es] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error("useLanguage must be used within LanguageProvider")
  return context
}
