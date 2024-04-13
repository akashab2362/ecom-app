import React, { Fragment, useEffect, useState } from "react";
import ProductCard from "./ProductCard.js";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts, clearErrors } from "../store/productSlice.js";
import Loader from "../Layout/Loader.js";
import Pagination from "react-js-pagination";
import Slider from "@mui/material/Slider";
import { useAlert } from "react-alert";
import "./Products.css";
import { useParams } from "react-router-dom";
import MetaData from "../Layout/MetaData.js";

const categories = [
  "Blazers, Waistcoats and Suits",
  "Bottomwear",
  "Fabrics",
  "Innerwear and Swimwear",
  "Kurtas",
  "Raincoats",
  "Sleepwear",
  "Topwear",
  "Tracksuits",
  "Winter Wear",
  "Sweatshirt & Hoodies"
];

const Products = () => {
  const { keyword } = useParams();
  const dispatch = useDispatch();

  const alert = useAlert();

  const [currentPage, setCurrentPage] = useState(1);
  const [price, setprice] = useState([0, 25000]);
  const [category, setcategory] = useState("");

  const [ratings, setRatings] = useState(0);

  const {
    products,
    loading,
    error,
    productsCount,
    resultPerPage,
    filteredProductsCount,
  } = useSelector((state) => state.product);

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  const priceHandler = (event, newPrice) => {
    setprice(newPrice);
  };
  let count = filteredProductsCount;

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(
      fetchProducts({
        keyword,
        currentPage,
        price,
        category,
        ratings,
      })
    );
  }, [dispatch, error, alert, keyword, currentPage, price, category, ratings]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title="PRODUCTS -- ECOMMERCE" />

          <div className="prodcontainer">
            <h2 className="productsHeading">Products</h2>
            <div className="flex justify-center gap-4 mx-4">
              <div className="filter-box border-l-gray-200 rounded-2xl">
                <p className="filter-title">Price</p>
                <Slider
                  value={price}
                  onChange={priceHandler}
                  valueLabelDisplay="auto"
                  aria-labelledby="range-slider"
                  min={0}
                  max={2500}
                />
                <p className="filter-title">Categories</p>
                <select
                  className="categoryDropdown"
                  value={category}
                  onChange={(e) => setcategory(e.target.value)}
                >
                  <option value="">All Product Category</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>

                <p className="filter-title">Rating Above</p>
                <Slider
                  value={ratings}
                  onChange={(e, newRating) => {
                    setRatings(newRating);
                  }}
                  aria-labelledby="continuous-slider"
                  valueLabelDisplay="auto"
                  min={0}
                  max={5}
                />
              </div>
              <div className="productContainer rounded-2xl">
                {products &&
                  products.map((product) => (
                    <ProductCard key={product._id} product={product} />
                  ))}
              </div>
            </div>
            <div className="pagination">
              {resultPerPage < count && (
                <div className="paginationBox">
                  <Pagination
                    activePage={currentPage}
                    itemsCountPerPage={resultPerPage}
                    totalItemsCount={productsCount}
                    onChange={setCurrentPageNo}
                    nextPageText="Next"
                    prevPageText="Prev"
                    firstPageText="1st"
                    lastPageText="Last"
                    itemClass="page-item"
                    linkClass="page-link"
                    activeClass="pageItemActive"
                    activeLinkClass="pageLinkActive"
                  />
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </Fragment>
  );
};

export default Products;
