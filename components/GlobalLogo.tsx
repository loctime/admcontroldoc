"use client"
import { usePathname } from "next/navigation"
import Image from "next/image"

export default function GlobalLogo() {
  const pathname = usePathname()
  if (pathname === "/") return null
  return (
    <div className="w-full flex justify-center py-6">
      <Image
        src="/logos/controldoclogo.png"
        alt="Logo ControlDoc"
        width={120}
        height={120}
        className="mx-auto w-32 h-auto"
        priority
      />
    </div>
  )
} 