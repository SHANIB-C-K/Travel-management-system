// importing section
import React from "react";
import { Link, NavLink } from "react-router-dom";
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
            <div className="hidden sm:block">
              <ul className="flex items-center gap-6">
                <li className="py-4">
                  <NavLink to="/" onClick={() => window.scrollTo(0, 0)}>
                    Home
                  </NavLink>
                </li>
                <li className="py-4">
                  <NavLink to="/blogs" onClick={() => window.scrollTo(0, 0)}>
                    Blogs
                  </NavLink>
                </li>
                <li className="py-4">
                  <NavLink to="/places" onClick={() => window.scrollTo(0, 0)}>
                    Best Places
                  </NavLink>
                </li>
                <li className="py-4">
                  <NavLink to="/about" onClick={() => window.scrollTo(0, 0)}>
                    About
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
