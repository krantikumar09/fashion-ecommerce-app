import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className="Hero mt-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-5 bg-hero rounded-[20px] sm:rounded-[30px] md:rounded-[40px] px-2 pt-4 sm:pt-0 ms:px-4 md:px-6 min-h-[82vh]">
        {/* left */}
        <div className=" ">
          <h1 className="text-2xl xs:text-3xl sm:text-5xl md:text-7xl text-black font-extrabold leading-normal sm:leading-normal md:leading-snug uppercase mb-4">
            <span className="relative bg-white">let's</span> explore <span className="relative bg-gold">unique</span> clothes.
          </h1>
          <p className="text-sm sm:text-base text-black font-normal mb-4">Live for Influential and Innovative fashion!</p>
          <a href="#newArrival" className="btn btn-sm sm:btn-md bg-black text-white text-sm sm:text-base font-medium hover:bg-black">Shop Now</a>
        </div>
        {/* right */}
        <div  className="text-center">
          <img src={assets.hero} alt="hero" className="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
