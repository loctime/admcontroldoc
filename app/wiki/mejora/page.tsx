"use client"
import React from "react"
import { Image, Wrench, Magic, Layers } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function MejoraPage() {
  return (
    <section className="max-w-6xl mx-auto py-10 px-4 space-y-10">

      {/* Banner introductorio */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-500 rounded-2xl p-8 text-white shadow-md text-center">
        <h1 className="text-4xl font-bold mb-4">Mejora Automática de Imágenes</h1>
        <p className="text-lg max-w-3xl mx-auto">
          Nuestro sistema optimiza automáticamente imágenes de documentos para mejorar su calidad, legibilidad y precisión en el procesamiento OCR.
        </p>
      </div>

      {/* Descripción general */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Optimización inteligente de imágenes</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-gray-700">
          <p>
            Cada imagen cargada en la plataforma pasa por un proceso de mejora automático para optimizar su contraste, brillo, nitidez y eliminar imperfecciones que puedan dificultar la lectura por parte del usuario o el motor OCR.
          </p>
          <p>
            Esto garantiza que incluso fotos tomadas con teléfonos móviles en condiciones no ideales se conviertan en documentos claros y profesionales.
          </p>
        </CardContent>
      </Card>

      {/* Tecnologías utilizadas */}
      <Card>
        <CardHeader className="flex items-center gap-3">
          <Wrench className="text-purple-600 w-8 h-8" />
          <CardTitle className="text-2xl font-bold">Tecnologías y algoritmos</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-gray-700">
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>sharp:</strong> Biblioteca de procesamiento de imágenes de alto rendimiento utilizada para rotación, escalado y ajuste de calidad.
            </li>
            <li>
              <strong>Algoritmos de contraste:</strong> Mejora de visibilidad de texto mediante ecualización adaptativa del histograma.
            </li>
            <li>
              <strong>Reducción de ruido:</strong> Eliminación de puntos o manchas que aparecen en capturas desde cámara.
            </li>
            <li>
              <strong>Normalización de color:</strong> Ajuste de brillo y balance de blancos para obtener un fondo uniforme.
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Flujo de procesamiento */}
      <Card>
        <CardHeader className="flex items-center gap-3">
          <Layers className="text-pink-600 w-8 h-8" />
          <CardTitle className="text-2xl font-bold">Flujo técnico de mejora</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-gray-700">
          <p className="font-semibold">Etapas del proceso:</p>
          <ul className="list-decimal list-inside space-y-2">
            <li>Recepción de la imagen cargada por el usuario.</li>
            <li>Detección de orientación y rotación automática para alinear el documento.</li>
            <li>Ajuste de contraste y brillo para mejorar la legibilidad del texto.</li>
            <li>Reducción de ruido y normalización del fondo para eliminar sombras o manchas.</li>
            <li>Exportación de la imagen optimizada en alta calidad, lista para OCR o almacenamiento.</li>
          </ul>
        </CardContent>
      </Card>

      {/* Beneficios clave */}
      <Card>
        <CardHeader className="flex items-center gap-3">
          <Magic className="text-purple-600 w-8 h-8" />
          <CardTitle className="text-2xl font-bold">Beneficios de la mejora automática</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-gray-700">
          <ul className="list-disc list-inside space-y-2">
            <li>Facilita el reconocimiento OCR aumentando la precisión de lectura.</li>
            <li>Mejora la calidad visual de los documentos guardados en la plataforma.</li>
            <li>Evita rechazos de documentos por baja calidad de imagen.</li>
            <li>Agiliza procesos al reducir necesidad de re-capturas o correcciones manuales.</li>
          </ul>
        </CardContent>
      </Card>

    </section>
  )
}
