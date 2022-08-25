import React from "react";
import HomeIcons from "./HomeIcons";
import HomeServices from "./HomeServices";
import Contact from "../Contact/Contact";
import Logo from "../../assets/img/Logos/manifiesto-logo.png";
import { FiArrowDownCircle } from "react-icons/fi";
import HeaderHome from "../Header/HeaderHome"
const Home = () => {
  return (
    <>
    <HeaderHome/>
      <div className="banner-home">
        <div className="showLogo">
          <img src={Logo} alt="Logo" className="logo-home"/>
        </div>
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
