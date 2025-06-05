"use client"

import { useLanguage } from "../context/LanguageContext"
import { Check } from "lucide-react"

export default function Pricing() {
  const { t } = useLanguage()

  const plans = [
    {
      name: "Básico",
      price: "$29",
      features: ["5 Proyectos", "10GB Almacenamiento", "Soporte Email", "SSL Incluido"],
    },
    {
      name: "Pro",
      price: "$79",
      features: ["25 Proyectos", "100GB Almacenamiento", "Soporte 24/7", "SSL + CDN", "Analytics Avanzado"],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$199",
      features: ["Proyectos Ilimitados", "1TB Almacenamiento", "Soporte Dedicado", "Infraestructura Personalizada"],
    },
  ]

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            {t("pricing_title")}
          </h2>
          <p className="text-xl text-gray-300">Elige el plan perfecto para tu negocio</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl border transition-all duration-300 hover:transform hover:scale-105 ${
                plan.popular
                  ? "border-cyan-500 bg-gradient-to-b from-cyan-500/10 to-blue-500/10"
                  : "border-cyan-500/20 bg-gray-900/50 hover:border-cyan-500/40"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-1 rounded-full text-sm font-semibold">
                    Más Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-2">{plan.price}</div>
                <div className="text-gray-300">por mes</div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="w-5 h-5 text-cyan-400 mr-3" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-lg font-semibold transition-all duration-200 ${
                  plan.popular
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                    : "border border-cyan-500/30 hover:border-cyan-500 hover:bg-cyan-500/10"
                }`}
              >
                Comenzar
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
