import React, { useEffect, useState } from "react";

const Page5 = () => {
  return (
    <div className="w-full relative  bg-black py-20 md:py-0 flex items-center justify-center 2xl:py-60 ">
      <div className="vid-section h-screen  relative overflow-hidden w-[90vw] 2xl:w-full  2sm:h-[130vh] mdsm:h-[200vh] md:h-screen 2xl:h-[110vh]">
        <video
          autoPlay
          loop
          muted
          className="bg-video w-full h-full object-cover"
          src="https://maltapersonaltrainer.com/wp-content/uploads/2023/07/join-us.mp4"
        ></video>
        <div className="video-copy absolute h-full  w-full  scale-105 2sm:scale-100 2xl:scale-100 select-none bg-black mix-blend-multiply left-0  top-0  flex flex-col md:flex-row md:gap-16 items-center justify-center  ">
          <h1 className="text-[15rem] 2sm:text-[30rem] mdsm:text-[45rem] md:text-[25rem] lg:text-[28vw] 2xl:text-[40vw] font-['Superset'] tracking-wide leading-none text-center text-white  ">
            JOIN
          </h1>
          <h1 className="text-[15rem] 2sm:text-[30rem] mdsm:text-[45rem] md:text-[25rem] lg:text-[28vw] 2xl:text-[40vw] font-['Superset'] tracking-wide leading-none text-center text-white  ">
             US
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Page5;
