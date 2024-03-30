import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useAlert } from 'react-alert';
import { Slider } from '@material-ui/core';
import { useParams } from 'react-router-dom';

import MetaData from '../Layout/MetaData';
import { clearErrors, getProduct } from '../actions/productAction';
import Loader from '../Loader/Loader';
import ProductCard from './ProductCard';
import { Pagination } from 'react-js-pagination';
import "./Search.css";

const categories = [
    "Tops",
    "Bottom",
    "Jackets",
    "Footwear"
];

const WomenProducts = () => {

    const dispatch = useDispatch();
    const alert = useAlert();
    const { products, loading, error, productsCount, resultPerPage, filteredProductsCount } = useSelector(state => state.products);

    const [currentPage, setCurrentPage] = useState(1);
    const [price, setPrice] = useState([0, 25000]);
    const [category, setCategory] = useState("");
    const [ratings, setRatings] = useState(0);
    
    const keyword = useParams();

    const priceHandler = (event, newPrice) => {
        setPrice(newPrice);
    };

    const setCurrentPageNo = (e) => {
        setCurrentPage(e);
    }

    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }

        dispatch(getProduct(keyword, currentPage, price, category, ratings));
    }, [dispatch, keyword, currentPage, price, category, ratings, alert, error]);

    let count = filteredProductsCount;

    return (
        <>
            {
                loading ? <Loader /> : (
                    <>
                        <MetaData title="PRODUCTS -- Byte Bazaar" />
                        <div className="max-w-md mx-auto text-center">
                            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                                Women Clothing
                            </h2>
                        </div>
                        <div className="grid grid-cols-2 gap-6 min-h-60 mt-10 lg:mt-16 lg:gap-4 lg:grid-cols-4">

                            {
                                products && products
                                    .filter((product) => product.category === "women")
                                    .map((product) => (
                                        <ProductCard product={product} />
                                    ))
                            }

                        </div>

                        {
                            resultPerPage < count && (
                                <div className='flex justify-center m-9'>
                                    <Pagination
                                        className='flex justify-center p-0'
                                        activePage={currentPage}
                                        itemsCountPerPage={resultPerPage}
                                        totalItemsCount={productsCount}
                                        onChange={setCurrentPageNo}
                                        nextPageText="Next"
                                        prevPageText="Prev"
                                        firstPageText="1st"
                                        lastPageText="Last"
                                        itemClass="list-none bg-white border border-black py-3 px-3.5 transition-all cursor-pointer first:rounded-l-md last:rounded-r-md hover:bg-black group"
                                        linkClass="no-underline font-light font-sans text-black transition-all group-hover:stroke-white"
                                        activeLinkClass="bg-indigo-900 text-white"
                                    />
                                </div>
                            )
                        }

                        <div className='filterBox'>
                            <p className='prose'>
                                Price
                            </p>
                            <Slider
                                value={price}
                                onChange={priceHandler}
                                valueLabelDisplay="auto"
                                aria-labelledby="range-slider"
                                min={0}
                                max={25000}
                            />

                            <p className='prose'>
                                Categories
                            </p>
                            <ul className='categoryBox'>
                                {
                                    categories.map((category) => (
                                        <li
                                            className='category-link'
                                            key={category}
                                            onClick={() => setCategory(category)}
                                        >
                                            {category}
                                        </li>
                                    ))
                                }
                            </ul>

                            <fieldset>
                                <legend className='prose'>
                                    Ratings Above
                                </legend>
                                <Slider
                                    value={ratings}
                                    onChange={(e, newRating) => {
                                        setRatings(newRating);
                                    }}
                                    valueLabelDisplay="auto"
                                    aria-labelledby="continuous-slider"
                                    min={0}
                                    max={5}
                                />
                            </fieldset>
                        </div>
                    </>
                )
            }
        </>
    )
}

export default WomenProducts;
