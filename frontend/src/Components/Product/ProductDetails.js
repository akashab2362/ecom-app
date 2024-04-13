import React, { useEffect, useState } from "react";
import "./ProductDetails.css";
import { useSelector, useDispatch } from "react-redux";
import ReactStars from "react-rating-stars-component";
import { ShoppingBag } from "lucide-react";
import { useAlert } from "react-alert";
import { useParams } from "react-router-dom";
import { Carousel } from "@material-tailwind/react";
import MetaData from "../Layout/MetaData.js";
import { clearErrors, fetchProductDetails } from "../store/productSlice.js";
import { addItemsToCart } from "../store/cartSlice.js";
import ReviewCard from "./ReviewCard.js";
import Loader from "../Layout/Loader.js";
import Rating from "@mui/material/Rating";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@mui/material";
import { newReview } from "../store/productSlice.js";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const alert = useAlert();

  const { product, loading, error } = useSelector((state) => state.product);

  const [selectedSize, setSelectedSize] = useState("");
  const handleSizeSelection = (size) => {
    setSelectedSize(size);
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(fetchProductDetails(id));
  }, [dispatch, id, error, alert]);

  const [quantity, setQuantity] = useState(1);
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const increaseQuantity = () => {
    if (product.stock <= quantity) return;

    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (1 >= quantity) return;

    setQuantity(quantity - 1);
  };

  const addToCartHandler = () => {
    if (!selectedSize) {
      alert.error("Please select a size"); // Show an error if no size is selected
      return;
    }
    dispatch(addItemsToCart({ id, quantity, size: selectedSize }));
    alert.success("Item Added to Cart");
  };

  const submitReviewToggle = () => {
    open ? setOpen(false) : setOpen(true);
  };

  const reviewSubmitHandler = async () => {
    const myForm = new FormData();

    myForm.set("rating", rating);
    myForm.set("comment", comment);
    myForm.set("productId", id);

    await dispatch(newReview(myForm));
    await dispatch(fetchProductDetails(id));

    setOpen(false);
  };

  const options = {
    edit: false,
    color: "rgba(20, 20, 20, 0.1)",
    activeColor: "rgb(250 204 21)",
    size: window.innerWidth < 600 ? 20 : 25,
    value: product.average_rating,
    isHalf: true,
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title={`${product.name} -- Byte Bazaar`} />
          <section className="flex m-5 gap-5">
            {/* Images Comes here */}
            <Carousel className="Carousel rounded-2xl w-2/6 bg-white items-center h-screen">
              {product.images &&
                product.images.map((item, i) => (
                  <img
                    className="object-cover w-full"
                    key={i}
                    src={item.url}
                    alt={`${i} Slide`}
                  />
                ))}
            </Carousel>
            {/* Description comes here */}
            <div className="lg:px-5 w-2/3 bg-white rounded-2xl p-20">
              <h2 className="pt-3 text-2xl font-bold lg:pt-0 ml-10">
                {product.name}
              </h2>
              <p className="pt-5 text-lg leading-5 text-gray-500 mb-4 ml-10">
                {product.description}
              </p>
              <div className="mt-1 ml-10">
                <div className="flex items-center">
                  <ReactStars {...options} />
                  <p className="ml-3 text-sm text-gray-400">
                    ({product.noOfReviews}) Reviews
                  </p>
                </div>
              </div>

              <p className="mt-5 font-bold ml-10">
                Availability:{" "}
                {product.stock < 1 ? (
                  <span className="text-red-600">Expired</span>
                ) : (
                  <span className="text-green-600">In Stock </span>
                )}
              </p>

              <p className="mt-4 text-4xl font-bold text-violet-900 ml-10">
                {`₹${product.price}`}
              </p>

              {product.productDetails && (
                <ul className="list-disc my-7 ml-10">
                  {product.productDetails.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              )}

              <div className="mt-6 ml-10">
                <p className="pb-2 text-xs text-gray-500">Size</p>
                <div className="flex gap-1">
                  {product.sizes &&
                    product.sizes.map((size, index) => {
                      return (
                        <div
                          key={index}
                          className={`flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500 ${
                            selectedSize === size ? "bg-gray-200" : ""
                          }`}
                          onClick={() => handleSizeSelection(size)}
                        >
                          {size}
                        </div>
                      );
                    })}
                </div>
              </div>

              <div className="mt-6 ml-10">
                <p className="pb-2 text-xs text-gray-500">Quantity</p>
                <div className="flex">
                  <button
                    className="flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500"
                    onClick={decreaseQuantity}
                  >
                    -
                  </button>
                  <div className="flex h-8 w-8 cursor-text items-center justify-center border-t border-b active:ring-gray-500">
                    {quantity}
                  </div>
                  <button
                    className="flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500"
                    onClick={increaseQuantity}
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="mt-7 flex flex-col items-center gap-6">
                <button
                  disabled={product.stock < 1 ? true : false}
                  className="flex w-full justify-center items-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  onClick={addToCartHandler}
                >
                  <ShoppingBag className="mx-2" />
                  Add to cart
                </button>
                <button
                  onClick={submitReviewToggle}
                  className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Submit Review
                </button>
              </div>
            </div>
          </section>
          <div className="bg-white rounded-2xl mx-5 py-10 mb-5">
            <h3 className="reviewsHeading">Reviews</h3>

            <Dialog
              aria-labelledby="simple-dialog-title"
              open={open}
              onClose={submitReviewToggle}
            >
              <DialogTitle>Submit Review</DialogTitle>
              <DialogContent className="submitDialog">
                <Rating
                  onChange={(e) => setRating(e.target.value)}
                  value={rating}
                  size="large"
                />

                <textarea
                  className="submitDialogTextArea"
                  cols="30"
                  rows="5"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                ></textarea>
              </DialogContent>
              <DialogActions>
                <Button onClick={submitReviewToggle} color="secondary">
                  Cancel
                </Button>
                <Button onClick={reviewSubmitHandler} color="primary">
                  Submit
                </Button>
              </DialogActions>
            </Dialog>

            {product.reviews && product.reviews[0] ? (
              <div className="reviews m-20">
                {product.reviews &&
                  product.reviews.map((review, index) => (
                    <ReviewCard key={index} review={review} />
                  ))}
              </div>
            ) : (
              <p className="noReviews">No Reviews Yet</p>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default ProductDetails;
