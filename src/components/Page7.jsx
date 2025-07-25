import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import ScrollVelocity from "../hook/ScrollVelocity";
import SplitText from "../hook/SplitText";
const Page7 = () => {
  const linesRef = useRef([]);
  const velocity = 50;

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
          className="custom-scroll-text text-[10rem] leading-[30vh] xl:text-[12rem] md:text-[15rem] font-light  md:leading-[45vh] xl:leading-[40vh] font-['Superset'] tracking-wider"
        />
      </div>

      {/* Foreground Content with Animation */}
      <div className="z-10 max-w-2xl px-10 flex flex-col  items-center justify-center text-center overflow-hidden w-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 sm:max-w-4xl">
        <SplitText
          text="DON'T PUT IT OFF"
          className="text-[6rem] 2sm:text-[8rem] leading-[1] font-['Superset'] origin-left w-full  md:text-[10rem] lg:text-[10rem] xl:text-[12rem] break-words"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          // onLetterAnimationComplete={() => setShowFitness(true)} // ➜ show FITNESS next
        />

        <h1 className="mt-6 w-fit mx-auto text-lg font-['light'] sm:text-xl tracking-wider font-light relative cursor-pointer group ">
          <span className="relative z-10 text-white  transition duration-300">
            CHOOSE YOUR PACK NOW
          </span>

          <span className="absolute left-0 -bottom-1 h-[5px] w-full bg-white group-hover:bg-[#890900] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></span>

          {/* Optional background fill animation */}
        </h1>
      </div>
    </div>
  );
};

export default Page7;
