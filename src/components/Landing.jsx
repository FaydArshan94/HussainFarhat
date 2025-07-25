import React from "react";
import SplitText from "../hook/SplitText";

import { motion } from "framer-motion";
const Landing = () => {
  return (
    <div className="packages-landing relative overflow-hidden w-full h-screen xl:h-[130vh] flex items-center justify-center">
      <div className="bg-img absolute top-0 left-0 z-0 h-full w-full">
        <img
          className="w-full h-full object-cover object-top-right"
          src="https://www.primalstrength.com/cdn/shop/files/gym_design_Headers.jpg?v=1680779429&width=2000"
          alt=""
        />
      </div>

      <div className="content z-10 px-[1.5rem] 2sm:px-20 flex text-white flex-col items-center justify-center">
        <h1
          className="text-[6rem] 2sm:text-[6rem] 3sm:text-[7rem] mdsm:text-[8rem] mdx:text-[8rem] xl:text-[12rem]
      leading-[7rem] 2sm:leading-[7.5rem] 3sm:leading-[9rem] mdsm:leading-[10rem] md:leading-[10rem] xl:leading-[13rem]
      font-['Superset'] text-center"
        >
          GLADIOLUS
        </h1>
        <h1
          className="text-[6rem] 2sm:text-[6rem] 3sm:text-[7rem] mdsm:text-[8rem] mdx:text-[8rem] xl:text-[12rem]
      leading-[7rem] 2sm:leading-[7.5rem] 3sm:leading-[9rem] mdsm:leading-[10rem] md:leading-[10rem] xl:leading-[13rem]
      font-['Superset'] text-center"
        >
          COACHING
        </h1>

        <p className="text-center text-[0.8rem] 2sm:text-[1rem] mdsm:text-[1.3rem] font-['light'] w-[70%] mt-4">
          <motion.span
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              ease: [0.22, 1, 0.36, 1],
              duration: 0.7,
              delay: 1, // slightly delayed after headings
            }}
            className="origin-left inline-block "
          >
            Choose your perfect fitness plan and start transforming your body
            and mind today.
          </motion.span>
        </p>

        <motion.span
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            ease: [0.22, 1, 0.36, 1],
            duration: 0.7,
            delay: 1,
          }}
          className="text-xl mdsm:text-[1.5rem] py-[2px] mt-8 inline-block font-thin font-['light'] border-b-4 border-[#F82E14] text-zinc-100 tracking-wide"
        >
          LET'S GO.
        </motion.span>
      </div>
    </div>
  );
};

export default Landing;
