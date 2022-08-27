import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/Logos/logotipo.png";
import { animateScroll as scroll, Link as Scroll } from "react-scroll";

const Header = () => {
  const [showLogo, setShowLogo] = useState(false);

  const changeLogo = () => {
    if (window.scrollY >= 700) {
      setShowLogo(true);
    } else {
      setShowLogo(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeLogo);

    return () => {
      window.removeEventListener("scroll", changeLogo);
    };
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <header>
      <div>
        {showLogo ? (
          <img
            src={Logo}
            alt="manifiesto-logo"
            className="logo-header showLogo"
            onClick={scrollToTop}
          />
        ) : (
          ""
        )}
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/servicios">Servicios</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Scroll to="contacto" smooth={true} duration={300} offset={-40}>
              Contacto
            </Scroll>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
