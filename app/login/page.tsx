import LoginPage from "../../pages/auth/LoginPage"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Iniciar Sesión - ControlDoc",
  description: "Accede a tu cuenta de ControlDoc",
}

export default function Login() {
  return <LoginPage />
}
