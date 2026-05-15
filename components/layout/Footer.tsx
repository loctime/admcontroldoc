import Link from "next/link"
import { ArrowUpRight, FileText, Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  const navigation = {
    product: [
      { name: "Funcionalidades", href: "/funcionalidades" },
      { name: "Comparativa", href: "/comparativa" },
      { name: "Glosario", href: "/glosario" },
      { name: "Contacto", href: "/contacto" },
    ],
    company: [
      { name: "Equipo", href: "/equipo" },
      { name: "Precios", href: "/precios" },
      { name: "Wiki", href: "/wiki" },
    ],
    legal: [
      { name: "Privacidad", href: "/legal" },
      { name: "Terminos", href: "/terminos" },
    ],
    support: [
      { name: "ADM Wiki", href: "/admwiki" },
      { name: "Contacto comercial", href: "/contacto" },
      { name: "Ecosistema ControlApps", href: "https://controlapp.vercel.app", external: true },
    ],
  }

  return (
    <footer className="border-t border-slate-200 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 border-b border-slate-800 pb-10 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <Link href="/" className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600 text-white">
                <FileText className="h-5 w-5" />
              </div>
              <div>
                <span className="block text-lg font-semibold text-white">ControlDoc</span>
                <span className="text-sm text-slate-400">Gestion documental profesional</span>
              </div>
            </Link>
            <p className="mb-6 max-w-md text-sm leading-6 text-slate-300">
              Una interfaz simple para ordenar vencimientos, auditorias y trazabilidad documental sin depender de planillas ni circuitos opacos.
            </p>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-blue-400" />
                <span>controldoc@controldoc.app</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-blue-400" />
                <span>+54 9 336 434-5088</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span>Argentina</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">Producto</h3>
            <ul className="space-y-2">
              {navigation.product.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-slate-300 transition-colors hover:text-blue-400">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">Empresa</h3>
            <ul className="space-y-2">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-slate-300 transition-colors hover:text-blue-400">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">Soporte</h3>
            <ul className="space-y-2">
              {navigation.support.map((item) => (
                <li key={item.name}>
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-slate-300 transition-colors hover:text-blue-400"
                    >
                      {item.name}
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  ) : (
                    <Link href={item.href} className="text-sm text-slate-300 transition-colors hover:text-blue-400">
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">Legal</h3>
            <ul className="space-y-2">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-slate-300 transition-colors hover:text-blue-400">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-slate-500">&copy; 2026 ControlDoc. Todos los derechos reservados.</p>
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <span className="rounded-full border border-slate-800 px-3 py-1">Control operativo</span>
            <span className="rounded-full border border-slate-800 px-3 py-1">Compliance</span>
            <span className="rounded-full border border-slate-800 px-3 py-1">Trazabilidad</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
