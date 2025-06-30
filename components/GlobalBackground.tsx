"use client";

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
    <div
      aria-hidden
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -50,
        pointerEvents: "none",
        background: `url(${src}) center top / cover repeat-y`,
      }}
    />
  );
}