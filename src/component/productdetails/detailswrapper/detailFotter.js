import React from "react";
import "./detailfotter.css";
import { BsCart } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function DetailFotter() {
  const Product = useSelector((store) => store.items);

  const { id } = useParams();

  const productDetails = Product.filter((element) => {
    return element.id === id;
  });

  const itemPrice = productDetails[0];

  return (
    <div className="detailfotter">
      <div className="fotter-left">
        <span className="text"> Total Price</span>
        <span className="amount">${itemPrice.details.price}</span>
      </div>
      <div className="fotter-right">
        <div className="cart-item">
          <BsCart className="fotter-cart" />
          <span className="number">1</span>
        </div>
        <div className="buy">
          <span>Buy Now</span>
        </div>
      </div>
    </div>
  );
}

export default DetailFotter;
