import { motion } from "framer-motion";
import React from "react";

const Page5 = () => {
  return (
    <div className="w-full relative bg-black py-20 md:py-0 flex items-center justify-center xl:py-60 2xl:py-60">
      <div className="vid-section h-screen relative overflow-hidden w-[90vw] 2xl:w-full 2sm:h-[130vh] mdsm:h-[200vh] md:h-screen 2xl:h-[110vh]">
        <video
          autoPlay
          loop
          muted
          className="bg-video  w-full h-full object-cover"
          src="https://maltapersonaltrainer.com/wp-content/uploads/2023/07/join-us.mp4"
        ></video>

        <div className="video-copy absolute h-full w-full scale-105 2sm:scale-100 2xl:scale-100 select-none bg-black mix-blend-multiply left-0 top-0 flex items-center justify-center">
          <div className="relative   w-full  flex justify-center items-center">
            {/* Top sliced animated text */}
            {/* TOP HALF */}
            <motion.div
              initial={{ x: -100, y: -200, opacity: 0 }}
              whileInView={{ x: 0, y: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute z-20 pointer-events-none clip-diagonal-top"
            >
              <h1 className="text-white font-['Superset'] tracking-wide leading-none text-center text-[15rem] 2sm:text-[30rem] mdsm:text-[45rem] md:text-[25rem] lg:text-[28vw] xl:text-[45vw] 2xl:text-[40vw]">
                <span className="block md:inline">JOIN</span>
                <span className="block md:inline">&nbsp;US</span>
              </h1>
            </motion.div>

            {/* BOTTOM HALF */}
            <motion.div
              initial={{ x: 100, y: 200, opacity: 0 }}
              whileInView={{ x: 0, y: -1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="z-10 pointer-events-none clip-diagonal-bottom "
            >
              <h1 className="text-white font-['Superset'] tracking-wide leading-none text-center text-[15rem] 2sm:text-[30rem] mdsm:text-[45rem] md:text-[25rem] lg:text-[28vw] xl:text-[45vw] 2xl:text-[40vw]">
                <span className="block md:inline">JOIN</span>
                <span className="block md:inline">&nbsp;US</span>
              </h1>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page5;
