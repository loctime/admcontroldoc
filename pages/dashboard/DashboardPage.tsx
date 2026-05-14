import React from "react"

const DashboardPage = () => (
  <div className="grid gap-6 md:grid-cols-3">
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:col-span-2">
      <span className="mb-3 inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-slate-600">
        Estado general
      </span>
      <h2 className="mb-2 text-2xl font-semibold text-slate-900">Resumen de cumplimiento</h2>
      <p className="mb-6 max-w-2xl text-sm leading-6 text-slate-600">
        Esta base ya queda visualmente alineada con la landing y lista para crecer con widgets, alertas y tablas sin romper el sistema.
      </p>
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <div className="text-sm text-slate-500">Documentos activos</div>
          <div className="mt-2 text-3xl font-bold text-slate-900">1.284</div>
        </div>
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4">
          <div className="text-sm text-amber-700">Por vencer</div>
          <div className="mt-2 text-3xl font-bold text-amber-900">47</div>
        </div>
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
          <div className="text-sm text-emerald-700">Auditados hoy</div>
          <div className="mt-2 text-3xl font-bold text-emerald-900">93</div>
        </div>
      </div>
    </section>

    <aside className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <span className="mb-3 inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-blue-700">
        Prioridad
      </span>
      <h2 className="mb-3 text-xl font-semibold text-slate-900">Proximas acciones</h2>
      <ul className="space-y-3 text-sm text-slate-600">
        <li className="rounded-xl border border-slate-200 p-3">Revisar legajos pendientes de aprobacion</li>
        <li className="rounded-xl border border-slate-200 p-3">Validar vencimientos de flota de esta semana</li>
        <li className="rounded-xl border border-slate-200 p-3">Enviar recordatorios a contratistas criticos</li>
      </ul>
    </aside>
  </div>
)

export default DashboardPage
