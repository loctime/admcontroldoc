"use client"

import { ArrowRight, Zap } from "lucide-react"

export default function Hero() {

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-8">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Zap className="w-4 h-4 text-primary mr-2" />
            <span className="text-primary text-sm">Tecnología Avanzada</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary dark:bg-gradient-to-r dark:from-primary dark:via-white/70 dark:to-[hsl(var(--success))] dark:bg-clip-text dark:text-transparent dark:text-shadow-white">
            Control Documental Total
          </h1>

          <p className="font-serif text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">ControlDoc te ayuda a gestionar y auditar todos los documentos con trazabilidad completa y alertas automáticas.</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Botón convertido en enlace para abrir WhatsApp con el número solicitado. Mejor UX y cumplimiento de la función de CTA. */}
<a
  href="https://wa.me/5493364345088"
  target="_blank"
  rel="noopener noreferrer"
  className="group bg-gradient-to-r from-primary to-primary/80 px-8 py-4 rounded-lg font-semibold hover:from-primary/80 hover:to-primary transition-all duration-200 flex items-center justify-center"
>
  Contactar
  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
</a>
            <button className="px-8 py-4 rounded-lg border border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-200">
              Ver Demo
            </button>
          </div>
        </div>

        <div className="relative mt-16">
  {/* Glow dinámico según tema */}
  <div className="absolute inset-0 pointer-events-none z-0
                  bg-gradient-to-r from-primary/30 to-primary/20 dark:from-primary/30 dark:to-primary/10
                  dark:blur-3xl blur-xl">
  </div>

  <div className="relative z-10 bg-card/60 rounded-2xl border border-border p-8 backdrop-blur-sm shadow-md">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
      <div>
        <div className="text-3xl font-bold text-primary">99.9%</div>
        <div className="text-muted-foreground">Uptime</div>
      </div>
      <div>
        <div className="text-3xl font-bold text-primary">24/7</div>
        <div className="text-muted-foreground">Soporte</div>
      </div>
      <div>
        <div className="text-3xl font-bold text-primary">1000+</div>
        <div className="text-muted-foreground">Clientes</div>
      </div>
    </div>
  </div>
</div>

      </div>
    </section>
  )
}
