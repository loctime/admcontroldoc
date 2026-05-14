import Link from "next/link"
import { ArrowRight, FileText } from "lucide-react"
import HeaderClientControls from "./HeaderClientControls"

const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Funcionalidades", href: "/funcionalidades" },
  { name: "Contacto", href: "/contacto" },
]

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/85">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm shadow-blue-200 dark:shadow-none">
              <FileText className="h-5 w-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-semibold text-slate-900 dark:text-slate-100">
                ControlDoc
              </span>
              <span className="hidden text-xs text-slate-500 dark:text-slate-400 sm:block">
                Gestion documental y compliance
              </span>
            </div>
          </Link>

          <div className="hidden items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-2 py-1 shadow-sm dark:border-slate-800 dark:bg-slate-900/80 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/dashboard"
              className="hidden items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700 lg:inline-flex"
            >
              Ir al panel
              <ArrowRight className="h-4 w-4" />
            </Link>
            <HeaderClientControls navigation={navigation} />
          </div>
        </nav>
      </div>
    </header>
  )
}
