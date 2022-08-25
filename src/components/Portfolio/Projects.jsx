import React from "react";
import IMG1 from "../../assets/img/Portfolio/edels.jpg";
import IMG2 from "../../assets/img/Portfolio/the-greens.jpg";

const Projects = () => {
  return (
    <section className="container">
      <div>
        <a
          href="https://natmartinezfurio.myportfolio.com/edels-branding"
          target="_blank"
          rel="noreferrer"
          className="div-projects"
        >
          <img src={IMG1} alt="edels" className="img-projects" />
          <h3>E'dels | Branding</h3>
        </a>
      </div>
      <div>
        <a
          href="https://natmartinezfurio.myportfolio.com/the-greens-branding"
          target="_blank"
          rel="noreferrer"
          className="div-projects-2"
        >
          <img src={IMG2} alt="the greens" className="img-projects" />
          <h3>The Greens | Branding</h3>
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
