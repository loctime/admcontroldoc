"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function GlobalBackground() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const src = mounted && theme === "dark"
    ? "/images/azulVerdeBlack.png"
    : "/images/blancocasi.png";
  return (
    <Image
      src={src}
      alt="Fondo global"
      fill
      className="object-cover object-center -z-50 fixed inset-0 w-full h-full transition-opacity duration-300 select-none pointer-events-none"      priority
      aria-hidden
      draggable={false}
    />
  );
}