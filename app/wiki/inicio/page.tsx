"use client"
//app/wiki/inicio/page.tsx
import React from "react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { Home, TrendingUp, Award, Clock, HelpCircle } from "lucide-react"

export default function WikiInicio() {
  const router = useRouter()
  return (
    <section className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Bienvenido a la Wiki de Gestión Documental</h1>
      <p className="text-lg md:text-xl text-gray-600 mb-6 max-w-2xl">
        Encuentra toda la información, guías y recursos para aprovechar al máximo nuestro sistema de gestión documental empresarial.
      </p>
      <Button
        size="lg"
        className="mb-8"
        aria-label="Explorar la wiki"
        onClick={() => router.push("/wiki/beneficios")}
      >
        Explorar la Wiki
      </Button>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mt-4">
        <CategoryCard
          icon={<TrendingUp className="h-8 w-8 text-blue-600" />}
          title="Beneficios"
          description="Descubre cómo tu empresa puede ahorrar costos, mejorar la eficiencia y cumplir normativas."
          href="/wiki/beneficios"
        />
        <CategoryCard
          icon={<Award className="h-8 w-8 text-green-600" />}
          title="Características"
          description="Explora las funcionalidades clave del sistema y cómo potencian tu gestión documental."
          href="/wiki/funcionalidades"
        />
        <CategoryCard
          icon={<Clock className="h-8 w-8 text-yellow-600" />}
          title="Implementación"
          description="Guías paso a paso para onboarding, migración y soporte continuo."
          href="/wiki/arquitectura"
        />
      </div>
      <div className="mt-10 text-gray-500 text-sm flex items-center gap-2 justify-center">
        <HelpCircle className="h-4 w-4" />
        ¿Dudas? Usa el buscador o revisa la sección de preguntas frecuentes.
      </div>
    </section>
  )
}

// Card reutilizable para categorías principales
function CategoryCard({ icon, title, description, href }: { icon: React.ReactNode; title: string; description: string; href: string }) {
  const router = useRouter()
  return (
    <button
      className="flex flex-col items-center p-6 bg-white/80 rounded-lg shadow hover:shadow-md transition border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
      onClick={() => router.push(href)}
      aria-label={`Ir a ${title}`}
      tabIndex={0}
    >
      {icon}
      <span className="mt-3 text-lg font-semibold">{title}</span>
      <span className="mt-1 text-gray-600 text-sm">{description}</span>
    </button>
  )
}