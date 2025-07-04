import type React from "react"
import type { Metadata } from "next"
import ClientSidebar from "@/components/wiki/ClientSidebar"
import ClientHeader from "@/components/wiki/ClientHeader"

export const metadata: Metadata = {
  title: "Guía para Empresas - Sistema de Gestión Documental",
  description: "Todo lo que necesitas saber sobre nuestro sistema de gestión de documentos empresariales",
}

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <ClientHeader />
      <div className="flex">
        <ClientSidebar />
        <main className="flex-1 p-6 lg:p-8">
          <div className="max-w-5xl mx-auto">{children}</div>
        </main>
      </div>
    </div>
  )
}
