import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div className="about mt-12">
      <div className="container mx-auto px-4">
        <Title title={"Contact Us"} />

        <div className="mt-16 flex flex-col justify-center md:flex-row gap-10 mb-28">
          <img
            className="w-full md:max-w-[480px]"
            src={assets.contact_img}
            alt=""
          />

          <div className="flex flex-col justify-center items-start gap-6">
            <p className="text-base text-black font-normal">
              <b>Our Store</b>
            </p>
            <div>
              <p className="text-base text-black font-normal">
                65465 Willms Station
              </p>
              <p className="text-base text-black font-normal">
                Suite 350, Washington, USA
              </p>
            </div>

            <div>
              <p className="text-base text-black font-normal">
                Tel: 12356 7890
              </p>
              <p className="text-base text-black font-normal">
                Email: help@fashion.com
              </p>
            </div>

            <p className="text-base text-black font-normal">
              <b>Careers at Fashion</b>
            </p>
            <p className="text-base text-black font-normal">
              Learn more about our teams and job openings.
            </p>

            <button className="btn border border-black text-black bg-transparent text-sm font-medium hover:bg-black hover:text-white transition ease-in-out ">
              Explore Jobs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
