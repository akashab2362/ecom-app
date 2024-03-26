import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, DotIcon } from "lucide-react";
import { useSelector, useDispatch } from 'react-redux';
import { useAlert } from "react-alert";

import { CardCarousels } from "./cardSlider";
import { ProductList1, ProductList2, ProductList3 } from "./dataCollection";
import ProductCard from "../Products/ProductCard";
import MetaData from "./MetaData";
import { clearErrors, getProduct } from "../actions/productAction";
import Loader from "../Loader/Loader";

const SlideRepresentation = ({ slide }) => {
  useEffect(() => {
    const slideInterval = setInterval(handleRight, 3000);

    return () => clearInterval(slideInterval);
  })

  const [Index, setIndex] = useState(0);

  let handleLeft = () => {
    let ind = Index === 0 ? slide.length - 1 : Index - 1;
    setIndex(ind);
  }
  let handleRight = () => {
    let ind = Index === slide.length - 1 ? 0 : Index + 1;
    setIndex(ind);
  }

  return (
    <div className="w-full h-full">

      {/* Slides */}
      <div className="max-w-[1400px] h-[550px] w-full m-auto py-8 px-4 relative group cursor-pointer">
        <div
          key={slide[Index].id}
          className="w-full h-full rounded-2xl bg-center bg-cover bg-cover hover:scale-105 duration-500"
          style={{
            backgroundImage: `url(${slide[Index].url})`,
          }}
        ></div>

        {/* Left arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-9 text-2xl text-white ">
          <ChevronLeft size={50} onClick={handleLeft} />
        </div>

        {/* Right arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-9 text-2xl text-white">
          <ChevronRight size={50} onClick={handleRight} />
        </div>

        {/* Bottom indicators */}
        <div className="flex top-4 justify-center items-center py-2 gap-2">
          {slide.map((slides, slideInd) => (
            <DotIcon
              size={40}
              className={`transition-all ${Index === slideInd ? "bg-opacity-50" : "p-2"
                }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

const Home = () => {

  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector(state => state.products);

  useEffect(() => {
    if(error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(getProduct());
  }, [dispatch, error, alert]);

  // const product = {
  //   name: "Purple Gown",
  //   images: [{ url: "https://th.bing.com/th/id/OIP.1gyuITxSroERpV2o_yjluAHaKO?w=125&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" }],
  //   price: "$79.00",
  //   _id: "123"
  // };

  return (
    <>
      {
        loading ? <Loader /> : (
          <>
            <MetaData title="Byte Bazaar" />

            <div className="md:container min-w-full h-auto mx-auto p-4">

              <SlideRepresentation slide={ProductList1} />
              <SlideRepresentation slide={ProductList2} />
              <SlideRepresentation slide={ProductList3} />

              <CardCarousels />

            </div>

            {/* Here comes the actual products */}
            <section className="py-12 bg-white sm:py-16 lg:py-20">
              <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-md mx-auto text-center">
                  <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Our Featured Items</h2>
                  <p className="mt-4 text-base font-normal leading-7 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus faucibus massa dignissim tempus.</p>
                </div>

                <div className="grid grid-cols-2 gap-6 mt-10 lg:mt-16 lg:gap-4 lg:grid-cols-4">

                  {
                    products && products.map((product) => (
                      <ProductCard product={product} />
                    ))
                  }

                </div>

              </div>
            </section>

          </>
        )
      }
    </>

  )
}

export default Home;

