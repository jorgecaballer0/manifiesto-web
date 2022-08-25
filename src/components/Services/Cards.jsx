import React from "react";
import IMG1 from "../../assets/img/Banners/branding.jpg";
import IMG2 from "../../assets/img/Servicios/celu.png";
import IMG3 from "../../assets/img/Banners/redes.jpg";

const Cards = () => {
  return (
    <section className="container">
      <article className="cards-services">
        <img src={IMG1} alt="Branding" />
        <div>
          <h3>Branding</h3>
          <p>
            El Branding, entre otras cosas, es la identidad visual de tu marca,
            la que te ayudará a transmitir verdaderamente tu propósito y a
            conectar con tu cliente ideal. No se trata sólo del logo, si no de
            darle un estilo y una voz a tu marca, para que puedas comunicar
            correctamente aquello que deseas. El servicio incluye: Diseño de
            logo, manual de marca, tipografia y paleta de color
          </p>
        </div>
      </article>
      <article className="cards-services">
        <img src={IMG2} alt="Manejo de redes" />
        <div>
          <h3>Manejo de redes</h3>
          <p>
            Las redes sociales se han convertido en unas de las herramientas más
            importantes hoy para dar a conocer tu marca. Para que ésto funcione,
            es importante gestionarlas de manera profesional. En Manifiesto te
            ayudamos a manejar la gestión de tus redes y el contenido para tu
            marca. El servicio incluye: Manejo de redes sociales y creación de
            contenido
          </p>
        </div>
      </article>
      <article className="cards-services">
        <img src={IMG3} alt="Diseño" />
        <div>
          <h3>Diseño</h3>
          <p>
            En Manifiesto creemos que es clave alcanzar nuestros sueños, es por
            eso que si necesitas asesoramiento o crear algún diseño o pieza
            gráfica específica, ya sea de folletería, packaging, ayuda con tu
            Tienda Nube o sitio web, no dudes en consultarnos.
          </p>
        </div>
      </article>
    </section>
  );
};

export default Cards;
