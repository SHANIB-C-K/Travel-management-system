// importing section
import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import NavbarLinks from "../../JSON/NavBarLinks.json";
import { IoLogOut } from "react-icons/io5";
import { getAuth } from "firebase/auth";

const ResponsiveMenu = ({ showMenu, setShowMenu, Logout }) => {
  const auth = getAuth();

  return (
    <>
      {/* html section */}
      <div
        className={`${
          showMenu ? "left-0" : "-left-[100%]"
        } fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-white dark:bg-gray-900 dark:text-white px-8 pb-6 pt-16 text-black transition-all duration-200 md:hidden rounded-r-xl shadow-md`}
      >
        <div className="Navbar__card">
          {/* top section */}
          <div>
            <div className="flex items-center justify-start gap-4">
              <FaUserCircle size={50} className="text-gray-500" />
              <div className="text-gray-500">
                <h1>{auth?.currentUser?.email}</h1>
                <h1 className="text-sm text-slate-500">Premium user</h1>
              </div>
            </div>
          </div>
          {/* Navlinks section */}
          <div className="text-black mt-12">
            <ul className="space-y-4 text-xl">
              {NavbarLinks.map(({ name, link, id }) => (
                <li key={id}>
                  <Link
                    to={link}
                    onClick={() => setShowMenu(false)}
                    className="mb-5 inline-block"
                  >
                    {name}
                  </Link>
                </li>
              ))}
              {/* logout button create section */}
              <button
                className="bg-gradient-to-r from-red-600 to-red-400 hover:bg-bg-gradient-to-r hover:from-red-400 hover:bg-red-600 transition-all duration-600 text-white px-5 py-1 rounded-full block md:hidden"
                onClick={Logout}
              >
                <IoLogOut className="text-xl md:hidden block" />
              </button>
            </ul>
          </div>
        </div>
        <div className="footer">
          <h1>
            Made with by <a href="https://github.com/shanib-c-k">SHANIB C K</a>{" "}
          </h1>
        </div>
      </div>
    </>
  );
};

export default ResponsiveMenu;
