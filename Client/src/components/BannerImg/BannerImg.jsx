import React from "react";

const BannerImg = ({ img }) => {
  // background image create section
  const bgImg = {
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "400px",
  };

  return (
    <div data-aos="zoom-in" className="h-[400px" w-full style={bgImg}></div>
  );
};

export default BannerImg;
