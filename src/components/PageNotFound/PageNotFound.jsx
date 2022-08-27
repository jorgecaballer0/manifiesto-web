import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header/HeaderSections";

const PageNotFound = () => {
  return (
    <div className="page404">
      <Header />
      <div>
        <h1>Lo sentimos, no encontramos el sitio al que intenta acceder!</h1>
        <h3>Por favor, presione el botón para volver</h3>
        <Link to="/" className="btn-brown">Volver al Inicio</Link>
      </div>
    </div>
  );
};

export default PageNotFound;
