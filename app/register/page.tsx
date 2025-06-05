import RegisterPage from "../../pages/auth/RegisterPage"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Crear Cuenta - ControlDoc",
  description: "Crea tu cuenta en ControlDoc y comienza a gestionar tus documentos",
}

export default function Register() {
  return <RegisterPage />
}
