import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const ProductCard = ({ product }) => {
  const options = {
    edit: false,
    color: "rgba(20, 20, 20, 0.1)",
    size: window.innerWidth < 600 ? 10 : 15,
    activeColor: "tomato",
    value: product.average_rating,
    isHalf: true,
  };

  return (
    <Link
      className="productCard w-1/4 m-4 transition duration-300 transform hover:shadow-lg hover:-translate-y-1"
      to={`/product/${product._id}`}
    >
      <div className="relative flex flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md h-full">
        <div className="relative mt-3 flex overflow-hidden rounded-xl justify-end items-center" style={{height:"128px", width:"128px"}}>
          <img
            className="object-cover"
            src={product.images[0]}
            alt="product image"
          />
          <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
            {product.discount}
          </span>
        </div>
        <div className="mt-4 px-5 pb-5 flex flex-col justify-between">
          <div>
            <h5 className="text-sm tracking-tight text-slate-900">
              {product.title}
            </h5>
            <div className="mt-2 mb-5">
              <p>
                <span className="text-lg font-bold text-slate-900">
                  Rs. {product.selling_price}
                </span>
                <span className="text-sm text-slate-900 line-through">
                  Rs. {product.actual_price}
                </span>
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <ReactStars {...options} /> <span className="ml-2">{product.noOfReviews} Reviews</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
