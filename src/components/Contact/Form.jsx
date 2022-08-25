import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Form = () => {
  const [sendForm, setSendForm] = useState(false);

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        // "service_9xh9j7u",
        // "template_55v539u",
        form.current
        // "M54wTzfoq4u_kvpgp"
      )
      .then((response) => {
        console.log(response.text);
      })
      .catch((error) => {
        console.log(error);
      });
    e.target.reset();
  };

  const handleClick = () => {
    setSendForm(true);
    setTimeout(() => {
      setSendForm(false);
    }, 2000);
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label htmlFor="">Nombre</label>
      <input type="text" name="name" placeholder="Ingresá tu nombre" required />
      <label htmlFor="">Correo</label>
      <input
        type="email"
        name="email"
        placeholder="Ingresá tu e-mail"
        required
      />
      <label htmlFor="">Consulta</label>
      <textarea
        name="message"
        cols="30"
        rows="10"
        placeholder="Ingresá tu consulta"
        required
      ></textarea>
      <button type="submit" onClick={handleClick}>
        Enviar mensaje
      </button>
      {sendForm && (
        <div>
          <p>
            ¡Muchas gracias por tu mensaje! Nos estaremos contactando a la
            brevedad
          </p>
        </div>
      )}
    </form>
  );
};

export default Form;
