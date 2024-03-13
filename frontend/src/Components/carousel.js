import React from "react";
import "./home.css";

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
        <span class="dot" onClick={currentSlide(1)}></span>
        <span class="dot" onClick={currentSlide(2)}></span>
        <span class="dot" onClick={currentSlide(3)}></span>
      </div>
    </div>
  );
};

export default Carousel;
