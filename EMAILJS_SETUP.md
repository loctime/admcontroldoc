# Configuración de EmailJS para el Formulario de Contacto

## Pasos para configurar EmailJS:

### 1. Crear cuenta en EmailJS
- Ve a [https://www.emailjs.com/](https://www.emailjs.com/)
- Regístrate para una cuenta gratuita
- La cuenta gratuita permite 200 emails por mes

### 2. Configurar el servicio de email
- En el dashboard de EmailJS, ve a "Email Services"
- Haz clic en "Add New Service"
- Selecciona tu proveedor de email (Gmail, Outlook, etc.)
- Conecta tu cuenta de email
- Guarda el **Service ID** (ej: `service_abc123`)

### 3. Crear una plantilla de email
- Ve a "Email Templates"
- Haz clic en "Create New Template"
- Usa esta plantilla HTML:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Nuevo mensaje de contacto - ControlDoc</title>
</head>
<body>
    <h2>Nuevo mensaje de contacto desde ControlDoc</h2>
    
    <h3>Información del remitente:</h3>
    <p><strong>Nombre:</strong> {{from_name}}</p>
    <p><strong>Email:</strong> {{from_email}}</p>
    
    <h3>Mensaje:</h3>
    <p>{{message}}</p>
    
    <hr>
    <p><small>Este mensaje fue enviado desde el formulario de contacto de ControlDoc</small></p>
</body>
</html>
```

- Guarda la plantilla y copia el **Template ID** (ej: `template_xyz789`)

### 4. Obtener la clave pública
- Ve a "Account" → "API Keys"
- Copia tu **Public Key** (ej: `user_def456`)

### 5. Configurar variables de entorno
- Crea un archivo `.env.local` en la raíz del proyecto
- Agrega las siguientes variables:

```env
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=tu_public_key_aqui
NEXT_PUBLIC_EMAILJS_SERVICE_ID=tu_service_id_aqui
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=tu_template_id_aqui
```

### 6. Probar el formulario
- Reinicia el servidor de desarrollo: `npm run dev`
- Ve al formulario de contacto
- Completa y envía un mensaje de prueba
- Verifica que recibas el email en `controldoc@controldoc.app`

## Características implementadas:

✅ **Envío de emails reales** a controldoc@controldoc.app
✅ **Estados de carga** con spinner animado
✅ **Mensajes de éxito/error** con iconos
✅ **Validación de formulario** con campos requeridos
✅ **Deshabilitación durante envío** para evitar envíos múltiples
✅ **Limpieza automática** del formulario después del envío exitoso
✅ **Logs de consola** para debugging

## Notas importantes:

- El archivo `.env.local` NO debe subirse a Git (ya está en .gitignore)
- La cuenta gratuita de EmailJS permite 200 emails por mes
- Los emails se envían desde tu cuenta de email configurada
- El campo "reply_to" está configurado para que puedas responder directamente al remitente 