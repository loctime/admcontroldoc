import Features from "../../components/Funcionalidades/Features"
import FeaturesPro from "../../components/Funcionalidades/FeaturesPro"
import Head from "next/head"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Funcionalidades - ControlDoc",
  description:
    "Conoce todas las herramientas de ControlDoc: vencimientos, alertas automáticas, cumplimiento legal y más.",
  keywords: [
    "control documental para empresas",
    "gestión de vencimientos",
    "documentación laboral",
    "alertas automáticas de documentos",
    "cumplimiento normativo empresarial",
    "plataforma de gestión documental",
    "sistema de trazabilidad documental",
    "digitalización de documentos",
    "software de cumplimiento legal",
    "gestión de documentos online",
    "documentación de empleados",
    "archivado digital seguro",
    "plataforma SaaS para empresas",
    "documentación obligatoria Argentina",
    "gestión ISO 9001 documental",
  ],
  robots: {
    index: true,
    follow: true,
  },
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
    <>
      <Head>
        <link rel="canonical" href="https://controldoc.app/funcionalidades" />
      </Head>

      <div className="min-h-screen text-foreground pt-20 px-4">
        {" "}
        <div className="max-w-screen-xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-center mb-12">Funcionalidades de ControlDoc</h1>

          <Features />
          <FeaturesPro />

          {/* JSON-LD para Google */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebPage",
                name: "Funcionalidades - ControlDoc",
                description:
                  "ControlDoc ofrece soluciones de gestión documental, trazabilidad, vencimientos y cumplimiento normativo para empresas.",
                url: "https://controldoc.app/funcionalidades",
                mainEntity: {
                  "@type": "SoftwareApplication",
                  name: "ControlDoc",
                  description:
                    "Plataforma de gestión documental empresarial con automatización y cumplimiento normativo",
                  applicationCategory: "BusinessApplication",
                  operatingSystem: "Web",
                  offers: {
                    "@type": "Offer",
                    price: "0",
                    priceCurrency: "USD",
                  },
                },
                publisher: {
                  "@type": "Organization",
                  name: "ControlDoc",
                  url: "https://controldoc.app",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://controldoc.app/logo.png",
                  },
                },
              }),
            }}
          />

          {/* Testing: Schema.org validation ready */}
          {/* 
            Para testear:
            1. Google Rich Results Test: https://search.google.com/test/rich-results
            2. Schema.org Validator: https://validator.schema.org/
            3. Lighthouse SEO audit
            4. PageSpeed Insights
          */}
        </div>
      </div>
    </>
  )
}
