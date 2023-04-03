import React from "react";
import "./navbar.css";
import Cart from "../../props/carticon.png";
import messageicon from "../../props/messageicon.png";

function NavBar() {
  return (
    <div className="navbar-container">
      <input placeholder="Search..." className="input" />
      <div className="icon-container">
        <div className="img-container cover">
          <img src={Cart} alt="cart icon" className="cart-icon icon" />
          <span className="number">29</span>
        </div>
        <div className="message-container cover">
          <img
            src={messageicon}
            alt="cart icon"
            className="message-icon icon"
          />
          <span className="number">3</span>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
