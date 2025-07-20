import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 left-0  z-50 px-[1rem] py-6  flex items-center justify-between ">
      {/* Left: Responsive Logo */}
      <div className="flex items-center">
        <img
          src={logo}
          alt="Logo"
          className="w-12 sm:w-16 md:w-20 lg:w-24 xl:w-32 object-cover"
        />
      </div>

      {/* Right: Responsive Stylish Hamburger SVG */}
      <button className="flex items-center justify-center focus:outline-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 24"
          className="w-10 sm:w-12 md:w-16 lg:w-20 text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
        >
          <g transform="skewX(-15)">
            <line x1="4" y1="6" x2="40" y2="6" strokeLinecap="shape" />
            <line x1="8" y1="18" x2="36" y2="18" strokeLinecap="shape" />
          </g>
        </svg>
      </button>
    </nav>
  );
};

export default Navbar;
