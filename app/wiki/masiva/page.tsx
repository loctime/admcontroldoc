"use client"
import React from "react"
import { Upload, Layers, Server, Shield } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function CargaMasivaPage() {
  return (
    <section className="max-w-6xl mx-auto py-10 px-4 space-y-10">

      {/* Banner introductorio */}
      <div className="bg-gradient-to-r from-teal-600 to-green-500 rounded-2xl p-8 text-white shadow-md text-center">
        <h1 className="text-4xl font-bold mb-4">Carga Masiva de Documentos</h1>
        <p className="text-lg max-w-3xl mx-auto">
          Optimiza tus procesos cargando cientos de documentos a la vez, con procesamiento eficiente y control de calidad integrado.
        </p>
      </div>

      {/* Descripción general */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Proceso de carga masiva unificado</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-gray-700">
          <p>
            El sistema permite a los usuarios seleccionar múltiples archivos desde sus dispositivos y cargarlos de forma simultánea, gestionando automáticamente el procesamiento y el almacenamiento en la nube.
          </p>
          <p>
            Esto facilita la actualización o incorporación masiva de documentos, reduciendo drásticamente los tiempos operativos y evitando errores manuales al procesar uno por uno.
          </p>
        </CardContent>
      </Card>

      {/* Gestión de colas */}
      <Card>
        <CardHeader className="flex items-center gap-3">
          <Server className="text-teal-600 w-8 h-8" />
          <CardTitle className="text-2xl font-bold">Manejo de colas y procesamiento paralelo</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-gray-700">
          <p>
            La plataforma utiliza un sistema de colas que organiza los archivos cargados y los procesa en paralelo cuando es posible, manteniendo un equilibrio entre velocidad y consumo de recursos.
          </p>
          <p>
            Este diseño asegura que, incluso con grandes volúmenes, la plataforma siga siendo ágil y confiable.
          </p>
        </CardContent>
      </Card>

      {/* Validación y control de errores */}
      <Card>
        <CardHeader className="flex items-center gap-3">
          <Shield className="text-green-600 w-8 h-8" />
          <CardTitle className="text-2xl font-bold">Validación y control de calidad</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-gray-700">
          <ul className="list-disc list-inside space-y-2">
            <li>Valida el formato, tamaño y seguridad de cada archivo antes de procesarlo.</li>
            <li>Identifica archivos corruptos o incompatibles y notifica al usuario.</li>
            <li>Implementa reintentos automáticos en caso de errores de red.</li>
            <li>Registra el estado de cada archivo cargado para seguimiento detallado.</li>
          </ul>
        </CardContent>
      </Card>

      {/* Beneficios clave */}
      <Card>
        <CardHeader className="flex items-center gap-3">
          <Layers className="text-teal-600 w-8 h-8" />
          <CardTitle className="text-2xl font-bold">Beneficios de la carga masiva</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-gray-700">
          <ul className="list-disc list-inside space-y-2">
            <li>Ahorra tiempo al eliminar la carga manual archivo por archivo.</li>
            <li>Mejora la productividad del equipo al permitir grandes actualizaciones en minutos.</li>
            <li>Reduce la posibilidad de errores humanos al automatizar el proceso.</li>
            <li>Ofrece una experiencia de usuario fluida, con indicadores de progreso en tiempo real.</li>
          </ul>
        </CardContent>
      </Card>

    </section>
  )
}
