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
  Home,
  TrendingUp,
  DollarSign,
  Play,
  Phone,
  Building2,
  Award,
  Clock,
  HelpCircle,
} from "lucide-react"

const navigationItems = [
  {
    title: "Inicio",
    href: "/wiki/inicio",
    icon: Home,
  },
  {
    title: "Beneficios",
    icon: TrendingUp,
    items: [
      { title: "Ahorro de Costos", href: "/wiki/beneficios" },
      { title: "Eficiencia Operativa", href: "/wiki/eficiencia" },
      { title: "Cumplimiento Legal", href: "/wiki/cumplimiento" },
      { title: "Escalabilidad", href: "/wiki/escalabilidad" },
    ],
  },
  {
    title: "Control Total",
    icon: Building2,
    items: [
      { title: "Administración", href: "/wiki/usuarios" },
      { title: "Seguridad", href: "/wiki/seguridad" },
      { title: "Servicios", href: "/wiki/services" },
    ],
  },
  {
    title: "Tecnología",
    icon: Award,
    items: [
      { title: "Lectura inteligente", href: "/wiki/digital" },
      { title: "Conversión a pdf", href: "/wiki/conversion" },
      { title: "Mejora de imágenes", href: "/wiki/mejora" },
      { title: "Carga masiva", href: "/wiki/masiva" },
    ],
  },
  {
    title: "Implementación",
    icon: Clock,
    items: [
      { title: "Proceso de Onboarding", href: "/clientes/implementacion/onboarding" },
      { title: "Migración de Datos", href: "/clientes/implementacion/migracion" },
      { title: "Capacitación", href: "/clientes/implementacion/capacitacion" },
      { title: "Soporte", href: "/clientes/implementacion/soporte" },
    ],
  },
  {
    title: "Planes y Precios",
    href: "/clientes/precios",
    icon: DollarSign,
  },
  {
    title: "Demo",
    href: "/clientes/demo",
    icon: Play,
  },
  {
    title: "Contacto",
    href: "/clientes/contacto",
    icon: Phone,
  },
  {
    title: "FAQ",
    href: "/clientes/faq",
    icon: HelpCircle,
  },
]

export default function ClientSidebar() {
  const pathname = usePathname()
  const [searchQuery, setSearchQuery] = useState("")
  const [openSections, setOpenSections] = useState<string[]>(["Beneficios"])

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
    <div className="w-80 backdrop-blur-sm border-r border-gray-200 h-[calc(100vh-4rem)] shadow-lg">
      <div className="p-4 border-b border-gray-200">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Buscar información..."
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
                  <Button
                    variant={pathname === item.href ? "default" : "ghost"}
                    className="w-full justify-start hover:bg-blue-50"
                  >
                    <Icon className="mr-2 h-4 w-4" />
                    {item.title}
                  </Button>
                </Link>
              )
            }

            return (
              <Collapsible key={item.title} open={isOpen} onOpenChange={() => toggleSection(item.title)}>
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" className="w-full justify-start hover:bg-blue-50">
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
                        variant={pathname === subItem.href ? "default" : "ghost"}
                        size="sm"
                        className="w-full justify-start text-sm hover:bg-blue-50"
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
