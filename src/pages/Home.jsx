import React from "react";
import Hero from "../components/Hero";
import LatestCollection from "../components/LatestCollection";
import NewArrival from "../components/NewArrival";
import BestSeller from "../components/BestSeller";
import HomeBanner from "../components/HomeBanner";
import Favourite from "../components/Favourite";
import Download from "../components/Download";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="Home">
      <div className="container mx-auto px-4">
        <Hero />
        <NewArrival />
        <LatestCollection />
        <BestSeller />
      </div>
      <HomeBanner/>
      <div className="container mx-auto px-4">
        <Favourite/>
        <Download/>
      </div>
      <Newsletter/>
      <Footer/>
    </div>
  );
};

export default Home;
