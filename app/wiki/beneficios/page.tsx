import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  TrendingUp,
  DollarSign,
  Shield,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Calculator,
  Target,
  Zap,
} from "lucide-react"
import Link from "next/link"

const beneficiosDetallados = [
  {
    title: "Reducción de Costos Operativos",
    description: "Ahorra hasta $50,000 anuales en gestión documental",
    icon: DollarSign,
    color: "text-green-600",
    bgColor: "bg-green-50",
    stats: "Ahorro promedio: 65%",
    details: [
      "Eliminación de papel y archivadores físicos",
      "Reducción de horas-hombre en búsqueda de documentos",
      "Menor necesidad de espacio físico de almacenamiento",
      "Reducción de costos de impresión y fotocopiado",
    ],
  },
  {
    title: "Aumento de Productividad",
    description: "Incrementa la eficiencia de tu equipo en un 80%",
    icon: TrendingUp,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    stats: "Mejora promedio: 80%",
    details: [
      "Acceso instantáneo a cualquier documento",
      "Automatización de procesos repetitivos",
      "Colaboración en tiempo real entre equipos",
      "Eliminación de tareas manuales de archivo",
    ],
  },
  {
    title: "Cumplimiento Legal Garantizado",
    description: "Mantén tu empresa siempre en regla con las autoridades",
    icon: Shield,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    stats: "99.9% de cumplimiento",
    details: [
      "Alertas automáticas de documentos por vencer",
      "Historial completo de cambios y actualizaciones",
      "Backup automático y seguro en la nube",
      "Reportes de cumplimiento automáticos",
    ],
  },
  {
    title: "Escalabilidad Sin Límites",
    description: "Crece sin preocuparte por la gestión documental",
    icon: BarChart3,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    stats: "Capacidad ilimitada",
    details: [
      "Agregar usuarios y documentos sin restricciones",
      "Adaptación automática a nuevos procesos",
      "Integración con sistemas existentes",
      "Soporte para múltiples ubicaciones",
    ],
  },
]

const casosExito = [
  {
    empresa: "TransLogística S.A.",
    sector: "Transporte",
    empleados: "150+",
    ahorro: "$45,000/año",
    tiempo: "75% menos tiempo",
    descripcion: "Automatizaron la gestión de licencias y documentos vehiculares",
  },
  {
    empresa: "Constructora Andina",
    sector: "Construcción",
    empleados: "80+",
    ahorro: "$32,000/año",
    tiempo: "60% menos tiempo",
    descripcion: "Digitalizaron permisos y certificaciones de obra",
  },
  {
    empresa: "Servicios Médicos Plus",
    sector: "Salud",
    empleados: "200+",
    ahorro: "$58,000/año",
    tiempo: "85% menos tiempo",
    descripcion: "Organizaron certificaciones médicas y licencias sanitarias",
  },
]

export default function BeneficiosPage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <Badge className="mb-4 bg-green-600 hover:bg-green-700">
          <TrendingUp className="w-4 h-4 mr-1" />
          Beneficios Comprobados
        </Badge>
        <h1 className="text-4xl font-bold tracking-tight">Beneficios Reales para tu Empresa</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Descubre cómo nuestro sistema transforma la gestión documental y genera valor real para empresas como la tuya.
        </p>
      </div>

      {/* ROI Calculator */}
      <Card className="bg-gradient-to-r from-green-500 to-blue-600 text-white border-0">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl flex items-center justify-center space-x-2">
            <Calculator className="h-6 w-6" />
            <span>Calculadora de ROI</span>
          </CardTitle>
          <CardDescription className="text-green-100">Estima el retorno de inversión para tu empresa</CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-white/20 rounded-lg p-4">
              <div className="text-2xl font-bold">3 meses</div>
              <p className="text-green-100">Tiempo de recuperación</p>
            </div>
            <div className="bg-white/20 rounded-lg p-4">
              <div className="text-2xl font-bold">300%</div>
              <p className="text-green-100">ROI en el primer año</p>
            </div>
            <div className="bg-white/20 rounded-lg p-4">
              <div className="text-2xl font-bold">$40K+</div>
              <p className="text-green-100">Ahorro promedio anual</p>
            </div>
          </div>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Calcular mi ROI Personalizado
          </Button>
        </CardContent>
      </Card>

      {/* Beneficios Detallados */}
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Beneficios Detallados</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {beneficiosDetallados.map((beneficio, index) => {
            const Icon = beneficio.icon
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow border-0 shadow-md">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 ${beneficio.bgColor} rounded-lg flex items-center justify-center`}>
                      <Icon className={`h-6 w-6 ${beneficio.color}`} />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg">{beneficio.title}</CardTitle>
                      <Badge variant="outline" className="mt-1">
                        {beneficio.stats}
                      </Badge>
                    </div>
                  </div>
                  <CardDescription className="text-base">{beneficio.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {beneficio.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Casos de Éxito */}
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Casos de Éxito Reales</h2>
          <p className="text-gray-600 text-lg">Empresas que ya transformaron su gestión documental</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {casosExito.map((caso, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{caso.empresa}</CardTitle>
                  <Badge variant="outline">{caso.sector}</Badge>
                </div>
                <CardDescription>{caso.descripcion}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <div className="font-bold text-green-600">{caso.ahorro}</div>
                    <p className="text-xs text-gray-600">Ahorro anual</p>
                  </div>
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <div className="font-bold text-blue-600">{caso.tiempo}</div>
                    <p className="text-xs text-gray-600">Reducción tiempo</p>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>{caso.empleados} empleados</span>
                  <Button variant="ghost" size="sm">
                    Ver caso completo
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Comparación Antes/Después */}
      <Card className="bg-gray-50 border-0">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Antes vs Después</CardTitle>
          <CardDescription>La transformación que experimentarás</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-red-600 flex items-center">
                <Target className="mr-2 h-5 w-5" />
                Situación Actual (Sin Sistema)
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <span>Búsqueda de documentos toma 15-30 minutos</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <span>Documentos perdidos o extraviados</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <span>Multas por documentos vencidos</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <span>Espacio físico ocupado por archivos</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <span>Procesos manuales lentos y propensos a errores</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-green-600 flex items-center">
                <Zap className="mr-2 h-5 w-5" />
                Con Nuestro Sistema
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span>Encuentra cualquier documento en segundos</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span>Documentos seguros y siempre disponibles</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span>Alertas automáticas de vencimientos</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span>Oficina sin papel, más espacio útil</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span>Automatización completa de procesos</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Call to Action */}
      <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
        <CardContent className="text-center py-12">
          <h2 className="text-3xl font-bold mb-4">¿Listo para Obtener Estos Beneficios?</h2>
          <p className="text-xl mb-8 text-blue-50">
            Programa una demo personalizada y descubre el potencial de ahorro para tu empresa
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
              <Link href="/clientes/casos-uso">Ver Casos de Uso</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
