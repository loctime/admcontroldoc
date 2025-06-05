import Team from "../../components/Team"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Equipo - ControlDoc",
  description: "Conoce al equipo detrás de ControlDoc y nuestra misión",
}

export default function EquipoPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-20 px-4">
      <div className="max-w-4xl mx-auto mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Nuestro Equipo</h1>
        <p className="text-gray-400 text-lg">
          Conoce a las personas y valores que impulsan ControlDoc. Somos un equipo comprometido con la innovación, la seguridad y el éxito de nuestros clientes.
        </p>
      </div>
      <Team />
    </div>
  )
}
