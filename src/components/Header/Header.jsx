import React from "react";

const Header = () => {
  return (
    <header>
      <div>
        <img src="logo" alt="manifiesto-logo" />
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
