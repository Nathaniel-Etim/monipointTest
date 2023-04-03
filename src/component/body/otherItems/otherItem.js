import React from "react";
import "./otheritem.css";
import { BsAirplane, BsBookHalf, BsGlobe, BsLock } from "react-icons/bs";

function OtherItems() {
  return (
    <div className="otherItem">
      <div className="items">
        <div className="item-container">
          <div className="icon-container">
            <BsAirplane className="othericons" />
          </div>
          <span className="item-text">Category</span>
        </div>
        <div className="item-container">
          <div className="icon-container">
            <BsAirplane className="othericons" />
          </div>
          <span className="item-text">Flight</span>
        </div>
        <div className="item-container">
          <div className="icon-container">
            <BsBookHalf className="othericons" />
          </div>
          <span className="item-text">Bill</span>
        </div>
        <div className="item-container">
          <div className="icon-container">
            <BsGlobe className="othericons" />
          </div>
          <span className="item-text">Data Plan</span>
        </div>
        <div className="item-container">
          <div className="icon-container">
            <BsLock className="othericons" />
          </div>
          <span className="item-text">Top Up</span>
        </div>
      </div>
    </div>
  );
}

export default OtherItems;
