import Clients from "../../components/Clients"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Clientes - ControlDoc",
  description: "Testimonios y casos de éxito de nuestros clientes con ControlDoc",
}

export default function ClientesPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-20 px-4">
      <div className="max-w-4xl mx-auto mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Empresas que confían en ControlDoc</h1>
        <p className="text-gray-400 text-lg">
          Conoce historias reales de organizaciones que optimizaron su gestión documental, redujeron riesgos y mejoraron su eficiencia con nuestra plataforma. Únete a quienes ya simplificaron el control y cumplimiento normativo con ControlDoc.
        </p>
      </div>
      <Clients />
    </div>
  )
}
