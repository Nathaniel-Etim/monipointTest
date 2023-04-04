import React, { useState } from "react";
import "./aboutproduct.css";
import { BsStarFill, BsShop } from "react-icons/bs";
import AboutDetails from "../aboutReview/about";
import { useSelector } from "react-redux";
import Description from "./descriptoin.js";
import { useParams } from "react-router-dom";

function AboutProductDetailPage() {
  const [displayImage, setDisplayImage] = useState();
  const Product = useSelector((store) => store.items.AllProducts);
  const ProductLiked = useSelector((store) => store.items.defaltCart.items);
  const { id } = useParams();

  const productDetails = Product.filter((element) => {
    return element.id === id;
  });

  console.log(ProductLiked);

  const itemImage = productDetails[0];

  React.useEffect(() => {
    setDisplayImage(itemImage.mainImg);
  }, [itemImage.mainImg]);

  function defaultImage() {
    setDisplayImage(itemImage.mainImg);
  }

  function setImage1HandelerFunction() {
    setDisplayImage(itemImage.images?.img1);
  }

  function setImage2HandelerFunction() {
    setDisplayImage(itemImage.images?.img2);
  }

  return (
    <>
      {productDetails.map((element) => {
        return (
          <div className="aboutproduct-details" key={element.id}>
            <div className="detail-top">
              <div
                className="top-image"
                style={{ backgroundImage: `url(${displayImage})` }}
              >
                <img
                  src={element.mainImg}
                  className="small-img1"
                  alt="pics-1"
                  onClick={defaultImage}
                />
                {element.images?.img1 && (
                  <img
                    src={element.images?.img1}
                    className="small-img2"
                    alt="pics-2"
                    onClick={setImage1HandelerFunction}
                  />
                )}
                {element.images?.img2 && (
                  <img
                    src={element.images?.img2}
                    className="small-img3"
                    alt="pics-3"
                    onClick={setImage2HandelerFunction}
                  />
                )}
              </div>
              <div className="top-information">
                <div className="storeName">
                  <BsShop />
                  <span>{element.details.storeName}</span>
                </div>
                <div className="information-container">
                  <div className="info-item">
                    <span className="item">{element.details.discription}</span>
                  </div>
                  <div className="rating">
                    <BsStarFill className="rating-icon" />
                    <div>
                      <span>{element.details.rating}</span>
                    </div>
                    <div>
                      <span> . 2.9k +sold</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="aboutreview">
              <span className="about detailActive"> About Item </span>
              <span className="about review"> Review</span>
            </div>
            <main style={{ width: "95%" }}>
              <AboutDetails />
              <Description />
            </main>
          </div>
        );
      })}
    </>
  );
}

export default AboutProductDetailPage;
