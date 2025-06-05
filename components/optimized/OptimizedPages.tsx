import { lazy, Suspense } from "react"
import { Routes, Route } from "react-router-dom"

// Lazy loading de páginas
const Home = lazy(() => import("../../pages/Home"))
const Funcionalidades = lazy(() => import("../../pages/Funcionalidades"))
const Precios = lazy(() => import("../../pages/Precios"))
const Clientes = lazy(() => import("../../pages/Clientes"))
const Equipo = lazy(() => import("../../pages/Equipo"))
const Contacto = lazy(() => import("../../pages/Contacto"))
const Login = lazy(() => import("../../pages/Login"))

// Loading component
function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-500"></div>
    </div>
  )
}

export default function OptimizedRoutes() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/funcionalidades" element={<Funcionalidades />} />
        <Route path="/precios" element={<Precios />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/equipo" element={<Equipo />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Suspense>
  )
}
