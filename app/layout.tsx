import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

import Header from "../components/layout/Header"
import Footer from "../components/layout/Footer"
import AppThemeProvider from "../components/theme-provider"
import { controlDoc } from "@/lib/apps/control-doc"
import { createAppMetadata } from "@/lib/seo"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  ...createAppMetadata(controlDoc),
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen`}>
        <AppThemeProvider>
          <Header />
          <main className="w-full max-w-full mx-auto">
            {children}
          </main>
          <Footer />
        </AppThemeProvider>
      </body>
    </html>
  )
}
