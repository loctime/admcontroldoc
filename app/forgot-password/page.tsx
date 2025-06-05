import ForgotPasswordPage from "../../pages/auth/ForgotPasswordPage"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Recuperar Contraseña - ControlDoc",
  description: "Recupera el acceso a tu cuenta de ControlDoc",
}

export default function ForgotPassword() {
  return <ForgotPasswordPage />
}
