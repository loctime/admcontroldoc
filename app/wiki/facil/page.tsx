"use client"
import React from "react"
import { MousePointerClick, Smile, Speedometer, LayoutDashboard } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function FacilidadDeUsoPage() {
  return (
    <section className="max-w-6xl mx-auto py-10 px-4 space-y-10">

      {/* Banner introductorio */}
      <div className="bg-gradient-to-r from-indigo-600 to-cyan-500 rounded-2xl p-8 text-white shadow-md text-center">
        <h1 className="text-4xl font-bold mb-4">Facilidad de Uso</h1>
        <p className="text-lg max-w-3xl mx-auto">
          Nuestra plataforma está diseñada para que cualquier usuario pueda manejarla de forma rápida y sencilla, sin necesidad de conocimientos técnicos avanzados.
        </p>
      </div>

      {/* Card principal */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Simple, intuitiva y rápida</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-gray-700 text-lg">
            Gracias a una interfaz limpia y clara, los usuarios encuentran de inmediato lo que necesitan. Los procesos están optimizados para requerir pocos clics, permitiendo completar tareas comunes de forma ágil.
          </p>
          <p className="text-gray-700 text-lg">
            La navegación es amigable, con menús intuitivos y accesos directos a funciones clave, reduciendo tiempos de capacitación y aumentando la productividad desde el primer día.
          </p>
        </CardContent>
      </Card>

      {/* Beneficios clave */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Beneficios de nuestra experiencia de uso</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-indigo-100 to-indigo-50 rounded-xl p-6 text-center shadow">
            <MousePointerClick className="mx-auto text-indigo-700 w-10 h-10 mb-2" />
            <h3 className="text-xl font-bold text-indigo-700">Interfaz intuitiva</h3>
            <p className="text-gray-700">Diseñada para que cualquier persona pueda usarla sin curva de aprendizaje compleja.</p>
          </div>
          <div className="bg-gradient-to-br from-cyan-100 to-cyan-50 rounded-xl p-6 text-center shadow">
            <Smile className="mx-auto text-cyan-700 w-10 h-10 mb-2" />
            <h3 className="text-xl font-bold text-cyan-700">Experiencia agradable</h3>
            <p className="text-gray-700">Colores, tipografías y elementos cuidadosamente elegidos para que trabajar sea cómodo y claro.</p>
          </div>
          <div className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-xl p-6 text-center shadow">
            <Speedometer className="mx-auto text-purple-700 w-10 h-10 mb-2" />
            <h3 className="text-xl font-bold text-purple-700">Velocidad de uso</h3>
            <p className="text-gray-700">Procesos optimizados para completar tareas en menos tiempo y con menos pasos.</p>
          </div>
        </CardContent>
      </Card>

      {/* Card adicional */}
      <Card>
        <CardHeader className="flex items-center gap-3">
          <LayoutDashboard className="text-indigo-600 w-8 h-8" />
          <CardTitle className="text-2xl font-bold">Dashboard amigable</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700">
            Visualiza información clave desde un panel centralizado, con accesos directos a documentos, reportes y tareas pendientes, todo en un mismo lugar.
          </p>
        </CardContent>
      </Card>

      {/* Llamada a la acción final */}
      <div className="bg-gray-100 rounded-2xl p-8 text-center shadow">
        <h2 className="text-2xl font-bold mb-2">Descubre la facilidad de nuestra plataforma</h2>
        <p className="text-gray-700 mb-4">Empieza a usarla hoy mismo y mejora tu productividad con un sistema que cualquiera puede dominar rápidamente.</p>
        <button className="bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-indigo-700 transition">
          Probar gratis ahora
        </button>
      </div>

    </section>
  )
}
