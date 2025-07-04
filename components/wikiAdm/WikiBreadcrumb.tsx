import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface BreadcrumbItem {
  title: string
  href: string
}

interface WikiBreadcrumbProps {
  items: BreadcrumbItem[]
}

export default function WikiBreadcrumb({ items }: WikiBreadcrumbProps) {
  return (
    <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
      {items.map((item, index) => (
        <div key={item.href} className="flex items-center space-x-2">
          {index > 0 && <ChevronRight className="h-4 w-4" />}
          {index === items.length - 1 ? (
            <span className="font-medium text-foreground">{item.title}</span>
          ) : (
            <Link href={item.href} className="hover:text-foreground transition-colors">
              {item.title}
            </Link>
          )}
        </div>
      ))}
    </nav>
  )
}
