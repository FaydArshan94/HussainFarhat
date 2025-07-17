import React from "react";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-transparent text-white px-4 sm:px-10 py-6 flex  justify-between sm:items-center gap-4 sm:gap-0">
      {/* Logo */}
      <div className="flex items-center gap-4">
        <img
          src="https://images.typeform.com/images/abyDRUeZdxkU"
          alt="char"
          className="h-12 w-12 sm:h-16 sm:w-16 object-cover"
        />
      </div>

      <button className="flex items-center gap-2 sm:gap-4">
        <p className="text-lg hidden sm:initial">Menu</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 24"
          className="h-12 w-12 text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
        >
          <g transform="skewX(-40)">
            <line x1="4" y1="6" x2="40" y2="6" strokeLinecap="square" />
            <line x1="8" y1="18" x2="36" y2="18" strokeLinecap="square" />
          </g>
        </svg>
      </button>
    </div>
  );
};

export default Navbar;
