"use client"
import React from "react"
import { CheckCircle, ShieldCheck, AlertCircle, FileCheck } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function CumplimientoLegalPage() {
  return (
    <section className="max-w-5xl mx-auto py-10 px-4 space-y-10">

      {/* Banner introductorio */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-500 rounded-2xl p-8 text-white shadow-md">
        <h1 className="text-4xl font-bold mb-4">Cumplimiento Legal</h1>
        <p className="text-lg max-w-3xl">
          Asegura el cumplimiento con normativas vigentes y evita sanciones con una gestión documental completa, trazable y segura.
        </p>
      </div>

      {/* Card principal */}
      <Card className="backdrop-blur-sm bg-white/10 dark:bg-gray-900/30 shadow-lg border-0">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Garantiza la legalidad en cada proceso</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-gray-900 dark:text-white text-lg">
            Nuestra plataforma facilita el cumplimiento con leyes laborales, de seguridad, higiene, medioambiente y fiscales. Todos tus documentos estarán siempre actualizados y disponibles para auditorías o inspecciones.
          </p>
          <p className="text-gray-900 dark:text-white text-lg">
            Gracias a un sistema de trazabilidad, se registra cada acción sobre los documentos, permitiendo evidenciar ante terceros el cumplimiento de obligaciones. El almacenamiento seguro garantiza protección ante accesos no autorizados.
          </p>
        </CardContent>
      </Card>

      {/* Beneficios clave */}
      <Card className="backdrop-blur-sm bg-white/10 dark:bg-gray-900/30 shadow-lg border-0">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Beneficios clave</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {[
              "Cumplimiento permanente con leyes laborales, de seguridad e higiene, ambientales y fiscales.",
              "Notificaciones automáticas sobre documentos próximos a vencer.",
              "Historial detallado de cargas, modificaciones y revisiones.",
              "Acceso seguro y controlado para usuarios con permisos diferenciados.",
              "Evidencias digitales que respaldan auditorías y certificaciones."
            ].map((benefit, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle className="text-indigo-600 mt-1" />
                <span className="text-gray-900 dark:text-white">{benefit}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Cards de métricas */}
      <Card className="backdrop-blur-sm bg-white/10 dark:bg-gray-900/30 shadow-lg border-0">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Impacto en cumplimiento</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-xl p-6 text-center shadow">
            <ShieldCheck className="mx-auto text-indigo-700 w-10 h-10 mb-2" />
            <h3 className="text-2xl font-bold text-indigo-700">99.9%</h3>
            <p className="text-gray-900 dark:text-white">Disponibilidad de documentos ante auditorías</p>
          </div>
          <div className="rounded-xl p-6 text-center shadow">
            <AlertCircle className="mx-auto text-red-700 w-10 h-10 mb-2" />
            <h3 className="text-2xl font-bold text-red-700">0 sanciones</h3>
            <p className="text-gray-900 dark:text-white">en empresas con gestión documental actualizada</p>
          </div>
          <div className="rounded-xl p-6 text-center shadow">
            <FileCheck className="mx-auto text-green-700 w-10 h-10 mb-2" />
            <h3 className="text-2xl font-bold text-green-700">100%</h3>
            <p className="text-gray-900 dark:text-white">Trazabilidad de documentos</p>
          </div>
        </CardContent>
      </Card>

      {/* Llamada a la acción final */}
      <div className="rounded-2xl p-8 text-center shadow-lg backdrop-blur-sm bg-white/10 dark:bg-gray-900/30">
        <h2 className="text-2xl font-bold mb-2">¿Preparado para garantizar el cumplimiento legal?</h2>
        <p className="text-gray-900 dark:text-white mb-4">Asegura tu tranquilidad con un sistema que protege y certifica cada documento.</p>
        <button className="bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-indigo-700 transition">
          Comenzar ahora
        </button>
      </div>
    </section>
  )
}
