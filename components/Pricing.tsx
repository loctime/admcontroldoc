"use client"

import { useState } from "react"
import { Check, Plus, Minus } from "lucide-react"

export default function Pricing() {
  const [selectedAddons, setSelectedAddons] = useState<string[]>([])

  const basePlan = {
    name: "Plan Básico",
    price: 29,
    features: ["5 Proyectos", "10GB Almacenamiento", "Soporte Email", "SSL Incluido", "Dashboard Básico"],
  }

  const addons = [
    { id: "pdf-converter", name: "Convertir PDF Automático", description: "Conversión automática de documentos a PDF", price: 15 },
    { id: "auto-backup", name: "Backup Automático", description: "Respaldo automático diario de tus datos", price: 12 },
    { id: "pdf-reader", name: "Lectura de PDF", description: "Extracción y análisis de contenido PDF", price: 18 },
    { id: "advanced-analytics", name: "Analytics Avanzado", description: "Reportes detallados y métricas avanzadas", price: 25 },
    { id: "priority-support", name: "Soporte Prioritario", description: "Soporte 24/7 con respuesta prioritaria", price: 20 },
    { id: "custom-integrations", name: "Integraciones Personalizadas", description: "Conecta con tus herramientas favoritas", price: 35 },
  ]

  const toggleAddon = (addonId: string) => {
    setSelectedAddons((prev) =>
      prev.includes(addonId) ? prev.filter((id) => id !== addonId) : [...prev, addonId]
    )
  }

  const calculateTotal = () => {
    const addonsTotal = selectedAddons.reduce((total, addonId) => {
      const addon = addons.find((a) => a.id === addonId)
      return total + (addon?.price || 0)
    }, 0)
    return basePlan.price + addonsTotal
  }

  const handleContactSupport = () => {
    const selectedAddonNames = selectedAddons.map((id) => addons.find((addon) => addon.id === id)?.name).join(", ")
    const message = `Hola, me interesa el Plan Básico ($${basePlan.price}/mes) con las siguientes mejoras: ${selectedAddonNames}. Total: $${calculateTotal()}/mes. ¿Pueden ayudarme a configurarlo?`
    window.open(
      `mailto:soporte@tuempresa.com?subject=Solicitud de Plan Personalizado&body=${encodeURIComponent(message)}`
    )
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <section id="pricing" className="py-10 px-4 sm:px-6 lg:px-8 bg-background/80">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Planes Personalizados
            </h2>
            <p className="text-xl text-muted-foreground">Personaliza tu plan según tus necesidades</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {/* Bloque Fijo */}
            <div className="md:sticky md:top-24 h-fit">
              {/* Plan Básico + Resumen Unificados */}
              <div className="p-6 rounded-2xl border border-primary/20 bg-card/50">
                <div className="flex flex-col md:flex-row gap-4">
                  {/* Plan Básico (mitad izquierda) */}
                  <div className="w-full md:w-1/2">
                    <h3 className="text-2xl font-bold text-center mb-4">{basePlan.name}</h3>
                    <div className="text-center text-4xl font-bold text-primary mb-1">${basePlan.price}</div>
                    <div className="text-center text-muted-foreground mb-6">por mes</div>
                    <ul className="space-y-2">
                      {basePlan.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Resumen (mitad derecha) */}
                  <div className="w-full md:w-1/2 rounded-xl border border-primary bg-gradient-to-b from-primary/10 to-primary/5 p-4 h-fit">
                    <h4 className="text-lg font-bold mb-3 text-center">Resumen de tu Plan</h4>
                    <div className="space-y-2 mb-3">
                      <div className="flex justify-between">
                        <span>Plan Básico</span>
                        <span>${basePlan.price}</span>
                      </div>
                      {selectedAddons.map((addonId) => {
                        const addon = addons.find((a) => a.id === addonId)
                        return addon ? (
                          <div key={addonId} className="flex justify-between text-primary/70">
                            <span>{addon.name}</span>
                            <span>+${addon.price}</span>
                          </div>
                        ) : null
                      })}
                    </div>
                    <div className="border-t border-primary/30 pt-3">
                      <div className="flex justify-between text-lg font-bold">
                        <span>Total</span>
                        <span className="text-primary">${calculateTotal()}/mes</span>
                      </div>
                    </div>
                    <button
                      onClick={handleContactSupport}
                      className="w-full mt-5 py-3 rounded-lg font-semibold bg-gradient-to-r from-primary to-primary/80 hover:from-primary/80 hover:to-primary transition-all duration-200"
                    >
                      Contactar Soporte para Activar
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Mejoras Disponibles */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-center">Mejoras Disponibles</h3>
              <div className="space-y-4">
                {addons.map((addon) => {
                  const isSelected = selectedAddons.includes(addon.id)
                  return (
                    <div
                      key={addon.id}
                      className={`p-6 rounded-xl border transition-all duration-200 cursor-pointer ${
                        isSelected
                          ? "border-primary bg-primary/10"
                          : "border-border bg-background/80 hover:border-primary/50"
                      }`}
                      onClick={() => toggleAddon(addon.id)}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center mb-2">
                            <h4 className="text-lg font-semibold">{addon.name}</h4>
                            <div className="ml-auto flex items-center">
                              <span className="text-xl font-bold text-primary mr-3">+${addon.price}/mes</span>
                              <button
                                className={`p-1 rounded-full transition-colors ${
                                  isSelected
                                    ? "bg-primary text-foreground"
                                    : "bg-border text-muted-foreground hover:bg-border/80"
                                }`}
                              >
                                {isSelected ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                              </button>
                            </div>
                          </div>
                          <p className="text-muted-foreground text-sm">{addon.description}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="mt-8 p-4 rounded-lg bg-primary/10 border border-primary/30">
                <p className="text-sm text-primary/70 text-center">
                  💡 <strong>Tip:</strong> Selecciona las mejoras que necesites y contacta con nuestro soporte para activar tu plan personalizado
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
