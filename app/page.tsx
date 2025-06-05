import Hero from "../components/Hero"
import Features from "../components/Features"
import Pricing from "../components/Pricing"
import Clients from "../components/Clients"
import Team from "../components/Team"
import Contact from "../components/Contact"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <Features />
      <Pricing />
      <Clients />
      <Team />
      <Contact />
    </div>
  )
}
