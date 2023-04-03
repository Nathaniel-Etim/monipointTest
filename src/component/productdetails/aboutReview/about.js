import React from "react";
import "./about.css";

function AboutDetails() {
  return (
    <div className="about-details">
      <div className="details-brand">
        <span className="brand-item"> Brand:</span>
        <span className="brand-name"> abcdef </span>
      </div>
      <div className="item-color">
        <span className="color-heading"> Color:</span>
        <span className="item-color"> abcdef </span>
      </div>
    </div>
  );
}

export default AboutDetails;
