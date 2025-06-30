import DashboardPage from "../../pages/dashboard/DashboardPage"

export const metadata = {
  title: "Dashboard - ControlDoc",
  description: "Panel de control de ControlDoc",
}

export default function Page() {
  return (
    <div className="min-h-screen text-foreground pt-20 px-4">
      <div className="max-w-4xl mx-auto mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Panel de Control</h1>
        <p className="text-muted-foreground text-lg">
          Accede a todas las herramientas y métricas clave de tu empresa desde un solo lugar. Gestiona documentos, revisa alertas y visualiza el estado general de tu organización.
        </p>
      </div>
      <DashboardPage />
    </div>
  )
}
