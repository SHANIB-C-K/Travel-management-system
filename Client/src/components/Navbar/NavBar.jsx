import React from "react";

const NavBar = () => {
  return (
    <>
      <div className="fixed top-0 w-full right-0 bg-white text-black shadow-sm">
        <div className="container bg-gradient-to-r from-primary to-secondary">
          <div className="flex">
            <p>20% off on next booking</p>
            <p>Mobile no +91 6282844209</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
