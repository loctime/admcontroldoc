"use client"
import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import ThemeSwitcher from "@/components/ThemeSwitcher"
import {
  Home, TrendingUp, Award, Smile, ArrowRight, HelpCircle,
  ShieldCheck, Clock, Layers, FileCheck, BarChart, DatabaseBackup,
  Upload, Cloud, FileText, Search, Eye, Shield, FileCheck2, Settings2,
  MousePointerClick, Gauge, LayoutDashboard, CheckCircle, Users, Globe,
  ChevronDown, ChevronUp
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function WikiInicio() {
  const router = useRouter()
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  const handleSectionClick = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  return (
    <section className="flex flex-col items-center justify-center py-0 px-4 space-y-12">
     

      {/* Hero Section */}
      <div className="text-center space-y-6">
        <Badge className="mb-4 bg-blue-600 hover:bg-blue-700">
          <Home className="w-4 h-4 mr-1" />
          Wiki Documental
        </Badge>
        <h1 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Bienvenido a la Wiki de Gestión Documental
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Encuentra guías, recursos y toda la información necesaria para aprovechar al máximo nuestra plataforma.
        </p>
      </div>

      {/* Categorías */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
        <CategoryCard
          icon={<TrendingUp className="h-8 w-8 text-blue-600" />}
          title="Beneficios"
          description="Descubre cómo tu empresa mejora la gestión documental."
          onClick={() => handleSectionClick("beneficios")}
          isExpanded={expandedSection === "beneficios"}
        />
        <CategoryCard
          icon={<Award className="h-8 w-8 text-green-600" />}
          title="Características"
          description="Explora funcionalidades clave de la plataforma."
          onClick={() => handleSectionClick("caracteristicas")}
          isExpanded={expandedSection === "caracteristicas"}
        />
        <CategoryCard
          icon={<Smile className="h-8 w-8 text-indigo-600" />}
          title="Facilidad de Uso"
          description="Interfaz sencilla e intuitiva para todos los usuarios."
          onClick={() => handleSectionClick("facilidad")}
          isExpanded={expandedSection === "facilidad"}
        />
      </div>

      {/* Contenido expandible */}
      {expandedSection === "beneficios" && (
        <ExpandSection
          title="Beneficios para tu Empresa"
          description="Impacta directamente en tu negocio con estas ventajas:"
          colorClass="from-cyan-600 to-blue-500 bg-blue-600 hover:bg-blue-700"
          cards={[
            { icon: <Clock className="text-green-600 w-8 h-8" />, title: "Ahorro de Tiempo", description: "Reduce hasta 80% el tiempo en gestión documental." },
            { icon: <ShieldCheck className="text-blue-600 w-8 h-8" />, title: "Cumplimiento Legal", description: "Mantén tus documentos siempre actualizados." },
            { icon: <TrendingUp className="text-purple-600 w-8 h-8" />, title: "Crecimiento Empresarial", description: "Escala tu negocio sin preocuparte por la documentación." },
            { icon: <ArrowRight className="text-orange-600 w-8 h-8" />, title: "Acceso Inmediato", description: "Encuentra documentos en segundos." },
          ]}
        />
      )}

      {expandedSection === "caracteristicas" && (
        <ExpandSection
          title="Características Clave"
          description="Potencia tu gestión documental con estas herramientas:"
          colorClass="from-teal-600 to-green-500 bg-teal-600 hover:bg-teal-700"
          cards={[
            { icon: <Upload className="text-teal-600 w-8 h-8" />, title: "Subida Masiva", description: "Carga múltiples archivos simultáneamente." },
            { icon: <FileText className="text-blue-600 w-8 h-8" />, title: "Conversión a PDF", description: "Convierte documentos automáticamente a PDF." },
            { icon: <Layers className="text-yellow-600 w-8 h-8" />, title: "Control de Versiones", description: "Rastrea y restaura cambios." },
            { icon: <BarChart className="text-orange-600 w-8 h-8" />, title: "Reportes Personalizados", description: "Gráficos e indicadores en tiempo real." },
            { icon: <DatabaseBackup className="text-cyan-600 w-8 h-8" />, title: "Seguridad y Backups", description: "Almacenamiento seguro con copias automáticas." },
          ]}
        />
      )}

      {expandedSection === "facilidad" && (
        <ExpandSection
          title="Facilidad de Uso"
          description="Un sistema que cualquiera puede manejar rápidamente:"
          colorClass="from-indigo-600 to-purple-500 bg-indigo-600 hover:bg-indigo-700"
          cards={[
            { icon: <MousePointerClick className="text-indigo-700 w-8 h-8" />, title: "Interfaz Intuitiva", description: "Diseñada para un uso simple y natural." },
            { icon: <Smile className="text-cyan-700 w-8 h-8" />, title: "Experiencia Agradable", description: "Colores y diseño que facilitan el trabajo." },
            { icon: <Gauge className="text-purple-700 w-8 h-8" />, title: "Velocidad de Uso", description: "Completa tareas con menos pasos." },
            { icon: <LayoutDashboard className="text-indigo-600 w-8 h-8" />, title: "Dashboard Central", description: "Todo lo importante a la vista." },
          ]}
        />
      )}

      <div className="mt-10 text-gray-500 dark:text-gray-400 text-sm flex items-center gap-2 justify-center">
        <HelpCircle className="h-4 w-4" />
        ¿Dudas? Usa el buscador o revisa la sección de preguntas frecuentes.
      </div>

      {/* Características Principales */}
      <div className="space-y-8 w-full max-w-6xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Características que Marcan la Diferencia</h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">Tecnología avanzada al servicio de tu empresa</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileText className="h-5 w-5 text-blue-600" />
                <span>Digitalización Automática</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600 dark:text-gray-300">
                Convierte automáticamente documentos físicos en digitales con reconocimiento inteligente de texto.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Escaneo con smartphone</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Extracción automática de datos</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Validación inteligente</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-purple-600" />
                <span>Gestión de Equipos</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600 dark:text-gray-300">
                Organiza a tu equipo con roles específicos y controla el acceso a documentos sensibles.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Roles personalizables</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Acceso controlado</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Auditoría completa</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Globe className="h-5 w-5 text-green-600" />
                <span>Acceso desde Cualquier Lugar</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600 dark:text-gray-300">
                Accede a tus documentos desde cualquier dispositivo, en cualquier momento y lugar.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Aplicación web responsive</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Sincronización en tiempo real</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Trabajo offline</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Award className="h-5 w-5 text-orange-600" />
                <span>Cumplimiento Garantizado</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600 dark:text-gray-300">
                Mantén tu empresa siempre en regla con alertas automáticas y recordatorios inteligentes.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Alertas de vencimiento</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Reportes automáticos</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Backup seguro</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Call to Action */}
      <Card className="bg-gradient-to-r from-green-500 to-blue-600 text-white border-0 w-full max-w-6xl">
        <CardContent className="text-center py-8">
          <h2 className="text-3xl font-bold mb-4">¿Listo para Transformar tu Empresa?</h2>
          <p className="text-xl mb-8 text-green-50">
            Únete a cientos de empresas que ya optimizaron su gestión documental
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
              <Link href="/clientes/demo">Solicitar Demo Gratuita</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 bg-transparent"
              asChild
            >
              <Link href="/clientes/precios">Ver Planes y Precios</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

function CategoryCard({ icon, title, description, onClick, isExpanded }: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  onClick: () => void; 
  isExpanded?: boolean; 
}) {
  return (
    <button
      className={`flex flex-col items-center p-6 rounded-lg shadow hover:shadow-md transition border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 relative w-full`}
      onClick={onClick}
    >
      {icon}
      <span className="mt-3 text-lg font-semibold">{title}</span>
      <span className="mt-1 text-gray-600 text-sm">{description}</span>
      <div className="absolute top-2 right-2">
        {isExpanded ? (
          <ChevronUp className="h-4 w-4 text-gray-500" />
        ) : (
          <ChevronDown className="h-4 w-4 text-gray-500" />
        )}
      </div>
    </button>
  )
}

function ExpandSection({ title, description, cards, colorClass }: { 
  title: string; 
  description: string; 
  cards: { icon: React.ReactNode; title: string; description: string }[];
  colorClass: string;
}) {
  return (
    <div className="w-full max-w-6xl animate-in slide-in-from-top-2 duration-300 space-y-8">
      <div className={`bg-gradient-to-r rounded-2xl p-8 text-white shadow-md text-center mb-8 ${colorClass.split(' ').slice(0,2).join(' ')}`}>
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-lg max-w-3xl mx-auto">{description}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card) => (
          <ServiceCard key={card.title} icon={card.icon} title={card.title} description={card.description} />
        ))}
      </div>
      <div className="rounded-2xl p-8 text-center shadow mt-8 bg-gray-100 dark:bg-gray-900/80">
        <h3 className="text-2xl font-bold mb-2">¿Listo para comenzar?</h3>
        <p className="text-gray-700 dark:text-gray-200 mb-4">Empieza a gestionar tus documentos de forma ágil, segura y sencilla.</p>
        <button className={`text-white font-semibold py-3 px-6 rounded-lg transition ${colorClass.split(' ').slice(2).join(' ')}`}>
          Solicitar demo gratuita
        </button>
      </div>
    </div>
  )
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <Card className="shadow hover:shadow-lg transition">
      <CardHeader className="flex items-center gap-3">{icon}<CardTitle className="text-xl font-bold">{title}</CardTitle></CardHeader>
      <CardContent><p className="text-gray-900 dark:text-white">{description}</p></CardContent>
    </Card>
  )
}
