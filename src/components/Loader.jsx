// src/components/Loader.jsx
import React from "react";

const Loader = () => {
  return (
    <div className="svg fixed top-0 left-0 w-full h-screen z-[100] bg-black flex items-center justify-center">
      <img
        className="eye h-40 opacity-25 transition-opacity duration-1000"
        src="https://images.typeform.com/images/abyDRUeZdxkU"
        alt="eye"
      />
    </div>
  );
};

export default Loader;
