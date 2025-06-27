import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const providers = [
  {
    name: "Cloudflare",
    logo: "/logosEntidades/cloudflare.png",
    emoji: "🛡️",
    description: "Seguridad global y carga rápida. Protegemos tu data con tecnología líder.",
    extra: "Usamos Cloudflare para seguridad empresarial y alto rendimiento.",
  },
  {
    name: "Firestore",
    logo: "/logosEntidades/firestore.png",
    emoji: "🔥",
    description: "Base de datos en tiempo real con backups y cifrado de Google.",
    extra: "Con Firestore, tus datos siempre están seguros y actualizados.",
  },
  {
    name: "Backblaze",
    logo: "/logosEntidades/backblaze.png",
    emoji: "☁️",
    description: "Almacenamiento con múltiples copias y recuperación automática.",
    extra: "Tus archivos se respaldan automáticamente con Backblaze.",
  },
]

export default function InfraestructuraCarousel() {
  return (
    <Carousel
      opts={{ loop: true }}
      plugins={[Autoplay({ delay: 4000, stopOnInteraction: false })]}
      className="w-full max-w-xl mx-auto mt-10"
    >
      <CarouselContent>
        {providers.map((item, index) => (
          <CarouselItem key={index}>
            <div className="p-6 rounded-xl border bg-white dark:bg-zinc-900 shadow flex flex-col items-center text-center space-y-3">
              <Image
                src={item.logo}
                alt={item.name}
                width={96}
                height={96}
                className="object-contain mb-2"
              />
              <h4 className="text-xl font-semibold text-primary">
                {item.emoji} {item.name}
              </h4>
              <p className="text-sm text-muted-foreground">{item.description}</p>
              <p className="text-xs italic text-muted-foreground">{item.extra}</p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
} 