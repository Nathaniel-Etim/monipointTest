import React from "react";
import "./fotter.css";
import Home from "../../props/homeicon.png";
import { FiSettings, FiCreditCard } from "react-icons/fi";
import { FaHome } from "react-icons/fa";
import { MdLocalOffer } from "react-icons/md";
import { NavLink } from "react-router-dom";

function Fotter() {
  return (
    <div className="fotter">
      <div className="fotter-item">
        <div className="items">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "notactive")}
          >
            <FaHome />
          </NavLink>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "textActive" : "notactive"
            }
          >
            <span>Home</span>
          </NavLink>
        </div>
        <div className="items">
          <MdLocalOffer style={{ color: "gray" }} />

          <span>Voucer</span>
        </div>
        <div className="items">
          <FiCreditCard style={{ color: "gray" }} />

          <span> Wallet</span>
        </div>
        <div className="items">
          <FiSettings style={{ color: "gray" }} />

          <span>Settings</span>
        </div>
      </div>
    </div>
  );
}

export default Fotter;
