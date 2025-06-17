import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

import Header from "../components/layout/Header"
import Footer from "../components/layout/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ControlDoc - Gestión Inteligente de Documentos",
  description:
    "Controla, organiza y gestiona todos tus documentos empresariales desde una plataforma segura y eficiente",
  keywords: ["gestión documental", "documentos", "empresa", "seguridad", "control"],
  authors: [{ name: "ControlDoc Team" }],
  openGraph: {
    title: "ControlDoc - Gestión Inteligente de Documentos",
    description:
      "Controla, organiza y gestiona todos tus documentos empresariales desde una plataforma segura y eficiente",
    url: "https://controldoc.app",
    siteName: "ControlDoc",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ControlDoc - Gestión Inteligente de Documentos",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ControlDoc - Gestión Inteligente de Documentos",
    description:
      "Controla, organiza y gestiona todos tus documentos empresariales desde una plataforma segura y eficiente",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body className={`${inter.className} min-h-screen bg-black text-white`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
