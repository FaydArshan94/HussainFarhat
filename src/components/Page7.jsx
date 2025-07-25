import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import ScrollVelocity from "../hook/ScrollVelocity";

const Page7 = () => {
  const linesRef = useRef([]);
  const velocity = 50;

  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-white/30 text-white px-4 py-10 mt-20  overflow-hidden ">
      {/* Static Marquee Background */}
      <div className="absolute left-1/2 top-1/2 text-9xl -translate-x-1/2 -translate-y-1/2 w-full h-full z-0 flex flex-col gap-4 opacity-[0.05] pointer-events-none">
        <ScrollVelocity
          texts={[
            "DON'T PUT IT OFF",
            "DON'T PUT IT OFF",
            "DON'T PUT IT OFF",
            "DON'T PUT IT OFF",
            "DON'T PUT IT OFF",
          ]}
          velocity={velocity}
          className="custom-scroll-text text-[10rem] leading-[25vh] xl:text-[12rem] md:text-[15rem] font-light  md:leading-[45vh] xl:leading-[13rem] font-['Superset'] tracking-wider"
        />
      </div>

      {/* Foreground Content with Animation */}
      <div className="z-10 max-w-2xl px-10 flex flex-col  items-center justify-center text-center overflow-hidden w-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 sm:max-w-4xl">
        <h1 className="text-[7.5rem] 2sm:text-[8rem] leading-[8.5rem] font-['Superset'] origin-left w-full  md:text-[10rem] md:leading-[12rem] lg:text-[10rem  xl:text-[12rem] xl:leading-[14rem] break-words">
          DON'T PUT IT OFF
        </h1>

        <h1 className="mt-6 py-1 group  w-fit mx-auto text-lg font-['light'] sm:text-xl tracking-wider font-light relative cursor-pointer group ">
          CHOOSE YOUR PACK NOW
          <span className="absolute bottom-0 left-0 h-[3px] w-full bg-white origin-left z-0" />
          <span className="absolute bottom-0 left-0 h-[3px] w-full bg-black origin-left z-10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out" />
          {/* Optional background fill animation */}
        </h1>
      </div>
    </div>
  );
};

export default Page7;
