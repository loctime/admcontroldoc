import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, Shield, Settings, UserCheck } from "lucide-react"
import WikiBreadcrumb from "@/components/wikiAdm/WikiBreadcrumb"

export default function UsuariosPage() {
  return (
    <div className="space-y-8">
      <WikiBreadcrumb
        items={[
          { title: "Wiki", href: "/wiki" },
          { title: "Gestión de Usuarios", href: "/wiki/usuarios" },
        ]}
      />

      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <h1 className="text-4xl font-bold tracking-tight">Gestión de Usuarios</h1>
          <Badge>Completo</Badge>
        </div>
        <p className="text-xl text-muted-foreground">
          Sistema completo de autenticación, autorización y gestión de usuarios con Firebase Auth.
        </p>
      </div>

      <Tabs defaultValue="auth" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="auth">Autenticación</TabsTrigger>
          <TabsTrigger value="panel">Panel Usuario</TabsTrigger>
          <TabsTrigger value="roles">Roles y Permisos</TabsTrigger>
          <TabsTrigger value="admin">Administración</TabsTrigger>
        </TabsList>

        <TabsContent value="auth" className="space-y-6">
          <Card className="backdrop-blur-sm bg-white/10 dark:bg-gray-900/30 shadow-lg border-0">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="h-5 w-5" />
                <span>Sistema de Autenticación</span>
              </CardTitle>
              <CardDescription>Implementación con Firebase Auth y Context API para gestión de estado</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold">Métodos de Autenticación</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Email y contraseña</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Google OAuth</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <span>Recuperación de contraseña</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>Verificación de email</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold">Características de Seguridad</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Tokens JWT automáticos</li>
                    <li>• Refresh tokens</li>
                    <li>• Sesiones persistentes</li>
                    <li>• Rate limiting</li>
                    <li>• Validación de dominios</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="backdrop-blur-sm bg-white/10 dark:bg-gray-900/30 shadow-lg border-0">
            <CardHeader>
              <CardTitle>Flujo de Autenticación</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-muted p-4 rounded-lg">
                  <h5 className="font-semibold mb-2">1. Inicio de Sesión</h5>
                  <p className="text-sm text-muted-foreground">
                    Usuario ingresa credenciales → Firebase Auth valida → Token JWT generado → Context actualizado →
                    Redirección al dashboard
                  </p>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <h5 className="font-semibold mb-2">2. Verificación de Sesión</h5>
                  <p className="text-sm text-muted-foreground">
                    onAuthStateChanged listener → Verificación de token → Actualización de estado → Protección de rutas
                  </p>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <h5 className="font-semibold mb-2">3. Cierre de Sesión</h5>
                  <p className="text-sm text-muted-foreground">
                    signOut() → Limpieza de tokens → Reset de contexto → Redirección a login
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="panel" className="space-y-6">
          <Card className="backdrop-blur-sm bg-white/10 dark:bg-gray-900/30 shadow-lg border-0">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="h-5 w-5" />
                <span>Panel de Usuario</span>
              </CardTitle>
              <CardDescription>Interfaz principal para gestión de documentos por parte de los usuarios</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold">Secciones del Panel</h4>
                  <div className="space-y-3">
                    <div className="p-3 border rounded-lg">
                      <h5 className="font-medium">DOCUMENTOS</h5>
                      <p className="text-sm text-muted-foreground">Categorías personalizadas</p>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <h5 className="font-medium">EMPRESA</h5>
                      <p className="text-sm text-muted-foreground">Documentos corporativos</p>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <h5 className="font-medium">VEHÍCULOS</h5>
                      <p className="text-sm text-muted-foreground">Documentación vehicular</p>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <h5 className="font-medium">PERSONAL</h5>
                      <p className="text-sm text-muted-foreground">Documentos del empleado</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold">Funcionalidades</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Subida de documentos drag & drop</li>
                    <li>• Procesamiento OCR automático</li>
                    <li>• Vista previa de documentos</li>
                    <li>• Validación de campos requeridos</li>
                    <li>• Notificaciones en tiempo real</li>
                    <li>• Historial de cambios</li>
                    <li>• Exportación de reportes</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="roles" className="space-y-6">
          <Card className="backdrop-blur-sm bg-white/10 dark:bg-gray-900/30 shadow-lg border-0">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <UserCheck className="h-5 w-5" />
                <span>Sistema de Roles y Permisos</span>
              </CardTitle>
              <CardDescription>Control granular de acceso basado en roles y permisos específicos</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="backdrop-blur-sm bg-white/10 dark:bg-gray-900/30 shadow-lg border-0">
                  <CardHeader>
                    <CardTitle className="text-lg">Super Admin</CardTitle>
                    <Badge variant="destructive">Máximo Acceso</Badge>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm space-y-1">
                      <li>• Gestión completa del sistema</li>
                      <li>• Configuración global</li>
                      <li>• Gestión de usuarios</li>
                      <li>• Acceso a todos los datos</li>
                      <li>• Configuración de seguridad</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="backdrop-blur-sm bg-white/10 dark:bg-gray-900/30 shadow-lg border-0">
                  <CardHeader>
                    <CardTitle className="text-lg">Admin Empresa</CardTitle>
                    <Badge variant="default">Acceso Empresarial</Badge>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm space-y-1">
                      <li>• Gestión de su empresa</li>
                      <li>• Administrar empleados</li>
                      <li>• Ver reportes empresariales</li>
                      <li>• Configurar categorías</li>
                      <li>• Aprobar documentos</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="backdrop-blur-sm bg-white/10 dark:bg-gray-900/30 shadow-lg border-0">
                  <CardHeader>
                    <CardTitle className="text-lg">Usuario</CardTitle>
                    <Badge variant="secondary">Acceso Básico</Badge>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm space-y-1">
                      <li>• Subir sus documentos</li>
                      <li>• Ver su información</li>
                      <li>• Actualizar perfil</li>
                      <li>• Recibir notificaciones</li>
                      <li>• Descargar documentos</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="admin" className="space-y-6">
          <Card className="backdrop-blur-sm bg-white/10 dark:bg-gray-900/30 shadow-lg border-0">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Settings className="h-5 w-5" />
                <span>Panel Administrativo</span>
              </CardTitle>
              <CardDescription>Herramientas de administración y configuración del sistema</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold">Gestión de Usuarios</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Lista completa de usuarios</li>
                    <li>• Filtros y búsqueda avanzada</li>
                    <li>• Asignación de roles</li>
                    <li>• Activar/desactivar cuentas</li>
                    <li>• Resetear contraseñas</li>
                    <li>• Auditoría de accesos</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold">Configuración del Sistema</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Configuración de categorías</li>
                    <li>• Campos requeridos</li>
                    <li>• Reglas de validación</li>
                    <li>• Configuración OCR</li>
                    <li>• Límites de almacenamiento</li>
                    <li>• Configuración de notificaciones</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
