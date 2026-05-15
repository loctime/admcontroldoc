import type { Metadata } from "next"
import Link from "next/link"
import { Check, X, Minus } from "lucide-react"
import { absoluteUrl, siteConfig } from "@/lib/seo"
import { StructuredData } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "ControlDoc vs DocuWare, M-Files, SharePoint y Google Drive | Comparativa",
  description:
    "Comparativa de software de control documental: ControlDoc vs DocuWare, M-Files, SharePoint y Google Drive. Precios, funcionalidades, OCR, control de vencimientos y alternativas para pymes en Latam.",
  alternates: { canonical: absoluteUrl("/comparativa") },
  openGraph: {
    type: "article",
    url: absoluteUrl("/comparativa"),
    title: "ControlDoc vs DocuWare, M-Files, SharePoint y Google Drive",
    description:
      "Comparativa de software de gestión documental. Diferencias en precios, funcionalidades, OCR y curva de aprendizaje.",
    siteName: siteConfig.name,
    locale: siteConfig.locale,
  },
}

type Cell = { value: "yes" | "no" | "partial" | string; note?: string }
type Row = { feature: string; cells: Cell[] }

const competitors = ["ControlDoc", "DocuWare", "M-Files", "SharePoint", "Google Drive"]

const rows: Row[] = [
  {
    feature: "OCR de fechas de vencimiento",
    cells: [
      { value: "yes", note: "Automático y sugerido al cargar" },
      { value: "partial", note: "Disponible en planes superiores" },
      { value: "yes" },
      { value: "no" },
      { value: "no" },
    ],
  },
  {
    feature: "Semáforo de cumplimiento en tiempo real",
    cells: [
      { value: "yes" },
      { value: "partial", note: "Requiere configuración avanzada" },
      { value: "partial" },
      { value: "no" },
      { value: "no" },
    ],
  },
  {
    feature: "Alertas de vencimientos automáticas",
    cells: [
      { value: "yes" },
      { value: "yes" },
      { value: "yes" },
      { value: "partial" },
      { value: "no" },
    ],
  },
  {
    feature: "Control de contratistas y subcontratistas",
    cells: [
      { value: "yes", note: "Módulo nativo" },
      { value: "partial" },
      { value: "partial" },
      { value: "no" },
      { value: "no" },
    ],
  },
  {
    feature: "Sub-empresas para BPO y consultoras",
    cells: [
      { value: "yes" },
      { value: "no" },
      { value: "partial" },
      { value: "no" },
      { value: "no" },
    ],
  },
  {
    feature: "Curva de aprendizaje",
    cells: [
      { value: "Baja", note: "UI moderna, sin capacitación extensa" },
      { value: "Alta" },
      { value: "Alta" },
      { value: "Media-Alta" },
      { value: "Baja", note: "Pero no es DMS" },
    ],
  },
  {
    feature: "Modelo de precios",
    cells: [
      { value: "A medida", note: "Cotización según necesidades" },
      { value: "Enterprise", note: "Desde varios cientos USD/mes" },
      { value: "Enterprise", note: "Desde varios cientos USD/mes" },
      { value: "M365" },
      { value: "Por GB" },
    ],
  },
  {
    feature: "Modelo SaaS sin instalación",
    cells: [
      { value: "yes" },
      { value: "yes" },
      { value: "yes" },
      { value: "yes" },
      { value: "yes" },
    ],
  },
  {
    feature: "Idioma nativo español Latam",
    cells: [
      { value: "yes" },
      { value: "partial" },
      { value: "partial" },
      { value: "yes" },
      { value: "yes" },
    ],
  },
  {
    feature: "Pensado para pymes",
    cells: [
      { value: "yes" },
      { value: "no" },
      { value: "no" },
      { value: "partial" },
      { value: "yes", note: "Como storage, no como DMS" },
    ],
  },
]

