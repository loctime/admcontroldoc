import React from 'react';

// Componente para mostrar la política de privacidad de forma profesional
const Legal = () => {
  return (
    <div className="container mx-auto p-8 text-gray-900 dark:text-gray-100">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">Política de Privacidad</h1>
        <p className="text-md text-gray-500 dark:text-gray-400 mt-2">Última actualización: 24 de mayo de 2024</p>
      </header>

      <div className="max-w-4xl mx-auto">
        <p className="mb-8 text-lg leading-relaxed text-gray-900 dark:text-gray-100">
          En ControlDoc, tu privacidad es nuestra prioridad. Esta Política de Privacidad describe cómo recopilamos, usamos y protegemos tu información personal cuando utilizas nuestros servicios. Al acceder a nuestra plataforma, aceptas las prácticas descritas en este documento.
        </p>

        <section className="mb-8 p-6 bg-white/80 dark:bg-black/60 rounded-lg border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">1. Protección y Tratamiento de Datos Personales</h2>
          <p className="mb-4">
            Nos comprometemos a proteger tus datos y a utilizarlos de manera responsable. Solo recopilamos la información estrictamente necesaria para ofrecer y mejorar nuestros servicios.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li><span className="font-semibold">Datos Recopilados:</span> Nombre, dirección de correo electrónico, e información demográfica relevante.</li>
            <li><span className="font-semibold">Confidencialidad:</span> Tu información no será vendida, alquilada ni cedida a terceros sin tu consentimiento explícito, salvo por requerimiento legal.</li>
          </ul>
        </section>

        <section className="mb-8 p-6 bg-white/80 dark:bg-black/60 rounded-lg border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">2. Finalidad del Uso de la Información</h2>
          <p className="mb-4">
            La información recopilada se utiliza para los siguientes propósitos:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>Gestión de cuentas de usuario y seguimiento de servicios contratados.</li>
            <li>Optimización y mejora continua de nuestra plataforma y experiencia de usuario.</li>
            <li>Envío de comunicaciones de marketing y novedades, con la opción de cancelar la suscripción en cualquier momento.</li>
          </ul>
        </section>

        <section className="mb-8 p-6 bg-white/80 dark:bg-black/60 rounded-lg border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">3. Uso de Cookies</h2>
          <p className="mb-4">
            Utilizamos cookies para personalizar tu experiencia y para análisis estadístico. Puedes gestionar tus preferencias de cookies desde la configuración de tu navegador.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li><span className="font-semibold">Control del Usuario:</span> Tienes la opción de aceptar o rechazar el uso de cookies. Sin embargo, el rechazo puede limitar la funcionalidad de ciertos servicios.</li>
          </ul>
        </section>

        <section className="mb-8 p-6 bg-white/80 dark:bg-black/60 rounded-lg border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">4. Enlaces a Sitios de Terceros</h2>
          <p className="mb-4">
            Nuestra plataforma puede incluir enlaces a sitios web de terceros. No nos hacemos responsables de sus políticas de privacidad ni de su contenido. Te recomendamos leer sus políticas antes de proporcionar cualquier dato.
          </p>
        </section>

        <section className="mb-8 p-6 bg-white/80 dark:bg-black/60 rounded-lg border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">5. Control sobre tu Información</h2>
          <p className="mb-4">
            Tienes pleno control sobre tu información personal. En cualquier momento, puedes ejercer tus derechos de acceso, rectificación, cancelación y oposición (ARCO).
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>Puedes restringir la recopilación o el uso de tus datos.</li>
            <li>Puedes cancelar tu suscripción a nuestras comunicaciones.</li>
          </ul>
        </section>

        <section className="p-6 bg-white/80 dark:bg-black/60 rounded-lg border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">6. Modificaciones a esta Política</h2>
          <p>
            ControlDoc se reserva el derecho de modificar esta Política de Privacidad en cualquier momento. Cualquier cambio será notificado a través de nuestra plataforma. Te recomendamos revisar esta página periódicamente para estar informado.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Legal;