import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Code, Database, Globe, Server, Smartphone, Cloud } from "lucide-react"
import WikiBreadcrumb from "@/components/wikiAdm/WikiBreadcrumb"

export default function ArquitecturaPage() {
  return (
    <div className="space-y-8">
      <WikiBreadcrumb
        items={[
          { title: "Wiki", href: "/wiki" },
          { title: "Arquitectura", href: "/wiki/arquitectura" },
        ]}
      />

      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <h1 className="text-4xl font-bold tracking-tight">Arquitectura del Sistema</h1>
          <Badge>Actualizado</Badge>
        </div>
        <p className="text-xl text-muted-foreground">
          Diseño general, patrones arquitectónicos y estructura del sistema de gestión de documentos.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Globe className="h-5 w-5 text-blue-500" />
              <CardTitle>Frontend</CardTitle>
            </div>
            <CardDescription>Interfaz de usuario y experiencia</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li>• Next.js 15 con App Router</li>
              <li>• React 18 con TypeScript</li>
              <li>• Tailwind CSS + Radix UI</li>
              <li>• React Hook Form + Zod</li>
              <li>• Estado global con Context API</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Server className="h-5 w-5 text-green-500" />
              <CardTitle>Backend</CardTitle>
            </div>
            <CardDescription>Lógica de negocio y APIs</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li>• Next.js API Routes</li>
              <li>• Server Actions</li>
              <li>• Middleware de autenticación</li>
              <li>• Validación con Zod</li>
              <li>• Rate limiting</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Database className="h-5 w-5 text-purple-500" />
              <CardTitle>Base de Datos</CardTitle>
            </div>
            <CardDescription>Almacenamiento y persistencia</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li>• Firebase Firestore</li>
              <li>• Firebase Storage</li>
              <li>• Índices compuestos</li>
              <li>• Reglas de seguridad</li>
              <li>• Backup automático</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Code className="h-5 w-5" />
            <span>Diagrama de Arquitectura</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-muted p-6 rounded-lg">
            <div className="text-center space-y-4">
              <div className="flex justify-center items-center space-x-8">
                <div className="text-center">
                  <Smartphone className="h-12 w-12 mx-auto mb-2 text-blue-500" />
                  <p className="font-semibold">Cliente Web</p>
                  <p className="text-sm text-muted-foreground">Next.js + React</p>
                </div>
                <div className="text-2xl">→</div>
                <div className="text-center">
                  <Server className="h-12 w-12 mx-auto mb-2 text-green-500" />
                  <p className="font-semibold">API Server</p>
                  <p className="text-sm text-muted-foreground">Next.js API Routes</p>
                </div>
                <div className="text-2xl">→</div>
                <div className="text-center">
                  <Cloud className="h-12 w-12 mx-auto mb-2 text-purple-500" />
                  <p className="font-semibold">Firebase</p>
                  <p className="text-sm text-muted-foreground">Firestore + Storage</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Patrones Arquitectónicos</h2>

        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Patrón MVC Moderno</CardTitle>
              <CardDescription>Separación clara de responsabilidades</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-blue-600">Model (Modelo)</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Esquemas Zod</li>
                    <li>• Tipos TypeScript</li>
                    <li>• Validaciones</li>
                    <li>• Transformaciones</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-green-600">View (Vista)</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Componentes React</li>
                    <li>• Páginas Next.js</li>
                    <li>• UI Components</li>
                    <li>• Layouts</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-purple-600">Controller (Controlador)</h4>
                  <ul className="text-sm space-y-1">
                    <li>• API Routes</li>
                    <li>• Server Actions</li>
                    <li>• Custom Hooks</li>
                    <li>• Context Providers</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Arquitectura por Capas</CardTitle>
              <CardDescription>Organización modular del código</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                  <div className="w-4 h-4 bg-blue-500 rounded"></div>
                  <div>
                    <p className="font-semibold">Capa de Presentación</p>
                    <p className="text-sm text-muted-foreground">Componentes UI, páginas, layouts</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                  <div className="w-4 h-4 bg-green-500 rounded"></div>
                  <div>
                    <p className="font-semibold">Capa de Lógica de Negocio</p>
                    <p className="text-sm text-muted-foreground">Hooks personalizados, servicios, validaciones</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg">
                  <div className="w-4 h-4 bg-purple-500 rounded"></div>
                  <div>
                    <p className="font-semibold">Capa de Acceso a Datos</p>
                    <p className="text-sm text-muted-foreground">Firebase SDK, API clients, caché</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Separator />

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Tecnologías Principales</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: "Next.js 15", desc: "Framework React" },
            { name: "TypeScript", desc: "Tipado estático" },
            { name: "Firebase", desc: "Backend as a Service" },
            { name: "Tailwind CSS", desc: "Framework CSS" },
            { name: "Radix UI", desc: "Componentes UI" },
            { name: "React Hook Form", desc: "Gestión de formularios" },
            { name: "Zod", desc: "Validación de esquemas" },
            { name: "Lucide React", desc: "Iconografía" },
          ].map((tech) => (
            <Card key={tech.name} className="text-center">
              <CardContent className="pt-4">
                <p className="font-semibold">{tech.name}</p>
                <p className="text-sm text-muted-foreground">{tech.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
