import React from "react";
import Card from "../../UI/card";
import { BsStarFill, BsHeartFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { allProductAction } from "../../../store/store";

function AllProduct({
  id,
  cartigory,
  details,
  productIcon,
  mainImg,
  name,
  orderQuantity,
  liked,
}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function onNavigateToPageDetailHandeler() {
    navigate(`/${id}`);
  }

  function onLikePostHandelerFunction() {
    dispatch(
      allProductAction.itemIsLiked({
        id,
        cartigory,
        details,
        productIcon,
        mainImg,
        name,
        orderQuantity,
        liked,
      })
    );
  }

  return (
    <div onClick={onNavigateToPageDetailHandeler}>
      <Card className="bottom-card" id={id}>
        <div
          className="card-top"
          style={{ backgroundImage: `url(${mainImg})` }}
        >
          <BsHeartFill
            className="likeicon"
            onClick={onLikePostHandelerFunction}
            style={{ color: `${liked ? "red" : "white"}` }}
          />
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
