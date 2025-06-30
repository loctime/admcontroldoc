import Pricing from "../../components/Pricing"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Precios - ControlDoc",
  description: "Planes y precios de ControlDoc. Encuentra el plan perfecto para tu empresa",
}

export default function PreciosPage() {
  return (
    <div className="min-h-screen pt-20 px-4 bg-transparent text-foreground">
      <div className="max-w-5xl mx-auto mb-1 text-center">
        <h1 className="text-5xl md:text-5xl font-bold mb-4">Planes y Precios</h1>
        <p className="text-muted-foreground text-lg">
          Elige el plan que mejor se adapta a las necesidades de tu empresa. Todos nuestros planes incluyen soporte, actualizaciones y acceso a las funcionalidades clave de ControlDoc.
        </p>
      </div>
      <Pricing />
    </div>
  )
}
