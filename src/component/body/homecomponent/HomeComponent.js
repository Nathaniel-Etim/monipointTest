import React, { useEffect, useState } from "react";
import "./homecontainer.css";
import OtherItems from "../otherItems/otherItem";
import Products from "../poducts/Products";
import header0 from "../../../props/headerImmages-1/easterImg.png";
import header1 from "../../../props/headerImmages-1/topper.jpg";
import header2 from "../../../props/headerImmages-1/updated.png";

function HomeComponent() {
  const [theImage, setTheImage] = useState([header0, header1, header2]);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interValid = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % theImage.length);
    }, 5000);

    return () => clearInterval(interValid);
  }, [currentIndex, theImage.length]);

  return (
    <>
      <div className="header-top">
        <img
          src={theImage[currentIndex]}
          alt="jhgfd"
          style={{ width: "99%", height: "11.6rem" }}
        />
      </div>
      <div>
        <OtherItems />
        <Products />
      </div>
    </>
  );
}

export default HomeComponent;
