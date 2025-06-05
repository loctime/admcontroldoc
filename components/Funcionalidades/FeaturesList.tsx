// FeaturesList.tsx
// Componente genérico para mostrar listas de features con íconos y estilos personalizados

import React from "react"

export interface FeatureItem {
  icon: React.ElementType
  title: string
  description: string
}

interface FeaturesListProps {
  features: FeatureItem[]
  sectionId: string
  title: string
  subtitle: string
  gradientHeader: string
  gradientCard: string
  borderColor: string
  bgSection: string
  shadowCard?: string
}

/**
 * Componente reutilizable para mostrar una lista de features (características)
 * con estilos y textos personalizables.
 */
const FeaturesList: React.FC<FeaturesListProps> = ({
  features,
  sectionId,
  title,
  subtitle,
  gradientHeader,
  gradientCard,
  borderColor,
  bgSection,
  shadowCard = "shadow-lg",
}) => {
  return (
    <section id={sectionId} className={`py-10 px-4 sm:px-8 ${bgSection}`}>
      <div className="max-w-7xl mx-auto text-center">
        <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${gradientHeader} bg-clip-text text-transparent`}>
          {title}
        </h2>
        <p className="text-lg text-gray-400 mb-16 max-w-2xl mx-auto">
          {subtitle}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group p-6 rounded-xl border ${borderColor} bg-opacity-80 hover:border-cyan-500 transition-all duration-300 hover:scale-[1.03] ${shadowCard}`}
            >
              <div className={`w-12 h-12 ${gradientCard} rounded-lg flex items-center justify-center mb-4 shadow-md group-hover:rotate-3 transition-transform duration-300`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-300 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesList;