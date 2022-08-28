import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Form = () => {
  const [sending, setSending] = useState(false);
  const [textSend, setTextSend] = useState(false);

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICES_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then((response) => {
        setSending(true);
        setTimeout(() => {
          setSending(false);
          setTextSend(true);
          setTimeout(() => {
            setTextSend(false);
          }, 4000);
        }, 1000);
        console.log(response.text);
      })
      .catch((error) => {
        console.log(error);
      });
    e.target.reset();
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className="contact-form">
        <div>
          <input type="text" name="name" placeholder="Nombre" required />
          <input type="text" name="surname" placeholder="Apellido" required />
        </div>
        <div>
          <input type="tel" name="phone" placeholder="Telefono" required />
          <input type="email" name="email" placeholder="E-mail" required />
        </div>
        <textarea
          name="message"
          cols="30"
          rows="5"
          placeholder="Consulta"
          required
        ></textarea>
        <button type="submit" className="btn-brown">
          Enviar
        </button>
      </div>
      {sending && (
        <div>
          <p className="contact-form-send">Enviando...</p>
        </div>
      )}
      {textSend && (
        <div>
          <p className="contact-form-send">
            ¡Muchas gracias por tu mensaje! Nos estaremos contactando a la
            brevedad.
          </p>
        </div>
      )}
    </form>
  );
};

export default Form;
