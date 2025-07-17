import React, { useEffect, useState } from "react";

const Page5 = () => {
  return (
    <div className="w-full relative  bg-black flex items-center justify-center  sm:min-h-screen ">
      <div className="vid-section h-screen  relative overflow-hidden w-[90vw] bg-red-900 sm:h-[150vh]">
        <video
          autoPlay
          loop
          muted
          className="bg-video w-full h-full object-cover"
          src="https://maltapersonaltrainer.com/wp-content/uploads/2023/07/join-us.mp4"
        ></video>
        <div className="video-copy absolute h-full  w-full   select-none bg-black mix-blend-multiply left-0  top-0  flex items-center justify-center  ">
          <h1 className="text-[15rem] font-['Superset']  leading-none text-center text-white sm:text-[35rem] ">
            JOIN US
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Page5;
