import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

// const text = "DON'T PUT IT OFF";

// const letterVariant = {
//   hidden: { opacity: 0, y: 50, rotate: "40" },
//   visible: {
//     opacity: 1,
//     y: 0,
//     rotate: 0,
//     transition: {
//       duration: 2,
//       ease: "easeOut",
//     },
//   },
// };

// const containerVariant = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.05,
//     },
//   },
// };

const Page7 = () => {
  const linesRef = useRef([]);

  // useEffect(() => {
  //   linesRef.current.forEach((el, index) => {
  //     gsap.to(el, {
  //       x: index % 2 === 0 ? "-25%" : "25%", // alternate directions
  //       ease: "none",
  //       scrollTrigger: {
  //         trigger: el,
  //         scrub: true,
  //       },
  //     });
  //   });
  // }, []);
  return (
    <div className="relative w-full h-[70vh] flex items-center justify-center bg-white/30 text-white px-4 py-10 overflow-hidden sm:h-[70vh]">
      {/* Static Marquee Background */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full z-0 flex flex-col gap-4 opacity-[0.05] pointer-events-none">
        {Array.from({ length: 5 }).map((_, i) => (
          <h1
            key={i}
            className="whitespace-nowrap text-[10rem] leading-none font-['Superset'] text-white tracking-normal sm:text-[12rem] w-[200%]"
          >
            {/* Repeat enough times to fill width + smooth scroll */}
            {"DON'T PUT IT OFF ".repeat(20)}
          </h1>
        ))}
      </div>

      {/* Foreground Content with Animation */}
      <div className="z-10 max-w-2xl px-10 flex flex-col  items-center justify-center text-center overflow-hidden w-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 sm:max-w-4xl">
        <h1 className="text-[6rem] 2sm:text-[8rem] leading-[1] font-['Superset'] origin-left w-full  md:text-[8rem] lg:text-[10rem] xl:text-[12rem] break-words">
          DON'T PUT IT OFF
        </h1>

        <h1
          className="mt-6 w-fit mx-auto text-lg font-['light'] sm:text-xl tracking-wider font-light relative cursor-pointer group "
          // initial={{ opacity: 0, y: 40 }}
          // animate={{ opacity: 1, y: 0 }}
          // transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
        >
          <span className="relative z-10 text-white  transition duration-300">
            CHOOSE YOUR PACK NOW
          </span>

          {/* Animated Border Effect */}
          <span className="absolute left-0 -bottom-1 h-[5px] w-full bg-white group-hover:bg-[#890900] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></span>

          {/* Optional background fill animation */}
        </h1>
      </div>
    </div>
  );
};

export default Page7;
