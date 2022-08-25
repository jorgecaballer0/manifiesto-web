import React, { useState, useEffect } from "react";
import Logo from "../../assets/img/Logos/logotipo.png";

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

  return (
    <header>
      <div>
        {showLogo ? (
          <img src={Logo} alt="manifiesto-logo" className="logo-header showLogo" />
        ) : (
          ""
        )}
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
