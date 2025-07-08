import type React from "react"
import type { Metadata } from "next"
import WikiSidebar from "@/components/wikiAdm/WikiSidebar"
import WikiHeader from "@/components/wikiAdm/WikiHeader"

export const metadata: Metadata = {
  title: "Wiki Técnica - Sistema de Documentos",
  description: "Documentación técnica completa del sistema de gestión de documentos",
}

export default function WikiLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background pt-16">
      <WikiHeader />
      <div className="flex">
        <WikiSidebar />
        <main className="flex-1 p-6 lg:p-8">
          <div className="max-w-4xl mx-auto">{children}</div>
        </main>
      </div>
    </div>
  )
}
