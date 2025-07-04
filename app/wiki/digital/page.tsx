"use client"
import React from "react"
import { FileText, Search, Code, Eye } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function DigitalizacionPage() {
  return (
    <section className="max-w-6xl mx-auto py-10 px-4 space-y-10">

      {/* Banner introductorio */}
      <div className="bg-gradient-to-r from-indigo-600 to-cyan-500 rounded-2xl p-8 text-white shadow-md text-center">
        <h1 className="text-4xl font-bold mb-4">Digitalización y Procesamiento de Documentos</h1>
        <p className="text-lg max-w-3xl mx-auto">
          Descubre el sistema técnico detrás de la digitalización inteligente de documentos en ControlDoc.
        </p>
      </div>

      {/* Descripción general */}
      <Card className="backdrop-blur-sm bg-white/10 dark:bg-gray-900/30 shadow-lg border-0">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Descripción general del sistema</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-gray-900 dark:text-white">
          <p>
            El sistema de procesamiento de documentos es el componente técnico principal responsable de analizar, procesar y mostrar documentos dentro de la plataforma. Maneja OCR, conversión de formatos, extracción de contenido y visualización interactiva con capacidades de búsqueda.
          </p>
          <p>
            Este sistema procesa archivos cargados, extrae contenido de texto utilizando tecnología OCR y presenta documentos en un visor interactivo con búsqueda y resaltado en tiempo real.
          </p>
        </CardContent>
      </Card>

      {/* Integración OCR */}
      <Card className="backdrop-blur-sm bg-white/10 dark:bg-gray-900/30 shadow-lg border-0">
        <CardHeader className="flex items-center gap-3">
          <Code className="text-indigo-600 w-8 h-8" />
          <CardTitle className="text-2xl font-bold">Integración de OCR y extracción de texto</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-gray-900 dark:text-white">
          <p>
            Utilizamos <strong>Tesseract.js</strong> para el reconocimiento óptico de caracteres (OCR) en múltiples tipos de documentos.
          </p>
          <p className="font-semibold">Flujo de procesamiento de OCR:</p>
          <ul className="list-decimal list-inside space-y-2">
            <li>Entrada de imagen: Procesamiento directo de archivos de imagen.</li>
            <li>Conversión de PDF: Las páginas de PDF se convierten a imágenes mediante <code>pdf-poppler</code>.</li>
            <li>Reconocimiento de texto: Tesseract extrae el texto junto a coordenadas precisas (bounding boxes).</li>
            <li>Mapeo de palabras: Cada palabra se asocia a su posición para resaltar y búsqueda precisa.</li>
          </ul>
        </CardContent>
      </Card>

      {/* Sistema de búsqueda y resaltado */}
      <Card className="backdrop-blur-sm bg-white/10 dark:bg-gray-900/30 shadow-lg border-0">
        <CardHeader className="flex items-center gap-3">
          <Search className="text-cyan-600 w-8 h-8" />
          <CardTitle className="text-2xl font-bold">Sistema de búsqueda y resaltado</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-gray-900 dark:text-white">
          <p>El sistema permite realizar búsquedas en tiempo real dentro de documentos procesados con retroalimentación visual inmediata.</p>
          <p className="font-semibold">Proceso de normalización de texto:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Convierte a minúsculas.</li>
            <li>Elimina signos diacríticos (acentos).</li>
            <li>Filtra solo caracteres alfanuméricos.</li>
            <li>Permite coincidencia flexible entre idiomas.</li>
          </ul>
          <p className="font-semibold">Renderizado del resaltado:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Mapea coordenadas de OCR a escala del lienzo.</li>
            <li>Dibuja subrayados azules en términos coincidentes.</li>
            <li>Proporciona recuento de coincidencias encontradas.</li>
            <li>Maneja diferentes tamaños de lienzo y escalado de coordenadas.</li>
          </ul>
        </CardContent>
      </Card>

      {/* Vista previa técnica */}
      <Card className="backdrop-blur-sm bg-white/10 dark:bg-gray-900/30 shadow-lg border-0">
        <CardHeader className="flex items-center gap-3">
          <Eye className="text-purple-600 w-8 h-8" />
          <CardTitle className="text-2xl font-bold">Componentes de visualización</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-gray-900 dark:text-white">
          <p>
            Los documentos procesados se muestran en un visor interactivo con soporte de búsqueda y resaltado: <code>TextViewerCanvas</code>. Este componente permite explorar documentos de manera ágil y precisa.
          </p>
          <p>
            Para más detalles técnicos, consulta la documentación de <strong>TextViewerCanvas y motor OCR</strong> o la <strong>API de análisis de archivos</strong>.
          </p>
        </CardContent>
      </Card>

    </section>
  )
}
