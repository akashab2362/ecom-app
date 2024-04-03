import React from "react";
import "./Home.css";

const Carousel = ({ productList }) => {
  const plusSlides = () => {};
  const currentSlide = () => {};

  return (
    <div className="slideshow-container">
      {productList.map((product) => {
        return (
          <>
            <div className="mySlides">
              <img src={product.imgUrl} alt={product.id} />
            </div>
          </>
        );
      })}
      <button className="prev" onClick={plusSlides(-1)}>
        &#10094;
      </button>
      <button className="next" onClick={plusSlides(1)}>
        &#10095;
      </button>
      <div style={{ textAlign: "center" }}>
        <span className="dot" onClick={currentSlide(1)}></span>
        <span className="dot" onClick={currentSlide(2)}></span>
        <span className="dot" onClick={currentSlide(3)}></span>
      </div>
    </div>
  );
};

export default Carousel;