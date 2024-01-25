// importing section
import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/Navbar/NavBar";
import Footer from "./../components/Footer/Footer";

const Layout = () => {
  return (
    <>
      {/* navbar component */}
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
