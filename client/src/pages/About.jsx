import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import Newsletter from "../components/Newsletter";

const About = () => {
  return (
    <div className="about mt-12">
      <div className="container mx-auto px-4">
        <Title title={"About Us"} />

        <div className="my-16 flex flex-col sm:flex-row gap-16">
          <img
            className="w-full md:max-w-[450px] rounded-xl"
            src={assets.about_img}
            alt=""
            loading="lazy"
          />

          <div className="flex flex-col justify-center gap-6 md:w-2/4 text-navbar-text">
            <p className="text-base font-normal text-black">
              Forever was born out of a passion for innovation and a desire to
              revolutionize the way people shop online. Our journey began with a
              simple idea: to provide a platform where customers can easily
              discover, explore, and purchase a wide range of products from the
              comfort of their homes.
            </p>

            <p className="text-base font-normal text-black">
              Since our inception, we've worked tirelessly to curate a diverse
              selection of high-quality products that cater to every taste and
              preference. From fashion and beauty to electronics and home
              essentials, we offer an extensive collection sourced from trusted
              brands and suppliers.
            </p>

            <p className="text-base font-bold text-black">Our Mission</p>

            <p className="text-base font-normal text-black">
              Our mission at Forever is to empower customers with choice,
              convenience, and confidence. We're dedicated to providing a
              seamless shopping experience that exceeds expectations, from
              browsing and ordering to delivery and beyond.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-18">
        <Newsletter />
      </div>
    </div>
  );
};

export default About;
