import React, { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { motion } from "framer-motion";
import QuestionsSection from "../components/QuestionsSection";
import Page7 from "../components/Page7";
import Footer from "../components/Footer";

import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import PackageCarousel from "../components/PackageCarousel";

const Packages = () => {
  const handleAnimationComplete = () => {};
  const topShapeRef = useRef(null);
  const bottomShapeRef = useRef(null);
  const [showMainContent, setShowMainContent] = useState(true);

  return (
    <>
      <div className="w-full pkg-main h-full relative">
        <div className="packages-landing relative overflow-hidden w-full h-screen flex items-center justify-center">
          <div className="bg-img absolute top-0 left-0 z-0 h-full w-full">
            <img
              className="w-full h-full object-cover object-top-right"
              src="https://www.primalstrength.com/cdn/shop/files/gym_design_Headers.jpg?v=1680779429&width=2000"
              alt=""
            />
          </div>

          <div className="content z-10 px-[1.5rem] 2sm:px-20 flex text-white flex-col items-center justify-center">
            <motion.h1
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                ease: [0.22, 1, 0.36, 1],
                duration: 0.7,
                delay: 1, // slightly delayed after headings
              }}
              className="text-[9rem] mdsm:text-[12rem] mdx:text-[12rem] leading-none font-['Superset'] text-center"
            >
              PACKAGES
            </motion.h1>

            <p className="text-center 2sm:text-[1.2rem] mdsm:text-[1.3rem] font-['light'] w-[70%] mt-4">
              <motion.span
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  ease: [0.22, 1, 0.36, 1],
                  duration: 0.7,
                  delay: 1.5, // slightly delayed after headings
                }}
                className="origin-left inline-block "
              >
                Choose your perfect fitness plan and start transforming your
                body and mind today.
              </motion.span>
            </p>

            <motion.span
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                ease: [0.22, 1, 0.36, 1],
                duration: 0.7,
                delay: 1.5,
              }}
              className="text-xl relative group mdsm:text-[1.5rem] py-[2px] mt-8 inline-block font-thin font-['light']  text-zinc-100 tracking-wide"
              
            >
              LET'S GO.
              <span className="absolute bottom-0 left-0 h-[3px] w-full bg-red-400 origin-left z-0" />
              <span className="absolute bottom-0 left-0 h-[3px] w-full bg-green-400 origin-left z-10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out" />
            </motion.span>
          </div>
        </div>
        <div className="1-0n-1 min-h-screen w-full bg-black text-white flex flex-col items-center px-4 py-20">
          <h1 className="text-[6rem] uppercase text-center font-['Superset'] mdsm:text-[7rem] lg:text-9xl xl:text-[9rem] 2xl:text-[10rem] 3xl:text-[12rem] text-white">
            Train Like a Pro
          </h1>
          <p className="text-center text-md font-['light'] mdsm:text-xl lg:text-2xl 2xl:text-3xl 3xl:text-4xl lg:mt-10 text-gray-300 max-w-sm md:max-w-3xl mt-4">
            Train with 100% focus on YOU. <br className="hidden md:block" />
            Experience elite-level, personalized coaching tailored to your body,
            your goals, and your mindset. <br className="hidden md:block" />
            Every rep. Every session. Zero distractions. All progress.
          </p>
          <PackageCarousel />
        </div>

        <QuestionsSection />
        <Page7 />
        <Footer />
      </div>
    </>
  );
};

export default Packages;
