import React from "react";
import "./about.css";
import ME from "../../assets/me-about.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small> 3rd Year CSE Student</small>
            </article>

            {/* <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>N😶A</small>
            </article> */}

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small> 15+ Completed Projects</small>
            </article>
          </div>
          <p>
            Hello! 👋 I'm a IIIrd year Btech CSE student specializing in Cloud
            Computing at SRMIST KTR, Chennai. As an AWS Certified Associate
            Solution Architect, I'm deeply passionate about crafting innovative
            cloud solutions. With a keen eye for detail and an insatiable
            appetite for learning, I'm constantly exploring new avenues within
            my areas of expertise. Currently, as a Solution Architect at Cloud
            Nova-SRM, I thrive in AWS architecture and bring proficiency in
            front-end web development (while delving into the vast world of
            full-stack). Let's connect and explore opportunities to drive
            impactful solutions together!
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk!
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
