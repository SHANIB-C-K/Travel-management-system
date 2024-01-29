// importing section
import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";
import ResponsiveMenu from "./ResponsiveMenu";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import DropdownLinks from "../../JSON/DropDownLinks.json";
import { signOut } from "firebase/auth";
import { database } from "../../.env/firebase";

const Navbar = ({ handleOrderPopup }) => {
  // useState section
  const [showMenu, setShowMenu] = useState(false);

  // navigate section
  const navigate = useNavigate();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  // logout function create section
  const Logout = () => {
    signOut(database).then((val) => {
      window.localStorage.removeItem("loggedIn", false);
      navigate("/");
      location.reload();
    });
  };

  return (
    <>
      <nav className="fixed top-0 right-0 w-full z-50 bg-white backdrop-blur-sm text-black shadow-md">
        <div className="bg-gradient-to-r from-primary to-secondary text-white ">
          <div className="container py-[2px] sm:block hidden">
            <div className="flex items-center justify-between">
              <p className="text-sm">20% off on first booking</p>
              <p>mobile no. +91 6282844209</p>
            </div>
          </div>
        </div>
        <div className="container py-3 sm:py-0">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4  font-bold text-2xl">
              <Link to={"/"} onClick={() => window.scrollTo(0, 0)}>
                <img src={Logo} alt="" className="h-16" />
              </Link>
              {/* <span>TCJ Tourism</span> */}
            </div>
            <div className="hidden md:block">
              <ul className="flex items-center gap-6 ">
                <li className="py-4">
                  <NavLink to="/" activeclassname="active">
                    Home
                  </NavLink>
                </li>
                <li className="py-4">
                  <NavLink to="/blogs" activeclassname="active">
                    Blogs
                  </NavLink>
                </li>
                <li className="py-4">
                  <NavLink to="/best-places" activeclassname="active">
                    Best Places
                  </NavLink>
                </li>
                <li className="py-4">
                  <NavLink to="/about" activeclassname="active">
                    About
                  </NavLink>
                </li>
                <li className="group relative cursor-pointer">
                  <a
                    href="/#home"
                    className="flex h-[72px] items-center gap-[2px]"
                  >
                    Quick Links{" "}
                    <span>
                      <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                    </span>
                  </a>
                  <div className="absolute -left-9 z-[9999] hidden w-[150px] rounded-md bg-white p-2 text-black group-hover:block shadow-md ">
                    <ul className="space-y-3">
                      {DropdownLinks.map((data, id) => (
                        <li key={id}>
                          <a
                            className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                            href={data.link}
                          >
                            {data.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex items-center gap-4">
              <button
                className="bg-gradient-to-r from-primary to-secondary hover:bg-bg-gradient-to-r hover:from-secondary hover:bg-primary transition-all duration-600 text-white px-3 py-1 rounded-full"
                onClick={() => {
                  handleOrderPopup();
                }}
              >
                Book Now
              </button>

              <button
                className="bg-gradient-to-r from-primary to-secondary hover:bg-bg-gradient-to-r hover:from-secondary hover:bg-primary transition-all duration-600 text-white px-3 py-1 rounded-full sm:block hidden"
                onClick={Logout}
              >
                Logout
              </button>

              {/* Mobile Hamburger icon */}
              <div className="md:hidden block">
                {showMenu ? (
                  <HiMenuAlt1
                    onClick={toggleMenu}
                    className=" cursor-pointer transition-all"
                    size={30}
                  />
                ) : (
                  <HiMenuAlt3
                    onClick={toggleMenu}
                    className="cursor-pointer transition-all"
                    size={30}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        <ResponsiveMenu
          setShowMenu={setShowMenu}
          showMenu={showMenu}
          Logout={Logout}
        />
      </nav>
    </>
  );
};

export default Navbar;
