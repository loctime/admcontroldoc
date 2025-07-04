# Panel de usuario e interfaces

## Archivos fuente relevantes

Este documento cubre el sistema de panel de control orientado al usuario que proporciona interfaces de gestión de documentos para los usuarios finales (empresas y sus empleados). El panel permite a los usuarios cargar, ver y administrar los documentos necesarios en diferentes tipos de entidades (empresa, empleado, vehículo y categorías personalizadas).

Para interfaces administrativas y gestión de sistemas, consulte **Sistemas administrativos**. Para conocer las capacidades de procesamiento de documentos y OCR, consulte **Sistema de procesamiento de documentos**.

---

## Descripción general de la arquitectura del panel

El panel de usuario sigue un patrón de interfaz basado en pestañas con paneles separados para diferentes categorías de documentos. El sistema utiliza React Context para la gestión de estados y Firebase Firestore para la sincronización de documentos en tiempo real.

- **Firebase Integration**
- **Context & Hooks**
- **Modal System**
- **Document Management Panels**
- **Main Dashboard Component**
  - UsuarioDashboard
  - useDashboardData
  - CompanyHeader
  - CompanyStatusBadge
  - CustomDocumentsPanel
  - EmpresaDocumentsPanel
  - PersonalPanel
  - VehiculosPanel
  - ModalDocument
  - ModalDocumentWithConversion
  - VistaPrevia
  - AuthContext
  - useDocumentAlerts
  - useFileAnalysis

### Firestore Collections

- requiredDocuments
- uploadedDocuments

**Fuentes:**  
`src/entidad/usuario/UsuarioDashboard.jsx` 1-238  
`src/entidad/user/CustomPanel/CustomDocumentsPanel.jsx` 1-272  
`src/entidad/usuario/EmpresaPanel/EmpresaDocumentsPanel.jsx` 1-254

---

## Componente principal del panel de control

El `UsuarioDashboard` sirve como contenedor principal para todas las interfaces de gestión de documentos de usuario. Implementa una interfaz con pestañas con cuatro secciones principales:

| Tab        | Componente             | Propósito                              |
|------------|------------------------|----------------------------------------|
| DOCUMENTOS | CustomDocumentsPanel   | Categorías de documentos personalizados|
| EMPRESA    | EmpresaDocumentsPanel  | Documentos específicos de la empresa   |
| VEHICULOS  | VehiculosPanel         | Documentos relacionados con el vehículo|
| PERSONAL   | PersonalPanel          | Documentos específicos del empleado    |

...

*(continúa con el resto de tu texto, puedes usar títulos, listas, tablas, etc.)*