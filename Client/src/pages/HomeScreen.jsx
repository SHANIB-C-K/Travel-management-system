// importing section
import React from "react";
import NatureVid from "../assets/video/main.mp4";
import HomeSearch from "../components/HomeSearch/HomeSearch";
import Place from "../components/Places/Place";

const HomeScreen = () => {
  return (
    <>
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
        <Place />
      </div>
    </>
  );
};

export default HomeScreen;
