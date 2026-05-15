import type { Metadata } from "next"
import Link from "next/link"
import { absoluteUrl, siteConfig } from "@/lib/seo"
import { StructuredData } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Glosario de Control y Gestión Documental | ControlDoc",
  description:
    "Glosario con definiciones de términos del control documental: DMS, gestión documental, compliance, OCR, trazabilidad, expediente digital, repositorio documental y más.",
  alternates: { canonical: absoluteUrl("/glosario") },
  openGraph: {
    type: "article",
    url: absoluteUrl("/glosario"),
    title: "Glosario de Control y Gestión Documental",
    description: "Definiciones de los términos clave del control documental para empresas.",
    siteName: siteConfig.name,
    locale: siteConfig.locale,
  },
}

type Term = { term: string; alternateTerms?: string[]; definition: string; example?: string }

const terms: Term[] = [
  {
    term: "Control Documental",
    alternateTerms: ["Control de documentos", "Control documentario"],
    definition:
      "Disciplina dedicada a garantizar la vigencia, aprobación, versión y trazabilidad de cada documento crítico de una empresa. A diferencia de la gestión documental — que cubre todo el ciclo — el control documental se enfoca específicamente en asegurar que cada documento esté vigente, autorizado y registrado.",
    example:
      "El control documental de una flota vehicular asegura que cada unidad tenga VTV, seguro y RTO vigentes antes de operar.",
  },
  {
    term: "Gestión Documental",
    alternateTerms: ["Gestión de documentos", "Document Management"],
    definition:
      "Conjunto de procesos para crear, almacenar, recuperar, distribuir y archivar documentos a lo largo de su ciclo de vida. Engloba al control documental pero también cubre digitalización, clasificación, búsqueda y archivo histórico.",
  },
  {
    term: "DMS (Document Management System)",
    alternateTerms: ["Sistema de Gestión Documental", "Software documental"],
    definition:
      "Software que centraliza la gestión documental de una organización. Reemplaza el almacenamiento disperso en carpetas, mails y planillas por un repositorio único con búsqueda, versionado, permisos y trazabilidad. Ejemplos: ControlDoc, DocuWare, M-Files, OnBase.",
  },
  {
    term: "OCR (Optical Character Recognition)",
    alternateTerms: ["Reconocimiento óptico de caracteres"],
    definition:
      "Tecnología que extrae texto de imágenes y PDFs escaneados. En control documental, el OCR se usa para detectar automáticamente fechas de vencimiento, números de documento o datos de identificación, reduciendo la carga manual y los errores de transcripción.",
    example:
      "Al subir una foto de un seguro de auto, el OCR de ControlDoc detecta la fecha de vencimiento y la propone al operador para confirmar.",
  },
  {
    term: "Trazabilidad Documental",
    definition:
      "Capacidad de reconstruir el historial completo de un documento: quién lo cargó, quién lo aprobó o rechazó, qué versiones existieron, cuándo se modificó y bajo qué criterio. Es requisito para superar auditorías externas y demostrar compliance regulatorio.",
  },
  {
    term: "Compliance Documental",
    alternateTerms: ["Cumplimiento documental"],
    definition:
      "Conjunto de prácticas y herramientas que aseguran que la documentación de una empresa cumple con las normativas legales, fiscales, laborales y de seguridad aplicables. Incluye control de vencimientos, validez de firmas y conservación por los plazos exigidos.",
  },
  {
    term: "Expediente Digital",
    alternateTerms: ["Legajo digital"],
    definition:
      "Carpeta digital que agrupa toda la documentación asociada a una entidad — un empleado, un vehículo, un contratista — con sus permisos, vencimientos y historial. Reemplaza el legajo físico tradicional con búsqueda instantánea y trazabilidad total.",
  },
  {
    term: "Repositorio Documental",
    definition:
      "Almacén centralizado donde se guardan todos los documentos de una organización con un sistema unificado de búsqueda, permisos, versiones y metadatos. En sistemas modernos opera en la nube como SaaS.",
  },
  {
    term: "Control de Vencimientos",
    definition:
      "Mecanismo que monitorea las fechas de caducidad de documentos críticos y alerta a los responsables antes de que un documento venza. Es central en sectores con alta exigencia regulatoria como logística, energía, minería y RRHH.",
  },
  {
    term: "Habilitación de Contratistas",
    alternateTerms: ["Habilitación de proveedores", "On-boarding documental"],
    definition:
      "Proceso por el cual una empresa valida que un contratista o proveedor externo cumpla con la documentación exigida (seguros, ART, aportes patronales, formularios SRT) antes de autorizar el acceso a planta o el inicio de trabajos.",
  },
  {
    term: "Sub-empresa",
    alternateTerms: ["Multi-cliente", "Multi-tenant documental"],
    definition:
      "Estructura jerárquica que permite a consultoras y empresas BPO gestionar la documentación de múltiples clientes dentro de un mismo sistema, con aislamiento de datos para evitar cruces de información.",
  },
  {
    term: "Flujo de Aprobación",
    alternateTerms: ["Workflow documental"],
    definition:
      "Secuencia de pasos que sigue un documento desde que se carga hasta que queda aprobado o rechazado. Cada paso registra quién intervino, cuándo y con qué comentario, generando trazabilidad automática.",
  },
  {
    term: "Semáforo de Cumplimiento",
    definition:
      "Indicador visual (verde / amarillo / rojo) que resume el estado de la documentación de una empresa en tiempo real, distinguiendo entre documentos vigentes, próximos a vencer y vencidos.",
  },
  {
    term: "Normalización Documental",
    alternateTerms: ["Estandarización de archivos"],
    definition:
      "Conversión automática de archivos de distintos formatos (imágenes, Word, Excel) a un formato estándar — típicamente PDF — para garantizar uniformidad, compatibilidad de visualización y conservación a largo plazo.",
  },
  {
    term: "Auditoría Documental",
    definition:
      "Revisión sistemática de los documentos de una organización para verificar su vigencia, autenticidad, integridad y conformidad con normativas internas y externas. Es una práctica recurrente en sectores regulados.",
  },
  {
    term: "HSE / SST",
    alternateTerms: ["Seguridad e Higiene", "Salud y Seguridad Ocupacional"],
    definition:
      "Health, Safety & Environment (HSE) o Seguridad y Salud en el Trabajo (SST) — disciplinas que gestionan los riesgos laborales y ambientales de una operación. El control documental es central en HSE/SST: capacitaciones, exámenes médicos, ART y procedimientos deben estar vigentes y accesibles.",
  },
]

