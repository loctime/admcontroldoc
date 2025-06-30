interface FeatureCardProps {
    image: string
    title: string
    description?: string
  }
  
  const FeatureCard: React.FC<FeatureCardProps> = ({ image, title, description }) => {
    // Generar alt text descriptivo basado en el título
    const generateAltText = (title: string) => {
      return `Funcionalidad de ControlDoc: ${title} - Sistema de gestión documental empresarial y control de cumplimiento normativo`
    }

    return (
      <div className="min-w-[18rem] w-72 m-4 rounded-xl shadow-md overflow-hidden transition hover:scale-105 snap-center">
        <img
          src={image}
          alt={generateAltText(title)}
          className="w-full h-48 object-cover"
          loading="lazy"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-1 text-gray-800 dark:text-white">{title}</h3>
          {description && (
            <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
          )}
        </div>
      </div>
    )
  }
  
  export default FeatureCard
  