//components/terminos.tsx
import React from 'react';

// Componente para mostrar los términos y condiciones
const Terminos = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Términos y Condiciones – ControlDoc</h1>
      <section className="mb-4">
        <h2 className="text-xl font-semibold">📝 Uso del sitio</h2>
        <p>El acceso y uso de ControlDoc implica la aceptación de estos términos y condiciones. Nos reservamos el derecho de modificar contenidos, servicios o configuraciones del sitio sin previo aviso.</p>
      </section>
      <section className="mb-4">
        <h2 className="text-xl font-semibold">📌 Responsabilidades del usuario</h2>
        <p>El usuario debe utilizar el sitio de forma correcta, respetuosa y conforme a la ley. No puede modificar contenidos, enviar material ofensivo o dañar el sitio con virus o código malicioso.</p>
      </section>
      <section className="mb-4">
        <h2 className="text-xl font-semibold">❗ Limitación de responsabilidad</h2>
        <p>ControlDoc no se responsabiliza por daños derivados del uso del sitio ni por el contenido de sitios externos vinculados. El uso del sitio es bajo riesgo propio del usuario.</p>
      </section>
      <section className="mb-4">
        <h2 className="text-xl font-semibold">📴 Modificaciones o interrupciones</h2>
        <p>La empresa puede suspender temporal o definitivamente la web sin aviso y sin generar derechos a indemnización.</p>
      </section>
      <section className="mb-4">
        <h2 className="text-xl font-semibold">⚖️ Propiedad intelectual</h2>
        <p>Todo el contenido, marcas y referencias en el sitio pertenecen a sus respectivos titulares. El uso no autorizado es responsabilidad del usuario.</p>
      </section>
      <section className="mb-4">
        <h2 className="text-xl font-semibold">🏛 Jurisdicción y protección de datos</h2>
        <p>Los datos personales están protegidos conforme a la Ley Nacional 25.326 de la República Argentina. El usuario tiene derecho a acceder, modificar o eliminar sus datos.</p>
      </section>
    </div>
  );
};

export default Terminos;