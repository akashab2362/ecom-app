import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, DotIcon } from "lucide-react";
import Card from "react-bootstrap/Card";

import img_product1_1 from "../Logo/img_product1_1.png";
import img_product1_2 from "../Logo/img_product1_1.png";
import img_product1_3 from "../Logo/img_product1_1.png";
import img_product1_4 from "../Logo/img_product1_1.png";
import img_product1_5 from "../Logo/img_product1_1.png";

const SlideRepresentation = ({ slide }) => {
  useEffect(() => {
      const slideInterval = setInterval(handleRight, 2000);

    return () => clearInterval(slideInterval);
  });

  const [Index, setIndex] = useState(0);

  let handleLeft = () => {
    let ind = Index === 0 ? slide.length - 1 : Index - 1;
    setIndex(ind);
  };
  let handleRight = () => {
      let ind = Index === slide.length - 1 ? 0 : Index + 1;
      setIndex(ind);
  }

  return (
    <div className="w-full h-full mySlides fade">
      {/* Slides */}
      <div className="max-w-[1400px] h-[550px] w-full m-auto py-8 px-4 relative group cursor-pointer">
        <div
          key={slide[Index].id}
          className="w-full h-full rounded-2xl bg-center bg-cover flex transition-transform ease-out duration-500"
          style={{
            backgroundImage: `url(${slide[Index].url})`,
            transform: `translateX(-${Index * 100}%)`,
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
              className={`transition-all ${
                Index === slideInd ? "bg-opacity-50" : "p-2"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const CardSliders = ({ slide }) => {
  const [Index, setIndex] = useState(0);

  let handleRight = () => {
    let ind = Index === slide.length - 1 ? 0 : Index + 1;
    setIndex(ind);
  };

  useEffect(() => {
    const slideInterval = setInterval(handleRight, 2000);

    return () => clearInterval(slideInterval);
  });

  return (
    <div className="w-full h-full">
      {/* Slides */}
      <div className="max-w-[1400px] h-[550px] w-full m-auto py-8 px-4 relative group cursor-pointer">
        <div
          style={{ backgroundImage: `url(${slide[Index].url})` }}
          className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
        ></div>
      </div>
    </div>
  );
};

const Home = () => {
  const ProductList1 = [
    {
      id: 1,
      // url: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-02032024-SPONSORBANNERCAROUSEL-Z2-JJ-min60.jpg",
      url: img_product1_1,
    },
    {
      id: 2,
      // url: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-07032024-MainBannerDailyChanging-Z1-P3-tigc-thebearhouse-min60cv.jpg",
      url: img_product1_2,
    },
    {
      id: 3,
      // url: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-WHP-010324-MAINBANNER-Z1-P6-AVAASA-FUSION-MIN50.jpg",
      url: img_product1_3,
    },
    {
      id: 4,
      // url: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-02032024-SPONSORBANNERCAROUSEL-Z2-superdry-min50.jpg"
      url: img_product1_4,
    },
    {
      id: 5,
      // url: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-02032024-SPONSORBANNERCAROUSEL-Z2-.jpg"
      url: img_product1_5,
    },
  ];

  const Productlist2 = [
    {
      id: 1,
      img: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-WHP-010324-MAINBANNER-Z1-P2-GAP-M&S-UPTO70.jpg",
    },
    {
      id: 2,
      img: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-WHP-010324-MAINBANNER-Z1-P5-MABISHBYSONALJAIN-FABLESTREET-MIN50.jpg",
    },
    {
      id: 3,
      img: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-07032024-MainBannerDailyChanging-Z1-P3-levis-wrangler-min40.jpg",
    },
    {
      id: 4,
      img: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-07032024-MainBannerDailyChanging-Z1-P4-dnmx-netplay-min601.jpg",
    },
    {
      id: 5,
      url: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-02032024-SPONSORBANNERCAROUSEL-Z2-ONLY-Veromoda-min60.jpg",
    },
  ];

  const Cards1 = [
    {
      id: 1,
      url: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-MHP-01032024-weddingwardrobe-Z10-kurta&shirts-upto70.jpg",
    },
    {
      id: 2,
      url: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-MHP-01032024-weddingwardrobe-Z10-sherwanis-min30.jpg",
    },
    {
      id: 3,
      url: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-MHP-01032024-weddingwardrobe-Z10-blazers&suits-upto70-.jpg",
    },
    {
      id: 4,
      url: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-MHP-01032024-weddingwardrobe-Z10-kurtasets-3080.jpg",
    },
    {
      id: 5,
      url: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-MHP-01032024-weddingwardrobe-Z10-bottomwear-upto80.jpg",
    },
  ];
  const Cards2 = [
    {
      id: 1,
      url: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-WHP-010324-SPONSORTILES-1-MAX.png",
    },
    {
      id: 2,
      url: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-WHP-010324-SPONSORTILES-2-SUPERDRY.png",
    },
    {
      id: 3,
      url: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-WHP-010324-SPONSORTILES-3-ADIDAS.png",
    },
    {
      id: 4,
      url: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-WHP-010324-SPONSORTILES-4-SAM.png",
    },
    {
      id: 5,
      url: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-WHP-010324-SPONSORTILES-5-ONLY.png",
    },
  ];
  const Cards3 = [
    {
      id: 1,
      url: "https://assets.ajio.com/cms/AJIO/WEB/14.1.jpg",
    },
    {
      id: 2,
      url: "https://assets.ajio.com/cms/AJIO/WEB/14.2.jpg",
    },
    {
      id: 3,
      url: "https://assets.ajio.com/cms/AJIO/WEB/14.3.jpg",
    },
    {
      id: 4,
      url: "https://assets.ajio.com/cms/AJIO/WEB/14.4.jpg",
    },
    {
      id: 5,
      url: "https://assets.ajio.com/cms/AJIO/WEB/14.7.jpg",
    },
  ];
  const Cards4 = [
    {
      id: 1,
      url: "https://th.bing.com/th/id/OIP.Oy8NZaIxP6yfiywFOOzZkgHaIp?w=195&h=228&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    },
    {
      id: 2,
      url: "https://th.bing.com/th/id/OIP.5_kxexdE1by1Y2nANpns_AHaJ2?w=163&h=216&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    },
    {
      id: 3,
      url: "https://th.bing.com/th/id/OIP.EdOzMZzIIT0375jriZDP6gHaHa?w=216&h=216&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    },
    {
      id: 4,
      url: "https://th.bing.com/th/id/OIP.xJbagif7NW5Is6WaEiLSggHaEj?w=287&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    },
    {
      id: 5,
      url: "https://th.bing.com/th/id/OIP.XOhWEtEqdKP1lDgGi4c1wgHaLG?w=195&h=292&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    },
  ];

  return (
    <>
      <div className="slideshow-container1">
        <SlideRepresentation slide={ProductList1} />
        <SlideRepresentation slide={Productlist2} />

        <Card style={{ width: "75em", display: "flex" }}>
          <CardSliders slide={Cards1} />
          <CardSliders slide={Cards2} />
          <CardSliders slide={Cards3} />
          <CardSliders slide={Cards4} />
        </Card>
      </div>
    </>
  );
};

export default Home;
