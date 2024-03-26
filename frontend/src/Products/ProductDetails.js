import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReactStars from 'react-rating-stars-component';
import { ShoppingBag } from "lucide-react";
import { useAlert } from 'react-alert';
import { useParams } from 'react-router-dom';

import { clearErrors, getProductDetails } from '../actions/productAction';
import ReviewCard from './ReviewCard.js';
import Loader from '../Loader/Loader.js';

const ProductDetails = () => {

  const { id } = useParams();
  const dispatch = useDispatch();
  const alert = useAlert();

  const { product, loading, error } = useSelector((state) => state.productDetails);

  useEffect(() => {

    if(error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(getProductDetails(id));
  }, [dispatch, id, error, alert]);

  const options = {
    edit: false,
    color: "rgba(20, 20, 20, 0.1)",
    activeColor: "rgb(250 204 21)",
    size: window.innerWidth < 600 ? 20 : 25,
    value: product.ratings,
    isHalf: true,
  }

  return (
    <>
      {
        loading ? <Loader /> : (
          <>

            <section className="container flex-grow mx-auto max-w-[1200px] border-b py-5 lg:grid lg:grid-cols-2 lg:py-10">
              {/* Image comes here */}
              <div className="container mx-auto px-4">
                {
                  product.images && <img className='productImage' key={product.images[0].url} src={product.images[0].url} alt='' />
                }
              </div>

              {/* Description */}
              <div className="mx-auto px-5 lg:px-5">
                <h2 className="pt-3 text-2xl font-bold lg:pt-0">
                  {product.name}
                </h2>
                <div className="mt-1">
                  <div className="flex items-center">
                    <ReactStars {...options} />
                    <p className="ml-3 text-sm text-gray-400">
                      ({product.numOfReviews})
                    </p>
                  </div>
                </div>

                <p className="mt-5 font-bold">
                  Availability:{" "}
                  {product.stock < 1 ? (
                    <span className="text-green-600">In Stock </span>
                  ) : (
                    <span className="text-red-600">Expired</span>
                  )}
                </p>

                <p className="mt-4 text-4xl font-bold text-violet-900">
                  {`₹${product.price}`}
                </p>

                <p className="pt-5 text-sm leading-5 text-gray-500">
                  {product.description}
                </p>

                {/* <div className="mt-6">
            <p className="pb-2 text-xs text-gray-500">Size</p>
            <div className="flex gap-1">
              {product.size.map((x, index) => {
                return (
                  <div
                    key={index}
                    className="flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500"
                  >
                    {x}
                  </div>
                );
              })}
            </div>
          </div> */}

                <div className="mt-6">
                  <p className="pb-2 text-xs text-gray-500">Quantity</p>
                  <div className="flex">
                    <button>-</button>
                    <div className="flex h-8 w-8 cursor-text items-center justify-center border-t border-b active:ring-gray-500">
                      1
                    </div>
                    <button>+</button>
                  </div>
                </div>

                <div className="mt-7 flex flex-row items-center gap-6">
                  <button className="flex h-12 w-1/3 items-center justify-center bg-violet-900 text-white duration-100 hover:bg-blue-800">
                    <ShoppingBag className="mx-2" />
                    Add to cart
                  </button>
                  <button className="flex h-12 w-1/3 items-center justify-center bg-amber-400 duration-100 hover:bg-yellow-300">
                    Submit Review
                  </button>
                </div>

              </div>
            </section>

            <h3 className='reviewsHeading'>Reviews</h3>

            {
              product.reviews && product.reviews[0] ? (
                <div className='reviews'>
                  {
                    product.reviews && product.reviews.map((review) => <ReviewCard review={review} />)
                  }
                </div>
              ) : (
                <p className="pt-5 text-sm leading-5 text-gray-500">
                  No Reviews Yet
                </p>
              )
            }

          </>
        )
      }
    </>
  )
}

export default ProductDetails;