function CellIcon({ cell }: { cell: Cell }) {
  if (cell.value === "yes") return <Check className="w-5 h-5 text-green-600" aria-label="Sí" />
  if (cell.value === "no") return <X className="w-5 h-5 text-red-500" aria-label="No" />
  if (cell.value === "partial") return <Minus className="w-5 h-5 text-amber-500" aria-label="Parcial" />
  return <span className="font-semibold text-slate-800">{cell.value}</span>
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "ControlDoc vs DocuWare, M-Files, SharePoint y Google Drive",
  description:
    "Comparativa entre ControlDoc y los principales sistemas de gestión documental del mercado.",
  inLanguage: "es",
  datePublished: "2024-01-01",
  dateModified: new Date().toISOString().split("T")[0],
  url: absoluteUrl("/comparativa"),
  author: { "@type": "Organization", name: "ControlDoc", url: absoluteUrl("/") },
  publisher: { "@type": "Organization", name: "ControlDoc", url: absoluteUrl("/") },
  about: rows.map((r) => r.feature),
  mentions: competitors.slice(1).map((name) => ({
    "@type": "SoftwareApplication",
    name,
    applicationCategory: "Document Management System",
  })),
}

export default function ComparativaPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <StructuredData data={articleSchema} />
      <header className="mb-10 text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-blue-600 mb-2">
          Comparativa
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 leading-tight">
          ControlDoc vs DocuWare, M-Files, SharePoint y Google Drive
        </h1>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          Cómo se compara ControlDoc con los principales sistemas de gestión y control documental
          del mercado. Funcionalidades, precios y para qué tipo de empresa es cada uno.
        </p>
      </header>

      <section className="mb-12 overflow-x-auto">
        <table className="w-full min-w-[720px] border-collapse bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
          <thead>
            <tr className="bg-slate-50">
              <th className="text-left p-4 text-sm font-semibold text-slate-700 border-b border-slate-200">
                Funcionalidad
              </th>
              {competitors.map((name) => (
                <th
                  key={name}
                  className={`p-4 text-sm font-semibold text-center border-b border-slate-200 ${
                    name === "ControlDoc" ? "bg-blue-50 text-blue-900" : "text-slate-700"
                  }`}
                >
                  {name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.feature} className="border-b border-slate-100 last:border-0">
                <td className="p-4 text-sm font-medium text-slate-800">{row.feature}</td>
                {row.cells.map((cell, i) => (
                  <td
                    key={i}
                    className={`p-4 text-sm text-center ${
                      i === 0 ? "bg-blue-50/40" : ""
                    }`}
                  >
                    <div className="flex flex-col items-center gap-1">
                      <CellIcon cell={cell} />
                      {cell.note && (
                        <span className="text-xs text-slate-500 max-w-[140px] leading-tight">
                          {cell.note}
                        </span>
                      )}
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="grid md:grid-cols-2 gap-6 mb-12">
        <article className="bg-white rounded-2xl p-6 border border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">
            ¿Cuándo elegir ControlDoc?
          </h2>
          <p className="text-slate-700 leading-relaxed">
            ControlDoc es la elección natural para pymes y empresas medianas en Latinoamérica
            que necesitan un software de control documental potente pero accesible. Si tu equipo
            gestiona contratistas, flota vehicular o legajos de RRHH, y querés evitar la
            complejidad de DocuWare o M-Files sin renunciar a OCR, semáforo de cumplimiento y
            trazabilidad real, ControlDoc encaja desde el día uno.
          </p>
        </article>
        <article className="bg-white rounded-2xl p-6 border border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">
            ¿Cuándo NO elegir ControlDoc?
          </h2>
          <p className="text-slate-700 leading-relaxed">
            Si tu empresa requiere flujos documentales hiper-personalizados con integraciones
            on-premise complejas, automatizaciones tipo RPA o regulaciones tipo FDA 21 CFR Part
            11, los DMS empresariales tradicionales pueden ser más adecuados. ControlDoc se
            enfoca en cubrir el 90% de los casos de control documental con UX moderna y precio
            accesible, no en sustituir suites enterprise.
          </p>
        </article>
      </section>

      <section className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl p-8 md:p-12 text-white text-center">
        <h2 className="text-3xl font-bold mb-3">¿Querés ver ControlDoc en acción?</h2>
        <p className="text-lg mb-6 text-blue-50 max-w-2xl mx-auto">
          Probá la plataforma o coordiná una demo personalizada para tu empresa.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/contacto"
            className="bg-white text-blue-700 hover:bg-blue-50 transition-colors px-6 py-3 rounded-xl font-semibold"
          >
            Solicitar demo
          </Link>
          <Link
            href="/precios"
            className="border-2 border-white text-white hover:bg-white/10 transition-colors px-6 py-3 rounded-xl font-semibold"
          >
            Ver precios
          </Link>
        </div>
      </section>
    </main>
  )
}
