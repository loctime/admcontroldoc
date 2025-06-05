import Features from "../../components/Funcionalidades/Features"
import FeaturesPro from "../../components/Funcionalidades/FeaturesPro"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Funcionalidades - ControlDoc",
  description:
    "Descubre todas las funcionalidades que ofrece ControlDoc para empresas: control documental, alertas automáticas, cumplimiento normativo, estadísticas y más.",
  keywords: [
    "control documental",
    "vencimientos",
    "documentación empresarial",
    "alertas de documentos",
    "sistema de cumplimiento normativo",
    "documentos laborales",
    "plataforma SaaS",
  ],
  openGraph: {
    title: "Funcionalidades de ControlDoc",
    description: "Explora cómo ControlDoc revoluciona la gestión documental empresarial.",
    url: "https://controldoc.app/funcionalidades",
    siteName: "ControlDoc",
    type: "website",
    images: [
      {
        url: "https://controldoc.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Funcionalidades de ControlDoc",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Funcionalidades de ControlDoc",
    description: "Soluciones profesionales para el control documental y normativo.",
    images: ["https://controldoc.app/og-image.png"],
  },
}

export default function FuncionalidadesPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-20 px-4">
      <div className="max-w-4xl mx-auto mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Funcionalidades de ControlDoc
        </h1>
        <p className="text-gray-400 text-lg">
          La plataforma que centraliza, automatiza y asegura la gestión documental de tu empresa.
        </p>
      </div>

      <Features />
      <FeaturesPro />
    </div>
  )
}
