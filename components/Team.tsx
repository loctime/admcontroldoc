"use client"

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"

export default function Team() {

  const team = [
    {
      name: "Ana García",
      role: "CEO & Founder",
      image: "/placeholder.svg?height=300&width=300&query=professional woman CEO",
    },
    { name: "Carlos López", role: "CTO", image: "/placeholder.svg?height=300&width=300&query=professional man CTO" },
    {
      name: "María Rodríguez",
      role: "Lead Developer",
      image: "/placeholder.svg?height=300&width=300&query=professional woman developer",
    },
  ]

  return (
    <section id="team" className="py-20 px-4 sm:px-6 lg:px-8 bg-app-glass">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          {/* Gradiente azul corporativo para coherencia visual */}
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary/70 to-primary bg-clip-text text-transparent">
            Nuestro equipo
          </h2>
          <p className="text-xl text-muted-foreground">Conoce a los expertos detrás de la innovación</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6 mx-auto w-48 h-48 rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary/60 transition-all duration-300">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-primary">{member.role}</p>
              <p className="text-muted-foreground text-sm">Breve bio del miembro del equipo.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
