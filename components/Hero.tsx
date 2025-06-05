"use client"

import { useLanguage } from "../context/LanguageContext"
import { ArrowRight, Zap } from "lucide-react"

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-8">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
            <Zap className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm">Tecnología Avanzada</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent">
            {t("hero_title")}
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">{t("hero_subtitle")}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 flex items-center justify-center">
              {t("hero_cta")}
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 rounded-lg border border-cyan-500/30 hover:border-cyan-500 hover:bg-cyan-500/10 transition-all duration-200">
              Ver Demo
            </button>
          </div>
        </div>

        <div className="relative mt-16">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-3xl"></div>
          <div className="relative bg-gray-900/50 rounded-2xl border border-cyan-500/20 p-8 backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-cyan-400">99.9%</div>
                <div className="text-gray-300">Uptime</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyan-400">24/7</div>
                <div className="text-gray-300">Soporte</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyan-400">1000+</div>
                <div className="text-gray-300">Clientes</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
