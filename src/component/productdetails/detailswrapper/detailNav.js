import React from "react";
import "./detailnav.css";
import { BsArrowReturnLeft, BsHeartFill, BsShare } from "react-icons/bs";
import cart from "../../../props/carticon.png";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function DetailNav() {
  const navigate = useNavigate();
  const { id } = useParams();
  const ProductLiked = useSelector((store) => store.items.defaltCart.items);
  const Product = useSelector((store) => store.items.AllProducts);

  const filteredList = ProductLiked.filter((el) => {
    return el.id === id;
  });
  const filteredAllProduct = Product.filter((el) => {
    return el.id === id;
  });

  console.log(filteredAllProduct);

  const item = filteredList[0]?.liked
    ? filteredList[0]?.liked
    : filteredAllProduct[0]?.liked;

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
        <BsHeartFill
          className="right-icon like"
          style={{ color: `${item ? "red" : "gray"}` }}
        />
        <BsShare className="right-icon" />
        <img src={cart} alt="cart icon" className="right-icon" />
      </div>
    </div>
  );
}

export default DetailNav;
