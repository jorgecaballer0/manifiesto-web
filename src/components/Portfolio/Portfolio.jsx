import React from "react";
import Projects from "./Projects";
import Header from "../Header/HeaderSections";

const Portfolio = () => {
  return (
    <>
      <Header />
      <div className="banner-portfolio banners">
        <h1>Portfolio</h1>
      </div>
      <Projects />
    </>
  );
};

export default Portfolio;
