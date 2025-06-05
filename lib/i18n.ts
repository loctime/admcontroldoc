export interface TranslationKeys {
  // Navigation
  nav_home: string
  nav_features: string
  nav_pricing: string
  nav_clients: string
  nav_team: string
  nav_contact: string
  nav_login: string

  // Common
  loading: string
  error: string
  success: string
  required_field: string
  invalid_email: string
  invalid_phone: string

  // Home page
  hero_title: string
  hero_subtitle: string
  hero_cta: string
  hero_cta_secondary: string

  // Features
  features_title: string
  features_subtitle: string
  feature_upload_title: string
  feature_upload_desc: string
  feature_security_title: string
  feature_security_desc: string

  // Pricing
  pricing_title: string
  pricing_subtitle: string
  plan_basic: string
  plan_pro: string
  plan_enterprise: string

  // Contact
  contact_title: string
  contact_name: string
  contact_email: string
  contact_company: string
  contact_phone: string
  contact_subject: string
  contact_message: string
  contact_send: string

  // Footer
  footer_rights: string
  footer_description: string
}

export const translations: Record<"es" | "en", TranslationKeys> = {
  es: {
    // Navigation
    nav_home: "Inicio",
    nav_features: "Funcionalidades",
    nav_pricing: "Precios",
    nav_clients: "Clientes",
    nav_team: "Equipo",
    nav_contact: "Contacto",
    nav_login: "Acceder",

    // Common
    loading: "Cargando...",
    error: "Error",
    success: "Éxito",
    required_field: "Este campo es obligatorio",
    invalid_email: "Email inválido",
    invalid_phone: "Teléfono inválido",

    // Home
    hero_title: "Gestión Inteligente de Documentos",
    hero_subtitle:
      "Controla, organiza y gestiona todos tus documentos empresariales desde una plataforma segura y eficiente",
    hero_cta: "Probar Demo",
    hero_cta_secondary: "Ver Funcionalidades",

    // Features
    features_title: "Funcionalidades Principales",
    features_subtitle: "Todo lo que necesitas para gestionar tus documentos",
    feature_upload_title: "Conversión Automática",
    feature_upload_desc: "Convierte documentos a PDF automáticamente al subirlos",
    feature_security_title: "Seguridad Avanzada",
    feature_security_desc: "Control de acceso por roles y encriptación de datos",

    // Pricing
    pricing_title: "Planes y Precios",
    pricing_subtitle: "Elige el plan perfecto para tu empresa",
    plan_basic: "Básico",
    plan_pro: "Profesional",
    plan_enterprise: "Empresarial",

    // Contact
    contact_title: "Contáctanos",
    contact_name: "Nombre",
    contact_email: "Email",
    contact_company: "Empresa",
    contact_phone: "Teléfono",
    contact_subject: "Asunto",
    contact_message: "Mensaje",
    contact_send: "Enviar Mensaje",

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

    // Common
    loading: "Loading...",
    error: "Error",
    success: "Success",
    required_field: "This field is required",
    invalid_email: "Invalid email",
    invalid_phone: "Invalid phone",

    // Home
    hero_title: "Intelligent Document Management",
    hero_subtitle: "Control, organize and manage all your business documents from a secure and efficient platform",
    hero_cta: "Try Demo",
    hero_cta_secondary: "View Features",

    // Features
    features_title: "Key Features",
    features_subtitle: "Everything you need to manage your documents",
    feature_upload_title: "Automatic Conversion",
    feature_upload_desc: "Convert documents to PDF automatically when uploading",
    feature_security_title: "Advanced Security",
    feature_security_desc: "Role-based access control and data encryption",

    // Pricing
    pricing_title: "Plans & Pricing",
    pricing_subtitle: "Choose the perfect plan for your business",
    plan_basic: "Basic",
    plan_pro: "Professional",
    plan_enterprise: "Enterprise",

    // Contact
    contact_title: "Contact Us",
    contact_name: "Name",
    contact_email: "Email",
    contact_company: "Company",
    contact_phone: "Phone",
    contact_subject: "Subject",
    contact_message: "Message",
    contact_send: "Send Message",

    // Footer
    footer_rights: "All rights reserved",
    footer_description: "Comprehensive platform for intelligent business document management",
  },
}
