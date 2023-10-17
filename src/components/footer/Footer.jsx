import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";
import { BsFillArrowUpSquareFill } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Vachan Shetty
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <a href="#" className="footer__logo-icon">
        <BsFillArrowUpSquareFill />
      </a>
      <div className="footer__socials">
        <a href="https://facebook.com/vachan316" target="_blank">
          <FaFacebookF />
        </a>
        <a href="https://instagram.com/vs316.pvt/" target="_blank">
          <FiInstagram />
        </a>
        <a href="https://twitter.com/VachanShet88141" target="_blank">
          <IoLogoTwitter />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Vachan Shetty. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
