import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaMapMarkerAlt } from "react-icons/fa";
import MapEmbed from "./MapEmbed";
import { useState } from "react";
const HeaderSocials = () => {
  const [showMap, setShowMap] = useState(false);

  const toggleMapVisibility = () => {
    setShowMap(!showMap);
  };
  return (
    <div className="header__socials">
      <a
        href="https://linkedin.com/in/vachan-shetty-70b060250/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/vs316" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
      <a
        href="https://instagram.com/vs316.pvt/"
        target="_blank"
        rel="noreferrer"
      >
        <BiLogoInstagramAlt />
      </a>

      <a onClick={toggleMapVisibility} target="_blank" rel="noreferrer">
        <FaMapMarkerAlt />
        {showMap && <MapEmbed />}
      </a>
    </div>
  );
};

export default HeaderSocials;
