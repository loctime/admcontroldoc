"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Building2, Phone, Mail, ExternalLink } from "lucide-react"

export default function ClientHeader() {
  return (
    <header className="bg-white/90 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href="/clientes" className="flex items-center space-x-2">
            <Building2 className="h-8 w-8 text-blue-600" />
            <div>
              <span className="font-bold text-xl text-gray-900">DocuManager</span>
              <Badge variant="secondary" className="ml-2 text-xs">
                Pro
              </Badge>
            </div>
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-4 text-sm text-gray-600">
            <div className="flex items-center space-x-1">
              <Phone className="h-4 w-4" />
              <span>+593 99 123 4567</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="h-4 w-4" />
              <span>ventas@documanager.com</span>
            </div>
          </div>

          <Button variant="outline" size="sm" asChild>
            <Link href="/login" className="flex items-center space-x-2">
              <ExternalLink className="h-4 w-4" />
              <span>Acceder al Sistema</span>
            </Link>
          </Button>

          <Button size="sm" className="bg-blue-600 hover:bg-blue-700" asChild>
            <Link href="/clientes/demo">Demo Gratuita</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
