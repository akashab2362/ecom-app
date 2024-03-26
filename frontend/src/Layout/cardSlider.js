import React, { useEffect, useState } from "react";
import { Cards1, Cards2, Cards3, Cards4, BrandLogoCards } from './dataCollection';
const CardSliders = ({ slide }) => {
    const [Index, setIndex] = useState(0);

    useEffect(() => {
        const slideInterval = setInterval(handleRight, 2000);

        return () => clearInterval(slideInterval);
    })

    let handleRight = () => {
        let ind = Index === slide.length - 1 ? 0 : Index + 1;
        setIndex(ind);
    }

    return (
        <div className="w-full h-full">

            {/* Slides */}
            <div className="max-w-[1400px] h-[550px] w-full m-auto py-8 px-4 relative group cursor-pointer">
                <div
                    style={{ backgroundImage: `url(${slide[Index].url})` }}
                    className="w-full h-full rounded-2xl bg-center bg-cover hover:scale-105 duration-500"
                ></div>
            </div>
        </div>
    );
}

export const CardCarousels = () => {

    return (
        <>
            <div class="max-w-sm rounded overflow-hidden shadow-lg lg:max-w-full lg:flex">
                <CardSliders slide={Cards1} />
                <CardSliders slide={Cards2} />
                <CardSliders slide={Cards3} />
                <CardSliders slide={Cards4} />
            </div>

            <div className="max-w-sm rounded overflow-hidden shadow-lg lg:max-w-full lg:grid grid-cols-4 gap-4">
                {
                    BrandLogoCards.map((product) => (
                        <div key={product.id} className="w-full h-full grid-col">

                            <div className="max-w-[1400px] h-[350px] w-full m-auto py-5 px-2 relative group cursor-pointer">
                                <div
                                    style={{ backgroundImage: `url(${product.url})` }}
                                    className="w-full h-full rounded-2xl bg-center bg-contain hover:scale-105 duration-500"
                                ></div>
                            </div>
                        </div>
                    ))
                }
            </div>

        </>
    )

}