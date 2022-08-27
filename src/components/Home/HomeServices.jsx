import React from "react";
import Branding from "../../assets/img/Servicios/branding.jpg";
import Redes from "../../assets/img/Servicios/celu.png";
import Diseño from "../../assets/img/Servicios/diseño.jpg";
import { Link } from "react-router-dom";

const HomeServices = () => {
  return (
    <section id="servicios" className="container">
      <div className="container-title">
        <h1>Servicios</h1>
      </div>
      <div className="cards-container">
        <article className="box cards">
          <div className="cards-content">
            <h3>Branding</h3>
            <img src={Branding} alt="Imagen" />
            <p>
              Desarrollamos la identidad visual de tu marca para que puedas
              transmitir tu propósito y conectar con tu cliente ideal
            </p>
          </div>
          <button className="btn-brown">
            <Link to="/servicios">Ver más</Link>
          </button>
        </article>
        <article className="box cards">
          <div className="cards-content">
            <h3>Manejo de redes</h3>
            <img src={Redes} alt="Imagen" />
            <p>
              Te ayudamos a manejar la gestión de tus redes y el contenido para
              lograr comunicar correctamente tu emprendimiento
            </p>
          </div>
          <button className="btn-brown">
            <Link to="/servicios">Ver más</Link>
          </button>
        </article>
        <article className="box cards">
          <div className="cards-content">
            <h3>Diseño</h3>
            <img src={Diseño} alt="Imagen" />
            <p>
              Diseñamos folletería, packaging, tienda online y otros artículos
              que necesites para tu emprendimiento
            </p>
          </div>
          <button className="btn-brown">
            <Link to="/servicios">Ver más</Link>
          </button>
        </article>
      </div>
    </section>
  );
};

export default HomeServices;
