import Hero from "../components/Hero"
import Features from "../components/Funcionalidades/Features"
import Clients from "../components/Clients"
import Team from "../components/Team"
import Contact from "../components/Contact"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-app">
      <Hero />
      <Features />
      <Clients />
      <Team />
      <Contact />
    </div>
  )
}
