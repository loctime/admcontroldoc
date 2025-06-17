"use client"

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
    <section id="team" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Nuestro equipo
          </h2>
          <p className="text-xl text-gray-300">Conoce a los expertos detrás de la innovación</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6 mx-auto w-48 h-48 rounded-full overflow-hidden border-4 border-cyan-500/20 group-hover:border-cyan-500/60 transition-all duration-300">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-cyan-400">{member.role}</p>
              <p className="text-gray-500 text-sm">Breve bio del miembro del equipo.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
