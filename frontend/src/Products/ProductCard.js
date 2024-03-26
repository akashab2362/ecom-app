import React from 'react';
import ReactStars from 'react-rating-stars-component';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {

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
            <Link className='productCard' to={`${product._id}`}>
                <div className="relative group hover:shadow-lg px-1.5">
                    <div className="overflow-hidden aspect-w-1 aspect-h-1">
                        <img className="object-cover w-full h-full transition-all duration-300 group-hover:scale-110" src={product.images[0].url} alt="" />
                    </div>

                    {/* <div className="absolute left-3 top-3">
                            <p className="sm:px-3 sm:py-1.5 px-1.5 py-1 text-[8px] sm:text-xs font-bold tracking-wide text-gray-900 uppercase bg-white rounded-full">New</p>
                            </div> */}

                    <div className="flex items-start justify-between mt-4 space-x-4">
                        <div>
                            <h3 className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">
                                {product.name}
                            </h3>

                            <div className="flex items-center mt-2 space-x-px">
                                <ReactStars {...options} />
                                {/* <span className="absolute inset-0" aria-hidden="true"> (256 review) </span> */}

                            </div>
                        </div>

                        <div className="text-right">
                            <p className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">
                                {`₹${product.price}`}
                            </p>
                        </div>
                    </div>
                </div>
            </Link>

        </>

    )
}
export default ProductCard;
