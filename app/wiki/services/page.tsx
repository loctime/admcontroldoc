"use client"
import React from "react"
import { Upload, Cloud, FileText, Search, Layers, Eye, Shield, FileCheck2, BarChart, Settings2 } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ServiciosFuncionalesPage() {
  return (
    <section className="max-w-6xl mx-auto py-10 px-4 space-y-10">

      {/* Banner introductorio */}
      <div className="bg-gradient-to-r from-teal-600 to-green-500 rounded-2xl p-8 text-white shadow-md text-center">
        <h1 className="text-4xl font-bold mb-4">Servicios para Usuarios</h1>
        <p className="text-lg max-w-3xl mx-auto">
          Herramientas y funcionalidades que ofrecemos para simplificar, agilizar y asegurar la gestión de tus documentos en un solo lugar.
        </p>
      </div>

      {/* Cards de servicios funcionales */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        <Card className="backdrop-blur-sm bg-white/10 dark:bg-gray-900/30 shadow-lg border-0 hover:shadow-xl transition">
          <CardHeader className="flex items-center gap-3">
            <Upload className="text-teal-600 w-8 h-8" />
            <CardTitle className="text-xl font-bold">Subida masiva de documentos</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-900 dark:text-white">Carga múltiples archivos de manera simultánea para optimizar tu tiempo.</p>
          </CardContent>
        </Card>

        <Card className="backdrop-blur-sm bg-white/10 dark:bg-gray-900/30 shadow-lg border-0 hover:shadow-xl transition">
          <CardHeader className="flex items-center gap-3">
            <Cloud className="text-green-600 w-8 h-8" />
            <CardTitle className="text-xl font-bold">Almacenamiento gratuito</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-900 dark:text-white">Guarda tus documentos sin costo adicional en la nube con acceso seguro.</p>
          </CardContent>
        </Card>

        <Card className="backdrop-blur-sm bg-white/10 dark:bg-gray-900/30 shadow-lg border-0 hover:shadow-xl transition">
          <CardHeader className="flex items-center gap-3">
            <FileText className="text-blue-600 w-8 h-8" />
            <CardTitle className="text-xl font-bold">Conversión a PDF</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-900 dark:text-white">Convierte imágenes, Word, Excel y otros formatos a PDF automáticamente.</p>
          </CardContent>
        </Card>

        <Card className="backdrop-blur-sm bg-white/10 dark:bg-gray-900/30 shadow-lg border-0 hover:shadow-xl transition">
          <CardHeader className="flex items-center gap-3">
            <Search className="text-purple-600 w-8 h-8" />
            <CardTitle className="text-xl font-bold">Lectura de datos en documentos</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-900 dark:text-white">Extrae automáticamente información clave con OCR y análisis de texto.</p>
          </CardContent>
        </Card>

        <Card className="backdrop-blur-sm bg-white/10 dark:bg-gray-900/30 shadow-lg border-0 hover:shadow-xl transition">
          <CardHeader className="flex items-center gap-3">
            <Layers className="text-yellow-600 w-8 h-8" />
            <CardTitle className="text-xl font-bold">Control de versiones</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-900 dark:text-white">Historial completo de cambios para restaurar versiones anteriores.</p>
          </CardContent>
        </Card>

        <Card className="backdrop-blur-sm bg-white/10 dark:bg-gray-900/30 shadow-lg border-0 hover:shadow-xl transition">
          <CardHeader className="flex items-center gap-3">
            <Eye className="text-pink-600 w-8 h-8" />
            <CardTitle className="text-xl font-bold">Vista previa de archivos</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-900 dark:text-white">Visualiza documentos e imágenes sin necesidad de descargarlos.</p>
          </CardContent>
        </Card>

        <Card className="backdrop-blur-sm bg-white/10 dark:bg-gray-900/30 shadow-lg border-0 hover:shadow-xl transition">
          <CardHeader className="flex items-center gap-3">
            <Shield className="text-red-600 w-8 h-8" />
            <CardTitle className="text-xl font-bold">Control de accesos</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-900 dark:text-white">Define permisos personalizados para cada usuario y documento.</p>
          </CardContent>
        </Card>

        <Card className="backdrop-blur-sm bg-white/10 dark:bg-gray-900/30 shadow-lg border-0 hover:shadow-xl transition">
          <CardHeader className="flex items-center gap-3">
            <FileCheck2 className="text-indigo-600 w-8 h-8" />
            <CardTitle className="text-xl font-bold">Validación de documentos</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-900 dark:text-white">Aprobación y rechazo con trazabilidad de acciones y comentarios.</p>
          </CardContent>
        </Card>

        <Card className="backdrop-blur-sm bg-white/10 dark:bg-gray-900/30 shadow-lg border-0 hover:shadow-xl transition">
          <CardHeader className="flex items-center gap-3">
            <BarChart className="text-orange-600 w-8 h-8" />
            <CardTitle className="text-xl font-bold">Reportes personalizados</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-900 dark:text-white">Genera gráficos y estadísticas sobre estado y actividad de documentos.</p>
          </CardContent>
        </Card>

        <Card className="backdrop-blur-sm bg-white/10 dark:bg-gray-900/30 shadow-lg border-0 hover:shadow-xl transition">
          <CardHeader className="flex items-center gap-3">
            <Settings2 className="text-gray-700 w-8 h-8" />
            <CardTitle className="text-xl font-bold">Automatización de tareas</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-900 dark:text-white">Configura acciones automáticas para notificaciones, vencimientos o flujos de trabajo.</p>
          </CardContent>
        </Card>

      </div>

      {/* Llamada a la acción final */}
      <div className="rounded-2xl p-8 text-center shadow-lg backdrop-blur-sm bg-white/10 dark:bg-gray-900/30">
        <h2 className="text-2xl font-bold mb-2">¿Listo para aprovechar todos nuestros servicios?</h2>
        <p className="text-gray-900 dark:text-white mb-4">Empieza hoy mismo a gestionar tus documentos de forma más ágil, segura y profesional.</p>
        <button className="bg-teal-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-teal-700 transition">
          Solicitar demo gratuita
        </button>
      </div>

    </section>
  )
}
