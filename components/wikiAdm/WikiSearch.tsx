"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, X, FileText, Code, Users, Database } from "lucide-react"
import Link from "next/link"

interface SearchResult {
  title: string
  description: string
  href: string
  category: string
  icon: any
}

const searchData: SearchResult[] = [
  {
    title: "Arquitectura del Sistema",
    description: "Diseño general, patrones y estructura del sistema",
    href: "/wiki/arquitectura",
    category: "Arquitectura",
    icon: Code,
  },
  {
    title: "Procesamiento OCR",
    description: "Extracción automática de texto de documentos",
    href: "/wiki/documentos/ocr",
    category: "Documentos",
    icon: FileText,
  },
  {
    title: "Gestión de Usuarios",
    description: "Autenticación, roles y permisos",
    href: "/wiki/usuarios",
    category: "Usuarios",
    icon: Users,
  },
  {
    title: "Base de Datos Firestore",
    description: "Estructura y configuración de Firestore",
    href: "/wiki/database/firestore",
    category: "Base de Datos",
    icon: Database,
  },
]

export default function WikiSearch() {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<SearchResult[]>([])
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (query.length > 2) {
      const filtered = searchData.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.description.toLowerCase().includes(query.toLowerCase()) ||
          item.category.toLowerCase().includes(query.toLowerCase()),
      )
      setResults(filtered)
      setIsOpen(true)
    } else {
      setResults([])
      setIsOpen(false)
    }
  }, [query])

  const clearSearch = () => {
    setQuery("")
    setResults([])
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Buscar en la wiki..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-10 pr-10"
        />
        {query && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearSearch}
            className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0"
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>

      {isOpen && results.length > 0 && (
        <Card className="absolute top-full left-0 right-0 mt-2 z-50 max-h-96 overflow-y-auto">
          <CardHeader>
            <CardTitle className="text-sm">Resultados de búsqueda</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {results.map((result, index) => {
              const Icon = result.icon
              return (
                <Link key={index} href={result.href} onClick={() => setIsOpen(false)}>
                  <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted transition-colors cursor-pointer">
                    <Icon className="h-5 w-5 mt-0.5 text-muted-foreground" />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm">{result.title}</p>
                      <p className="text-xs text-muted-foreground line-clamp-2">{result.description}</p>
                      <Badge variant="outline" className="mt-1 text-xs">
                        {result.category}
                      </Badge>
                    </div>
                  </div>
                </Link>
              )
            })}
          </CardContent>
        </Card>
      )}

      {isOpen && results.length === 0 && query.length > 2 && (
        <Card className="absolute top-full left-0 right-0 mt-2 z-50">
          <CardContent className="p-4 text-center text-muted-foreground">
            No se encontraron resultados para "{query}"
          </CardContent>
        </Card>
      )}
    </div>
  )
}
