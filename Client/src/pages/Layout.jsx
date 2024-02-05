// importing section
import React from "react";
import { Outlet, Link } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import OrderNow from "./../components/OrderNow/OrderNow";
import Navbar from "./../components/Navbar/NavBar";

const Layout = () => {
  // usestate section
  const [orderPopup, setOrderPopup] = React.useState(false);
  const [time, setTime] = React.useState(false);

  // order popup open function create section
  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  setTimeout(() => {
    setTime(true);
  }, 2000);
  return (
    <>
      {!time ? (
        <>
          {/* loading section */}
          <div className="flex space-x-2 justify-center items-center bg-white h-screen dark:invert">
            <span className="sr-only">Loading...</span>
            <div className="h-6 w-6 bg-black rounded-full animate-bounce [animation-delay:-0.3s]"></div>
            <div className="h-6 w-6 bg-black rounded-full animate-bounce [animation-delay:-0.15s]"></div>
            <div className="h-6 w-6 bg-black rounded-full animate-bounce"></div>
          </div>
        </>
      ) : (
        <>
          <Navbar handleOrderPopup={handleOrderPopup} />
          <Outlet />
          <Footer />
          <OrderNow orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
        </>
      )}
    </>
  );
};

export default Layout;
