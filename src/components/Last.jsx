import React from "react";
import { motion } from "framer-motion";

const items = ["FAT LOSS", "MUSCLE BUILDING", "HEALTHY LIFESTYLE"];

const generateItems = () => (
  <>
    {items.map((item, idx) => (
      <React.Fragment key={idx}>
        <h1
          style={{
            WebkitTextStroke: "1.5px #890900",
            color: "transparent",
          }}
          className="inline-block font-['Superset'] text-[7.5rem] px-20  sm:text-[8rem] md:text-[9rem] lg:text-[10rem] xl:text-[11rem] 2xl:text-[11rem] "
        >
          {item}
        </h1>
        <span className="inline-block  max-sm:text-[3rem] italic font-bold sm:text-[4.5rem] md:text-[4rem]">
          /
        </span>
      </React.Fragment>
    ))}
  </>
);

const Last = () => {
  return (
    <div className="overflow-x-hidden  pt-20 bg-black  whitespace-nowrap w-full md:pt-28 ">
      <motion.div
        animate={{ x: ["0%", "-50%"] }} // Move only half (content is doubled)
        transition={{
          repeat: Infinity,
          duration: 15,
          ease: "linear",
        }}
        className="flex text-white  w-max"
      >
        {/* Doubled content for seamless scroll */}
        {Array(2)
          .fill()
          .map((_, i) => (
            <div className="flex  items-center " key={i}>
              {generateItems()}
            </div>
          ))}
      </motion.div>
    </div>
  );
};

export default Last;
