import React, { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { motion } from "framer-motion";
import QuestionsSection from "../components/QuestionsSection";
import Page7 from "../components/Page7";
import Footer from "../components/Footer";
import SplitText from "../hook/SplitText";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import PackageCarousel from "../components/PackageCarousel";


const Packages = () => {
  const handleAnimationComplete = () => {};
  const topShapeRef = useRef(null);
  const bottomShapeRef = useRef(null);
  const [showMainContent, setShowMainContent] = useState(true);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(bottomShapeRef.current, {
      scaleX: 0,
      opacity: 0,
      duration: 0.4,
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

  // useEffect(() => {
  //   if (!showMainContent || !topShapeRef.current) return;

  //   const handleMouseMove = (e) => {
  //     const x = e.clientX;
  //     const y = e.clientY;

  //     // Shape moves only slightly left/right
  //     const xMove = (x / window.innerWidth - 0.1) * 10;

  //     gsap.to(topShapeRef.current, {
  //       x: xMove,
  //       duration: 0.5,
  //       ease: "power2.out",
  //     });
  //     gsap.to(bottomShapeRef.current, {
  //       x: xMove,
  //       duration: 0.5,
  //       ease: "power2.out",
  //     });
  //   };

  //   document
  //     .querySelector(".pkg-main")
  //     ?.addEventListener("mousemove", handleMouseMove);

  //   return () => {
  //     document
  //       .querySelector(".pkg-main")
  //       ?.removeEventListener("mousemove", handleMouseMove);
  //   };
  // }, [showMainContent]);


  
  // const sessionData = [
  //   {
  //     id: "1on1-1",
  //     title: "Foundation Build",
  //     tagline: "Your transformation begins here.",
  //     image:
  //       "https://preview.redd.it/natural-hussein-farhat-holding-his-own-against-lifetime-v0-i05gre7y290f1.jpg?width=1080&crop=smart&auto=webp&s=aa0d2013ff7a4b2359970b1c6c244c6ab8a3cd34",
  //     price: "40€",
  //     description:
  //       "This one-on-one package offers dedicated guidance tailored to your needs. You'll receive focused attention during each session, with fully customized workouts geared toward strength building, fat loss, mobility, or endurance. We'll also track progress via InBody scans and adapt your plan as you improve. Nutritional advice and accountability are included to help you stay on track and maximize your results",
  //     benefits: [
  //       "Personalized workout plan",
  //       "Dedicated trainer for the session",
  //       "Form correction",
  //       "Motivation and accountability",
  //     ],
  //   },
  //   {
  //     id: "1on1-5",
  //     title: "Strength Sculpt",
  //     tagline: "Your transformation begins here.",
  //     image:
  //       "https://preview.redd.it/natural-hussein-farhat-holding-his-own-against-lifetime-v0-i05gre7y290f1.jpg?width=1080&crop=smart&auto=webp&s=aa0d2013ff7a4b2359970b1c6c244c6ab8a3cd34",
  //     price: "190€",
  //     description:
  //       "This one-on-one package offers dedicated guidance tailored to your needs. You'll receive focused attention during each session, with fully customized workouts geared toward strength building, fat loss, mobility, or endurance. We'll also track progress via InBody scans and adapt your plan as you improve. Nutritional advice and accountability are included to help you stay on track and maximize your results",
  //     benefits: [
  //       "Progress tracking",
  //       "Nutrition tips",
  //       "Flexible schedule",
  //       "Dedicated support",
  //     ],
  //   },
  //   {
  //     id: "1on1-10",
  //     title: "Elite Transformation",
  //     tagline: "Your transformation begins here.",
  //     image:
  //       "https://preview.redd.it/natural-hussein-farhat-holding-his-own-against-lifetime-v0-i05gre7y290f1.jpg?width=1080&crop=smart&auto=webp&s=aa0d2013ff7a4b2359970b1c6c244c6ab8a3cd34",
  //     price: "350€",
  //     description:
  //       "This one-on-one package offers dedicated guidance tailored to your needs. You'll receive focused attention during each session, with fully customized workouts geared toward strength building, fat loss, mobility, or endurance. We'll also track progress via InBody scans and adapt your plan as you improve. Nutritional advice and accountability are included to help you stay on track and maximize your results",
  //     benefits: [
  //       "Progress tracking",
  //       "Nutrition tips",
  //       "Flexible schedule",
  //       "Dedicated support",
  //     ],
  //   },
  //   {
  //     id: "1on1-20",
  //     title: "Athlete Edge",
  //     tagline: "Your transformation begins here.",
  //     image:
  //       "https://preview.redd.it/natural-hussein-farhat-holding-his-own-against-lifetime-v0-i05gre7y290f1.jpg?width=1080&crop=smart&auto=webp&s=aa0d2013ff7a4b2359970b1c6c244c6ab8a3cd34",
  //     price: "650€",
  //     description:
  //       "This one-on-one package offers dedicated guidance tailored to your needs. You'll receive focused attention during each session, with fully customized workouts geared toward strength building, fat loss, mobility, or endurance. We'll also track progress via InBody scans and adapt your plan as you improve. Nutritional advice and accountability are included to help you stay on track and maximize your results",
  //     benefits: [
  //       "Progress tracking",
  //       "Nutrition tips",
  //       "Flexible schedule",
  //       "Dedicated support",
  //     ],
  //   },
  // ];

  // const sessionDataGroup = [
  //   {
  //     id: "grp-1",
  //     title: "Team Burn",
  //     tagline: "Fuel your fire with team energy.",
  //     image:
  //       "https://preview.redd.it/natural-hussein-farhat-holding-his-own-against-lifetime-v0-i05gre7y290f1.jpg?width=1080&crop=smart&auto=webp&s=aa0d2013ff7a4b2359970b1c6c244c6ab8a3cd34",
  //     price: "40€",
  //     description:
  //       "This one-on-one package offers dedicated guidance tailored to your needs. You'll receive focused attention during each session, with fully customized workouts geared toward strength building, fat loss, mobility, or endurance. We'll also track progress via InBody scans and adapt your plan as you improve. Nutritional advice and accountability are included to help you stay on track and maximize your results",
  //     benefits: [
  //       "Personalized workout plan",
  //       "Dedicated trainer for the session",
  //       "Form correction",
  //       "Motivation and accountability",
  //     ],
  //   },
  //   {
  //     id: "grp-5",
  //     title: "Power Squad",
  //     tagline: "Train together. Grow stronger.",
  //     image:
  //       "https://preview.redd.it/natural-hussein-farhat-holding-his-own-against-lifetime-v0-i05gre7y290f1.jpg?width=1080&crop=smart&auto=webp&s=aa0d2013ff7a4b2359970b1c6c244c6ab8a3cd34",
  //     price: "190€",
  //     description:
  //       "This one-on-one package offers dedicated guidance tailored to your needs. You'll receive focused attention during each session, with fully customized workouts geared toward strength building, fat loss, mobility, or endurance. We'll also track progress via InBody scans and adapt your plan as you improve. Nutritional advice and accountability are included to help you stay on track and maximize your results",
  //     benefits: [
  //       "Progress tracking",
  //       "Nutrition tips",
  //       "Flexible schedule",
  //       "Dedicated support",
  //     ],
  //   },
  //   {
  //     id: "grp-10",
  //     title: "Core Collective",
  //     tagline: "Your squad. Your strength.",
  //     image:
  //       "https://preview.redd.it/natural-hussein-farhat-holding-his-own-against-lifetime-v0-i05gre7y290f1.jpg?width=1080&crop=smart&auto=webp&s=aa0d2013ff7a4b2359970b1c6c244c6ab8a3cd34",
  //     price: "350€",
  //     description:
  //       "This one-on-one package offers dedicated guidance tailored to your needs. You'll receive focused attention during each session, with fully customized workouts geared toward strength building, fat loss, mobility, or endurance. We'll also track progress via InBody scans and adapt your plan as you improve. Nutritional advice and accountability are included to help you stay on track and maximize your results",
  //     benefits: [
  //       "Progress tracking",
  //       "Nutrition tips",
  //       "Flexible schedule",
  //       "Dedicated support",
  //     ],
  //   },
  //   {
  //     id: "grp-20",
  //     title: "Endure Together",
  //     tagline: "Push limits. Celebrate together.",
  //     image:
  //       "https://preview.redd.it/natural-hussein-farhat-holding-his-own-against-lifetime-v0-i05gre7y290f1.jpg?width=1080&crop=smart&auto=webp&s=aa0d2013ff7a4b2359970b1c6c244c6ab8a3cd34",
  //     price: "650€",
  //     description:
  //       "This one-on-one package offers dedicated guidance tailored to your needs. You'll receive focused attention during each session, with fully customized workouts geared toward strength building, fat loss, mobility, or endurance. We'll also track progress via InBody scans and adapt your plan as you improve. Nutritional advice and accountability are included to help you stay on track and maximize your results",
  //     benefits: [
  //       "Progress tracking",
  //       "Nutrition tips",
  //       "Flexible schedule",
  //       "Dedicated support",
  //     ],
  //   },
  // ];

  return (
    <>
      <div className="w-full pkg-main h-full relative">
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

          <div className="content z-10 px-[1.5rem] 2sm:px-20 flex text-white flex-col items-center justify-center">
            <SplitText
              text="YOUR"
              className="text-[9rem] mdsm:text-[12rem] mdx:text-[12rem] leading-none font-['Superset'] text-center"
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

            <SplitText
              text="FITNESS"
              className="text-[9rem] mdsm:text-[12rem] mdx:text-[12rem] leading-none font-['Superset'] text-center"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              onLetterAnimationComplete={handleAnimationComplete} // ➜ then show paragraph
            />

            <p className="text-center 2sm:text-[1.2rem] mdsm:text-[1.3rem] font-['light'] w-[70%] mt-4">
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
                delay: 1,
              }}
              className="text-xl mdsm:text-[1.5rem] py-[2px] mt-8 inline-block font-thin font-['light'] border-b-4 border-[#F82E14] text-zinc-100 tracking-wide"
            >
              LET'S GO.
            </motion.span>
          </div>
        </div>
        <div className="1-0n-1  min-h-screen w-full bg-black text-white flex flex-col items-center px-4 py-20">
          <h1 className="text-[6rem] font-['Superset'] mdsm:text-[7rem]  lg:text-9xl xl:[9rem] 2xl:text-[10rem] 3xl:text-[12rem] text-white ">
            1-ON-1
          </h1>
          <p className="text-center text-md font-['light'] mdsm:text-xl lg:text-2xl  2xl:text-3xl 3xl:text-4xl lg:mt-10 text-gray-300 max-w-sm md:max-w-3xl mt-4">
            Our 1-on-1 personal training sessions are backed by data and
            designed precisely around your needs, including optional nutritional
            advice.
          </p>

          <PackageCarousel />
        </div>
        <div className="group-coch  min-h-screen w-full bg-black text-white flex flex-col items-center px-4 py-20">
          <h1 className="text-[6rem] font-['Superset'] text-center uppercase mdsm:text-[7rem]  lg:text-9xl xl:[9rem] 2xl:text-[10rem] 3xl:text-[12rem] text-white ">
            Group Training
          </h1>
          <p className="text-center text-md font-['light'] mdsm:text-xl lg:text-2xl  2xl:text-3xl 3xl:text-4xl lg:mt-10 text-gray-300 max-w-sm md:max-w-3xl mt-4">
            Train in your own small group and succeed together with our
            elite-level coaches, additional nutritional advice, and
            target-driven approach.
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
