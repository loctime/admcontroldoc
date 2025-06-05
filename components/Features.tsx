"use client"

import { useLanguage } from "../context/LanguageContext"
import { Shield, Zap, Globe, Database } from "lucide-react"

export default function Features() {
  const { t } = useLanguage()

  const features = [
    {
      icon: Shield,
      title: "Seguridad Avanzada",
      description: "Protección de datos con encriptación de nivel empresarial",
    },
    {
      icon: Zap,
      title: "Rendimiento Óptimo",
      description: "Velocidad ultrarrápida con tecnología de vanguardia",
    },
    {
      icon: Globe,
      title: "Alcance Global",
      description: "Infraestructura distribuida en todo el mundo",
    },
    {
      icon: Database,
      title: "Almacenamiento Seguro",
      description: "Backup automático y recuperación de datos",
    },
  ]

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            {t("features_title")}
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">Descubre las características que nos hacen únicos</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-gray-900/50 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
