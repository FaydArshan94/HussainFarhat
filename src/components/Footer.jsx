import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-black min-h-screen text-white px-6 py-10 xs:px-20 flex flex-col items-center justify-evenly text-center 2xl:px-32 2xl:py-20">
      {/* Logo */}
      <div className="flex flex-col items-center space-y-2">
        <img
          className="w-20 h-20 sm:h-32 sm:w-32 2xl:w-40 2xl:h-40"
          src={logo}
          alt="logo"
        />
        <div className="text-base tracking-widest text-gray-300 sm:text-2xl 2xl:text-3xl">
          THE GLADIOLUS COACHING PROGRAM
        </div>
      </div>

      {/* Tagline */}
      <div className="text-5xl mt-10 leading-tight font-['Superset'] sm:text-8xl md:mt-40 2xl:text-[10rem]">
        YOUR FITNESS <br />
        <span className="text-gray-400">JOURNEY</span>{" "}
        <span className="text-[#890900]">IS HERE</span>
      </div>

      {/* Navigation Links */}
      <div className="flex flex-wrap justify-center gap-6 text-lg text-gray-300 mt-10 2sm:mt-28 sm:text-xl sm:gap-10 2xl:text-2xl 2xl:gap-14">
        {[
          "Home",
          "About",
          "Cookies Policy",
          "Personal Training",
          "Packages",
          "Contact Us",
        ].map((text) => (
          <a
            key={text}
            href="#"
            className="relative group overflow-hidden hover:after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-white after:transition-all after:duration-300 group-hover:after:w-full"
          >
            {text}
          </a>
        ))}
      </div>

      {/* Address and Contact */}
      <div className="text-md text-gray-400 mt-10 flex flex-col sm:mt-20 sm:flex items-center justify-center sm:space-y-0 sm:gap-0 2xl:text-xl 2xl:gap-4">
        <div className="flex items-center w-fit justify-around gap-2 sm:text-lg 2xl:text-2xl">
          <div className="text-xl 2xl:text-3xl">
            <FaLocationDot />
          </div>
          <span>Virtaga HQ 2nd floor BKR9022 Bridgeview, Illinois</span>
        </div>

        {/* Middle line */}
        <div className="h-8 w-8 mt-2 flex items-center justify-center 2xl:h-10 2xl:w-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 24"
            className="h-full w-full text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
          >
            <g transform="skewX(-40)">
              <line x1="4" y1="6" x2="40" y2="6" strokeLinecap="square" />
            </g>
          </svg>
        </div>

        <div className="flex items-center justify-center gap-2 sm:text-lg sm:items-start 2xl:text-2xl">
          <div className="text-xl 2xl:text-3xl">
            <IoMdMail />
          </div>
          <span className="mail relative group cursor-pointer overflow-hidden">
            <span className="relative z-10">instagram.com/hussein.fht</span>
            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
          </span>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-sm italic mt-10 flex flex-col items-center text-gray-500 font-['light'] space-y-1 sm:flex-row sm:gap-10 sm:mt-16 sm:text-center sm:not-italic 2xl:text-lg 2xl:gap-16">
        <div>Hussein Farhat</div>
        <div>Copyright 2025</div>

        <div className="h-5 sm:hidden w-5 mt-2 flex items-center justify-center 2xl:h-6 2xl:w-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 24"
            className="h-full w-full text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
          >
            <g transform="skewX(-40)">
              <line x1="4" y1="6" x2="40" y2="6" strokeLinecap="square" />
            </g>
          </svg>
        </div>

        <div>All rights reserved</div>

        <div className="h-5 hidden w-5 mt-2 sm:flex items-center justify-center 2xl:h-6 2xl:w-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 24"
            className="h-full w-full text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
          >
            <g transform="skewX(-40)">
              <line x1="4" y1="6" x2="40" y2="6" strokeLinecap="square" />
            </g>
          </svg>
        </div>

        <div>Created By Fayd Arshan</div>
      </div>
    </footer>
  );
};

export default Footer;
