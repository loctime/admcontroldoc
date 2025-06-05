import Features from "../../components/Features"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Funcionalidades - ControlDoc",
  description:
    "Descubre todas las características y funcionalidades de ControlDoc para la gestión inteligente de documentos",
}

export default function FuncionalidadesPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <Features />
    </div>
  )
}
