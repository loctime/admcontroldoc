import Team from "../../components/Team"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Equipo - ControlDoc",
  description: "Conoce al equipo detrás de ControlDoc y nuestra misión",
}

export default function EquipoPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <Team />
    </div>
  )
}
