import Contact from "../../components/Contact"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contacto - ControlDoc",
  description: "Ponte en contacto con nosotros. Estamos aquí para ayudarte",
}

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-20 px-4">
      <div className="max-w-4xl mx-auto mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contacto</h1>
        <p className="text-gray-400 text-lg">
          ¿Tienes preguntas, sugerencias o quieres conocer más sobre ControlDoc? Completa el formulario y nuestro equipo te responderá a la brevedad.
        </p>
      </div>
      <Contact />
    </div>
  )
}
