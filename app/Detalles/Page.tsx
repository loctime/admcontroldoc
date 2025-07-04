import Details from "../../components/wikiAdm/Details"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Detalles del servicio - ControlDoc",
  description: "Conoce los detalles completos de ControlDoc: características, beneficios, tecnología y equipo detrás de la plataforma de gestión documental",
}

export default function DetailsPage() {
  return (
    <div className="min-h-screen text-foreground pt-20">
      <Details />
    </div>
  )
}
