import React from "react";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";

const ProductCard = ({ product }) => {
  const options = {
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  };

  return (
    <Link
      className="productCard w-64 m-4 transition duration-300 transform hover:shadow-lg hover:-translate-y-1"
      to={`/product/${product._id}`}
    >
      <div className="relative flex flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md h-full">
        <div className="relative flex justify-center items-center overflow-hidden rounded-t-lg">
          <img
            className="object-cover h-48 w-full"
            src={product.images[0].url}
            alt="product image"
          />
          {/* <span className="absolute top-2 left-2 bg-black rounded-full px-2 text-center text-sm font-medium text-white">
            {product.discount}
          </span> */}
        </div>
        <div className="p-5 flex flex-col justify-between">
          <div>
            <h5 className="text-base font-semibold text-gray-900">
              {product.name}
            </h5>
            <div className="mt-2">
              <p>
                <span className="text-lg font-semibold text-gray-900">
                  Rs. {product.price}
                </span>
                {/* <span className="text-sm text-gray-500 line-through">
                  Rs. {product.actual_price}
                </span> */}
              </p>
            </div>
          </div>
          <div className="flex items-center mt-4">
            <Rating {...options} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
