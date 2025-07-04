"use client"
import React from "react"
import { Shield, Database, Cloud, Lock } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function SeguridadYBackupsPage() {
  return (
    <section className="max-w-5xl mx-auto py-10 px-4 space-y-10">

      {/* Banner introductorio */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-500 rounded-2xl p-8 text-white shadow-md">
        <h1 className="text-4xl font-bold mb-4">Seguridad y Backups</h1>
        <p className="text-lg max-w-3xl">
          Protege tus documentos con backups automáticos, almacenamiento seguro y control total sobre los accesos. Mantén tu información disponible, íntegra y a salvo.
        </p>
      </div>

      {/* Card principal */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Protección completa de tu documentación</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-gray-700 text-lg">
            Nuestra plataforma asegura la disponibilidad y seguridad de tus documentos mediante backups automáticos en la nube y almacenamiento cifrado, evitando la pérdida de información y garantizando la continuidad operativa ante cualquier eventualidad.
          </p>
          <p className="text-gray-700 text-lg">
            Los registros de acceso y las copias de seguridad permiten una rápida recuperación en caso de errores o eliminación accidental, reduciendo al mínimo los riesgos y tiempos de inactividad.
          </p>
        </CardContent>
      </Card>

      {/* Cards de métricas */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Seguridad en números</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-green-100 to-green-50 rounded-xl p-6 text-center shadow">
            <Shield className="mx-auto text-green-700 w-10 h-10 mb-2" />
            <h3 className="text-2xl font-bold text-green-700">99.99%</h3>
            <p className="text-gray-700">Disponibilidad de los archivos</p>
          </div>
          <div className="bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-xl p-6 text-center shadow">
            <Database className="mx-auto text-emerald-700 w-10 h-10 mb-2" />
            <h3 className="text-2xl font-bold text-emerald-700">Backups diarios</h3>
            <p className="text-gray-700">Copias automáticas para restauración inmediata</p>
          </div>
          <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl p-6 text-center shadow">
            <Lock className="mx-auto text-blue-700 w-10 h-10 mb-2" />
            <h3 className="text-2xl font-bold text-blue-700">Cifrado AES-256</h3>
            <p className="text-gray-700">Seguridad avanzada en cada documento</p>
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
              "Backups automáticos programados para garantizar la continuidad operativa.",
              "Recuperación rápida ante eliminación accidental o errores de usuario.",
              "Almacenamiento cifrado con estándares de seguridad de nivel empresarial.",
              "Monitoreo constante de accesos y registros de actividad.",
              "Protección contra pérdida de datos por fallos de hardware o software."
            ].map((benefit, i) => (
              <li key={i} className="flex items-start gap-3">
                <Cloud className="text-green-600 mt-1" />
                <span className="text-gray-700">{benefit}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Llamada a la acción final */}
      <div className="bg-gray-100 rounded-2xl p-8 text-center shadow">
        <h2 className="text-2xl font-bold mb-2">¿Listo para proteger tu información?</h2>
        <p className="text-gray-700 mb-4">Solicita más información sobre cómo mantener tus archivos seguros y disponibles en todo momento.</p>
        <button className="bg-green-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-green-700 transition">
          Contactar equipo de ventas
        </button>
      </div>
    </section>
  )
}
