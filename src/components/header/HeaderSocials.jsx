import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://linkedin.com/in/vachan-shetty-70b060250/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/vs316" target="_blank">
        <FaGithub />
      </a>
      <a href="https://instagram.com/vs316.pvt/" target="_blank">
        <BiLogoInstagramAlt />
      </a>
    </div>
  );
};

export default HeaderSocials;
