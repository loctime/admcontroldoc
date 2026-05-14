import Image from "next/image"
import Link from "next/link"
import { Check, ChevronRight } from "lucide-react"
import { StructuredData } from "@/components/structured-data"
import { AppMediaGallery } from "@/components/app-media-gallery"
import { getPlatformAppBySlug } from "@/lib/platform-data"
import { getAppSchemas } from "@/lib/seo"

export function ControlDocLanding() {
  const app = getPlatformAppBySlug("control-doc")
  if (!app) return null
  const { landingContent } = app

  return (
    <>
      <StructuredData data={getAppSchemas(app)} />

      <section className="bg-white pt-28 pb-20 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="inline-flex items-center gap-2 text-blue-600 text-sm font-semibold mb-6 border border-blue-200 bg-blue-50 px-3 py-1.5 rounded-full">
                <app.icon size={14} />
                {landingContent.heroLabel}
              </div>

              <h1 className="text-5xl font-bold text-slate-900 mb-5 leading-tight tracking-tight">
                {landingContent.heroTitle}
              </h1>

              <p className="text-lg text-slate-700 mb-4 leading-relaxed">
                {landingContent.heroDescription}
              </p>
              <p className="text-base text-slate-600 mb-10 leading-relaxed">
                {landingContent.valueProposition}
              </p>

              <div className="flex flex-wrap gap-3 mb-12">
                <Link
                  href="#funcionalidades"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg text-sm font-semibold shadow-lg shadow-blue-200/70 hover:bg-blue-700 transition-colors"
                >
                  {landingContent.finalCta.primaryLabel}
                </Link>
                <Link
                  href={landingContent.finalCta.secondaryHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-slate-300 bg-white text-slate-700 px-6 py-3 rounded-lg text-sm font-semibold hover:border-blue-400 hover:text-blue-600 hover:shadow-sm transition-all"
                >
                  {landingContent.finalCta.secondaryLabel}
                </Link>
              </div>

              <ul className="grid sm:grid-cols-2 gap-3">
                {app.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <Check className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative lg:self-start">
              <div className="relative h-80 rounded-2xl overflow-hidden border border-slate-200 shadow-[0_20px_55px_-24px_rgba(15,23,42,0.22)]">
                <Image
                  src={app.image}
                  alt={`${app.name} - ${app.seo.categoryLabel}`}
                  fill
                  className="object-cover"
                />
              </div>
              {landingContent.heroStats && (
                <div className="absolute -bottom-5 -right-4 bg-white border border-blue-100 px-5 py-4 rounded-2xl shadow-[0_18px_45px_-24px_rgba(37,99,235,0.35)]">
                  <div className="text-2xl font-bold text-blue-600">{landingContent.heroStats.value}</div>
                  <div className="text-xs text-slate-600 max-w-[10rem] leading-snug">{landingContent.heroStats.label}</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section
        id="funcionalidades"
        className="bg-gradient-to-b from-slate-50 via-blue-50/40 to-white py-20 border-b border-slate-100"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="relative overflow-hidden rounded-[28px] border border-blue-100 bg-white p-8 shadow-[0_22px_60px_-28px_rgba(37,99,235,0.32)]">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-700 via-blue-500 to-cyan-400" />
              <h2 className="text-2xl font-bold text-slate-950 mb-6">
                Que problemas resuelve {app.name}?
              </h2>
              <ul className="space-y-4">
                {landingContent.problems.map((problem) => (
                  <li
                    key={problem}
                    className="flex items-start gap-3 rounded-2xl border border-blue-100 bg-blue-50/70 px-4 py-3 text-sm leading-relaxed text-slate-700 shadow-sm shadow-blue-100/60"
                  >
                    <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-white ring-1 ring-blue-100">
                      <ChevronRight className="w-4 h-4 text-blue-700" />
                    </span>
                    {problem}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative overflow-hidden rounded-[28px] border border-blue-100 bg-white p-8 shadow-[0_22px_60px_-28px_rgba(37,99,235,0.32)]">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-700 via-blue-500 to-cyan-400" />
              <h2 className="text-2xl font-bold text-slate-950 mb-6">Para que empresas?</h2>
              <div className="space-y-4">
                {landingContent.audiences.map((audience) => (
                  <div
                    key={audience.title}
                    className="rounded-2xl border border-slate-200 bg-slate-50/85 p-4 shadow-sm shadow-slate-200/70 transition-colors hover:border-blue-200 hover:bg-white"
                  >
                    <h3 className="text-base font-semibold text-slate-950 mb-2">{audience.title}</h3>
                    <p className="text-sm text-slate-700 leading-relaxed">{audience.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">Funcionalidades clave</h2>
            <p className="text-slate-600 max-w-xl">
              Todo lo que necesita tu equipo operativo, en un solo sistema.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {landingContent.functionalities.map((item) => (
              <article
                key={item.title}
                className="bg-white border border-slate-200 rounded-2xl p-6 shadow-[0_16px_40px_-28px_rgba(15,23,42,0.45)] transition-all hover:-translate-y-1 hover:border-blue-300 hover:shadow-[0_20px_55px_-26px_rgba(37,99,235,0.35)]"
              >
                {item.icon && (
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-sky-500 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-blue-200/70">
                    <item.icon className="w-4.5 h-4.5 text-white" />
                  </div>
                )}
                <h3 className="text-base font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {landingContent.mediaGallery && (
        <section className="bg-slate-50 py-20 border-b border-slate-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <AppMediaGallery items={landingContent.mediaGallery.items} appColor="from-blue-600 to-blue-600" />
          </div>
        </section>
      )}

      <section className="bg-white py-20 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">Por que elegir {app.name}?</h2>
            <p className="text-slate-600 max-w-xl">
              Disenado para que el equipo trabaje con fluidez desde el primer dia.
            </p>
          </div>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {landingContent.benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                <span className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-white" />
                </span>
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {landingContent.platformIntegration && (
        <section className="bg-slate-50 py-20 border-b border-slate-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white border border-blue-100 rounded-[28px] p-10 shadow-[0_22px_60px_-28px_rgba(37,99,235,0.28)]">
              <span className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-4 block">
                Integracion con la plataforma
              </span>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">
                {landingContent.platformIntegration.title}
              </h2>
              <p className="text-slate-600 mb-8 max-w-2xl leading-relaxed">
                {landingContent.platformIntegration.description}
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                {landingContent.platformIntegration.bullets.map((bullet) => (
                  <div
                    key={bullet}
                    className="flex items-start gap-3 rounded-2xl border border-blue-100 bg-blue-50/60 px-4 py-4 text-sm text-slate-700 leading-relaxed"
                  >
                    <Check className="w-4 h-4 text-blue-700 flex-shrink-0 mt-0.5" />
                    {bullet}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="bg-white py-20 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">Casos de uso</h2>
            <p className="text-slate-600 max-w-xl">
              Como {app.name} encaja en procesos reales de negocio.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {landingContent.useCases.map((useCase) => (
              <article
                key={useCase.title}
                className="bg-white border border-slate-200 rounded-2xl p-6 border-l-4 border-l-blue-600 shadow-[0_16px_40px_-30px_rgba(15,23,42,0.45)]"
              >
                <h3 className="text-base font-semibold text-slate-900 mb-2">{useCase.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{useCase.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">Preguntas frecuentes</h2>
          </div>
          <div className="space-y-4">
            {landingContent.faq.map((item) => (
              <article
                key={item.question}
                className="bg-white border border-slate-200 rounded-2xl p-6 shadow-[0_16px_40px_-30px_rgba(15,23,42,0.35)]"
              >
                <h3 className="text-base font-semibold text-slate-900 mb-2">{item.question}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Listo para empezar con {app.name}
          </h2>
          <p className="text-slate-400 mb-8 leading-relaxed">
            Moderniza el control de cumplimiento de tu empresa con una plataforma disenada para operar con eficiencia y trazabilidad real.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="#funcionalidades"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-blue-500 transition-colors"
            >
              {landingContent.finalCta.primaryLabel}
            </Link>
            <Link
              href={landingContent.finalCta.secondaryHref}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-slate-700 text-slate-300 px-6 py-3 rounded-lg text-sm font-semibold hover:border-slate-500 hover:text-white transition-colors"
            >
              {landingContent.finalCta.secondaryLabel}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
