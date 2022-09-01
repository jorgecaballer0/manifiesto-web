import React from "react";
import Logo from "../../assets/img/Logos/logotipo.png";
import { Link, NavLink } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import Burger from "./BurgerMenuSections";

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
      <Burger/>
      <nav className="hidden">
        <ul>
          <li>
            <Link to="/" className="btn-nav">
              Home
            </Link>
          </li>
          <li>
            <NavLink
              to="/servicios"
              activeClassName="active"
              className="btn-nav"
            >
              Servicios
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/portfolio"
              activeClassName="active"
              className="btn-nav"
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <Link to="/" className="btn-contact">
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
