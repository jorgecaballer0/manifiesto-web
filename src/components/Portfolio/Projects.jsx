import React from "react";
import IMG1 from "../../assets/img/Portfolio/tarjetas-port-01.jpg";
import IMG2 from "../../assets/img/Portfolio/tarjetas-port-02.jpg";

const Projects = () => {
  return (
    <section className="container">
      <div>
        <a
          href="https://natmartinezfurio.myportfolio.com/edels-branding"
          target="_blank"
          rel="noreferrer"
          className="projects"
        >
          <img src={IMG1} alt="edels" className="img-projects" />
        </a>
      </div>
      <div>
        <a
          href="https://natmartinezfurio.myportfolio.com/the-greens-branding"
          target="_blank"
          rel="noreferrer"
          className="projects"
        >
          <img src={IMG2} alt="the greens" className="img-projects" />
        </a>
      </div>
      <button>
        <a
          href="https://natmartinezfurio.myportfolio.com/work"
          target="_blank"
          rel="noreferrer"
        >
          Ver más
        </a>
      </button>
    </section>
  );
};

export default Projects;
