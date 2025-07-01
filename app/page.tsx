import Hero from "@/components/Hero"
import Clients from "@/components/Clients"
import Features from "@/components/Funcionalidades/Features"
import Pricing from "@/components/Pricing"
import Contact from "@/components/Contact"
import Team from "@/components/Team"

export default function Page() {
  return (
    <div className="w-full max-w-full mx-auto">
      <Hero />
      <Features />
      <Contact />
    </div>
  )
}
