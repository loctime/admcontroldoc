// components/wiki/WikiPreview.tsx
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const wikiItems = [
  {
    title: "Guía de Arquitectura",
    description: "Estructura y mejores prácticas del sistema.",
    href: "/wiki/arquitectura",
  },
  {
    title: "Documentos y Flujos",
    description: "Cómo gestionar y automatizar documentos.",
    href: "/wiki/documentos",
  },
  {
    title: "Gestión de Usuarios",
    description: "Roles, permisos y administración.",
    href: "/wiki/usuarios",
  },
]

export default function WikiPreview() {
  return (
    <section className="my-12">
      <Card>
        <CardHeader>
          <CardTitle>Wiki Empresarial</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {wikiItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block p-4 rounded-lg border hover:shadow-lg transition"
              >
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  )
}