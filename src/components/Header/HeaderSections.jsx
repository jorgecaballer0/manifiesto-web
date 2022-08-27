import React from "react";
import Logo from "../../assets/img/Logos/logotipo.png";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

const Header = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <header>
      <div>
        <img
          src={Logo}
          alt="manifiesto-logo"
          className="logo-header showLogo"
          onClick={scrollToTop}
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
            <Link to="/">Contacto</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
