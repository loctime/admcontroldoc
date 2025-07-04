"use client"
import React from "react"
import { CheckCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function EscalabilidadPage() {
  return (
    <section className="max-w-3xl mx-auto py-10 px-4">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Escalabilidad</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-gray-700 mb-6">
            Nuestra plataforma documental está diseñada para acompañar el crecimiento de tu empresa, adaptándose a nuevas necesidades sin requerir cambios drásticos en la infraestructura ni en la forma de trabajo.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Puedes comenzar con una pequeña cantidad de usuarios y documentos, y expandir gradualmente el sistema a medida que tu organización crece, manteniendo siempre el mismo nivel de eficiencia y control.
          </p>
          <h2 className="text-xl font-semibold mb-4">Beneficios clave:</h2>
          <ul className="space-y-3 mb-4">
            <li className="flex items-start gap-2">
              <CheckCircle className="text-purple-600 mt-1" />
              <span>Capacidad de agregar empresas, sucursales, usuarios y documentos sin límites.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="text-purple-600 mt-1" />
              <span>Arquitectura flexible que soporta altos volúmenes de información.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="text-purple-600 mt-1" />
              <span>Integración sencilla con otras herramientas o sistemas que utilice tu empresa.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="text-purple-600 mt-1" />
              <span>Actualizaciones y mejoras continuas que permiten acompañar tu evolución.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="text-purple-600 mt-1" />
              <span>Rendimiento estable, sin importar la cantidad de datos procesados.</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </section>
  )
} 