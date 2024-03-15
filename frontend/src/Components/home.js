import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, DotIcon } from "lucide-react";

import ErrorBoundary from "./errorBoundary";
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

  const Productlist2 = [
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

  return (
    <div className="md:container min-w-full h-auto mx-auto p-4">
        
        <SlideRepresentation slide={ProductList1} />
        <SlideRepresentation slide={Productlist2} />

        <ErrorBoundary>
            <CardCarousels />
        </ErrorBoundary>
        
    </div>
    
  )
}

export default Home;







// import React, { useEffect, useState } from 'react';
// import { ChevronLeft, ChevronRight, DotIcon } from 'lucide-react';
// import { XIcon } from 'lucide-react';
// import Card from 'react-bootstrap/Card';

// const SlideRepresentation = ({ slide }) => {

//     useEffect(() => {
//         const slideInterval = setInterval(handleRight, 3000);

//         return () => clearInterval(slideInterval);
//     })

//     const [Index, setIndex] = useState(0);

//     let handleLeft = () => {
//         let ind = Index === 0 ? slide.length - 1 : Index - 1;
//         setIndex(ind);
//     }
//     let handleRight = () => {
//         let ind = Index === slide.length - 1 ? 0 : Index + 1;
//         setIndex(ind);
//     }

//     return (
//         <div className='w-full h-full'>

//             {/* Slides */}
//             <div className='max-w-[1400px] h-[550px] w-full m-auto py-8 px-4 relative group cursor-pointer'>
//                 <div style={{ backgroundImage: `url(${slide[Index].img})` }} className='w-full h-full rounded-2xl bg-center bg-cover hover:scale-105 duration-500'>
//                 </div>

//                 {/* Left arrow */}
//                 < div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-9 text-2xl text-white '>
//                     <ChevronLeft size={50} onClick={handleLeft} />
//                 </div>

//                 {/* Right arrow */}
//                 < div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-9 text-2xl text-white'>
//                     <ChevronRight size={50} onClick={handleRight} />
//                 </div>

//                 {/* Bottom indicators */}
//                 <div className='flex top-4 justify-center items-center py-2 gap-2'>
//                     {slide.map((slides, slideInd) => (
//                         <DotIcon size={40} className={`transition-all ${Index === slideInd ? "bg-opacity-50" : "p-2"}`} />
//                     ))}
//                 </div>
//             </div>
//         </div>
//     )
// }


// const CardSliders = ({slide}) => {
//     const [Index, setIndex] = useState(0);

//     useEffect(() => {
//         const slideInterval = setInterval(handleRight, 2000);

//         return () => clearInterval(slideInterval);
//     })

//     let handleRight = () => {
//         let ind = Index === slide.length - 1 ? 0 : Index + 1;
//         setIndex(ind);
//     }
    
//     return (
//         <div className='w-full h-full'>

//             {/* Slides */}
//             <div className='max-w-[1400px] h-[550px] w-full m-auto py-8 px-4 relative group cursor-pointer'>
//                 <div style={{ backgroundImage: `url(${slide[Index].img})` }} className='w-full h-full rounded-2xl bg-center bg-cover hover:scale-105 duration-500'>
//                 </div>
//             </div>
//         </div>
//     );
// }

