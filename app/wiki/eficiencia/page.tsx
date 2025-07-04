"use client"
import React from "react"
import { CheckCircle, Clock, BarChart, Layers } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function EficienciaOperativaPage() {
  return (
    <section className="max-w-5xl mx-auto py-10 px-4 space-y-10">

      {/* Banner introductorio */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-8 text-white shadow-md">
        <h1 className="text-4xl font-bold mb-4">Eficiencia Operativa</h1>
        <p className="text-lg max-w-3xl">
          Optimiza la gestión documental y acelera tus procesos clave con una plataforma que centraliza información, mejora la coordinación y reduce tiempos operativos.
        </p>
      </div>

      {/* Card principal */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Optimización Documental</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-gray-700 text-lg">
            Nuestra solución permite que los documentos requeridos estén disponibles en tiempo real, asegurando un flujo de trabajo ágil. Facilita la toma de decisiones, evita retrasos y reduce el riesgo de errores humanos.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg shadow-sm">
              <Clock className="text-blue-600 w-8 h-8" />
              <div>
                <h3 className="font-semibold text-lg">70% menos tiempo</h3>
                <p className="text-gray-600">en búsqueda de documentos gracias a la centralización.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg shadow-sm">
              <Layers className="text-green-600 w-8 h-8" />
              <div>
                <h3 className="font-semibold text-lg">100% digitalizado</h3>
                <p className="text-gray-600">para un flujo de trabajo sin papel ni retrasos físicos.</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Beneficios clave */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Beneficios clave</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {[
              "Acceso inmediato a documentos desde cualquier dispositivo.",
              "Automatización de tareas repetitivas que liberan tiempo del personal.",
              "Mayor control de procesos mediante seguimiento en tiempo real.",
              "Reducción de errores humanos en la gestión documental.",
              "Mejor comunicación entre áreas, agilizando tareas."
            ].map((benefit, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle className="text-blue-600 mt-1" />
                <span className="text-gray-700">{benefit}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Card de métricas */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Impacto en tus operaciones</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-green-100 to-green-50 rounded-xl p-6 text-center shadow">
            <h3 className="text-4xl font-bold text-green-700">50%</h3>
            <p className="text-gray-700">Reducción de costos operativos</p>
          </div>
          <div className="bg-gradient-to-br from-yellow-100 to-yellow-50 rounded-xl p-6 text-center shadow">
            <h3 className="text-4xl font-bold text-yellow-700">3x</h3>
            <p className="text-gray-700">Más rápida la aprobación de documentos</p>
          </div>
          <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl p-6 text-center shadow">
            <h3 className="text-4xl font-bold text-blue-700">90%</h3>
            <p className="text-gray-700">Disminución en extravío de archivos</p>
          </div>
        </CardContent>
      </Card>

      {/* Llamada a la acción final */}
      <div className="bg-gray-100 rounded-2xl p-8 text-center shadow">
        <h2 className="text-2xl font-bold mb-2">¿Listo para mejorar la eficiencia?</h2>
        <p className="text-gray-700 mb-4">Empieza hoy a optimizar tu gestión documental y lleva tu empresa al siguiente nivel.</p>
        <button className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition">
          Solicitar demo gratuita
        </button>
      </div>
    </section>
  )
}
