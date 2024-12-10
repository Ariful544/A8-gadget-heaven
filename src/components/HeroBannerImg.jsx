import React from "react";
import bannerImg from "../assets/banner.jpg";
const HeroBannerImg = () => {
  return (
    <div className="w-9/12 lg:w-6/12 mx-auto rounded-2xl p-2 bg-white/30 border-2">
      <img className="rounded-xl w-full" src={bannerImg} alt="Banner Image" />
    </div>
  );
};

export default HeroBannerImg;