// const Home = () => {
//     // Men
//     const MenSlide = [
//         {
//             // img : '../images/floral_shirt.jpg'
//             img: 'https://assets.ajio.com/cms/AJIO/WEB/D-1.0-WHP-010324-MAINBANNER-Z1-P2-GAP-M&S-UPTO70.jpg'
//         },
//         {
//             // img : '../images/jacket.jpg'
//             img: 'https://assets.ajio.com/cms/AJIO/WEB/D-1.0-WHP-010324-MAINBANNER-Z1-P5-MABISHBYSONALJAIN-FABLESTREET-MIN50.jpg'
//         },
//         {
//             // img : '../images/jeans_shoes.jpg'
//             img: 'https://assets.ajio.com/cms/AJIO/WEB/D-1.0-WHP-010324-MAINBANNER-Z1-P6-AVAASA-FUSION-MIN50.jpg'
//         },
//         {
//             // img : '../images/shirt_shoe.jpg'
//             img: 'https://assets.ajio.com/cms/AJIO/WEB/D-1.0-MHP-010324-MainBanner-1-golive%20(1).gif'
//         },
//         {
//             // img : '../images/suit_watch.jpg'
//             img: 'https://static.zara.net/photos///contents/mkt/spots/ss24-north-woman-jackets/subhome-xmedia-09//w/1848/IMAGE-landscape-fill-d4a646af-9c1d-4491-9777-82a3e0d3677e-default_0.jpg?ts=1709378834738'
//         }

//     ]

//     // Women
//     const WomenSlide = [
//         {
//             img: 'https://th.bing.com/th/id/OIP.AuVz2jFrYNUHBG6lokhsUwHaLL?w=195&h=295&c=7&r=0&o=5&dpr=1.5&pid=1.7'
//         },
//         {
//             img: 'https://th.bing.com/th/id/OIP.ZClha1fIofcLQ58PRqK55QHaLH?w=195&h=292&c=7&r=0&o=5&dpr=1.5&pid=1.7'
//         },
//         {
//             img: 'https://th.bing.com/th/id/OIP.wPNDVzNZuvFPtHQEBzkLCgHaLH?w=195&h=292&c=7&r=0&o=5&dpr=1.5&pid=1.7'
//         },
//         {
//             img: 'https://th.bing.com/th/id/OIP.azFqtGOSgOgm6hvLqLPknQHaJQ?w=195&h=244&c=7&r=0&o=5&dpr=1.5&pid=1.7'
//         },
//         {
//             img: 'https://th.bing.com/th/id/OIP.dlUZg6xrfvjw3Bdc7cEgawHaHe?w=195&h=197&c=7&r=0&o=5&dpr=1.5&pid=1.7'
//         },
//         {
//             img: 'https://th.bing.com/th/id/OIP.uJ7lpbtcMAHeU4ia747_lgHaLH?w=195&h=292&c=7&r=0&o=5&dpr=1.5&pid=1.7'
//         }
//     ]


//     const Cards1 = [
//         {
//             img: 'https://assets.ajio.com/cms/AJIO/WEB/D-1.0-MHP-01032024-weddingwardrobe-Z10-kurta&shirts-upto70.jpg'
//         },
//         {
//             img: 'https://assets.ajio.com/cms/AJIO/WEB/D-1.0-MHP-01032024-weddingwardrobe-Z10-sherwanis-min30.jpg'
//         },
//         {
//             img: 'https://assets.ajio.com/cms/AJIO/WEB/D-1.0-MHP-01032024-weddingwardrobe-Z10-blazers&suits-upto70-.jpg'
//         },
//         {
//             img: 'https://assets.ajio.com/cms/AJIO/WEB/D-1.0-MHP-01032024-weddingwardrobe-Z10-kurtasets-3080.jpg'
//         },
//         {
//             img: 'https://assets.ajio.com/cms/AJIO/WEB/D-1.0-MHP-01032024-weddingwardrobe-Z10-bottomwear-upto80.jpg'
//         },
//     ]
//     const Cards2 = [
//         {
//             img: 'https://assets.ajio.com/cms/AJIO/WEB/D-1.0-WHP-010324-SPONSORTILES-1-MAX.png'
//         },
//         {
//             img: 'https://assets.ajio.com/cms/AJIO/WEB/D-1.0-WHP-010324-SPONSORTILES-2-SUPERDRY.png'
//         },
//         {
//             img: 'https://assets.ajio.com/cms/AJIO/WEB/D-1.0-WHP-010324-SPONSORTILES-3-ADIDAS.png'
//         },
//         {
//             img: 'https://assets.ajio.com/cms/AJIO/WEB/D-1.0-WHP-010324-SPONSORTILES-4-SAM.png'
//         },
//         {
//             img: 'https://assets.ajio.com/cms/AJIO/WEB/D-1.0-WHP-010324-SPONSORTILES-5-ONLY.png'
//         },
//     ]
//     const Cards3 = [
//         {
//             img: 'https://assets.ajio.com/cms/AJIO/WEB/14.1.jpg'
//         },
//         {
//             img: 'https://assets.ajio.com/cms/AJIO/WEB/14.2.jpg'
//         },
//         {
//             img: 'https://assets.ajio.com/cms/AJIO/WEB/14.3.jpg'
//         },
//         {
//             img: 'https://assets.ajio.com/cms/AJIO/WEB/14.4.jpg'
//         },
//         {
//             img: 'https://assets.ajio.com/cms/AJIO/WEB/14.7.jpg'
//         },
//     ]
//     const Cards4 = [
//         {
//             img: 'https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-01032024-AJIOEXCLUSIVES-sam-min30.jpg'
//         },
//         {
//             img: 'https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-01032024-EXPLOREMOREBRANDS-Z16-venheusen-min40.jpg'
//         },
//         {
//             img: 'https://assets.ajio.com/cms/AJIO/WEB/d-1.0-UHP-01032024-AJIOExclsuive-8-Foundry-Upto40.jpg'
//         },
//         {
//             img: 'https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-01032024-AJIOEXCLUSIVES-Leecoope-min60.jpg'
//         },
//         {
//             img: 'https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-01032024-Superstar-Levis-Spykar-Flat50.jpg'
//         },
//     ]





