import React from "react";
import Form from "./Form";

const Contact = () => {
  return (
    <section id="contacto">
      <h1>Contacto</h1>
      <p>
        ¿Tenés alguna consulta? Escribime. Estoy para ayudarte y brindarte la
        mejor atención.
      </p>
      <div className="contact">
        <Form />
      </div>
    </section>
  );
};

export default Contact;
