// MapEmbed.js
import React from "react";

const MapEmbed = () => {
  return (
    <div className="map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3890.316669900139!2d80.04391223806715!3d12.822802000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1715416178774!5m2!1sen!2sin"
        width="500"
        height="250"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="my-location"
      ></iframe>
    </div>
  );
};

export default MapEmbed;
