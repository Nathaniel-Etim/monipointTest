import React, { useRef, useState, useEffect } from "react";
import "./products.css";
import AllProduct from "./item";
import { useSelector } from "react-redux";

function Products() {
  const Product = useSelector((store) => store.items.AllProducts);
  const ProductLiked = useSelector((store) => store.items.defaltCart.items);

  const targetRef = useRef(null);
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const useIntersectionObserver = {
      root: null,
      threshold: 0.27,
      rootMargin: "5px",
    };
    const item = targetRef.current;

    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    }, useIntersectionObserver);

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (item) {
        observer.unobserve(item);
      }
    };
  }, []);

  const AllItems = Product.map((element, index) => {
    const likedItem = ProductLiked.filter((el) => {
      return el.id === element.id;
    });
    return (
      <AllProduct
        key={index}
        cartigory={element.cartigory}
        id={element.id}
        details={element.details}
        productIcon={element.images}
        mainImg={element.mainImg}
        name={element.name}
        orderQuantity={element.orderQuantity}
        liked={likedItem[0]?.liked ? likedItem[0]?.liked : element.liked}
      />
    );
  });

  return (
    <div className="products" ref={targetRef}>
      <div
        className="products-top"
        style={{
          position: `${isIntersecting ? "fixed" : ""}`,
          top: `${isIntersecting ? "40px" : 0}`,
          right: `${isIntersecting ? "-3px" : 0}`,
          left: `${isIntersecting ? "0px" : 0}`,
          zIndex: "5",
          backgroundColor: `${isIntersecting ? "gray" : "transparent"}`,
        }}
      >
        <span className="heading">Best Sale Product</span>
        <span className="top-right">See more</span>
      </div>
      <div className="product-bottom">{AllItems}</div>
    </div>
  );
}

export default Products;
