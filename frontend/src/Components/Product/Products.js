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
  "Brand Trunk Bags, Wallets & Belts",
  "Clothing Accessories",
  "Crocks Club Clothing and Accessories",
  "Fabrics",
  "INSPIRE Clothing and Accessories",
  "Innerwear and Swimwear",
  "Inspire Clothing and Accessories",
  "Kurtas, Ethnic Sets and Bottoms",
  "Men's Footwear",
  "Raincoats",
  "Roy Clothing and Accessories",
  "SUNSHOPPING Bags, Wallets & Belts",
  "Sleepwear",
  "Sunshopping Bags, Wallets & Belts",
  "Topwear",
  "Tracksuits",
  "Uber Urban Clothing and Accessories",
  "Winsome Deal Bags, Wallets & Belts",
  "Winter Wear",
  "YOFAMA Bags, Wallets & Belts",
  "mentiezi Bags, Wallets & Belts",
];

const Products = () => {
  const { keyword } = useParams();
  const dispatch = useDispatch();

  const alert = useAlert();

  const [currentPage, setCurrentPage] = useState(1);
  const [selling_price, setSelling_price] = useState([0, 25000]);
  const [sub_category, setSub_category] = useState("");

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
    setSelling_price(newPrice);
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
        selling_price,
        sub_category,
        ratings,
      })
    );
  }, [
    dispatch,
    error,
    alert,
    keyword,
    currentPage,
    selling_price,
    sub_category,
    ratings,
  ]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <div className="prodcontainer">
          <h2 className="productsHeading">Products</h2>
          <div className="flex justify-center gap-4 mx-4">
            <div className="filter-box border-l-gray-200 rounded-2xl">
              <p className="filter-title">Price</p>
              <Slider
                value={selling_price}
                onChange={priceHandler}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                min={0}
                max={2500}
              />
              <p className="filter-title">Categories</p>
              <select
                className="categoryDropdown"
                value={sub_category}
                onChange={(e) => setSub_category(e.target.value)}
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
      )}
    </Fragment>
  );
};

export default Products;
