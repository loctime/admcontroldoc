"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Github, ExternalLink } from "lucide-react"

export default function WikiHeader() {
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href="/wiki" className="flex items-center space-x-2">
            <BookOpen className="h-6 w-6" />
            <span className="font-bold text-xl">Wiki Técnica</span>
          </Link>
          <Badge variant="secondary">v2.0</Badge>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/" className="flex items-center space-x-2">
              <ExternalLink className="h-4 w-4" />
              <span>Ir al Sistema</span>
            </Link>
          </Button>

          <Button variant="ghost" size="sm" asChild>
            <Link href="https://github.com" className="flex items-center space-x-2">
              <Github className="h-4 w-4" />
              <span>GitHub</span>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
