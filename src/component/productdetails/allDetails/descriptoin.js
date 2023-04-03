import React from "react";
import "./decription.css";
import { BsArrowUp } from "react-icons/bs";

function Description() {
  return (
    <div className="description">
      <div className="description-header">
        <span className="header-text">Description</span>
      </div>
      <p>
        .long sleeve <br /> .Easy to wash <br /> .does not remove color
        <br /> Chat us to know more about the product.
      </p>
      <span className="more">
        See less
        <BsArrowUp className="arrowup" />
      </span>
    </div>
  );
}

export default Description;
