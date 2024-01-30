// importing section
import React from "react";
import { useLocation } from "react-router-dom";
import BlogsComp from "../components/BlogsComponent/BlogComponent";

const BlogsDetails = () => {
  const location = useLocation();
  // console.log(props, " props");
  // console.log(location, " useLocation Hook");
  const { image, date, title, description, author } = location.state;

  return (
    // html section
    <div className=" pt-20">
      <div className="h-[300px] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="mx-auto h-[300px] w-full object-cover transition duration-700 hover:scale-110"
        />
      </div>
      <div className="container ">
        <p className="text-slate-600 text-sm py-3">
          {" "}
          written by {author} on {date}
        </p>
        <h1 className="text-2xl font-semibold">{title}</h1>
        <p>{description}</p>
        <div className="items-center justify-center flex sm:mt-16 mt-14 ml-24 ">
          <button className="bg-gradient-to-r from-primary to-secondary text-white hover:scale-105 px-4 py-2 rounded-full duration-200 absolute -translate-x-1/2">
            Book Now
          </button>
        </div>
      </div>
      {/* All Blogs Section */}
      <BlogsComp />
    </div>
  );
};

export default BlogsDetails;
