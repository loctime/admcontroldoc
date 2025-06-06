//app/unir-pdf/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Unir PDF automáticamente – Solución para empresas | ControlDoc",
  description:
    "¿Buscás cómo unir PDF sin usar iLovePDF? ControlDoc convierte y une archivos PDF automáticamente. Solución profesional para empresas y organizaciones.",
  keywords: [
    "unir pdf",
    "pdf unir",
    "unir en pdf",
    "i love pdf",
    "ilovepdf",
    "alternativa a ilovepdf",
    "convertir a pdf automáticamente",
    "gestión documental",
    "automatización de documentos",
    "pdf para empresas"
  ],
  openGraph: {
    title: "Unir PDF automáticamente con ControlDoc",
    description:
      "¿Necesitás unir archivos PDF sin usar iLovePDF? ControlDoc los convierte y une automáticamente. Ideal para empresas que buscan eficiencia.",
    url: "https://controldoc.app/unir-pdf",
    siteName: "ControlDoc",
    type: "website",
    images: [
      {
        url: "https://controldoc.app/og-unir-pdf.png",
        width: 1200,
        height: 630,
        alt: "Unir PDF automáticamente - ControlDoc",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Uní PDF automáticamente con ControlDoc",
    description:
      "Alternativa a iLovePDF para unir archivos PDF de forma automática y profesional. ControlDoc lo hace sin pasos manuales.",
    images: ["https://controldoc.app/og-unir-pdf.png"],
  },
};

export default function UnirPdfPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 pt-20 px-4">
      <div className="max-w-4xl mx-auto mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Unir PDF automáticamente con ControlDoc
        </h1>
        <p className="text-lg text-gray-600">
          ¿Cansado de usar <strong>iLovePDF</strong> o herramientas externas para <strong>unir PDF</strong>? ControlDoc lo hace por vos, automáticamente.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-10 text-lg">
        <section>
          <h2 className="text-2xl font-semibold mb-2">¿Cómo unir PDF sin iLovePDF?</h2>
          <p>
            Con ControlDoc no necesitás subir documentos a plataformas como <strong>iLovePDF</strong>. Al cargar tus archivos (Word, Excel, imágenes), se convierten a PDF y se unen automáticamente si lo necesitás.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Ventajas frente a otras herramientas</h2>
          <p>
            Miles de usuarios buscan cada mes "<strong>unir en PDF</strong>", "<strong>pdf unir</strong>" o "<strong>i love pdf</strong>". ControlDoc está diseñado especialmente para empresas: sin pasos manuales, con trazabilidad, vencimientos y control documental total.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Para empresas modernas y eficientes</h2>
          <p>
            Automatizá tu flujo documental. Al subir un archivo a ControlDoc, el sistema lo convierte a PDF, lo organiza y, si hay varios, los une automáticamente. Una solución escalable y sin intervención manual.
          </p>
        </section>

        <section className="text-center">
          <Link
            href="/demo"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Probar ControlDoc gratis
          </Link>
        </section>
      </div>
    </div>
  );
}
