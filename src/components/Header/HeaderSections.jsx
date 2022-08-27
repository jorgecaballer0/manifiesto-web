import React from "react";
import Logo from "../../assets/img/Logos/logotipo.png";
import { Link } from "react-router-dom";

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
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/servicios">Servicios</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
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
