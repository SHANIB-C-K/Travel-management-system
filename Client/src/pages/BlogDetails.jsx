// importing section
import React from "react";
import { useLocation } from "react-router-dom";
import BlogsComp from "../components/BlogsComponent/BlogComponent";
import OrderNow from "../components/OrderNow/OrderNow";

const BlogsDetails = () => {
  const location = useLocation();
  // console.log(props, " props");
  // console.log(location, " useLocation Hook");
  const { image, date, title, description, author } = location.state;
  const [orderPopup, setOrderPopup] = React.useState(false);

  // order popup open function created section
  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  return (
    // html section
    <div className="h-screen w-screen flex flex-col items-center justify-center">
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
            <button
              className="bg-gradient-to-r from-primary to-secondary text-white hover:scale-105 px-4 py-2 rounded-full duration-200 absolute -translate-x-1/2"
              onClick={handleOrderPopup}
            >
              Book Now
            </button>
          </div>
        </div>
        {/* All Blogs Section */}
        <BlogsComp />
        <OrderNow orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
      </div>
    </div>
  );
};

export default BlogsDetails;
