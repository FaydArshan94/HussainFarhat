import React, { useState } from "react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigationLinks = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Personal Training", to: "/personal-training" },
    { name: "Packages", to: "/packages" },
    { name: "Book", to: "/book" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <>
      <nav className="w-full fixed top-0 left-0 z-50 px-[1rem] 3xl:px-[5rem] py-4 flex items-center justify-between ">
        {/* Left: Responsive Logo */}
        <div className="flex items-center">
          <div className="w-12 sm:w-16 md:w-20 lg:w-24 xl:w-32 h-12 sm:h-16 md:h-20 lg:h-24 xl:h-32  flex items-center justify-center text-white font-bold text-lg sm:text-xl md:text-2xl">
            <img src={logo} alt="" />
          </div>
        </div>

        {/* Right: Responsive Stylish Hamburger SVG */}
        <button
          className={`flex items-center justify-center focus:outline-none transition-all duration-500 ${
            isOpen
              ? "opacity-0 scale-75 pointer-events-none"
              : "opacity-100 scale-100"
          }`}
          onClick={() => setIsOpen(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="42"
            height="31"
            viewBox="0 0 42 31"
            fill="none"
          >
            <path
              fill="#fff"
              d="M42.33 25.35 8.42 25.41 5.33 18.32 39.27 18.29m-2.3-5.77-16.91.06-16.91.06L0 5.39 25.35 5.34c0 0 8.37-.3 11.62 7.18z"
            >
              <animate
                attributeName="d"
                values="M42.33 25.35 8.42 25.41 5.33 18.32 39.27 18.29m-2.3-5.77-16.91.06-16.91.06L0 5.39 25.35 5.34c0 0 8.37-.3 11.62 7.18z;M42.01 1.43 22.9 30.75 15.09 29.32 34.26 0m.31 30.61.01 0L14.8 1.71 22.58.11 42.33 29.05c0 0 0 0 0 0Z"
                dur="0.16s"
                begin="indefinite"
                fill="freeze"
                calcMode="spline"
                keyTimes="0;1"
                keySplines="0.215 0.61 0.355 1"
              ></animate>
              <animate
                attributeName="d"
                values="M42.01 1.43 22.9 30.75 15.09 29.32 34.26 0m.31 30.61.01 0L14.8 1.71 22.58.11 42.33 29.05c0 0 0 0 0 0Z;M42.33 25.35 8.42 25.41 5.33 18.32 39.27 18.29m-2.3-5.77-16.91.06-16.91.06L0 5.39 25.35 5.34c0 0 8.37-.3 11.62 7.18z"
                dur="0.16s"
                begin="indefinite"
                fill="freeze"
                calcMode="spline"
                keyTimes="0;1"
                keySplines="0.215 0.61 0.355 1"
              ></animate>
            </path>
          </svg>
        </button>
      </nav>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 pr-5 h-full w-full md:w-1/3 bg-[url(https://www.primalstrength.com/cdn/shop/files/gymdesign_render_Two_collumn_grid_cb1b5850-fa8e-4a7b-a2b3-190c2e45facd.jpg?v=1680719688&width=1500)] bg-cover bg-center shadow-2xl z-80 transform transition-all duration-700 ease-out ${
          isOpen
            ? "translate-x-0 scale-100 opacity-100 rotate-0"
            : "translate-x-full scale-75 opacity-0 rotate-12"
        }`}
        style={{
          transformOrigin: "right center",
          clipPath: isOpen
            ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
            : "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
        {/* Navigation Links */}
        <div className="mt-10 flex flex-col items-end">
          <button
            onClick={() => setIsOpen(false)}
            className="rounded-full z-10 hover:bg-gray-100 transition-colors duration-200 group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="42"
              height="31"
              viewBox="0 0 42 31"
              fill="none"
            >
              <path
                fill="#fff"
                d="M42.33 25.35 8.42 25.41 5.33 18.32 39.27 18.29m-2.3-5.77-16.91.06-16.91.06L0 5.39 25.35 5.34c0 0 8.37-.3 11.62 7.18z"
              >
                <animate
                  attributeName="d"
                  values="M42.33 25.35 8.42 25.41 5.33 18.32 39.27 18.29m-2.3-5.77-16.91.06-16.91.06L0 5.39 25.35 5.34c0 0 8.37-.3 11.62 7.18z;M42.01 1.43 22.9 30.75 15.09 29.32 34.26 0m.31 30.61.01 0L14.8 1.71 22.58.11 42.33 29.05c0 0 0 0 0 0Z"
                  dur="0.16s"
                  begin="indefinite"
                  fill="freeze"
                  calcMode="spline"
                  keyTimes="0;1"
                  keySplines="0.215 0.61 0.355 1"
                ></animate>
                <animate
                  attributeName="d"
                  values="M42.01 1.43 22.9 30.75 15.09 29.32 34.26 0m.31 30.61.01 0L14.8 1.71 22.58.11 42.33 29.05c0 0 0 0 0 0Z;M42.33 25.35 8.42 25.41 5.33 18.32 39.27 18.29m-2.3-5.77-16.91.06-16.91.06L0 5.39 25.35 5.34c0 0 8.37-.3 11.62 7.18z"
                  dur="0.16s"
                  begin="indefinite"
                  fill="freeze"
                  calcMode="spline"
                  keyTimes="0;1"
                  keySplines="0.215 0.61 0.355 1"
                ></animate>
              </path>
            </svg>
          </button>

          <div className="flex flex-col mt-10 items-end">
            {navigationLinks.map((link, index) => {
              return (
                <NavLink
                  key={link.name}
                  to={link.to}
                  className={`flex items-center ${
                    isOpen
                      ? "translate-x-0 opacity-100"
                      : "translate-x-8 opacity-0"
                  }`}
                  style={{
                    transitionDelay: isOpen ? `${index * 100}ms` : "0ms",
                  }}
                  onClick={() => setIsOpen(false)}
                >
                  <h1 className="font-medium uppercase hover:text-[#3D4DBB] transition-colors leading-tight text-5xl text-white font-['Superset']">
                    {link.name}
                  </h1>
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
