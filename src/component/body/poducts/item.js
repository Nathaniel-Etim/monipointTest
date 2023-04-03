import React from "react";
import Card from "../../UI/card";
import { BsStarFill, BsHeartFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function AllProduct({
  id,
  cartigory,
  details,
  productIcon,
  mainImg,
  name,
  orderQuantity,
}) {
  const navigate = useNavigate();

  function onNavigateToPageDetailHandeler() {
    navigate(`/${id}`);
  }

  return (
    <div onClick={onNavigateToPageDetailHandeler}>
      <Card className="bottom-card" id={id}>
        <div
          className="card-top"
          style={{ backgroundImage: `url(${mainImg})` }}
        >
          <BsHeartFill className="likeicon" />
        </div>
        <div className="card-bottom">
          <span className="Category">{cartigory}</span>
          <div className="Product-name">
            <span>{name}</span>
          </div>
          <div className="rating-price">
            <div className="rating">
              <BsStarFill className="rating-icon" />
              <span> 49|2359 </span>
            </div>
            <span className="price">${details.price}</span>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default AllProduct;
