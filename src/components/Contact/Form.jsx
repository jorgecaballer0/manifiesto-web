import React, { useState } from "react";

const Form = () => {
  const [sendForm, setSendForm] = useState(false);

  const handleClick = () => {
    setSendForm(true);
    setTimeout(() => {
      setSendForm(false);
    }, 2000);
  };

  return (
    <div className="form">
      <label htmlFor="">Nombre</label>
      <input type="text" placeholder="Ingrese su nombre" />
      <label htmlFor="">Correo</label>
      <input type="email" placeholder="Ingrese su email" />
      <label htmlFor="">Consulta</label>
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder="Ingrese su consulta"
      ></textarea>
      <button onClick={handleClick}>Enviar</button>
      {sendForm && (
        <div>
          <p>
            ¡Muchas gracias por tu mensaje! Nos estaremos contactando a la
            brevedad
          </p>
        </div>
      )}
    </div>
  );
};

export default Form;
