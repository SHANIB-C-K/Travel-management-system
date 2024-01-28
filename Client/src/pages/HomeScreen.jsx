// importing section
import React from "react";
import NatureVid from "../assets/video/main.mp4";
import HomeSearch from "../components/HomeSearch/HomeSearch";
import Place from "../components/Places/Place";
import BannerImg from "../components/BannerImg/BannerImg";
import BannerPic from "../assets/cover-women.jpg";
import Blogs from "./Blogs";
import Banner from "../components/Banner/Banner";
import Banner2 from "../assets/travel-cover2.jpg";
import Testimonial from "../components/Testimonial/Testimonial";

const HomeScreen = () => {
  return (
    <>
      {/* html section */}
      <div>
        <div className="h-[700px] relative">
          <video
            autoPlay
            loop
            muted
            className="absolute right-0 top-0 h-[700px] w-full object-cover z-[-1]"
          >
            <source src={NatureVid} type="video/mp4" />
          </video>
          {/* HomeSearch component  */}
          <HomeSearch />
        </div>
        {/* place component section */}
        <Place />
        {/* Banner image component section */}
        <BannerImg img={BannerPic} />
        {/* Blogs xomponent section */}
        <Blogs />
        {/* Banner component section */}
        <Banner />
        {/* Banner image 2 component section */}
        <BannerImg img={Banner2} />
        {/* Testimonial component section */}
        <Testimonial />
      </div>
    </>
  );
};

export default HomeScreen;
