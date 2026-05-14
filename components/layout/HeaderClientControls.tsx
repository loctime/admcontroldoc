"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Menu, X } from "lucide-react"
import ThemeSwitcher from "../ThemeSwitcher"

interface NavigationItem {
  name: string
  href: string
}

export default function HeaderClientControls({ navigation }: { navigation: NavigationItem[] }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <ThemeSwitcher />
      <button
        type="button"
        onClick={() => setIsMenuOpen((open) => !open)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-colors hover:border-blue-300 hover:text-blue-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-blue-500 dark:hover:text-blue-400 md:hidden"
        aria-label={isMenuOpen ? "Cerrar menu" : "Abrir menu"}
        aria-expanded={isMenuOpen}
      >
        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {isMenuOpen && (
        <div className="absolute left-4 right-4 top-[4.5rem] md:hidden">
          <div className="mt-2 rounded-2xl border border-slate-200 bg-white p-2 shadow-lg dark:border-slate-800 dark:bg-slate-950">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block rounded-xl px-3 py-2 text-base font-medium text-slate-600 transition-colors hover:bg-slate-50 hover:text-blue-600 dark:text-slate-300 dark:hover:bg-slate-900 dark:hover:text-blue-400"
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
    </>
  )
}
