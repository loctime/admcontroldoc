import Pricing from "../../components/Pricing"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Precios - ControlDoc",
  description: "Planes y precios de ControlDoc. Encuentra el plan perfecto para tu empresa",
}

export default function PreciosPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-20 px-4">
      <div className="max-w-4xl mx-auto mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Planes y Precios</h1>
        <p className="text-gray-400 text-lg">
          Elige el plan que mejor se adapta a las necesidades de tu empresa. Todos nuestros planes incluyen soporte, actualizaciones y acceso a las funcionalidades clave de ControlDoc.
        </p>
      </div>
      <Pricing />
    </div>
  )
}
