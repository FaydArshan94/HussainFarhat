
import logo from '../assets/logo.png'
const Footer = () => {
  return (
    <footer className="bg-black h-screen text-white px-6 py-10 flex flex-col items-center justify-evenly text-center sm:h-[200vh]">
      {/* Logo */}
      <div className="flex flex-col items-center space-y-2">
        <img
          className="w-20 h-20 sm:h-32 sm:w-32"
          src={logo}
          alt=""
        />
        <div className="text-base tracking-widest text-gray-300 sm:text-2xl">
          THE GLADIOLUS COACHING PROGRAM
        </div>
      </div>

      {/* Tagline */}
      <div className="text-5xl leading-tight font-['Superset']   sm:text-8xl">
        YOUR FITNESS <br />
        <span className="text-gray-400">JOURNEY</span>{" "}
        <span className="text-[#890900]">IS HERE</span>
      </div>

      {/* Navigation Links */}
      <div className="flex flex-wrap justify-center gap-6 text-lg text-gray-300 sm:mt-20 sm:text-xl sm:gap-10">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Cookies Policy</a>
        <a href="#">Personal Training</a>
        <a href="#">Packages</a>
        <a href="#">Contact Us</a>
      </div>

      {/* Address and Contact */}
      <div className="text-sm text-gray-400  flex flex-col sm:mt-20 sm:flex items-center justify-center   sm:space-y-0 sm:gap-0 ">
        <div className="flex items-center justify-center gap-2 sm:text-lg ">
          <span>📍</span>
          <span>Virtaga HQ 2nd floor BKR9022 Bridgeview, Illinois</span>
        </div>
        <div className="h-8 w-8 mt-2 flex items-center justify-center">
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

        <div className="flex items-center justify-center gap-2 sm:text-lg  sm:items-start">
          <span>instagram.com/hussein.fht</span>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-sm italic mt-10 flex flex-col items-center text-gray-500 font-['light'] space-y-1 sm:flex-row sm:gap-10 sm:mt-16 sm:text-center sm:not-italic">
        <div>Hussein Farhat</div>
        <div>Copyright 2025</div>
        <div className="h-5 sm:hidden w-5 mt-2 flex items-center justify-center">
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
        <div className="h-5 hidden  w-5 mt-2 sm:flex items-center justify-center">
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
