import React, { useEffect, useState } from "react";
// import Card from "react-bootstrap/Card";

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

    const Cards1 = [
        {
            id: 1,
            url: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-MHP-01032024-weddingwardrobe-Z10-kurta&shirts-upto70.jpg"
        },
        {
            id: 2,
            url: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-MHP-01032024-weddingwardrobe-Z10-sherwanis-min30.jpg"
        },
        {
            id: 3,
            url: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-MHP-01032024-weddingwardrobe-Z10-blazers&suits-upto70-.jpg"
        },
        {
            id: 4,
            url: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-MHP-01032024-weddingwardrobe-Z10-kurtasets-3080.jpg",
        },
        {
            id: 5,
            url: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-MHP-01032024-weddingwardrobe-Z10-bottomwear-upto80.jpg"
        }
    ]
    const Cards2 = [
        {
            id: 1,
            url: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-WHP-010324-SPONSORTILES-1-MAX.png"
        },
        {
            id: 2,
            url: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-WHP-010324-SPONSORTILES-2-SUPERDRY.png"
        },
        {
            id: 3,
            url: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-WHP-010324-SPONSORTILES-3-ADIDAS.png"
        },
        {
            id: 4,
            url: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-WHP-010324-SPONSORTILES-4-SAM.png"
        },
        {
            id: 5,
            url: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-WHP-010324-SPONSORTILES-5-ONLY.png"
        }
    ]
    const Cards3 = [
        {
            id: 1,
            url: "https://assets.ajio.com/cms/AJIO/WEB/14.1.jpg"
        },
        {
            id: 2,
            url: "https://assets.ajio.com/cms/AJIO/WEB/14.2.jpg"
        },
        {
            id: 3,
            url: "https://assets.ajio.com/cms/AJIO/WEB/14.3.jpg"
        },
        {
            id: 4,
            url: "https://assets.ajio.com/cms/AJIO/WEB/14.4.jpg"
        },
        {
            id: 5,
            url: "https://assets.ajio.com/cms/AJIO/WEB/14.7.jpg"
        }
    ]
    const Cards4 = [
        {
            id: 1,
            url: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-01032024-AJIOEXCLUSIVES-sam-min30.jpg"
        },
        {
            id: 2,
            url: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-01032024-EXPLOREMOREBRANDS-Z16-venheusen-min40.jpg"
        },
        {
            id: 3,
            url: "https://assets.ajio.com/cms/AJIO/WEB/d-1.0-UHP-01032024-AJIOExclsuive-8-Foundry-Upto40.jpg"
        },
        {
            id: 4,
            url: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-01032024-AJIOEXCLUSIVES-Leecoope-min60.jpg"
        },
        {
            id: 5,
            url: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-01032024-Superstar-Levis-Spykar-Flat50.jpg"
        }
    ]

    const BrandLogoCards = [
        {
            id: 1,
            url: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-01032024-AJIOEXCLUSIVES-sam-min30.jpg"
        },
        {
            id: 2,
            url: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-01032024-AJIOEXCLUSIVES-gap-3050.jpg"
        },
        {
            id: 3,
            url: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-01032024-AJIOEXCLUSIVES-superdry-3060a.jpg"
        },
        {
            id: 4,
            url: "https://assets.ajio.com/cms/AJIO/WEB/d-1.0-UHP-01032024-AJIOExclsuive-8-Foundry-Upto40.jpg"
        },
        {
            id: 5,
            url: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-01032024-Ethnicwear-1-Fashor-Anubhutee-Min40.jpg"
        },
        {
            id: 6,
            url: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-01032024-Ethnicwear-2-Indie-Riwah-Min50.jpg"
        },
        {
            id: 7,
            url: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-01032024-Ethnicwear-3-Aarke-Satyapaul-Min50.jpg"
        },
        {
            id: 8,
            url: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-01032024-Ethnicwear-4-Siyahi-Acai-Starting349.jpg"
        },
        {
            id: 9,
            url: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-11032024-FOOTWEAR-Z20-puma-asics-min50.jpg"
        },
        {
            id: 10,
            url: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-01032024-Footwear-1-USPA-Redtape-Min40.jpg"
        },
        {
            id: 11,
            url: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-01032024-Footwear-2-Skechers-Arbunore-Min30.jpg"
        },
        {
            id: 12,
            url: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-01032024-Footwear-3-LC-Woodland-Min40.jpg"
        }
    ]

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