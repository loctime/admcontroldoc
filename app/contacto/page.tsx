import Contact from "../../components/Contact"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contacto - ControlDoc",
  description: "Ponte en contacto con nosotros. Estamos aquí para ayudarte",
}

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <Contact />
    </div>
  )
}
