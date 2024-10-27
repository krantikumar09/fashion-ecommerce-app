import React from "react";
import { assets } from "../assets/assets";

const Title = ({ title }) => {
  return (
    <div className="relative bg-transparent inline-block">
      <h1 className="text-2xl sm:text-3xl font-extrabold text-black z-50 ">
        {title}
      </h1>
      <img
        src={assets.titlePattern}
        className="absolute -right-8 -bottom-1 w-[100px] sm:w-[120px] -z-10"
        alt=""
      />
    </div>
  );
};

export default Title;
