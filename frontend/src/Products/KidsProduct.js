import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useAlert } from 'react-alert';
import { Slider } from '@material-ui/core';
import { useParams } from 'react-router-dom';

import { clearErrors, getProduct } from '../actions/productAction';
import Loader from '../Loader/Loader';
import ProductCard from './ProductCard';
import "./Search.css";

const categories = [
    "Shirts",
    "T-Shirts",
    "Jeans",
    "Jackets",
    "Footwear"
];

const KidsProducts = () => {

    const dispatch = useDispatch();
    const alert = useAlert();
    const { products, loading, error, productsCount, resultPerPage, filteredProductsCount } = useSelector(state => state.products);

    const keyword = useParams();

    const [price, setPrice] = useState([0, 25000]);
    const [category, setCategory] = useState("");
    const [ratings, setRatings] = useState(0);

    const priceHandler = (event, newPrice) => {
        setPrice(newPrice);
    };

    useEffect(() => {
        if(error) {
            alert.error(error);
            dispatch(clearErrors());
        }

        dispatch(getProduct(keyword, price, category, ratings));
    }, [dispatch, keyword, price, category, ratings, alert, error]);

    let count = filteredProductsCount;

  return (
    <>
        {
            loading ? <Loader /> : (
                <>
                    <div className="max-w-md mx-auto text-center">
                        <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                            Kids Clothing
                        </h2>
                    </div>
                    <div className="grid grid-cols-2 gap-6 mt-10 lg:mt-16 lg:gap-4 lg:grid-cols-4">

                        {
                            products && products
                            .filter((product) => product.category === "kids")
                            .map((product) => (
                            <ProductCard product={product} />
                            ))
                        }

                    </div>

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
                                        { category }
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

export default KidsProducts;
