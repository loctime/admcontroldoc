import ForgotPasswordPage from "../../pages/auth/ForgotPasswordPage"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Recuperar Contraseña - ControlDoc",
  description: "Recupera el acceso a tu cuenta de ControlDoc",
}

export default function ForgotPassword() {
  return (
    <div className="min-h-screen bg-black text-white pt-20 px-4">
      <div className="max-w-4xl mx-auto mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Recuperar Contraseña</h1>
        <p className="text-gray-400 text-lg">
          Ingresa tu correo electrónico y te enviaremos las instrucciones para restablecer el acceso a tu cuenta de ControlDoc.
        </p>
      </div>
      <ForgotPasswordPage />
    </div>
  )
}
