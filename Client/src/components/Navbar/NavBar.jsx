// importing section
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";

const NavBar = () => {
  return (
    <>
      <div className="fixed top-0 w-full right-0 bg-white text-black shadow-sm">
        <div className="bg-gradient-to-r from-primary to-secondary text-white ">
          <div className="container py-[2px] sm:block hidden">
            <div className="flex items-center justify-between">
              <p className="text-sm">20% off on next booking</p>
              <p>mobile no. +91 123456789</p>
            </div>
          </div>
        </div>
        <div className="container py-3 sm:py-0">
          <div className="flex justify-between items-center">
            {/* logo section */}
            <div>
              <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                <img src={Logo} alt="Logo section" className="h-16" />
              </Link>
            </div>
            {/* Navbar Link section */}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
