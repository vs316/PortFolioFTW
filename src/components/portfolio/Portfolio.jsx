import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/portfolio4.png";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "AI Link-to-insight Solution",
    github: "https://github.com/vs316/project_ai_summarizer",
    demo: "https://sumzv2ai.netlify.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Business Page Redesign",
    github: "https://github.com/vs316/businesspageredesign",
    demo: "https://businesspageredesign.web.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Online Blood Bank Management System",
    github: "https://github.com/vs316/Online-Blood-Bank-Management-System",
    demo: "https://onl-bbms.web.app/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Borcelle: Men's Clothing Store With Admin Dashboard",
    github: "https://github.com/vs316/borcelle_admin",
    demo: "https://drive.google.com/file/d/1yOpXOKcXnjDaUskn0N7dA9ZlcjdhGgiJ/view?usp=sharing",
  },
  {
    id: 5,
    image: IMG5,
    title: "Personal Portfolio Website",
    github: "https://github.com/vs316/PortFolioFTW",
    demo: "https://portfolio-voc.web.app/",
  },
  {
    id: 6,
    image: IMG6,
    title: "Weather App using NextJs",
    github: "https://github.com/vs316/weather-app-nextjs",
    demo: "https://whatheweather.netlify.app/",
  },
];
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <br />
              <h3>{title}</h3>
              <br />
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
