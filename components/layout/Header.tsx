"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ArrowRight, FileText, Menu, X } from "lucide-react"
import ThemeSwitcher from "../ThemeSwitcher"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const navigation = [
    { name: "Inicio", href: "/" },
    { name: "Funcionalidades", href: "/funcionalidades" },
    { name: "Contacto", href: "/contacto" },
  ]

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
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? "bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300"
                    : "text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
                }`}
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
            <ThemeSwitcher />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-colors hover:border-blue-300 hover:text-blue-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-blue-500 dark:hover:text-blue-400 md:hidden"
              aria-label={isMenuOpen ? "Cerrar menu" : "Abrir menu"}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>

        {isMenuOpen && (
          <div className="pb-4 md:hidden">
            <div className="mt-2 rounded-2xl border border-slate-200 bg-white p-2 shadow-lg dark:border-slate-800 dark:bg-slate-950">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block rounded-xl px-3 py-2 text-base font-medium transition-colors ${
                    pathname === item.href
                      ? "bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300"
                      : "text-slate-600 hover:bg-slate-50 hover:text-blue-600 dark:text-slate-300 dark:hover:bg-slate-900 dark:hover:text-blue-400"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/dashboard"
                className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-3 py-3 text-sm font-semibold text-white hover:bg-blue-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Ir al panel
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
