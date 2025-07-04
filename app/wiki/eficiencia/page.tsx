"use client"
import React from "react"
import { CheckCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function EficienciaOperativaPage() {
  return (
    <section className="max-w-3xl mx-auto py-10 px-4">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Eficiencia Operativa</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-gray-700 mb-6">
            Optimiza la gestión de documentos y acelera los procesos clave de tu empresa con nuestra plataforma documental. Al centralizar la información, se eliminan cuellos de botella y se mejora la coordinación entre equipos, áreas y sucursales.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Nuestra solución permite que los documentos requeridos estén disponibles en tiempo real, asegurando un flujo de trabajo ágil y eficiente. Esto facilita la toma de decisiones y evita retrasos por búsquedas manuales o extravío de archivos.
          </p>
          <h2 className="text-xl font-semibold mb-4">Beneficios clave:</h2>
          <ul className="space-y-3 mb-4">
            <li className="flex items-start gap-2">
              <CheckCircle className="text-blue-600 mt-1" />
              <span>Acceso inmediato a documentos desde cualquier dispositivo.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="text-blue-600 mt-1" />
              <span>Automatización de tareas repetitivas que liberan tiempo del personal.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="text-blue-600 mt-1" />
              <span>Mayor control de los procesos mediante seguimiento en tiempo real.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="text-blue-600 mt-1" />
              <span>Reducción de errores humanos en la gestión documental.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="text-blue-600 mt-1" />
              <span>Mejor comunicación entre áreas, agilizando la ejecución de tareas.</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </section>
  )
} 