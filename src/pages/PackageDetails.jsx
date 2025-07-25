import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import SplitText from "../hook/SplitText";
import Carousel3D from "../components/Carousel3D";
import PackagePlan from "../components/PackagePlan";
import QuestionsSection from "../components/QuestionsSection";
import Page7 from "../components/Page7";
import Footer from "../components/Footer";
import Reviews from "../components/Reviews";

// 🔥 import your data source
import packages from "../data/packages"; // adjust path as needed

const PackageDetails = () => {
  const { id } = useParams();

  // 🔍 Match ID from URL to get the package
  const pkg = packages.find((p) => p.id === id);

  if (!pkg) {
    return <div className="text-white p-10 text-3xl">Package not found.</div>;
  }

  const {
    title,
    price,
    description,
    imageUrl,
    tagline,
    formats,
    moreDetails = [],
  } = pkg;

  const topShapeRef = useRef(null);
  const bottomShapeRef = useRef(null);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="packages-landing relative overflow-hidden w-full h-screen flex items-center justify-center">
        {/* Background image */}
        <div className="bg-img absolute top-0 left-0 z-0 h-full w-full">
          <img
            className="w-full h-full object-cover object-top-right"
            src="https://www.primalstrength.com/cdn/shop/files/gym_design_Headers.jpg?v=1680779429&width=2000"
            alt=""
          />
        </div>

        {/* Hero Content */}
        <div className="content z-10 w-full px-4 sm:px-10 md:px-16 xl:px-20 flex flex-col items-center justify-center text-center">
          <div className="w-full max-w-[90vw] sm:max-w-[80vw] md:max-w-[70vw] xl:max-w-[60vw]">
            <h1 className="leading-none font-['Superset'] uppercase text-[6rem] sm:text-[4rem] md:text-[6rem] lg:text-[8rem] xl:text-[10rem] break-words">
              {title}
            </h1>
          </div>

          <p className="text-[1.2rem] md:text-[1.5rem] xl:text-[1.8rem] font-light mt-4 w-[70%]">
            <motion.span
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.7, delay: 1 }}
              className="inline-block"
            >
              {description}
            </motion.span>
          </p>

          <motion.span
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.7, delay: 1 }}
            className="text-xl mdsm:text-[1.5rem] py-2 mt-8 inline-block font-light border-b-4 border-[#F82E14]"
          >
            LET'S GO.
          </motion.span>
        </div>
      </div>

      <div className="tagline  w-full h-[70vh]  mdsm:h-[70vh] xl:h-[60vh] py-10">
        {/* Background Scrolling Text */}
        <div className="back-text absolute -bottom-60 mdsm:-bottom-80 lg:-bottom-96 left-0  overflow-hidden opacity-5 whitespace-nowrap w-full z-50 animate-scroll-x">
          <h1 className="text-[7rem] uppercase  md:text-[8rem] lg:text-[10rem] text-red-800 font-['Superset'] leading-none">
            GAIN MUSCLE GAIN MUSCLE GAIN MUSCLE GAIN MUSCLE GAIN MUSCLE GAIN
            MUSCLE GAIN MUSCLE GAIN MUSCLE GAIN
          </h1>
          <h1 className="text-[7rem] uppercase   md:text-[8rem] lg:text-[10rem] text-red-800 font-['Superset'] leading-none">
            {title}
            {title}
            {title}
            {title}
            {title}
            {title}
            {title}
            {title}
            {title}
            {title}
            {title}
          </h1>
          <h1 className="text-[7rem] uppercase  md:text-[8rem] lg:text-[10rem] text-red-800 font-['Superset'] leading-none">
            FAT LOSS FAT LOSS FAT LOSS FAT LOSS FAT LOSS FAT LOSS FAT LOSS FAT
            LOSS FAT
          </h1>
        </div>

        {/* Foreground Main Content */}
        {/* Foreground Main Content */}
        <div className="relative z-10 pl-6 sm:pl-10  md:pl-20 max-w-7xl mx-auto text-left">
          <div className="flex flex-col 2sm:flex-wrap sm:flex ">
            <div className="flex flex-col xs:flex xs:flex-row xs:flex-wrap 3xs:flex-col mdsm:flex-row mdsm:gap-5  xs:gap-0     ">
              <div className="w-fit bg-black">
                <h1 className="text-[5rem] sm:text-[6rem] md:text-[5rem] lg:text-[6rem] xl:text-[7rem] leading-none font-['Superset'] uppercase  text-white">
                  UNLOCK YOUR
                </h1>
              </div>
              <div className="w-fit flex gap-5 ">
                <h1 className="text-[5rem] sm:text-[6rem] md:text-[5rem] lg:text-[6rem] xl:text-[7rem] leading-none font-['Superset'] uppercase  text-white">
                  POTENTIAL
                </h1>
                <div className="w-fit">
                  <h1 className="text-[5rem] sm:text-[6rem] md:text-[5rem] lg:text-[6rem] xl:text-[7rem] leading-none font-['Superset'] uppercase  text-white">
                    TO
                  </h1>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-0 xs:flex   xs:gap-0  sm:flex-row ">
              <div className="w-fit flex gap-5 ">
                <h1 className="text-[5rem] sm:text-[6rem] md:text-[5rem] lg:text-[6rem] xl:text-[7rem] leading-none font-['Superset'] uppercase  text-[#F82E14]">
                  ACHIEVE
                </h1>
                <div className="w-fit ">
                  <h1 className="text-[5rem] sm:text-[6rem] md:text-[5rem] lg:text-[6rem] xl:text-[7rem] leading-none font-['Superset'] uppercase  text-[#F82E14]">
                    YOUR
                  </h1>
                </div>
              </div>
              <div className="w-fit ">
                <h1 className="text-[5rem] sm:text-[6rem] sm:ml-5 md:text-[5rem] lg:text-[6rem] xl:text-[7rem] leading-none font-['Superset'] uppercase  text-[#F82E14]">
                  GOALS
                </h1>
              </div>
            </div>
          </div>

          <p className="mt-6 text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 font-light max-w-sm lg:max-w-xl">
            Everyone is different. We each have personal goals and we all take
            different paths to reach them. Our whole approach is based on that.
          </p>
        </div>
      </div>

      {/* What's Inside Section */}
      <div className="package-details text-white py-20 px-6 sm:px-10 md:px-20 xl:px-0 max-w-9xl">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
          className="text-7xl sm:text-[4rem] md:text-[7rem] lg:text-[8rem] xl:text-[10rem] text-center mb-10 font-['Superset'] uppercase"
        >
          What’s Inside the Package?
        </motion.h2>

        <Carousel3D items={moreDetails} />
      </div>

      {/* Other sections */}
      <PackagePlan />
      <QuestionsSection />
      <Reviews />
      <Page7 />
      <Footer />
    </div>
  );
};

export default PackageDetails;
