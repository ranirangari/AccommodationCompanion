import React from "react";
import HomeCarousel from "../customer/Components/Carousel/HomeCarousel";
import { homeCarouselData } from "../customer/Components/Carousel/HomeCaroselData";
import HomeProductSection from "../customer/Components/Home/HomeProductSection";
import { singlebed } from "./../Data/singlebed";
import { doublebed } from './../Data/doublebed';

const Homepage = () => {

  return (
    <div className="">
      <HomeCarousel images={homeCarouselData} />

      <div className="space-y-10 py-20">
      <HomeProductSection data={singlebed} section={"Single Bed"} />
        <HomeProductSection data={doublebed} section={"Double Bed"} />
       
      </div>

      
    </div>
  );
};

export default Homepage;
