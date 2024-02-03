// importing section
import React from "react";
import { Outlet, Link } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import OrderNow from "./../components/OrderNow/OrderNow";
import Navbar from "./../components/Navbar/NavBar";

const Layout = () => {
  // usestate section
  const [orderPopup, setOrderPopup] = React.useState(false);

  // order popup open function create section
  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  return (
    <>
      <Navbar handleOrderPopup={handleOrderPopup} />
      <Outlet />
      <Footer />
      <OrderNow orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </>
  );
};

export default Layout;
