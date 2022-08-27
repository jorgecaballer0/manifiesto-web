import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Form = () => {
  const [textSend, setTextSend] = useState(false);

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        // process.env.REACT_APP_SERVICES_ID,
        // process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        // process.env.REACT_APP_PUBLIC_KEY
      )
      .then((response) => {
        if (response.status === 200) {
          setTextSend(true);
          setTimeout(() => {
            setTextSend(false);
          }, 3000);
        }
        console.log(response.text);
      })
      .catch((error) => {
        console.log(error);
      });
    e.target.reset();
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div>
        <input
          type="text"
          name="name"
          placeholder="Ingresá tu nombre"
          required
        />
        <input
          type="text"
          name="surname"
          placeholder="Ingresá tu apellido"
          required
        />
      </div>
      <div>
        <input
          type="text"
          name="phone"
          placeholder="Ingresá tu N° de telefono"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Ingresá tu e-mail"
          required
        />
      </div>
      <textarea
        name="message"
        cols="30"
        rows="10"
        placeholder="Ingresá tu consulta"
        required
      ></textarea>
      <div>
        <button type="submit">Enviar mensaje</button>
        {textSend && (
          <div>
            <p>
              ¡Muchas gracias por tu mensaje! Nos estaremos contactando a la
              brevedad
            </p>
          </div>
        )}
      </div>
    </form>
  );
};

export default Form;
