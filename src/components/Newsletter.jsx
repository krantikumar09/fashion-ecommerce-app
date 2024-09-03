import React from "react";

const Newsletter = () => {
  return (
    <div className="newsletter bg-yellow py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-[600px] w-full mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-black font-extrabold uppercase leading-normal mb-3">
            JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO
          </h2>
          <p className="text-md font-normal text-black leading-normal mb-4 ">
            Type your email down below and be young wild generation
          </p>

          <form className="flex items-center flex-col sm:flex-row justify-center gap-4 mt-10">
            <input
              type="text"
              placeholder="Enter your email here..."
              className="input w-full max-w-xs"
            />
            <button
              to="/collection"
              className="btn max-w-xs w-full sm:w-auto bg-black text-white text-sm sm:text-base font-medium hover:bg-black outline-none border-none"
            >
              Shop Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
