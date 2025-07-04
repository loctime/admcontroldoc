"use client"
import React from "react"
import { ShieldCheck, Clock, TrendingUp, Layers, FileCheck, BarChart, DatabaseBackup } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ServiciosPage() {
  return (
    <section className="max-w-6xl mx-auto py-10 px-4 space-y-10">

      {/* Banner introductorio */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-500 rounded-2xl p-8 text-white shadow-md text-center">
        <h1 className="text-4xl font-bold mb-4">Beneficios para tu empresa</h1>
        <p className="text-lg max-w-3xl mx-auto">
          Ofrecemos un conjunto integral de soluciones para la gestión documental, cumplimiento legal, seguridad y escalabilidad, adaptadas a las necesidades de tu empresa.
        </p>
      </div>

      {/* Cards de servicios */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        <Card className="shadow hover:shadow-lg transition">
          <CardHeader className="flex items-center gap-3">
            <ShieldCheck className="text-blue-600 w-8 h-8" />
            <CardTitle className="text-xl font-bold">Cumplimiento Legal</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">Garantiza el cumplimiento normativo con documentos actualizados, trazables y listos para auditorías.</p>
          </CardContent>
        </Card>

        <Card className="shadow hover:shadow-lg transition">
          <CardHeader className="flex items-center gap-3">
            <Clock className="text-emerald-600 w-8 h-8" />
            <CardTitle className="text-xl font-bold">Eficiencia Operativa</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">Optimiza procesos reduciendo tiempos, eliminando errores y mejorando la coordinación entre áreas.</p>
          </CardContent>
        </Card>

        <Card className="shadow hover:shadow-lg transition">
          <CardHeader className="flex items-center gap-3">
            <TrendingUp className="text-purple-600 w-8 h-8" />
            <CardTitle className="text-xl font-bold">Escalabilidad</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">Acompaña el crecimiento de tu empresa sin límites, manteniendo un rendimiento estable y seguro.</p>
          </CardContent>
        </Card>

        <Card className="shadow hover:shadow-lg transition">
          <CardHeader className="flex items-center gap-3">
            <Layers className="text-orange-600 w-8 h-8" />
            <CardTitle className="text-xl font-bold">Control de Versiones</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">Historial completo de modificaciones con posibilidad de restaurar versiones anteriores.</p>
          </CardContent>
        </Card>

        <Card className="shadow hover:shadow-lg transition">
          <CardHeader className="flex items-center gap-3">
            <FileCheck className="text-green-600 w-8 h-8" />
            <CardTitle className="text-xl font-bold">Auditorías y Evidencias</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">Logs y registros para demostrar cumplimiento y soportar procesos de certificación.</p>
          </CardContent>
        </Card>

        <Card className="shadow hover:shadow-lg transition">
          <CardHeader className="flex items-center gap-3">
            <BarChart className="text-yellow-600 w-8 h-8" />
            <CardTitle className="text-xl font-bold">Reportes y Estadísticas</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">Indicadores clave y gráficos para un control detallado del estado documental.</p>
          </CardContent>
        </Card>

        <Card className="shadow hover:shadow-lg transition">
          <CardHeader className="flex items-center gap-3">
            <DatabaseBackup className="text-cyan-600 w-8 h-8" />
            <CardTitle className="text-xl font-bold">Seguridad y Backups</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">Backups automáticos y almacenamiento seguro para proteger tu información.</p>
          </CardContent>
        </Card>

      </div>

      {/* Llamada a la acción final */}
      <div className="bg-gray-100 rounded-2xl p-8 text-center shadow">
        <h2 className="text-2xl font-bold mb-2">¿Quieres saber más sobre nuestros servicios?</h2>
        <p className="text-gray-700 mb-4">Contáctanos para recibir asesoramiento personalizado y descubre cómo podemos ayudarte a mejorar la gestión documental de tu empresa.</p>
        <button className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition">
          Solicitar información
        </button>
      </div>

    </section>
  )
}
