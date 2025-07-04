"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import {
  ChevronDown,
  ChevronRight,
  Search,
  Code,
  Users,
  FileText,
  Settings,
  Database,
  Shield,
  Zap,
  BookOpen,
  Home,
} from "lucide-react"

const navigationItems = [
  {
    title: "Inicio",
    href: "/wiki",
    icon: Home,
  },
  {
    title: "Arquitectura",
    icon: Code,
    items: [
      { title: "Visión General", href: "/wiki/arquitectura" },
      { title: "Frontend", href: "/wiki/arquitectura/frontend" },
      { title: "Backend", href: "/wiki/arquitectura/backend" },
      { title: "Base de Datos", href: "/wiki/arquitectura/database" },
      { title: "Integraciones", href: "/wiki/arquitectura/integraciones" },
    ],
  },
  {
    title: "Gestión de Usuarios",
    icon: Users,
    items: [
      { title: "Autenticación", href: "/wiki/usuarios/auth" },
      { title: "Panel de Usuario", href: "/wiki/usuarios/panel" },
      { title: "Roles y Permisos", href: "/wiki/usuarios/roles" },
      { title: "Administración", href: "/wiki/usuarios/admin" },
    ],
  },
  {
    title: "Sistema de Documentos",
    icon: FileText,
    items: [
      { title: "Procesamiento OCR", href: "/wiki/documentos/ocr" },
      { title: "Almacenamiento", href: "/wiki/documentos/storage" },
      { title: "Categorías", href: "/wiki/documentos/categorias" },
      { title: "Validación", href: "/wiki/documentos/validacion" },
      { title: "Visor PDF", href: "/wiki/documentos/visor" },
    ],
  },
  {
    title: "Panel Administrativo",
    icon: Settings,
    items: [
      { title: "Dashboard", href: "/wiki/admin/dashboard" },
      { title: "Configuración", href: "/wiki/admin/config" },
      { title: "Monitoreo", href: "/wiki/admin/monitoring" },
      { title: "Reportes", href: "/wiki/admin/reports" },
    ],
  },
  {
    title: "Base de Datos",
    icon: Database,
    items: [
      { title: "Estructura Firestore", href: "/wiki/database/firestore" },
      { title: "Colecciones", href: "/wiki/database/collections" },
      { title: "Índices", href: "/wiki/database/indexes" },
      { title: "Reglas de Seguridad", href: "/wiki/database/security-rules" },
    ],
  },
  {
    title: "APIs y Servicios",
    icon: Zap,
    items: [
      { title: "API Server", href: "/wiki/apis/server" },
      { title: "Endpoints", href: "/wiki/apis/endpoints" },
      { title: "Webhooks", href: "/wiki/apis/webhooks" },
      { title: "Rate Limiting", href: "/wiki/apis/rate-limiting" },
    ],
  },
  {
    title: "Seguridad",
    icon: Shield,
    items: [
      { title: "Autenticación", href: "/wiki/security/auth" },
      { title: "Autorización", href: "/wiki/security/authorization" },
      { title: "Validación", href: "/wiki/security/validation" },
      { title: "Mejores Prácticas", href: "/wiki/security/best-practices" },
    ],
  },
  {
    title: "Desarrollo",
    icon: BookOpen,
    items: [
      { title: "Configuración", href: "/wiki/dev/setup" },
      { title: "Estándares de Código", href: "/wiki/dev/standards" },
      { title: "Testing", href: "/wiki/dev/testing" },
      { title: "Deployment", href: "/wiki/dev/deployment" },
    ],
  },
]

export default function WikiSidebar() {
  const pathname = usePathname()
  const [searchQuery, setSearchQuery] = useState("")
  const [openSections, setOpenSections] = useState<string[]>(["Arquitectura"])

  const toggleSection = (title: string) => {
    setOpenSections((prev) => (prev.includes(title) ? prev.filter((s) => s !== title) : [...prev, title]))
  }

  const filteredItems = navigationItems.filter((item) => {
    if (!searchQuery) return true
    const matchesTitle = item.title.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesSubItems = item.items?.some((subItem) =>
      subItem.title.toLowerCase().includes(searchQuery.toLowerCase()),
    )
    return matchesTitle || matchesSubItems
  })

  return (
    <div className="w-80 border-r bg-muted/10 h-[calc(100vh-4rem)]">
      <div className="p-4 border-b">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Buscar en la wiki..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      <ScrollArea className="h-full p-4">
        <nav className="space-y-2">
          {filteredItems.map((item) => {
            const Icon = item.icon
            const isOpen = openSections.includes(item.title)

            if (!item.items) {
              return (
                <Link key={item.href} href={item.href || "#"}>
                  <Button variant={pathname === item.href ? "secondary" : "ghost"} className="w-full justify-start">
                    <Icon className="mr-2 h-4 w-4" />
                    {item.title}
                  </Button>
                </Link>
              )
            }

            return (
              <Collapsible key={item.title} open={isOpen} onOpenChange={() => toggleSection(item.title)}>
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" className="w-full justify-start">
                    <Icon className="mr-2 h-4 w-4" />
                    {item.title}
                    {isOpen ? (
                      <ChevronDown className="ml-auto h-4 w-4" />
                    ) : (
                      <ChevronRight className="ml-auto h-4 w-4" />
                    )}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="ml-6 space-y-1">
                  {item.items.map((subItem) => (
                    <Link key={subItem.href} href={subItem.href}>
                      <Button
                        variant={pathname === subItem.href ? "secondary" : "ghost"}
                        size="sm"
                        className="w-full justify-start"
                      >
                        {subItem.title}
                      </Button>
                    </Link>
                  ))}
                </CollapsibleContent>
              </Collapsible>
            )
          })}
        </nav>
      </ScrollArea>
    </div>
  )
}
