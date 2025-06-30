import Clients from "../../components/Clients"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Clientes - ControlDoc",
  description: "Testimonios y casos de éxito de nuestros clientes con ControlDoc",
}

export default function ClientesPage() {
  return (
    <div className="min-h-screen text-foreground pt-20 px-4">
      <div className="max-w-4xl mx-auto mb-16 text-center">
        {/* Se aplica gradiente azul corporativo para mantener coherencia visual con el resto de títulos principales */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary/70 to-primary bg-clip-text text-transparent">
          Empresas que confían en ControlDoc
        </h1>
        <p className="text-muted-foreground text-lg">
          Conoce historias reales de organizaciones que optimizaron su gestión documental, redujeron riesgos y mejoraron
          su eficiencia con nuestra plataforma. Únete a quienes ya simplificaron el control y cumplimiento normativo con
          ControlDoc.
        </p>
      </div>
      <Clients />
    </div>
  )
}
