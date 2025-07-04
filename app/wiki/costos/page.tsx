"use client"
import React from "react"
import { CheckCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AhorroCostosPage() {
  return (
    <section className="max-w-3xl mx-auto py-10 px-4">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Ahorro de Costos</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-gray-700 mb-6">
            Nuestra solución documental está diseñada para generar un impacto económico positivo desde el primer día. Al digitalizar y centralizar la gestión de documentos, se eliminan los gastos asociados al almacenamiento físico, impresión, logística y pérdida de documentos.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Además, el tiempo invertido por el personal en tareas administrativas disminuye significativamente, permitiendo que los recursos humanos se enfoquen en actividades estratégicas que aportan mayor valor a la organización.
          </p>
          <h2 className="text-xl font-semibold mb-4">Beneficios clave:</h2>
          <ul className="space-y-3 mb-4">
            <li className="flex items-start gap-2">
              <CheckCircle className="text-green-600 mt-1" />
              <span>Reducción de hasta un 70% en costos de archivo y almacenamiento físico.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="text-green-600 mt-1" />
              <span>Disminución en el uso de papel y suministros de oficina.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="text-green-600 mt-1" />
              <span>Menor necesidad de espacio destinado a archivos en las instalaciones.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="text-green-600 mt-1" />
              <span>Agilización de procesos que reduce costos operativos.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="text-green-600 mt-1" />
              <span>Ahorro en auditorías y cumplimiento, gracias a la trazabilidad y acceso inmediato a la documentación requerida.</span>
            </li>
          </ul>
          <p className="text-lg text-gray-700">
            Con nuestro sistema, las empresas optimizan su presupuesto y logran un retorno de inversión medible en el corto plazo.
          </p>
        </CardContent>
      </Card>
    </section>
  )
} 