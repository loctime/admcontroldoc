import type { Metadata } from "next"
import type { PlatformApp } from "@/lib/platform-types"

const baseUrl = process.env.NEXT_PUBLIC_APP_URL?.replace(/\/$/, "") || "https://controldoc.app"

export const siteConfig = {
  name: "ControlDoc",
  legalName: "ControlDoc",
  url: baseUrl,
  locale: "es_AR",
  siteLanguage: "es",
}

export function absoluteUrl(path = "/") {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path
  }
  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`
}

export function createAppMetadata(app: PlatformApp): Metadata {
  const keywords = [
    app.seo.keywords.primary,
    ...app.seo.keywords.secondary,
    ...app.seo.keywords.problems,
    ...app.seo.keywords.industries,
    app.name,
  ]

  return {
    title: {
      absolute: app.seo.title,
    },
    description: app.seo.description,
    keywords,
    alternates: {
      canonical: absoluteUrl(app.seo.canonicalPath),
    },
    openGraph: {
      type: "website",
      url: absoluteUrl(app.seo.canonicalPath),
      title: app.seo.title,
      description: app.seo.description,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      images: [
        {
          url: absoluteUrl(app.seo.socialImage),
          width: 1200,
          height: 630,
          alt: `${app.name} - ${app.seo.categoryLabel}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: app.seo.title,
      description: app.seo.description,
      images: [absoluteUrl(app.seo.socialImage)],
    },
  }
}

const BUILD_DATE = new Date().toISOString().split("T")[0]
const PUBLISHED_DATE = "2024-01-01"

export function getAppSchemas(app: PlatformApp) {
  const faqSchema = app.landingContent.faq.length
    ? {
        "@type": "FAQPage",
        mainEntity: app.landingContent.faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      }
    : null

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": absoluteUrl("/#organization"),
        name: siteConfig.legalName,
        alternateName: [
          "ControlDoc Software",
          "Control Documental",
          "Software de Control Documental",
          "Gestión Documental ControlDoc",
        ],
        url: absoluteUrl("/"),
        description: app.seo.description,
        sameAs: [
          "https://controlapp.vercel.app",
          "https://controlaudit.app",
          "https://controlfile.app",
        ],
        foundingDate: "2024",
        areaServed: [
          "Argentina",
          "México",
          "Chile",
          "Colombia",
          "Perú",
          "Uruguay",
          "Paraguay",
          "Bolivia",
          "Ecuador",
          "España",
          "Latinoamérica",
        ],
        knowsAbout: [
          "Control Documental",
          "Gestión Documental",
          "Document Management System (DMS)",
          "Compliance Documental",
          "Auditoría Documental",
          "OCR de Documentos",
          "Trazabilidad Documental",
          "Control de Vencimientos",
          "Habilitación de Contratistas",
          "Gestión de Flota Vehicular",
          "Legajos Digitales de RRHH",
          "Compliance HSE y SST",
        ],
      },
      {
        "@type": "SoftwareApplication",
        name: app.name,
        alternateName: [
          "Software de Control Documental",
          "Sistema de Gestión Documental",
          "ControlDoc DMS",
          "Plataforma de Gestión Documental",
        ],
        applicationCategory: app.seo.categoryLabel,
        applicationSubCategory: "BusinessApplication",
        operatingSystem: "Web",
        inLanguage: siteConfig.siteLanguage,
        description: app.seo.description,
        url: absoluteUrl(app.seo.canonicalPath),
        image: absoluteUrl(app.seo.socialImage),
        publisher: {
          "@id": absoluteUrl("/#organization"),
        },
        keywords: [app.seo.keywords.primary, ...app.seo.keywords.secondary].join(", "),
        datePublished: PUBLISHED_DATE,
        dateModified: BUILD_DATE,
        offers: {
          "@type": "Offer",
          price: "29",
          priceCurrency: "USD",
          category: "Subscription",
          availability: "https://schema.org/InStock",
          url: absoluteUrl("/precios"),
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "29",
            priceCurrency: "USD",
            unitText: "MONTH",
            referenceQuantity: {
              "@type": "QuantitativeValue",
              value: "1",
              unitCode: "MON",
            },
          },
        },
        featureList: app.landingContent.functionalities
          .map((f) => `${f.title}: ${f.description}`)
          .join(" | "),
        audience: app.landingContent.audiences.map((audience) => ({
          "@type": "Audience",
          audienceType: audience.title,
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Inicio",
            item: absoluteUrl("/"),
          },
          {
            "@type": "ListItem",
            position: 2,
            name: app.name,
            item: absoluteUrl(app.seo.canonicalPath),
          },
        ],
      },
      faqSchema,
    ].filter(Boolean),
  }
}
