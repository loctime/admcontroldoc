import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, Scan, Database, CheckCircle, Eye } from "lucide-react"
import WikiBreadcrumb from "@/components/wikiAdm/WikiBreadcrumb"

export default function DocumentosPage() {
  return (
    <div className="space-y-8">
      <WikiBreadcrumb
        items={[
          { title: "Wiki", href: "/wiki" },
          { title: "Sistema de Documentos", href: "/wiki/documentos" },
        ]}
      />

      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <h1 className="text-4xl font-bold tracking-tight">Sistema de Documentos</h1>
          <Badge>Completo</Badge>
        </div>
        <p className="text-xl text-muted-foreground">
          Procesamiento OCR, almacenamiento inteligente y gestión completa de documentos empresariales.
        </p>
      </div>

      <Tabs defaultValue="ocr" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="ocr">OCR</TabsTrigger>
          <TabsTrigger value="storage">Almacenamiento</TabsTrigger>
          <TabsTrigger value="categories">Categorías</TabsTrigger>
          <TabsTrigger value="validation">Validación</TabsTrigger>
          <TabsTrigger value="viewer">Visor</TabsTrigger>
        </TabsList>

        <TabsContent value="ocr" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Scan className="h-5 w-5" />
                <span>Procesamiento OCR</span>
              </CardTitle>
              <CardDescription>
                Extracción automática de texto y datos de documentos usando tecnología OCR avanzada
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold">Tecnologías Utilizadas</h4>
                  <div className="space-y-3">
                    <div className="p-3 border rounded-lg">
                      <h5 className="font-medium">Tesseract.js</h5>
                      <p className="text-sm text-muted-foreground">OCR principal para texto general</p>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <h5 className="font-medium">Google Vision API</h5>
                      <p className="text-sm text-muted-foreground">OCR avanzado para documentos complejos</p>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <h5 className="font-medium">PDF.js</h5>
                      <p className="text-sm text-muted-foreground">Procesamiento de archivos PDF</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold">Tipos de Documentos Soportados</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Cédulas de identidad</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Licencias de conducir</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Documentos vehiculares</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Certificados médicos</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Documentos empresariales</span>
                    </li>
                  </ul>
                </div>
              </div>

              <Card className="bg-muted/50">
                <CardHeader>
                  <CardTitle className="text-lg">Flujo de Procesamiento OCR</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        1
                      </div>
                      <div>
                        <p className="font-medium">Subida de Documento</p>
                        <p className="text-sm text-muted-foreground">Usuario sube imagen o PDF</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        2
                      </div>
                      <div>
                        <p className="font-medium">Preprocesamiento</p>
                        <p className="text-sm text-muted-foreground">Mejora de calidad, rotación, recorte</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        3
                      </div>
                      <div>
                        <p className="font-medium">Extracción OCR</p>
                        <p className="text-sm text-muted-foreground">Procesamiento con múltiples engines</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        4
                      </div>
                      <div>
                        <p className="font-medium">Validación y Limpieza</p>
                        <p className="text-sm text-muted-foreground">Corrección de errores, validación de formato</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        5
                      </div>
                      <div>
                        <p className="font-medium">Almacenamiento</p>
                        <p className="text-sm text-muted-foreground">Guardado en Firestore con metadatos</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="storage" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Database className="h-5 w-5" />
                <span>Sistema de Almacenamiento</span>
              </CardTitle>
              <CardDescription>Arquitectura de almacenamiento híbrida con Firebase Storage y Firestore</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Firebase Storage</CardTitle>
                    <CardDescription>Almacenamiento de archivos</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Archivos originales (PDF, imágenes)</li>
                      <li>• Versiones procesadas</li>
                      <li>• Thumbnails automáticos</li>
                      <li>• Compresión inteligente</li>
                      <li>• CDN global</li>
                      <li>• Backup automático</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Firestore Database</CardTitle>
                    <CardDescription>Metadatos y estructura</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Metadatos de documentos</li>
                      <li>• Texto extraído por OCR</li>
                      <li>• Historial de cambios</li>
                      <li>• Índices de búsqueda</li>
                      <li>• Relaciones entre entidades</li>
                      <li>• Configuración de acceso</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-muted/50">
                <CardHeader>
                  <CardTitle className="text-lg">Estructura de Colecciones</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="font-mono text-sm bg-background p-4 rounded-lg">
                      <div className="space-y-2">
                        <div>
                          📁 <span className="text-blue-600">companies/</span>
                        </div>
                        <div className="ml-4">
                          📁 <span className="text-green-600">{"{companyId}"}/</span>
                        </div>
                        <div className="ml-8">
                          📁 <span className="text-purple-600">documents/</span>
                        </div>
                        <div className="ml-12">
                          📄 <span className="text-orange-600">{"{documentId}"}</span>
                        </div>
                        <div className="ml-8">
                          📁 <span className="text-purple-600">users/</span>
                        </div>
                        <div className="ml-12">
                          👤 <span className="text-orange-600">{"{userId}"}</span>
                        </div>
                        <div className="ml-8">
                          📁 <span className="text-purple-600">categories/</span>
                        </div>
                        <div className="ml-12">
                          🏷️ <span className="text-orange-600">{"{categoryId}"}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="categories" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileText className="h-5 w-5" />
                <span>Sistema de Categorías</span>
              </CardTitle>
              <CardDescription>Organización flexible de documentos por categorías personalizables</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Empresa</CardTitle>
                    <Badge variant="default">Corporativo</Badge>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm space-y-1">
                      <li>• RUC</li>
                      <li>• Constitución</li>
                      <li>• Poderes</li>
                      <li>• Certificados</li>
                      <li>• Contratos</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Personal</CardTitle>
                    <Badge variant="secondary">Empleados</Badge>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm space-y-1">
                      <li>• Cédula</li>
                      <li>• Licencia</li>
                      <li>• Certificado médico</li>
                      <li>• Antecedentes</li>
                      <li>• Contratos</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Vehículos</CardTitle>
                    <Badge variant="outline">Transporte</Badge>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm space-y-1">
                      <li>• Matrícula</li>
                      <li>• SOAT</li>
                      <li>• Revisión técnica</li>
                      <li>• Póliza</li>
                      <li>• Permisos</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Personalizadas</CardTitle>
                    <Badge variant="destructive">Flexible</Badge>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm space-y-1">
                      <li>• Definidas por admin</li>
                      <li>• Campos configurables</li>
                      <li>• Validaciones custom</li>
                      <li>• Flujos específicos</li>
                      <li>• Reportes dedicados</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="validation" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5" />
                <span>Sistema de Validación</span>
              </CardTitle>
              <CardDescription>
                Validación automática y manual de documentos con múltiples niveles de verificación
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg text-blue-600">Validación Automática</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm space-y-2">
                      <li>• Formato de archivo</li>
                      <li>• Tamaño y resolución</li>
                      <li>• Calidad de imagen</li>
                      <li>• Detección de texto</li>
                      <li>• Campos requeridos</li>
                      <li>• Formato de datos</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg text-green-600">Validación Inteligente</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm space-y-2">
                      <li>• Verificación de cédulas</li>
                      <li>• Validación de fechas</li>
                      <li>• Coherencia de datos</li>
                      <li>• Detección de duplicados</li>
                      <li>• Análisis de autenticidad</li>
                      <li>• Cross-validation</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg text-purple-600">Validación Manual</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm space-y-2">
                      <li>• Revisión por administrador</li>
                      <li>• Aprobación de documentos</li>
                      <li>• Corrección de errores</li>
                      <li>• Comentarios y notas</li>
                      <li>• Flujo de aprobación</li>
                      <li>• Auditoría completa</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="viewer" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Eye className="h-5 w-5" />
                <span>Visor de Documentos</span>
              </CardTitle>
              <CardDescription>
                Visualización avanzada de documentos con anotaciones y herramientas de análisis
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold">Características del Visor</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Zoom y navegación fluida</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Rotación de documentos</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Modo pantalla completa</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Anotaciones y comentarios</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Comparación lado a lado</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Descarga y impresión</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold">Formatos Soportados</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="p-2 bg-muted rounded text-center text-sm">PDF</div>
                    <div className="p-2 bg-muted rounded text-center text-sm">JPG</div>
                    <div className="p-2 bg-muted rounded text-center text-sm">PNG</div>
                    <div className="p-2 bg-muted rounded text-center text-sm">WEBP</div>
                    <div className="p-2 bg-muted rounded text-center text-sm">TIFF</div>
                    <div className="p-2 bg-muted rounded text-center text-sm">BMP</div>
                  </div>
                </div>
              </div>

              <Card className="bg-muted/50">
                <CardHeader>
                  <CardTitle className="text-lg">Integración con OCR</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    El visor está completamente integrado con el sistema OCR, permitiendo:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ul className="text-sm space-y-2">
                      <li>• Resaltado de texto extraído</li>
                      <li>• Corrección manual de OCR</li>
                      <li>• Validación visual de datos</li>
                    </ul>
                    <ul className="text-sm space-y-2">
                      <li>• Mapeo de campos automático</li>
                      <li>• Verificación de precisión</li>
                      <li>• Exportación de datos</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
