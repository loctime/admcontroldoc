"use client"

import { useLanguage } from "../context/LanguageContext"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-gray-900/50 border-t border-cyan-500/20 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
              LOGO
            </h3>
            <p className="text-gray-300 mb-4">
              Transformamos ideas en realidades digitales con tecnología de vanguardia.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Enlaces</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#features" className="hover:text-cyan-400 transition-colors">
                  Características
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-cyan-400 transition-colors">
                  Precios
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-cyan-400 transition-colors">
                  Equipo
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-400 transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Privacidad
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Términos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-cyan-500/20 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 LOGO. {t("footer_rights")}.</p>
        </div>
      </div>
    </footer>
  )
}
