import React from "react";
import Logo from "../../assets/img/Logos/manifiesto-logo.png";
import HomeIcons from "./HomeIcons";
import { FiArrowDownCircle } from "react-icons/fi";
import HomeServices from "./HomeServices";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <>
      <div className="banner-home">
        <img src={Logo} alt="Logo" className="logo-home" />
        <button className="btn-home">
          <a href="#manifiesto">
            Sobre Manifiesto <FiArrowDownCircle />
          </a>
        </button>
      </div>
      <HomeIcons />
      <HomeServices />
      <Contact />
    </>
  );
};

export default Home;
