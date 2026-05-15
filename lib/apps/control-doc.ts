import { FileText, FolderOpen, Receipt, Shield } from "lucide-react"
import type { PlatformApp } from "@/lib/platform-types"

export const controlDoc: PlatformApp = {
  id: "control-doc",
  slug: "control-doc",
  name: "ControlDoc",
  shortDescription:
    "Plataforma SaaS para la gestión integral de documentación y contratistas. Auditoría asistida por OCR, trazabilidad total y semáforo de cumplimiento en tiempo real.",
  category: "operations",
  status: "active",
  icon: FileText,
  image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/documento-0W2O7GyQ89nJ0Kxpi6kB6aYM0TVYt1.png",
  color: "from-blue-500 to-cyan-500",
  href: "/",
  features: [
    "Centralizá empleados, flota y subcontratistas",
    "Auditoría con OCR para eliminar errores de carga",
    "Flujo de aprobación con historial y versiones",
    "Conversión automática de adjuntos a PDF",
    "Tableros de control para toma de decisiones",
  ],
  cardBadges: ["SaaS de Gestión", "Cumplimiento Legal"],
  platformCapabilities: {
    sharedAuth: true,
    sharedStorage: true,
    exposedInDrive: true,
    requiresPermissions: true,
  },
  seo: {
    title: "ControlDoc | Software de Gestión y Control Documental",
    description:
      "Software de control documental y gestión de documentos para empresas en Latam. Auditoría con OCR, alertas de vencimientos y trazabilidad de aprobaciones.",
    canonicalPath: "/",
    socialImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/documento-0W2O7GyQ89nJ0Kxpi6kB6aYM0TVYt1.png",
    categoryLabel: "Software de Gestión y Control Documental",
    keywords: {
      primary: "software de control documental",
      secondary: [
        "control documental",
        "control de documentos",
        "control documentario",
        "gestion documental",
        "gestion de documentos",
        "sistema de gestion documental",
        "plataforma de gestion documental",
        "software documental",
        "gestor documental",
        "administracion documental",
        "DMS document management system",
        "control documental para empresas",
        "software para control de documentos",
        "programa de gestion documental",
        "app de gestion documental",
        "auditoria documental",
        "auditoria de documentos",
        "compliance documental",
        "cumplimiento documental",
        "trazabilidad documental",
        "control de vencimientos de documentos",
        "alertas de documentos vencidos",
        "vencimiento de documentacion",
        "OCR de documentos",
        "digitalizacion de documentos",
        "expediente digital",
        "legajos digitales",
        "repositorio documental",
        "archivo digital empresarial",
        "gestion de contratistas",
        "control de contratistas",
        "habilitacion de contratistas",
        "subcontratistas habilitacion planta",
        "control de proveedores",
        "gestion de proveedores",
        "control de empleados",
        "legajo de personal",
        "documentacion de RRHH",
        "control de flota vehicular",
        "documentacion de flota",
        "control de vencimientos VTV seguros",
        "habilitacion de personal en planta",
        "acceso a planta documentacion",
        "compliance HSE SST",
        "SaaS de gestion documental",
        "software documental Argentina",
        "control documental Mexico",
        "control documental Chile",
        "control documental Colombia",
        "control documental Peru",
        "software documental Latam",
        "gestion documental pymes",
        "gestion documental para empresas",
        "control documental para pymes",
        "mejor software de gestion documental",
      ],
      problems: [
        "incumplimiento legal por documentos vencidos",
        "errores humanos en carga de fechas",
        "falta de transparencia en aprobaciones",
        "documentos vencidos sin alerta",
        "documentacion dispersa en carpetas mails y planillas",
        "auditorias externas lentas y costosas por falta de trazabilidad",
        "duplicacion de archivos sin control de versiones",
        "falta de control en sub-empresas y consultoras",
        "errores en la habilitacion de contratistas para acceso a planta",
        "vencimiento de seguros y VTV sin alerta",
      ],
      industries: [
        "logistica",
        "transporte",
        "energia",
        "petroleo y gas",
        "mineria",
        "construccion",
        "manufactura",
        "industria",
        "agro",
        "retail",
        "consultoras",
        "BPO",
        "outsourcing",
        "recursos humanos",
        "seguridad e higiene",
        "HSE",
        "SST",
        "salud y seguridad ocupacional",
        "pymes",
        "empresas medianas",
        "corporativo",
        "Argentina",
        "Mexico",
        "Chile",
        "Colombia",
        "Peru",
        "Uruguay",
        "Paraguay",
        "Bolivia",
        "Ecuador",
        "Latinoamerica",
      ],
    },
  },
  landingContent: {
    mediaGallery: {
      items: [
        {
          caption: "Panel de control centralizado — image_da769a.png",
          web:    { type: "video", src: "" },
          mobile: { type: "video", src: "" },
        },
        {
          caption: "Gestión visual — image_da767c.png",
          web:    { type: "image", src: "" },
          mobile: { type: "image", src: "" },
        },
        {
          caption: "Visor de auditoría con detección inteligente de fechas",
          web:    { type: "image", src: "" },
          mobile: { type: "image", src: "" },
        },
        {
          caption: "Historial de versiones y responsables por documento",
          web:    { type: "image", src: "" },
          mobile: { type: "image", src: "" },
        },
        {
          caption: "Configuración de sub-empresas para consultoras y BPO",
          web:    { type: "image", src: "" },
          mobile: { type: "image", src: "" },
        },
      ],
    },
    heroLabel: "ControlDoc · Software de Control y Gestión Documental para Empresas en Latam",
    heroTitle: "Software de Control y Gestión Documental",
    heroDescription:
      "Plataforma SaaS de control documental y gestión de documentos para empresas en Argentina, México, Chile, Colombia, Perú y toda Latinoamérica. Centralizá la documentación de empleados, flota, contratistas y proveedores con OCR, alertas de vencimientos, trazabilidad de aprobaciones y compliance regulatorio. Reemplazá planillas, mails y carpetas compartidas por un sistema único, moderno y rápido.",
    heroStats: {
      value: "Gestión 360°",
      label: "Control total sobre cada legajo, expediente y vencimiento operativo",
    },
    valueProposition:
      "ControlDoc es el software de control documental para pymes y empresas medianas en Latam que reemplaza el caos de planillas, carpetas compartidas y mails por un sistema único: digitalización de documentos con OCR, auditoría documental, control de vencimientos, flujo de aprobación con historial de versiones, expediente digital de cada empleado o vehículo, repositorio documental con jerarquías y compliance HSE / RRHH / SST.",
    audiences: [
      {
        title: "Operaciones y Logística",
        description:
          "Mantené tu flota habilitada. El sistema vincula seguros, VTV y licencias a cada unidad, alertando al equipo antes de que el riesgo operativo sea una realidad.",
      },
      {
        title: "Recursos Humanos y Seguridad e Higiene",
        description:
          "Auditá contratos, carnets y capacitaciones. Asegurá que cada empleado cuente con la documentación vigente bajo estándares de cumplimiento profesional.",
      },
      {
        title: "Empresas BPO y Consultoras",
        description:
          "Gestioná múltiples clientes desde una vista global. Ofreceles dashboards dedicados con aislamiento de datos, manteniendo la jerarquía de tu gestión principal.",
      },
    ],
    problems: [
      "Software de gestión documental anticuado, lento y difícil de usar para el equipo operativo.",
      "Riesgos legales y multas por documentos vencidos sin un responsable claro.",
      "Pérdida de tiempo en carga manual de datos y corrección de errores de tipeo.",
      "Documentación dispersa en carpetas, mails y planillas sin trazabilidad.",
      "Auditorías externas lentas y costosas por falta de control documental.",
      "Errores en la habilitación de contratistas y proveedores para acceso a planta.",
    ],
    benefits: [
      "Interfaz moderna y rápida: diseñada para que el equipo trabaje con fluidez.",
      "OCR de alto rendimiento: lectura automática de fechas para minimizar la carga manual.",
      "Trazabilidad auditora: registro detallado de quién aprobó o rechazó cada documento.",
      "Estandarización automática: conversión de fotos y textos a PDF sin intervención del usuario.",
      "Aislamiento de datos: sistema de sub-empresas para manejar clientes o unidades de negocio.",
      "Integración nativa: compartí storage y sesión con el resto de tus herramientas operativas.",
    ],
    functionalities: [
      {
        title: "Tablero de Control Visual",
        description:
          "Semáforo de cumplimiento en tiempo real. Clasificación inmediata de documentos vencidos, próximos a vencer y pendientes de auditoría.",
        icon: Shield,
      },
      {
        title: "Auditoría Asistida (OCR)",
        description:
          "El sistema escanea los adjuntos y propone las fechas de vencimiento. El operador solo verifica, reduciendo el error humano y acelerando el proceso.",
        icon: FileText,
      },
      {
        title: "Flujo de Trabajo y Versiones",
        description:
          "Cada documento tiene un ciclo de vida: Pendiente, Aprobado o Rechazado con comentario. Mantené el historial de versiones para cumplir con cualquier auditoría externa.",
        icon: Receipt,
      },
      {
        title: "Normalización de Archivos",
        description:
          "Subí una foto o un Word; ControlDoc entrega un PDF estandarizado. Ideal para mantener un repositorio documental profesional y uniforme.",
        icon: FileText,
      },
      {
        title: "Jerarquías y Sub-empresas",
        description:
          "Configurá estructuras complejas. Definí documentos requeridos que apliquen a toda la organización o solo a subcontratistas específicos.",
        icon: FolderOpen,
      },
      {
        title: "Notificaciones de Compliance",
        description:
          "Alertas proactivas vía email para los responsables de área. Asegurá que el equipo actúe antes de que un documento cambie a estado crítico.",
        icon: Receipt,
      },
    ],
    useCases: [
      {
        title: "Control de Contratistas",
        description:
          "Asegurá que tus proveedores cumplan con toda la normativa antes de ingresar a planta, centralizando la recepción y auditoría de sus seguros y aportes.",
      },
      {
        title: "Gestión de Flota Vehicular",
        description:
          "Centralizá la documentación técnica y legal de tus unidades. Vinculá choferes a vehículos y mantené el control de vencimientos de cada componente.",
      },
      {
        title: "Auditoría de Legajos de RRHH",
        description:
          "Digitalizá y controlá la vigencia de toda la documentación del personal, desde exámenes médicos hasta recibos de sueldo y certificaciones técnicas.",
      },
    ],
    faq: [
      {
        question: "¿Qué es un software de control documental?",
        answer:
          "Un software de control documental (también llamado sistema de gestión documental o DMS) es una plataforma que centraliza la digitalización, almacenamiento, auditoría y control de vencimientos de la documentación de una empresa: empleados, flota, contratistas, proveedores y procesos. ControlDoc cubre todo el ciclo con OCR, trazabilidad de versiones, alertas automáticas y compliance regulatorio.",
      },
      {
        question: "¿Cuál es la diferencia entre control documental y gestión documental?",
        answer:
          "La gestión documental abarca todo el ciclo del documento (creación, almacenamiento, recuperación, archivo). El control documental se enfoca en garantizar la vigencia, aprobación y trazabilidad de cada documento crítico. ControlDoc combina ambas: gestionás todos tus documentos y controlás los vencimientos y aprobaciones de los que importan.",
      },
      {
        question: "¿Sirve para empresas en México, Chile, Colombia o Perú?",
        answer:
          "Sí. ControlDoc opera como SaaS en toda Latinoamérica y funciona para empresas en Argentina, México, Chile, Colombia, Perú, Uruguay, Paraguay, Bolivia y Ecuador. La plataforma se adapta a las normativas locales de RRHH, HSE y compliance corporativo.",
      },
      {
        question: "¿Funciona para pymes o solo para empresas grandes?",
        answer:
          "Funciona para ambos. Las pymes acceden a un sistema profesional de gestión documental sin la complejidad ni el costo de los DMS tradicionales. Las empresas medianas y consultoras BPO usan las jerarquías y sub-empresas para gestionar múltiples clientes o unidades de negocio.",
      },
      {
        question: "¿Cómo elegir un software de gestión documental para mi empresa?",
        answer:
          "Buscá tres cosas: facilidad de uso (que el equipo lo adopte sin capacitación eterna), automatización (OCR, alertas y conversión a PDF para reducir carga manual) y trazabilidad real (historial de versiones, quién aprobó qué, exportable para auditorías). ControlDoc fue diseñado priorizando esas tres dimensiones.",
      },
      {
        question: "¿Cómo se diferencia de un sistema tradicional?",
        answer:
          "ControlDoc prioriza la experiencia de usuario y la velocidad. Mientras otros DMS son pesados y complejos, nosotros ofrecemos una plataforma SaaS moderna, intuitiva y con herramientas de automatización como el OCR de fechas.",
      },
      {
        question: "¿Es seguro para manejar datos de múltiples clientes?",
        answer:
          "Sí. Contamos con un sistema de aislamiento de datos que permite a consultoras y empresas BPO gestionar la documentación de sus clientes sin riesgo de cruce de información.",
      },
      {
        question: "¿Qué pasa si un documento es rechazado?",
        answer:
          "El auditor deja un comentario obligatorio explicando el motivo. El usuario recibe la notificación, puede subir una nueva versión y todo el historial queda registrado para consulta futura.",
      },
    ],
    finalCta: {
      primaryLabel: "Comenzar con ControlDoc",
      primaryHref: "/",
      secondaryLabel: "Conocer el ecosistema ControlApps",
      secondaryHref: "https://controlapp.vercel.app",
    },
    platformIntegration: {
      title: "Potencia tu gestión con el ecosistema ControlApps",
      description:
        "ControlDoc no es una herramienta aislada. Se integra de forma nativa con el resto de la suite para ofrecer una experiencia operativa unificada.",
      bullets: [
        "Gestión de acceso unificada: un solo usuario para todo tu control operativo.",
        "Repositorio compartido: accedé a los documentos aprobados directamente desde ControlFile.",
        "Escalabilidad inmediata: sumá módulos de auditoría o storage sin configuraciones complejas.",
      ],
    },
    relatedApps: [],
  },
}
