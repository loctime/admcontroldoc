import { useEffect, useState } from "react";

export default function ThemeSwitcher() {
  // Detectar preferencia inicial del usuario
  const getInitialTheme = () => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      if (saved === "light" || saved === "dark") return saved;
      if (window.matchMedia("(prefers-color-scheme: light)").matches) return "light";
    }
    return "dark";
  };

  const [theme, setTheme] = useState<"light" | "dark">(() => getInitialTheme());

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      className="px-3 py-1 rounded bg-cyan-600 text-white text-xs font-medium hover:bg-cyan-700 transition"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label={theme === "dark" ? "Activar modo claro" : "Activar modo oscuro"}
      style={{ position: 'relative', zIndex: 100 }}
    >
      {theme === "dark" ? "☀️ Modo claro" : "🌙 Modo oscuro"}
    </button>
  );
}
