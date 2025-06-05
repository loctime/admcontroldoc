import RegisterPage from "../../pages/auth/RegisterPage"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Crear Cuenta - ControlDoc",
  description: "Crea tu cuenta en ControlDoc y comienza a gestionar tus documentos",
}

export default function Register() {
  return (
    <div className="min-h-screen bg-black text-white pt-20 px-4">
      <div className="max-w-4xl mx-auto mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Crea tu cuenta</h1>
        <p className="text-gray-400 text-lg">
          Regístrate gratis y comienza a gestionar los documentos de tu empresa de forma centralizada, segura y eficiente con ControlDoc.
        </p>
      </div>
      <RegisterPage />
    </div>
  )
}
