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
        url: absoluteUrl("/"),
        description: app.seo.description,
        areaServed: "Latam",
      },
      {
        "@type": "SoftwareApplication",
        name: app.name,
        applicationCategory: app.seo.categoryLabel,
        operatingSystem: "Web",
        inLanguage: siteConfig.siteLanguage,
        description: app.seo.description,
        url: absoluteUrl(app.seo.canonicalPath),
        image: absoluteUrl(app.seo.socialImage),
        publisher: {
          "@id": absoluteUrl("/#organization"),
        },
        keywords: [app.seo.keywords.primary, ...app.seo.keywords.secondary].join(", "),
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
