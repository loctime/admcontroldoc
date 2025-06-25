"use client"

import { ArrowRight, Zap } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"

export default function Hero() {
  const images = [
    "/documentosNube.jpeg",
    "/seguridadControldoc.jpeg",
    "/seguimientoDocumentos.jpeg",
    "/flujoAprobacion.jpeg",
    "/organizaPrueba.jpeg",
  ]

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

          <p className="font-serif text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            ControlDoc te ayuda a gestionar y auditar todos los documentos con trazabilidad completa y alertas automáticas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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

        {/* Layout con carrusel animado en loop */}
        <div className="relative mt-16">
          <div className="absolute inset-0 pointer-events-none z-0 bg-gradient-to-r from-primary/30 to-primary/20 dark:from-primary/30 dark:to-primary/10 dark:blur-3xl blur-xl" />

          <div className="relative z-10 max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Texto a la izquierda */}
            <div className="text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Automatizá tu gestión documental
              </h2>
              <p className="text-muted-foreground text-lg mb-4">
                Con ControlDoc no hace falta perseguir documentos. Nuestro sistema envía recordatorios automáticos, permite carga guiada y mantiene tu información siempre actualizada.
              </p>
              <ul className="list-disc list-inside text-muted-foreground">
                <li>Recordatorios automáticos de vencimiento</li>
                <li>Carga guiada y cumplimiento obligatorio</li>
                <li>Actualización en tiempo real</li>
              </ul>
            </div>

            {/* Carrusel embla con loop y autoplay */}
            <div className="w-full">
              <Carousel
                opts={{ loop: true }}
                plugins={[Autoplay({ delay: 3000, stopOnInteraction: false })]}
                className="w-full max-w-md mx-auto"
              >
                <CarouselContent>
                  {images.map((src, index) => (
                    <CarouselItem key={index}>
                      <div className="overflow-hidden rounded-xl aspect-[4/3] relative">
                        <Image
                          src={src}
                          alt={`Slide ${index + 1}`}
                          fill
                          className="object-contain"
                          sizes="(max-width: 768px) 100vw, 400px"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
