import React from "react";
import "./about.css";

function AboutDetails() {
  return (
    <div className="about-details">
      <div className="details-brand">
        <div className="brand">
          <span className="brand-item"> Brand:</span>
          <span className="brand-name"> Nike </span>
        </div>
        <div className="brand">
          <span className="brand-item"> Cartigory:</span>
          <span className="brand-name"> Casual Shirt </span>
        </div>{" "}
        <div className="brand">
          <span className="brand-item"> Condition:</span>
          <span className="brand-name"> New </span>
        </div>
      </div>
      <div className="item-color">
        <div className="item">
          <span className="color-heading"> Color:</span>
          <span className="item-color"> Gray </span>
        </div>
        <div className="item">
          <span className="color-heading"> Material:</span>
          <span className="item-color"> Lion Skin </span>
        </div>
        <div className="item">
          <span className="color-heading"> Heavy:</span>
          <span className="item-color"> 200g </span>
        </div>
      </div>
    </div>
  );
}

export default AboutDetails;
