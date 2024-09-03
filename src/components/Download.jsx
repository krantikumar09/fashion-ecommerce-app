import { assets } from "../assets/assets";

const Download = () => {
  return (
    <div className="downlod mt-32 mb-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 items-center  gap-5">
        <div className="text-center sm:text-left">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl text-black font-extrabold uppercase leading-normal mb-3">Download app & get the voucher!</h2>
          <p className="text-md font-normal text-black leading-normal mb-4">
            Get 30% off for first transaction using Rondovision mobile app for
            now.
          </p>
          <div className="flex items-center gap-4 mt-5 justify-center sm:justify-start">
            <img
              src={assets.play_store_img}
              className="w-40 h-10 rounded-md overflow-hidden cursor-pointer hover:scale-105 transition ease-in-out"
              alt="app store"
            />
            <img
              src={assets.app_store_img}
              className="w-40 h-10 rounded-md overflow-hidden cursor-pointer hover:scale-105 transition ease-in-out"
              alt="play store"
            />
          </div>
        </div>

        <div className="text-center">
          <img
            src={assets.download_img}
            className="w-[340px] h-1/2 mx-auto" 
            alt="mobile app"
          />
        </div>
      </div>
    </div>
  );
};

export default Download;
