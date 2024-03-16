import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, DotIcon } from "lucide-react";

import { CardCarousels } from "./cardSlider";


// import img_product1_1 from "../Logo/img_product1_1.png";
// import img_product1_2 from "../Logo/img_product1_1.png";
// import img_product1_3 from "../Logo/img_product1_1.png";
// import img_product1_4 from "../Logo/img_product1_1.png";
// import img_product1_5 from "../Logo/img_product1_1.png";

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
    <div className="w-full h-full"> {/*mySlides fade*/}
      
      {/* Slides */}
      <div className="max-w-[1400px] h-[550px] w-full m-auto py-8 px-4 relative group cursor-pointer">
        <div
          key={slide[Index].id}
          className="w-full h-full rounded-2xl bg-center bg-cover bg-cover hover:scale-105 duration-500"
          style={{
            backgroundImage: `url(${slide[Index].url})`,
            // transform: `translateX(-${Index * 100}%)`,
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
  )
}

const Home = () => {
  const ProductList1 = [
    {
        id: 1,
        url: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-02032024-SPONSORBANNERCAROUSEL-Z2-JJ-min60.jpg"
    },
    {
        id: 2,
        url: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-07032024-MainBannerDailyChanging-Z1-P3-tigc-thebearhouse-min60cv.jpg"
    },
    {
        id: 3,
        url: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-WHP-010324-MAINBANNER-Z1-P6-AVAASA-FUSION-MIN50.jpg"
    },
    {
        id: 4,
        url: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-02032024-SPONSORBANNERCAROUSEL-Z2-superdry-min50.jpg"
    },
    {
        id: 5,
        url: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-02032024-SPONSORBANNERCAROUSEL-Z2-.jpg"
    }
  ]

  const ProductList2 = [
    {
      id: 1,
      url: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-WHP-010324-MAINBANNER-Z1-P2-GAP-M&S-UPTO70.jpg"
    },
    {
      id: 2,
      url: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-WHP-010324-MAINBANNER-Z1-P5-MABISHBYSONALJAIN-FABLESTREET-MIN50.jpg"
    },
    {
      id: 3,
      url: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-07032024-MainBannerDailyChanging-Z1-P3-levis-wrangler-min40.jpg"
    },
    {
      id: 4,
      url: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-07032024-MainBannerDailyChanging-Z1-P4-dnmx-netplay-min601.jpg"
    },
    {
      id: 5,
      url: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-02032024-SPONSORBANNERCAROUSEL-Z2-ONLY-Veromoda-min60.jpg"
    }
  ]

  const ProductList3 = [
    {
      id: 1,
      url: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-1603024-UHPHER-Z15-P2-EVERQUIPID-BLUEBEAUTY-MIN50.jpg"
    },
    {
      id: 2,
      url: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-1603024-UHPHER-Z15-P5-ALDO-STEVEMADDEN-UPTO60.jpg"
    },
    {
      id: 3,
      url: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-16032024-uhphim-z14-p4-Campus-abros-4070.jpg"
    },
    {
      id: 4,
      url: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-16032024-TopBrandBanner-Z3-P5-Abros-Yoho-MIN50.jpg"
    },
    {
      id: 5,
      url: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-16032024-TopBrandBanner-Z3-P5-Clarks-min30.jpg"
    }
  ]

  return (
    <div className="md:container min-w-full h-auto mx-auto p-4">
        
        <SlideRepresentation slide={ProductList1} />
        <SlideRepresentation slide={ProductList2} />
        <SlideRepresentation slide={ProductList3} />

        <CardCarousels />
        
    </div>
    
  )
}

export default Home;









const brands = [
  {
      name: "Chanel",
      logoUrl: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_750/https://assets.designhill.com/design-blog/wp-content/uploads/2019/04/2-8.jpg"
  },
  {
      name: "Tommy Hilfiger",
      logoUrl: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_750/https://assets.designhill.com/design-blog/wp-content/uploads/2019/04/26-min-1.jpg"
  },
  {
      name: "Ray-Ban",
      logoUrl: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_750/https://assets.designhill.com/design-blog/wp-content/uploads/2019/04/4-5.jpg"
  },
  {
      name: "Nike",
      logoUrl: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_750/https://assets.designhill.com/design-blog/wp-content/uploads/2019/04/5-5.jpg"
  },
  {
      name: "Versace",
      logoUrl: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_750/https://assets.designhill.com/design-blog/wp-content/uploads/2019/04/27-min-1.jpg"
  },
  {
      name: "H&M",
      logoUrl: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_750/https://assets.designhill.com/design-blog/wp-content/uploads/2019/04/10.png"
  },
  {
      name: "Levis",
      logoUrl: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_750/https://assets.designhill.com/design-blog/wp-content/uploads/2019/04/9-3.jpg"
  },
  {
      name: "Zara",
      logoUrl: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_750/https://assets.designhill.com/design-blog/wp-content/uploads/2019/04/11-1.jpg"
  },
  {
      name: "Burberry",
      logoUrl: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_750/https://assets.designhill.com/design-blog/wp-content/uploads/2019/04/13-1.jpg"
  },
  {
      name: "Calvin Klein",
      logoUrl: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_750/https://assets.designhill.com/design-blog/wp-content/uploads/2019/04/14-1.jpg"
  },
  {
      name: "Gucci",
      logoUrl: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_750/https://assets.designhill.com/design-blog/wp-content/uploads/2019/04/16-min-3.jpg"
  },
  {
      name: "Gap",
      logoUrl: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_750/https://assets.designhill.com/design-blog/wp-content/uploads/2019/04/20-min-4.jpg"
  },
  {
      name: "Lacoste",
      logoUrl: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_750/https://assets.designhill.com/design-blog/wp-content/uploads/2019/04/22-min-2.jpg"
  },
  {
      name: "Louis Vuitton",
      logoUrl: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_750/https://assets.designhill.com/design-blog/wp-content/uploads/2019/04/23-min-2.jpg"
  },
  {
      name: "Ralph Lauren",
      logoUrl: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_750/https://assets.designhill.com/design-blog/wp-content/uploads/2019/04/25-min-2.jpg"
  },
]