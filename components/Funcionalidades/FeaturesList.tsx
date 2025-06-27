import FeatureCard from "./FeatureCard";
import { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface FeatureItem {
  image?: string;
  icon?: React.ElementType;
  title: string;
  description: string;
}

interface FeaturesListProps {
  features: FeatureItem[];
}

const SCROLL_AMOUNT = 320; // px, igual al ancho de la card aprox

const FeaturesList: React.FC<FeaturesListProps> = ({ features }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showButtons, setShowButtons] = useState(false);

  // Detecta si hay overflow horizontal
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const checkOverflow = () => {
      setShowButtons(el.scrollWidth > el.clientWidth + 8); // margen de error
    };
    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, [features.length]);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const { scrollLeft } = scrollRef.current;
    scrollRef.current.scrollTo({
      left: dir === "left" ? scrollLeft - SCROLL_AMOUNT : scrollLeft + SCROLL_AMOUNT,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative w-full">
      {/* Botón izquierdo */}
      {showButtons && (
        <button
          aria-label="Ver anterior"
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-zinc-900/80 rounded-full shadow p-2 hover:bg-primary/80 transition"
          tabIndex={0}
        >
          <ChevronLeft className="w-6 h-6 text-primary" />
        </button>
      )}
      {/* Botón derecho */}
      {showButtons && (
        <button
          aria-label="Ver siguiente"
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-zinc-900/80 rounded-full shadow p-2 hover:bg-primary/80 transition"
          tabIndex={0}
        >
          <ChevronRight className="w-6 h-6 text-primary" />
        </button>
      )}
      {/* Contenedor de cards */}
      <div
        ref={scrollRef}
        className="flex flex-nowrap gap-6 overflow-x-auto pb-4 snap-x snap-mandatory"
        style={{ WebkitOverflowScrolling: 'touch' }}
        tabIndex={0}
        aria-label="Funcionalidades de ControlDoc, scroll horizontal"
      >
        {features.map((f, idx) =>
          f.image ? (
            <FeatureCard key={f.title + idx} image={f.image} title={f.title} description={f.description} />
          ) : f.icon ? (
            <div key={f.title + idx} className="min-w-[18rem] w-72 m-4 bg-white dark:bg-zinc-900 rounded-xl shadow-lg overflow-hidden flex flex-col items-center p-4 transition hover:scale-105 snap-center">
              <f.icon className="w-12 h-12 text-primary mb-2" />
              <h3 className="text-lg font-semibold mb-1 text-gray-800 dark:text-white">{f.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{f.description}</p>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default FeaturesList;