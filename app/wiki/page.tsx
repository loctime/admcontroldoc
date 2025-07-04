import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Building2,
  Users,
  FileText,
  Shield,
  Clock,
  TrendingUp,
  CheckCircle,
  Star,
  ArrowRight,
  Zap,
  Globe,
  Award,
} from "lucide-react"
import Link from "next/link"

const beneficios = [
  {
    title: "Ahorro de Tiempo",
    description: "Reduce hasta 80% el tiempo en gestión documental",
    icon: Clock,
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    title: "Cumplimiento Legal",
    description: "Mantén todos tus documentos organizados y actualizados",
    icon: Shield,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    title: "Crecimiento Empresarial",
    description: "Escala tu negocio sin preocuparte por la documentación",
    icon: TrendingUp,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    title: "Acceso Inmediato",
    description: "Encuentra cualquier documento en segundos",
    icon: Zap,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
  },
]

const industrias = [
  { name: "Transporte y Logística", docs: "Licencias, SOAT, Revisiones Técnicas", icon: "🚛" },
  { name: "Construcción", docs: "Permisos, Certificaciones, Contratos", icon: "🏗️" },
  { name: "Servicios Profesionales", docs: "Contratos, Facturas, Certificados", icon: "💼" },
  { name: "Comercio", docs: "RUC, Permisos, Documentos Fiscales", icon: "🏪" },
  { name: "Manufactura", docs: "Certificaciones, Permisos Ambientales", icon: "🏭" },
  { name: "Salud", docs: "Licencias Sanitarias, Certificaciones", icon: "🏥" },
]

export default function ClientesHomePage() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-6 py-12">
        <Badge className="mb-4 bg-blue-600 hover:bg-blue-700">
          <Star className="w-4 h-4 mr-1" />
          Solución Empresarial Líder
        </Badge>
        <h1 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Gestión Documental Inteligente
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Transforma la manera en que tu empresa maneja documentos. Automatiza procesos, cumple regulaciones y enfócate
          en hacer crecer tu negocio.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
            <Link href="/clientes/beneficios">
              Descubre los Beneficios
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/clientes/casos-uso">Ver Casos de Uso</Link>
          </Button>
        </div>
      </div>

      {/* Beneficios Principales */}
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">¿Por qué elegir nuestro sistema?</h2>
          <p className="text-gray-600 text-lg">Beneficios reales que impactan directamente en tu negocio</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {beneficios.map((beneficio) => {
            const Icon = beneficio.icon
            return (
              <Card key={beneficio.title} className="hover:shadow-lg transition-shadow border-0 shadow-md">
                <CardHeader className="text-center">
                  <div
                    className={`w-16 h-16 ${beneficio.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    <Icon className={`h-8 w-8 ${beneficio.color}`} />
                  </div>
                  <CardTitle className="text-lg">{beneficio.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">{beneficio.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Industrias */}
      <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl flex items-center justify-center space-x-2">
            <Building2 className="h-6 w-6 text-blue-600" />
            <span>Industrias que Confiamos</span>
          </CardTitle>
          <CardDescription className="text-lg">
            Soluciones especializadas para diferentes sectores empresariales
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industrias.map((industria) => (
              <div key={industria.name} className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-3 mb-2">
                  <span className="text-2xl">{industria.icon}</span>
                  <h4 className="font-semibold">{industria.name}</h4>
                </div>
                <p className="text-sm text-gray-600">{industria.docs}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Estadísticas */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">Resultados que Hablan por Sí Solos</h2>
          <p className="text-blue-100">Empresas de todos los tamaños confían en nosotros</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">500+</div>
            <p className="text-blue-100">Empresas Activas</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">1M+</div>
            <p className="text-blue-100">Documentos Procesados</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">80%</div>
            <p className="text-blue-100">Reducción de Tiempo</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">99.9%</div>
            <p className="text-blue-100">Disponibilidad</p>
          </div>
        </div>
      </div>

      {/* Características Principales */}
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Características que Marcan la Diferencia</h2>
          <p className="text-gray-600 text-lg">Tecnología avanzada al servicio de tu empresa</p>
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
              <p className="text-gray-600">
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
              <p className="text-gray-600">
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
              <p className="text-gray-600">
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
              <p className="text-gray-600">
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
      <Card className="bg-gradient-to-r from-green-500 to-blue-600 text-white border-0">
        <CardContent className="text-center py-12">
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
    </div>
  )
}
