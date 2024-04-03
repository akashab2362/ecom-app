import React, { useEffect, useState } from "react";
import "./Product.css";

import ProductCard from "./ProductCard.js";
import { fetchProducts, clearErrors } from "../store/productSlice.js"; // Import fetchProducts action creator
import { useSelector, useDispatch } from "react-redux"; // Correct import names
import Loader from "../Layout/Loader.js";
import { useAlert } from "react-alert";
import { useParams } from "react-router-dom";
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

const MensProducts = () => {
  const { keyword } = useParams();
  const alert = useAlert();
  const dispatch = useDispatch();
  const {
    loading,
    error,
    products,
    productsCount,
    resultPerPage,
    filteredProductsCount,
  } = useSelector((state) => state.products); // Correct selector

  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([0, 25000]);
  const [category, setCategory] = useState("");
  const [ratings, setRatings] = useState(0);
  const [active, setActive] = useState(1);
  const setCurrentPageNo = (pageNumber) => {
    setCurrentPage(pageNumber);
    setActive(pageNumber);
  };
  const priceHandler = (event, newPrice) => {
    setPrice(newPrice);
  };
  const getItemProps = (index) => ({
    variant: active === index ? "filled" : "text",
    color: "gray",
    onClick: () => setActive(index),
  });

  const next = () => {
    if (currentPage === Math.ceil(filteredProductsCount / resultPerPage))
      return;

    setCurrentPageNo(currentPage + 1);
  };

  const prev = () => {
    if (currentPage === 1) return;

    setCurrentPageNo(currentPage - 1);
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(fetchProducts(keyword, currentPage)); // Dispatch fetchProducts action
  }, [dispatch, error, alert, keyword, currentPage]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="container">
            {/* Map over products array to render Product component */}
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
          {/* Pagination */}
          {resultPerPage < filteredProductsCount && (
            <div className="flex items-center gap-4 mb-24">
              <Button
                variant="text"
                className="flex items-center gap-2"
                onClick={prev}
                disabled={currentPage === 1}
              >
                <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
              </Button>
              <div className="flex items-center gap-2">
                {[
                  ...Array(
                    Math.ceil(filteredProductsCount / resultPerPage)
                  ).keys(),
                ].map((pageNumber) => (
                  <IconButton
                    key={pageNumber + 1}
                    variant={active === pageNumber + 1 ? "filled" : "text"}
                    color="gray"
                    onClick={() => setCurrentPageNo(pageNumber + 1)}
                  >
                    {pageNumber + 1}
                  </IconButton>
                ))}
              </div>
              <Button
                variant="text"
                className="flex items-center gap-2"
                onClick={next}
                disabled={
                  currentPage ===
                  Math.ceil(filteredProductsCount / resultPerPage)
                }
              >
                Next
                <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
              </Button>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default MensProducts;
