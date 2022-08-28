import React from "react";
import HomeIcons from "./HomeIcons";
import HomeServices from "./HomeServices";
import Contact from "../Contact/Contact";
import Logo from "../../assets/img/Logos/manifiesto-logo.png";
import { BsArrowDownCircle } from "react-icons/bs";
import HeaderHome from "../Header/HeaderHome";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <>
      <HeaderHome />
      <div className="banner-home">
        <div className="showLogo">
          <img src={Logo} alt="Logo" className="logo-home" />
        </div>
        <button className="btn-home">
          <Link to="manifiesto" smooth={true} duration={300} offset={-70}>
            Sobre Manifiesto <BsArrowDownCircle />
          </Link>
        </button>
      </div>
      <HomeIcons />
      <HomeServices />
      <Contact />
    </>
  );
};

export default Home;
