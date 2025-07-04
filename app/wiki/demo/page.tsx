"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Play, Calendar, Users, Building2, CheckCircle, Clock, Phone, Mail, MapPin, Star } from "lucide-react"

const beneficiosDemo = [
  "Ver la digitalización automática en acción",
  "Probar el sistema de búsqueda inteligente",
  "Conocer las alertas de vencimiento",
  "Explorar los reportes automáticos",
  "Entender el flujo de trabajo completo",
]

const tiposEmpresa = [
  "Transporte y Logística",
  "Construcción",
  "Servicios Profesionales",
  "Comercio",
  "Manufactura",
  "Salud",
  "Educación",
  "Otro",
]

const tamañosEmpresa = ["1-10 empleados", "11-50 empleados", "51-100 empleados", "101-500 empleados", "500+ empleados"]

export default function DemoPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    empresa: "",
    cargo: "",
    tipoEmpresa: "",
    tamañoEmpresa: "",
    mensaje: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simular envío
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto text-center space-y-8 py-12">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle className="w-10 h-10 text-green-600" />
        </div>
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-green-600">¡Demo Solicitada con Éxito!</h1>
          <p className="text-lg text-gray-600">
            Gracias por tu interés. Nuestro equipo se pondrá en contacto contigo en las próximas 2 horas para coordinar
            tu demo personalizada.
          </p>
        </div>

        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="pt-6">
            <h3 className="font-semibold mb-4">Mientras tanto, puedes:</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-blue-600" />
                <span>Revisar nuestros casos de éxito</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-blue-600" />
                <span>Explorar las características del sistema</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-blue-600" />
                <span>Calcular tu ROI potencial</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={() => setIsSubmitted(false)}>Solicitar Otra Demo</Button>
          <Button variant="outline">Volver al Inicio</Button>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <Badge className="mb-4 bg-blue-600 hover:bg-blue-700">
          <Play className="w-4 h-4 mr-1" />
          Demo Personalizada
        </Badge>
        <h1 className="text-4xl font-bold tracking-tight">Solicita tu Demo Gratuita</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Descubre cómo nuestro sistema puede transformar la gestión documental de tu empresa. Demo personalizada de 30
          minutos sin compromiso.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Formulario */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-blue-600" />
              <span>Programa tu Demo</span>
            </CardTitle>
            <CardDescription>
              Completa el formulario y nos pondremos en contacto contigo en menos de 2 horas
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="nombre">Nombre Completo *</Label>
                  <Input
                    id="nombre"
                    value={formData.nombre}
                    onChange={(e) => handleInputChange("nombre", e.target.value)}
                    placeholder="Tu nombre completo"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Corporativo *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="tu@empresa.com"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="telefono">Teléfono *</Label>
                  <Input
                    id="telefono"
                    value={formData.telefono}
                    onChange={(e) => handleInputChange("telefono", e.target.value)}
                    placeholder="+593 99 123 4567"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cargo">Cargo</Label>
                  <Input
                    id="cargo"
                    value={formData.cargo}
                    onChange={(e) => handleInputChange("cargo", e.target.value)}
                    placeholder="Gerente General, CEO, etc."
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="empresa">Nombre de la Empresa *</Label>
                <Input
                  id="empresa"
                  value={formData.empresa}
                  onChange={(e) => handleInputChange("empresa", e.target.value)}
                  placeholder="Nombre de tu empresa"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Tipo de Empresa</Label>
                  <Select onValueChange={(value) => handleInputChange("tipoEmpresa", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona tu industria" />
                    </SelectTrigger>
                    <SelectContent>
                      {tiposEmpresa.map((tipo) => (
                        <SelectItem key={tipo} value={tipo}>
                          {tipo}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Tamaño de Empresa</Label>
                  <Select onValueChange={(value) => handleInputChange("tamañoEmpresa", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Número de empleados" />
                    </SelectTrigger>
                    <SelectContent>
                      {tamañosEmpresa.map((tamaño) => (
                        <SelectItem key={tamaño} value={tamaño}>
                          {tamaño}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="mensaje">Mensaje (Opcional)</Label>
                <Textarea
                  id="mensaje"
                  value={formData.mensaje}
                  onChange={(e) => handleInputChange("mensaje", e.target.value)}
                  placeholder="Cuéntanos sobre tus necesidades específicas o preguntas..."
                  rows={4}
                />
              </div>

              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" size="lg" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Clock className="mr-2 h-4 w-4 animate-spin" />
                    Enviando Solicitud...
                  </>
                ) : (
                  <>
                    <Play className="mr-2 h-4 w-4" />
                    Solicitar Demo Gratuita
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Información de la Demo */}
        <div className="space-y-6">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-yellow-500" />
                <span>¿Qué incluye la Demo?</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {beneficiosDemo.map((beneficio, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{beneficio}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-blue-800">Detalles de la Demo</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="font-medium">Duración: 30 minutos</p>
                  <p className="text-sm text-blue-600">Tiempo perfecto para conocer el sistema</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="font-medium">Personalizada para tu empresa</p>
                  <p className="text-sm text-blue-600">Adaptada a tu industria y necesidades</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Building2 className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="font-medium">Sin compromiso</p>
                  <p className="text-sm text-blue-600">Conoce el sistema sin presión de ventas</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-green-50 border-green-200">
            <CardHeader>
              <CardTitle className="text-green-800">Contacto Directo</CardTitle>
              <CardDescription className="text-green-600">¿Prefieres hablar directamente? Contáctanos</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-green-600" />
                <span>+593 99 123 4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-green-600" />
                <span>ventas@documanager.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-green-600" />
                <span>Quito, Ecuador</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
