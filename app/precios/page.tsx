import type { Metadata } from "next"
import Link from "next/link"
import { Mail, MessageCircle, Calendar, CheckCircle2 } from "lucide-react"
import { absoluteUrl, siteConfig } from "@/lib/seo"

// NOTA: El componente <Pricing /> existe en components/Pricing.tsx con los planes
// y addons definidos. Está oculto temporalmente — para reactivarlo, importarlo y
// renderizarlo en lugar del bloque de contacto debajo.

export const metadata: Metadata = {
  title: "Planes y Precios | ControlDoc",
  description:
    "ControlDoc adapta su software de control documental a las necesidades de cada empresa. Consultá precios personalizados según tamaño, cantidad de usuarios y funcionalidades.",
  alternates: { canonical: absoluteUrl("/precios") },
  openGraph: {
    type: "website",
    url: absoluteUrl("/precios"),
    title: "Planes y Precios | ControlDoc",
    description: "Cotización personalizada de control documental para tu empresa.",
    siteName: siteConfig.name,
    locale: siteConfig.locale,
  },
}

const incluido = [
  "Auditoría documental con OCR de fechas",
  "Control de vencimientos con semáforo en tiempo real",
  "Trazabilidad de aprobaciones e historial de versiones",
  "Conversión automática de adjuntos a PDF",
  "Jerarquías y sub-empresas para BPO/consultoras",
  "Notificaciones automáticas por email",
  "Soporte y actualizaciones incluidos",
]

export default function PreciosPage() {
  return (
    <div className="min-h-screen pt-20 px-4 text-foreground">
      <section className="max-w-4xl mx-auto text-center mb-12">
        <p className="text-sm font-semibold uppercase tracking-wide text-blue-600 mb-2">
          Planes y Precios
        </p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
          Una cotización pensada para tu empresa
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Adaptamos ControlDoc a la cantidad de usuarios, documentos y funcionalidades que
          realmente necesita tu operación. Contactanos y armamos una propuesta a medida.
        </p>
      </section>

      <section className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-6 mb-16">
        <article className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Qué incluye ControlDoc</h2>
          <ul className="space-y-3">
            {incluido.map((item) => (
              <li key={item} className="flex items-start gap-3 text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-cyan-50 p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Hablemos</h2>
          <p className="text-slate-700 mb-6 leading-relaxed">
            Contanos cuántos empleados, contratistas o vehículos manejás y armamos una propuesta
            con el alcance exacto para tu operación.
          </p>

          <div className="space-y-3">
            <Link
              href="/contacto"
              className="flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
            >
              <Calendar className="w-5 h-5" />
              Solicitar cotización
            </Link>

            <a
              href="https://wa.me/5493364345088"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp directo
            </a>

            <a
              href="mailto:soporte@controldoc.app?subject=Consulta%20de%20precios%20ControlDoc"
              className="flex items-center justify-center gap-2 w-full border-2 border-slate-300 hover:border-blue-500 hover:text-blue-700 text-slate-700 font-semibold py-3 px-6 rounded-xl transition-colors"
            >
              <Mail className="w-5 h-5" />
              soporte@controldoc.app
            </a>
          </div>
        </article>
      </section>

      <section className="max-w-3xl mx-auto text-center pb-16">
        <h2 className="text-2xl font-bold text-slate-900 mb-3">¿Querés ver el producto primero?</h2>
        <p className="text-slate-600 mb-5">
          Coordinamos una demo en vivo de 20 minutos para mostrarte cómo ControlDoc resuelve tu
          flujo documental actual.
        </p>
        <Link
          href="/contacto"
          className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3 px-8 rounded-xl transition-colors"
        >
          Coordinar demo
        </Link>
      </section>
    </div>
  )
}
