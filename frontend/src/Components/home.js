import React, { useState, useEffect } from "react";

const Home = () => {
  const product1list = [
    {
      id: 1,
      url: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-WHP-010324-MAINBANNER-Z1-P2-GAP-M&S-UPTO70.jpg",
    },
    {
      id: 2,
      url: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-WHP-010324-MAINBANNER-Z1-P5-MABISHBYSONALJAIN-FABLESTREET-MIN50.jpg",
    },
    {
      id: 3,
      url: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-WHP-010324-MAINBANNER-Z1-P6-AVAASA-FUSION-MIN50.jpg",
    },
    {
      id: 4,
      url: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-MHP-010324-MainBanner-1-golive%20(1).gif",
    },
  ];

  return (
    <>
     <div className="slideshow-container1">
      {product1list.map((e)=>(
        <div className="mySlides fade">
          <img src={e.url} alt={`Slide: ${e.id+1}`} />
        </div>
      ))}
     </div>
    </>
  );
};

export default Home;
