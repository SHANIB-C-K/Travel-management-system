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
  const [loading, setLoading] = React.useState(false);

  // order popup open function create section
  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  setTimeout(() => {
    setLoading(true);
  }, 2000);
  return (
    <>
      {time ? (
        <>
          <div className="h-screen w-screen flex flex-col items-center justify-center">
            <h1 class="flex font-semibold text-purple-600">
              <span class="animate-waving-hand text-9xl">👋🏻</span>
            </h1>
          </div>
        </>
      ) : !loading ? (
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
          <Navbar
            handleOrderPopup={handleOrderPopup}
            time={time}
            setTime={setTime}
          />
          <Outlet />
          <Footer />
          <OrderNow orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
        </>
      )}
    </>
  );
};

export default Layout;
