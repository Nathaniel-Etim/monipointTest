import React from "react";
import "./detailnav.css";
import { BsArrowReturnLeft, BsHeartFill, BsShare } from "react-icons/bs";
import cart from "../../../props/carticon.png";
import { useNavigate } from "react-router-dom";

function DetailNav() {
  const navigate = useNavigate();

  function onGoToPrevousPageHandeler() {
    navigate(-1);
  }

  return (
    <div className="detailnav">
      <BsArrowReturnLeft
        className="arrow"
        onClick={onGoToPrevousPageHandeler}
      />
      <div className="nav-right">
        <BsHeartFill className="right-icon like" />
        <BsShare className="right-icon" />
        <img src={cart} alt="cart icon" className="right-icon" />
      </div>
    </div>
  );
}

export default DetailNav;
