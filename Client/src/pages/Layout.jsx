// importing section
import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const Layout = () => {
  return (
    <>
      {/* navbar component */}
      <NavBar />
      <Outlet />
    </>
  );
};

export default Layout;
