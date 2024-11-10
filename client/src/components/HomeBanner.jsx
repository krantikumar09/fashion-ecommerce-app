import { Link } from "react-router-dom";

const HomeBanner = () => {
  return (
    <div className="Home-Banner bg-[url('./assets/banner_img.jpg')] bg-center bg-cover w-full min-h-[400px] h-full mt-32 mb-20">
      <div className="container mx-auto px-4">
        <div className="pt-10 text-right">
            <h1 className="text-2xl sm:text-4xl md:text-5xl text-black font-extrabold leading-normal sm:leading-normal md:leading-snug uppercase mb-4">
              <span className="relative bg-white">payday</span> sale now
            </h1>
            <p className="text-base text-black font-normal mb-4">
              Spend minimal $100 get 30% off voucher code for your next purchase
            </p>

            <p className="text-base text-black font-bold leading-normal">1 June - 10 June 2023</p>
            <p className="text-base text-black font-normal">*Terms & Conditions apply</p>
            <Link
              to="/collection"
              className="mt-5 btn btn-sm sm:btn-md bg-black text-white text-sm sm:text-base font-medium hover:bg-black outline-none border-none"
            >
              Shop Now
            </Link>
          </div>
      </div>
    </div>
  );
};

export default HomeBanner;
