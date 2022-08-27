import React from "react";
import Form from "./Form";

const Contact = () => {
  return (
    <section id="contacto" className="container">
      <div className="box contact">
        <h1>Contacto</h1>
        <div>
          <p>
            ¿Tenés alguna consulta? Escribime. 
          </p>
          <p>
            Estoy para ayudarte y brindarte la mejor atención.
          </p>
        </div>
        <Form />
      </div>      
    </section>
  );
};

export default Contact;
