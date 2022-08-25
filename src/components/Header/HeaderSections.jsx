import React from "react";
import Logo from "../../assets/img/Logos/logotipo.png";

const Header = () => {
  return (
    <header>
      <div>
        <img
          src={Logo}
          alt="manifiesto-logo"
          className="logo-header showLogo"
        />
      </div>
      <nav>
        <ul>
          <li>
            <a href="#1">Servicios</a>
          </li>
          <li>
            <a href="#2">Portfolio</a>
          </li>
          <li>
            <a href="#contacto">Contacto</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
