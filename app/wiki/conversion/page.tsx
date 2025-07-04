"use client"
import React from "react"
import { FileText, ArrowRightLeft, Code, Settings } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ConversionPage() {
  return (
    <section className="max-w-6xl mx-auto py-10 px-4 space-y-10">

      {/* Banner introductorio */}
      <div className="bg-gradient-to-r from-yellow-600 to-orange-500 rounded-2xl p-8 text-white shadow-md text-center">
        <h1 className="text-4xl font-bold mb-4">Conversión de Archivos a PDF</h1>
        <p className="text-lg max-w-3xl mx-auto">
          Nuestro sistema procesa documentos de múltiples formatos y los convierte automáticamente a PDF para un manejo unificado y seguro.
        </p>
      </div>

      {/* Descripción general */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Flujo de conversión unificado</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-gray-700">
          <p>
            La plataforma permite convertir imágenes, archivos Word, Excel y otros formatos comunes a PDF para estandarizar la gestión documental y mejorar la compatibilidad entre dispositivos y sistemas.
          </p>
          <p>
            El flujo detecta automáticamente el tipo de archivo y aplica el proceso de conversión correspondiente de manera transparente para el usuario.
          </p>
        </CardContent>
      </Card>

      {/* Tecnologías clave */}
      <Card>
        <CardHeader className="flex items-center gap-3">
          <Code className="text-yellow-600 w-8 h-8" />
          <CardTitle className="text-2xl font-bold">Tecnologías utilizadas</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-gray-700">
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>pdf-lib:</strong> Para generar nuevos PDFs, combinar múltiples documentos y aplicar procesamiento en el lado del cliente o backend.
            </li>
            <li>
              <strong>pdf-poppler:</strong> Para convertir archivos PDF en imágenes de alta calidad durante la integración con OCR.
            </li>
            <li>
              <strong>mammoth.js:</strong> Para procesar documentos de Word (.doc, .docx) convirtiendo su contenido a HTML y luego a PDF.
            </li>
            <li>
              <strong>xlsx:</strong> Para extraer y renderizar datos de hojas de cálculo Excel antes de convertirlas a PDF.
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Proceso técnico */}
      <Card>
        <CardHeader className="flex items-center gap-3">
          <Settings className="text-orange-600 w-8 h-8" />
          <CardTitle className="text-2xl font-bold">Flujo técnico de conversión</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-gray-700">
          <p className="font-semibold">Etapas del proceso:</p>
          <ul className="list-decimal list-inside space-y-2">
            <li>Recepción del archivo cargado (imagen, Word, Excel, PDF, etc.).</li>
            <li>Detección del tipo de archivo mediante extensión y cabecera.</li>
            <li>Proceso de conversión específico según el formato detectado:</li>
            <ul className="list-disc list-inside ml-6 space-y-2">
              <li>Imágenes: Se insertan en un canvas PDF con pdf-lib.</li>
              <li>PDFs: Se procesan o combinan directamente.</li>
              <li>Word/Excel: Se transforman a HTML o imagen, luego se exportan a PDF.</li>
            </ul>
            <li>Generación del archivo PDF final, optimizado para almacenamiento y vista previa.</li>
            <li>Subida al almacenamiento seguro en Backblaze B2 o el sistema que utilices.</li>
          </ul>
        </CardContent>
      </Card>

      {/* Beneficios clave */}
      <Card>
        <CardHeader className="flex items-center gap-3">
          <ArrowRightLeft className="text-yellow-600 w-8 h-8" />
          <CardTitle className="text-2xl font-bold">Beneficios de la conversión automática</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-gray-700">
          <ul className="list-disc list-inside space-y-2">
            <li>Homogeneiza la documentación en un formato PDF estándar.</li>
            <li>Facilita la visualización, el almacenamiento y la integración con OCR.</li>
            <li>Permite compartir documentos fácilmente con cualquier usuario o sistema.</li>
            <li>Mejora la seguridad al aplicar restricciones y cifrado sobre PDFs generados.</li>
          </ul>
        </CardContent>
      </Card>

    </section>
  )
}
