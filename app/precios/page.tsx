import Pricing from "../../components/Pricing"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Precios - ControlDoc",
  description: "Planes y precios de ControlDoc. Encuentra el plan perfecto para tu empresa",
}

export default function PreciosPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <Pricing />
    </div>
  )
}
