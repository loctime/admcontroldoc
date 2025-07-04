import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Code, Database, Settings, Users, FileText, Shield, Zap } from "lucide-react"
import Link from "next/link"

const wikiSections = [
  {
    title: "Arquitectura del Sistema",
    description: "Diseño general, patrones y estructura del sistema",
    icon: Code,
    href: "/wiki/arquitectura",
    status: "Completo",
    topics: ["Microservicios", "API Gateway", "Base de datos", "Frontend/Backend"],
  },
  {
    title: "Gestión de Usuarios",
    description: "Autenticación, autorización y administración de usuarios",
    icon: Users,
    href: "/wiki/usuarios",
    status: "Completo",
    topics: ["Firebase Auth", "Roles", "Permisos", "Panel de usuario"],
  },
  {
    title: "Sistema de Documentos",
    description: "Procesamiento OCR, almacenamiento y gestión de documentos",
    icon: FileText,
    href: "/wiki/documentos",
    status: "Completo",
    topics: ["OCR", "Almacenamiento", "Categorías", "Validación"],
  },
  {
    title: "Panel Administrativo",
    description: "Herramientas de administración y configuración del sistema",
    icon: Settings,
    href: "/wiki/administracion",
    status: "Completo",
    topics: ["Dashboard", "Configuración", "Monitoreo", "Reportes"],
  },
  {
    title: "Base de Datos",
    description: "Estructura, modelos y gestión de datos con Firebase",
    icon: Database,
    href: "/wiki/base-datos",
    status: "Completo",
    topics: ["Firestore", "Colecciones", "Índices", "Seguridad"],
  },
  {
    title: "Seguridad",
    description: "Implementación de seguridad y mejores prácticas",
    icon: Shield,
    href: "/wiki/seguridad",
    status: "En progreso",
    topics: ["Autenticación", "Autorización", "Validación", "Encriptación"],
  },
  {
    title: "APIs y Servicios",
    description: "Documentación de endpoints y servicios externos",
    icon: Zap,
    href: "/wiki/apis",
    status: "Completo",
    topics: ["REST API", "Webhooks", "Integraciones", "Rate limiting"],
  },
  {
    title: "Guías de Desarrollo",
    description: "Estándares de código, deployment y mejores prácticas",
    icon: BookOpen,
    href: "/wiki/desarrollo",
    status: "En progreso",
    topics: ["Coding standards", "Git workflow", "Testing", "Deployment"],
  },
]

export default function WikiHomePage() {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Wiki Técnica</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Documentación completa del sistema de gestión de documentos. Encuentra toda la información técnica, guías y
          referencias necesarias.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {wikiSections.map((section) => {
          const Icon = section.icon
          return (
            <Link key={section.href} href={section.href}>
              <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{section.title}</CardTitle>
                        <Badge variant={section.status === "Completo" ? "default" : "secondary"} className="mt-1">
                          {section.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="mt-2">{section.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {section.topics.map((topic) => (
                      <Badge key={topic} variant="outline" className="text-xs">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          )
        })}
      </div>

      <Card className="bg-muted/50">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <BookOpen className="h-5 w-5" />
            <span>Inicio Rápido</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <h4 className="font-semibold">Para Desarrolladores</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>
                  •{" "}
                  <Link href="/wiki/arquitectura" className="hover:underline">
                    Arquitectura del sistema
                  </Link>
                </li>
                <li>
                  •{" "}
                  <Link href="/wiki/desarrollo" className="hover:underline">
                    Guías de desarrollo
                  </Link>
                </li>
                <li>
                  •{" "}
                  <Link href="/wiki/apis" className="hover:underline">
                    Documentación de APIs
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Para Administradores</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>
                  •{" "}
                  <Link href="/wiki/administracion" className="hover:underline">
                    Panel administrativo
                  </Link>
                </li>
                <li>
                  •{" "}
                  <Link href="/wiki/usuarios" className="hover:underline">
                    Gestión de usuarios
                  </Link>
                </li>
                <li>
                  •{" "}
                  <Link href="/wiki/seguridad" className="hover:underline">
                    Configuración de seguridad
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Para Usuarios</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>
                  •{" "}
                  <Link href="/wiki/documentos" className="hover:underline">
                    Gestión de documentos
                  </Link>
                </li>
                <li>
                  •{" "}
                  <Link href="/wiki/usuarios#panel-usuario" className="hover:underline">
                    Panel de usuario
                  </Link>
                </li>
                <li>
                  •{" "}
                  <Link href="/wiki/documentos#ocr" className="hover:underline">
                    Procesamiento OCR
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