const definedTermSetSchema = {
  "@context": "https://schema.org",
  "@type": "DefinedTermSet",
  name: "Glosario de Control y Gestión Documental",
  description:
    "Definiciones de los términos clave del control documental y la gestión de documentos en empresas.",
  inLanguage: "es",
  url: absoluteUrl("/glosario"),
  hasDefinedTerm: terms.map((t) => ({
    "@type": "DefinedTerm",
    name: t.term,
    alternateName: t.alternateTerms,
    description: t.definition,
    inDefinedTermSet: absoluteUrl("/glosario"),
  })),
}

export default function GlosarioPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <StructuredData data={definedTermSetSchema} />
      <header className="mb-10 text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-blue-600 mb-2">
          Glosario
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 leading-tight">
          Glosario de Control y Gestión Documental
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Definiciones de los términos clave que se usan en el control documental, la gestión de
          documentos y el compliance regulatorio en empresas.
        </p>
      </header>

      <nav aria-label="Índice del glosario" className="mb-10 bg-slate-50 rounded-2xl p-6 border border-slate-200">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500 mb-3">
          Índice
        </h2>
        <ul className="flex flex-wrap gap-2">
          {terms.map((t) => (
            <li key={t.term}>
              <a
                href={`#${slug(t.term)}`}
                className="text-sm bg-white border border-slate-200 hover:border-blue-300 hover:text-blue-700 px-3 py-1.5 rounded-lg transition-colors inline-block"
              >
                {t.term}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="space-y-8">
        {terms.map((t) => (
          <article
            key={t.term}
            id={slug(t.term)}
            className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 scroll-mt-24"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-2">{t.term}</h2>
            {t.alternateTerms && t.alternateTerms.length > 0 && (
              <p className="text-sm text-slate-500 mb-3">
                También conocido como: {t.alternateTerms.join(" · ")}
              </p>
            )}
            <p className="text-slate-700 leading-relaxed">{t.definition}</p>
            {t.example && (
              <p className="mt-3 text-sm text-slate-600 bg-blue-50/60 border-l-4 border-blue-300 pl-4 py-2 rounded-r-lg">
                <span className="font-semibold">Ejemplo:</span> {t.example}
              </p>
            )}
          </article>
        ))}
      </div>

      <section className="mt-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl p-8 md:p-12 text-white text-center">
        <h2 className="text-3xl font-bold mb-3">¿Necesitás aplicarlo en tu empresa?</h2>
        <p className="text-lg mb-6 text-blue-50 max-w-2xl mx-auto">
          ControlDoc implementa todos estos conceptos en una plataforma única: OCR, trazabilidad,
          control de vencimientos y compliance en un solo lugar.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/funcionalidades"
            className="bg-white text-blue-700 hover:bg-blue-50 transition-colors px-6 py-3 rounded-xl font-semibold"
          >
            Ver funcionalidades
          </Link>
          <Link
            href="/comparativa"
            className="border-2 border-white text-white hover:bg-white/10 transition-colors px-6 py-3 rounded-xl font-semibold"
          >
            Comparativa con DMS
          </Link>
        </div>
      </section>
    </main>
  )
}

function slug(s: string) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}
