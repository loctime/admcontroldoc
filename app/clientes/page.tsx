import Clients from "../../components/Clients"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Clientes - ControlDoc",
  description: "Testimonios y casos de éxito de nuestros clientes con ControlDoc",
}

export default function ClientesPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <Clients />
    </div>
  )
}
