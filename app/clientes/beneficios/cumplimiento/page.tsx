"use client"
import React from "react"
import { CheckCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function CumplimientoLegalPage() {
  return (
    <section className="max-w-3xl mx-auto py-10 px-4">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Cumplimiento Legal</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-gray-700 mb-6">
            Nuestra plataforma documental facilita el cumplimiento de normativas vigentes, garantizando que tu empresa siempre cuente con la documentación actualizada y accesible ante auditorías o requerimientos legales.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Gracias a un sistema que registra cada acción sobre los documentos, se asegura la trazabilidad completa, evitando sanciones por documentos vencidos, incompletos o extraviados. Además, el almacenamiento seguro y controlado protege la información sensible de accesos no autorizados.
          </p>
          <h2 className="text-xl font-semibold mb-4">Beneficios clave:</h2>
          <ul className="space-y-3 mb-4">
            <li className="flex items-start gap-2">
              <CheckCircle className="text-blue-600 mt-1" />
              <span>Cumplimiento permanente con leyes laborales, de seguridad e higiene, ambientales y fiscales.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="text-blue-600 mt-1" />
              <span>Notificaciones automáticas sobre documentos próximos a vencer.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="text-blue-600 mt-1" />
              <span>Historial detallado de cargas, modificaciones y revisiones.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="text-blue-600 mt-1" />
              <span>Acceso seguro y controlado para usuarios con permisos diferenciados.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="text-blue-600 mt-1" />
              <span>Evidencias digitales que respaldan auditorías y procesos de certificación.</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </section>
  )
} 