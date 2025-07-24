import React, { useRef } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitText from "../hook/SplitText";
import PackageCard from "../components/PackageCard";
import Carousel3D from "../components/Carousel3D";
import PackagePlan from "../components/PackagePlan";
import QuestionsSection from "../components/QuestionsSection";
import Page7 from "../components/Page7";
import Footer from "../components/Footer";

const PackageDetails = () => {
  // const fatBurnerDetails = [
  //   {
  //     title: " Personalized Nutrition Plan",
  //     video:
  //       "https://videos.pexels.com/video-files/12188783/12188783-uhd_2560_1440_25fps.mp4",
  //     details: [
  //       "Customized calorie deficit meal plan",
  //       "Weekly meal adjustments based on progress",
  //       "Macro and micronutrient breakdown",
  //     ],
  //   },
  //   {
  //     title: " Workout Routine",
  //     video:
  //       "https://videos.pexels.com/video-files/12188783/12188783-uhd_2560_1440_25fps.mp4",
  //     details: [
  //       "Targeted fat-burning workout plan",
  //       "Home and gym versions available",
  //       "Cardio + Strength + HIIT modules",
  //     ],
  //   },
  //   {
  //     title: " Supplement Guidance",
  //     video:
  //       "https://videos.pexels.com/video-files/12188783/12188783-uhd_2560_1440_25fps.mp4",
  //     details: [
  //       "Best fat burners as per your goals",
  //       "Dosage and timing recommendations",
  //       "All natural & evidence-based picks",
  //     ],
  //   },
  //   {
  //     title: " Progress Tracking & Support",
  //     video:
  //       "https://videos.pexels.com/video-files/12188783/12188783-uhd_2560_1440_25fps.mp4",
  //     details: [
  //       "Weekly check-ins",
  //       "WhatsApp/Email support for queries",
  //       "Progress evaluation and feedback",
  //     ],
  //   },
  // ];

  const { state } = useLocation();

  if (!state) return <div className="text-white p-10">Package not found.</div>;

  const {
    title,
    price,
    description,
    imageUrl,
    tagline,
    formats,
    moreDetails = [],
  } = state;

  const topShapeRef = useRef(null);
  const bottomShapeRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(bottomShapeRef.current, {
      scaleX: 0,
      opacity: 0,
      duration: 0.8,
      ease: "power2.inOut",
      // In useGSAP
      onComplete: () => {
        gsap.to(bottomShapeRef.current, {
          y: 5,
          repeat: -1,
          yoyo: true,
          duration: 3,
          ease: "sine.inOut",
        });
      },
    }).from(topShapeRef.current, {
      scaleX: 0,
      opacity: 0,
      duration: 0.4,
      ease: "power2.inOut",
      onComplete: () => {
        gsap.to(topShapeRef.current, {
          y: 5,
          // x: -10,
          repeat: -1,
          yoyo: true,
          duration: 3,
          ease: "sine.inOut",
        });
      },
    });
  }, []);

  return (
    <div className="min-h-screen bg-black  text-white ">
      <div className="packages-landing relative overflow-hidden w-full h-screen flex items-center justify-center">
        <div
          ref={topShapeRef}
          className="
                absolute z-0 origin-left top-10  left-1/2 -translate-x-1/2
                w-full mdsm:w-2/3  h-40  
                bg-[red] skew-y-12 opacity-50
              "
          style={{ zIndex: 10 }}
        />

        <div
          ref={bottomShapeRef}
          className="
                absolute z-0 origin-right  xs:top-[55%] 2sm:top-[60%] lg:top-[65%] xl:top-[69%] 2xl:top-[70%] 4xl:top-[80%] left-1/2 -translate-x-1/2
                w-full mdsm:w-2/3  top-1/2 h-[200px] 
                bg-[#060606] skew-y-12 opacity-50
              "
          style={{ zIndex: 10 }}
        />

        <div className="bg-img absolute top-0 left-0 z-0 h-full w-full">
          <img
            className="w-full h-full object-cover object-top-right"
            src="https://www.primalstrength.com/cdn/shop/files/gym_design_Headers.jpg?v=1680779429&width=2000"
            alt=""
          />
        </div>

        <div className="content z-10 w-full px-4 sm:px-10 md:px-16 xl:px-20 flex flex-col items-center justify-center text-white text-center">
          <div className="w-full max-w-[90vw] sm:max-w-[80vw] md:max-w-[70vw] xl:max-w-[60vw]">
            <SplitText
              text={title}
              className="leading-none font-['Superset'] text-center 
                  text-[2.5rem] sm:text-[4rem] md:text-[6rem] lg:text-[8rem] xl:text-[10rem] 
                  max-w-[90vw] break-words"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
            />
          </div>

          <p className="text-center 2sm:text-[1.2rem] mdsm:text-[1.3rem] xl:text-[1.8rem] font-['light'] w-[70%] mt-4">
            <motion.span
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                ease: [0.22, 1, 0.36, 1],
                duration: 0.7,
                delay: 1,
              }}
              className="origin-left inline-block"
            >
              {description}
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

      <div className="tagline  w-full h-[110vh] mdsm:h-[70vh] xl:h-[60vh] py-10">
        {/* Background Scrolling Text */}
        <div className="back-text absolute -bottom-60 mdsm:-bottom-80 lg:-bottom-96 left-0  overflow-hidden opacity-5 whitespace-nowrap w-full z-50 animate-scroll-x">
          <h1 className="text-[7rem] uppercase  md:text-[8rem] lg:text-[10rem] text-red-800 font-['Superset'] leading-none">
             GAIN MUSCLE GAIN MUSCLE GAIN MUSCLE GAIN MUSCLE GAIN MUSCLE GAIN MUSCLE
            GAIN MUSCLE GAIN MUSCLE GAIN
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
             FAT LOSS FAT LOSS FAT LOSS FAT LOSS FAT LOSS FAT LOSS
            FAT LOSS FAT LOSS FAT
          </h1>
         
        </div>

        {/* Foreground Main Content */}
        <div className="relative z-10 pl-6 sm:pl-10  md:pl-20 max-w-7xl mx-auto text-left">
          <div className="flex flex-col 2sm:flex-wrap sm:flex ">
            <div className="flex flex-col xs:flex xs:flex-row xs:flex-wrap 3xs:flex-col mdsm:flex-row mdsm:gap-5  xs:gap-0     ">
              <div className="w-fit bg-black">
                <SplitText
                  text="UNLOCK YOUR "
                  delay={100}
                  className="text-[5rem] sm:text-[6rem] md:text-[5rem] lg:text-[6rem] xl:text-[7rem] leading-none font-['Superset'] uppercase  text-white"
                  duration={0.6}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="-100px"
                />
              </div>
              <div className="w-fit flex gap-5 ">
                <SplitText
                  text=" POTENTIAL"
                  delay={100}
                  className="text-[5rem] sm:text-[6rem] md:text-[5rem] lg:text-[6rem] xl:text-[7rem] leading-none font-['Superset'] uppercase  text-white"
                  duration={0.6}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="-100px"
                />

                <div className="w-fit">
                  <SplitText
                    text=" TO"
                    delay={100}
                    className="text-[5rem] sm:text-[6rem] md:text-[5rem] lg:text-[6rem] xl:text-[7rem] leading-none font-['Superset'] uppercase  text-white"
                    duration={0.6}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-0 xs:flex   xs:gap-0  sm:flex-row ">
              <div className="w-fit flex gap-5 ">
                <SplitText
                  text="ACHIEVE"
                  delay={100}
                  className="text-[5rem] sm:text-[6rem] md:text-[5rem] lg:text-[6rem] xl:text-[7rem] leading-none font-['Superset'] uppercase  text-[#F82E14]"
                  duration={0.6}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="-100px"
                />

                <div className="w-fit ">
                  <SplitText
                    text=" YOUR"
                    delay={100}
                    className="text-[5rem] sm:text-[6rem] md:text-[5rem] lg:text-[6rem] xl:text-[7rem] leading-none font-['Superset'] uppercase  text-[#F82E14]"
                    duration={0.6}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                  />
                </div>
              </div>

              <div className="w-fit ">
                <SplitText
                  text=" GOALS"
                  delay={100}
                  className="text-[5rem] sm:text-[6rem] sm:ml-5 md:text-[5rem] lg:text-[6rem] xl:text-[7rem] leading-none font-['Superset'] uppercase  text-[#F82E14]"
                  duration={0.6}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="-100px"
                />
              </div>
            </div>
          </div>

          <p className="mt-6 text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 font-light max-w-sm lg:max-w-xl">
            Everyone is different. We each have personal goals and we all take
            different paths to reach them. Our whole approach is based on that.
          </p>
        </div>
      </div>

      <div className="package-details  text-white py-20 px-6 sm:px-10 md:px-20 xl:px-0 max-w-9xl   ">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
          className="text-7xl sm:text-[4rem] md:text-[7rem] lg:text-[8rem]  xl:text-[10rem] text-center text-white mb-10 font-['Superset'] uppercase"
        >
          What’s Inside the Package?
        </motion.h2>

        {state.moreDetails && <Carousel3D items={state.moreDetails} />}
      </div>

      <PackagePlan />

      <QuestionsSection />
      <Page7 />
      <Footer />
    </div>
  );
};

export default PackageDetails;
