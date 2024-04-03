import React, { useEffect } from "react";
import "./Product.css";

import ProductCard from "./ProductCard.js";
import { fetchProducts, clearErrors } from "../store/productSlice.js"; // Import fetchProducts action creator
import { useSelector, useDispatch } from "react-redux"; // Correct import names
import Loader from "../Layout/Loader.js";
import { useAlert } from "react-alert";

const KidsProducts = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products, productsCount } = useSelector((state) => state.products); // Correct selector

  // useEffect(() => {
  //   if (error) {
  //     return alert.error(error);
  //   }
  //   dispatch(fetchProducts()); // Dispatch fetchProducts action
  // }, [dispatch, error, alert]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="container">
          {/* Map over products array to render Product component */}
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </>
  );
};

export default KidsProducts;

