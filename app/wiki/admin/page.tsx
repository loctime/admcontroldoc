//app/wiki/[slug]/page.tsx
import fs from "fs"
import path from "path"
import DeepWikiSidebar from "@/components/wiki/DeepWikiSidebar"
import DeepWikiContent from "@/components/wiki/DeepWikiContent"

export default function WikiPage({ params }: { params: { slug: string } }) {
  const filePath = path.join(process.cwd(), "docs", `${params.slug}.md`)
  let content = "Documento no encontrado."
  if (fs.existsSync(filePath)) {
    content = fs.readFileSync(filePath, "utf8")
  }

  return (
    <div className="flex min-h-screen">
      <DeepWikiSidebar />
      <main className="flex-1 p-8">
        <DeepWikiContent content={content} />
      </main>
    </div>
  )
}
