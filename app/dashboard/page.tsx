import DashboardPage from "../../pages/dashboard/DashboardPage"

export const metadata = {
  title: "Dashboard - ControlDoc",
  description: "Panel de control de ControlDoc",
}

export default function Page() {
  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-16">
      <div className="mx-auto mb-10 max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white px-6 py-10 shadow-sm sm:px-10">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-sm font-semibold text-blue-700">
            Dashboard operativo
          </div>
          <h1 className="mb-4 max-w-3xl text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Panel de control para seguimiento documental en tiempo real
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-slate-600">
            Accede a alertas, metricas y documentos criticos desde una vista unificada. La experiencia arranca con el mismo lenguaje visual que promete la landing: claridad, foco y jerarquia operativa.
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <DashboardPage />
      </div>
    </div>
  )
}
