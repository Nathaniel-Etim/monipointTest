import React, { useState } from "react";
import "./decription.css";
import { BsArrowUp, BsArrowDown } from "react-icons/bs";

function Description() {
  const [increaseHeight, setHeight] = useState(false);

  function OnReducePheightfn() {
    setHeight((previous) => !previous);
  }

  return (
    <div className="description">
      <div className="description-header">
        <span className="header-text">Description</span>
      </div>
      <p
        style={{
          height: `${increaseHeight ? "fit-content" : "1rem"}`,
          overflow: "hidden",
        }}
      >
        .long sleeve <br /> .Easy to wash <br /> .does not remove color
        <br /> Chat us to know more about the product.
      </p>
      <span className="more" onClick={OnReducePheightfn}>
        See {increaseHeight ? "less" : "more"}
        {increaseHeight ? (
          <BsArrowUp className="arrowup" />
        ) : (
          <BsArrowDown className="arrowup" />
        )}
      </span>
    </div>
  );
}

export default Description;
