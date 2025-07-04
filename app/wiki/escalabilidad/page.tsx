"use client"
import React from "react"
import { CheckCircle, TrendingUp, Users, Building } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function EscalabilidadPage() {
  return (
    <section className="max-w-5xl mx-auto py-10 px-4 space-y-10">

      {/* Banner introductorio */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-500 rounded-2xl p-8 text-white shadow-md">
        <h1 className="text-4xl font-bold mb-4">Escalabilidad</h1>
        <p className="text-lg max-w-3xl">
          Acompaña el crecimiento de tu empresa con una plataforma documental que se adapta a cualquier tamaño y volumen, manteniendo eficiencia y control.
        </p>
      </div>

      {/* Card principal */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Diseñada para crecer contigo</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-gray-700 text-lg">
            Nuestra plataforma documental permite empezar con pocos usuarios y documentos, y escalar de forma gradual según tus necesidades, sin necesidad de cambios drásticos en infraestructura ni en tus procesos de trabajo.
          </p>
          <p className="text-gray-700 text-lg">
            Mantén la eficiencia y el control mientras tu organización se expande, con una solución flexible que soporta altos volúmenes de información y un rendimiento estable.
          </p>
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
              "Capacidad de agregar empresas, sucursales, usuarios y documentos sin límites.",
              "Arquitectura flexible que soporta altos volúmenes de información.",
              "Integración sencilla con otras herramientas o sistemas que utilice tu empresa.",
              "Actualizaciones y mejoras continuas que permiten acompañar tu evolución.",
              "Rendimiento estable, sin importar la cantidad de datos procesados."
            ].map((benefit, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle className="text-purple-600 mt-1" />
                <span className="text-gray-700">{benefit}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Cards de métricas */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Escala sin límites</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-xl p-6 text-center shadow">
            <TrendingUp className="mx-auto text-purple-700 w-10 h-10 mb-2" />
            <h3 className="text-2xl font-bold text-purple-700">+1M</h3>
            <p className="text-gray-700">Documentos gestionados simultáneamente</p>
          </div>
          <div className="bg-gradient-to-br from-pink-100 to-pink-50 rounded-xl p-6 text-center shadow">
            <Users className="mx-auto text-pink-700 w-10 h-10 mb-2" />
            <h3 className="text-2xl font-bold text-pink-700">+50K</h3>
            <p className="text-gray-700">Usuarios activos sin degradación de rendimiento</p>
          </div>
          <div className="bg-gradient-to-br from-indigo-100 to-indigo-50 rounded-xl p-6 text-center shadow">
            <Building className="mx-auto text-indigo-700 w-10 h-10 mb-2" />
            <h3 className="text-2xl font-bold text-indigo-700">100%</h3>
            <p className="text-gray-700">Compatibilidad con empresas en expansión</p>
          </div>
        </CardContent>
      </Card>

      {/* Llamada a la acción final */}
      <div className="bg-gray-100 rounded-2xl p-8 text-center shadow">
        <h2 className="text-2xl font-bold mb-2">¿Listo para escalar tu negocio?</h2>
        <p className="text-gray-700 mb-4">Descubre cómo nuestra plataforma puede crecer junto a tu empresa sin límites.</p>
        <button className="bg-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-purple-700 transition">
          Solicitar asesoramiento
        </button>
      </div>
    </section>
  )
}