//     // function ControlledCarousel() {
//     //     const [index, setIndex] = useState(0);

//     //     const handleSelect = (selectedIndex) => {
//     //       setIndex(selectedIndex);
//     //     };

//     return (
//         <div className='md:container min-w-full h-auto mx-auto p-4 '>

//             <div className="relative isolate flex items-center rounded-lg gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...">
//                 <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
//                     <p className="text-sm leading-6 text-gray-900">
//                         <strong className="font-semibold">TAC 2024 . </strong>
//                         {/* <svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
//                             <circle cx={1} cy={1} r={1} />
//                         </svg> */}
//                         Join us in Denver from June 7 – 9 to see what’s coming next.
//                     </p>
//                     <a
//                         href="/"
//                         className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
//                     >
//                         Register now <span aria-hidden="true">&rarr;</span>
//                     </a>
//                 </div>
//                 <div className="flex flex-1 justify-end">
//                     <button type="button" className="-m-3 p-3 focus-visible:outline-offset-[-4px]">
//                         <span className="sr-only">Dismiss</span>
//                         <XIcon className="h-5 w-5 text-gray-900" aria-hidden="true" />
//                     </button>
//                 </div>
//             </div>

//             <SlideRepresentation slide={MenSlide} />

//             <div className="relative flex justify-center items-center rounded-lg gap-x-6 overflow-hidden bg-gray-50 mt-3.5 px-6 py-2.5 sm:px-3.5 bg-red-500">
//                 <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
//                     <p className="text-2xl leading-6 text-white-900">hello world</p>
//                 </div>
//             </div>

//             <SlideRepresentation slide={WomenSlide} />

//             <Card style={{ width: '75em', display: 'flex' }}>
//                 <CardSliders slide={Cards1}/>
//                 <CardSliders slide={Cards2}/>
//                 <CardSliders slide={Cards3}/>
//                 <CardSliders slide={Cards4}/>
//             </Card>
//         </div>




//         // <Carousel>
//         //     {MenSlide.map((e) => (
//         //         <Carousel.Item>
//         //             <Carousel.Caption>
//         //                 <img src={e.img} alt={`Slide: ${e.id + 1}`} />
//         //                 <h3>First slide label</h3>
//         //                 <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//         //             </Carousel.Caption>
//         //         </Carousel.Item>
//         //     )
//         //     )}
//         // </Carousel>



//     )

// }

// export default Home;
