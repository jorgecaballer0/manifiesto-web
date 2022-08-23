import React from "react";
import BgHome from "../../assets/img/Banners/home.jpg";
import Logo from "../../assets/img/Logos/manifiesto-logo.png";
import HomeIcons from "./HomeIcons";
import { FiArrowDownCircle } from "react-icons/fi";
import HomeServices from "./HomeServices";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <>
      <div>
        <img src={BgHome} alt="Banner" className="banner-home" />
        <img src={Logo} alt="Logo" className="logo-home" />
        <a href="#manifiesto" className="btn-home">
          Sobre Manifiesto <FiArrowDownCircle />
        </a>
      </div>
      <HomeIcons />
      <HomeServices/>
      <Contact/>
    </>
  );
};

export default Home;
