import React, { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { motion } from "framer-motion";

import Page2 from "../components/Page2";
import Page3 from "../components/Page3";
import Page4 from "../components/Page4";
import Page5 from "../components/Page5";
import Page6 from "../components/Page6";
import Page7 from "../components/Page7";
import Footer from "../components/Footer";
import Last from "../components/Last";

import fht from "../assets/fht.jpg";
import Loader from "../components/Loader";
import MaskedImage from "../components/MaskedImage";

const Home = () => {
  const [showMainContent, setShowMainContent] = useState(false);
  const [startImage, setStartImage] = useState(false);
  const [startHeadings, setStartHeadings] = useState(false);
  const landingRef = useRef(null);

  const topShapeRef = useRef(null);
  const bottomShapeRef = useRef(null);
  const backCursor = useRef(null);

  useEffect(() => {
    // On mount: block scroll
    document.body.classList.add("no-scroll");

    return () => {
      // On unmount: just in case cleanup
      document.body.classList.remove("no-scroll");
    };
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".eye", { opacity: 1, duration: 1, ease: "power2.inOut" })
      .add(() => setShowMainContent(true))
      .to(".main", { opacity: 1, duration: 1, ease: "power2.inOut" }, "<")
      .to(".svg", {
        y: "-100%",
        duration: 1.2,
        ease: "power3.inOut",
        onComplete: () => document.body.classList.remove("no-scroll"),
      })
      // 1. Animate shape

      .to(bottomShapeRef.current, {
        scaleX: 42,
        opacity: 0.8,
        duration: 0.4,
        ease: "power2.inOut",
        onComplete: () => {
          // Start cloudy floating effect after reveal
          gsap.to(bottomShapeRef.current, {
            y: 20,
            x: -10,
            repeat: -1,
            yoyo: true,
            duration: 3,
            ease: "sine.inOut",
          });
        },
      })

      .to(topShapeRef.current, {
        scaleX: 25,
        opacity: 0.8,
        duration: 0.4,
        ease: "power2.inOut",
        onComplete: () => {
          setStartImage(true);

          // Start cloudy floating effect after reveal
          gsap.to(topShapeRef.current, {
            y: 20,
            x: -10,
            repeat: -1,
            yoyo: true,
            duration: 3,
            ease: "sine.inOut",
          });
        },
      });

    // Inside your gsap timeline, after shape animation is done:
  }, []);

  useEffect(() => {
    if (!showMainContent || !topShapeRef.current) return;

    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      // Shape moves only slightly left/right
      const xMove = (x / window.innerWidth - 0.1) * 10;

      gsap.to(topShapeRef.current, {
        x: xMove,
        duration: 0.5,
        ease: "power2.out",
      });
      gsap.to(bottomShapeRef.current, {
        x: xMove,
        duration: 0.5,
        ease: "power2.out",
      });

      // Cursor follows the real mouse position
      gsap.to(backCursor.current, {
        y: y,
        x: x,
        duration: 0.4,
        ease: "power2.out",
      });
    };

    document
      .querySelector(".main")
      ?.addEventListener("mousemove", handleMouseMove);

    return () => {
      document
        .querySelector(".main")
        ?.removeEventListener("mousemove", handleMouseMove);
    };
  }, [showMainContent]);

  const AnimatedLetters = ({ text, delay = 0, colorClass = "" }) => {
    return (
      <span className="inline-block overflow-hidden">
        {text.split("").map((letter, i) => (
          <motion.span
            key={i}
            initial={{ y: "100%", opacity: 0 }}
            animate={startHeadings ? { y: 0, opacity: 1 } : {}}
            transition={{
              ease: [0.22, 1, 0.36, 1],
              duration: 0.6,
              delay: delay + i * 0.05, // stagger by index
            }}
            className={`inline-block ${
              letter === " " ? "w-2" : ""
            } ${colorClass}`}
          >
            {letter}
          </motion.span>
        ))}
      </span>
    );
  };

  return (
    <div className="w-full bg-black overflow-hidden relative">
      {/* Loader Overlay */}
      <Loader />

      <div className="main opacity-0 transition-opacity duration-700">
        {/* Landing Section */}
        <div
          ref={landingRef}
          className="landing relative px-[2rem]  flex items-center justify-center h-[150vh] sm:h-[120vh] md:h-[100vh] lg:h-screen xl:h-[130vh] 2xl:h-[120vh] w-full overflow-hidden bg-[url(https://www.primalstrength.com/cdn/shop/files/gym_design_Headers.jpg?v=1680779429&width=2000)] bg-cover bg-no-repeat bg-center"
        >
          <div ref={backCursor} className="backCursor"></div>
          {/* Shapes */}
          <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
            <div
              ref={bottomShapeRef}
              className="
                absolute right-0 md:right-40 origin-right md:-bottom-10 
                w-full md:w-[2%]  max-w-[900px] h-[250px] md:h-[250px]
                bg-[#060606] skew-y-12 opacity-0
              "
              style={{ zIndex: 10 }}
            />

            <div
              ref={topShapeRef}
              className="
                absolute hidden md:flex  md:left-20 origin-left md:top-20 
                w-full md:w-[2%]  max-w-[400px]  md:h-[200px]
                bg-red-400 skew-y-12 opacity-0
              "
              style={{ zIndex: 10 }}
            />
          </div>

          {/* Inner Content */}
          <div className="inner   z-40 h-full md:h-full xl:h-[80%] relative w-full flex flex-col items-center mdx:flex-row md:justify-center mdx:items-center md:px-20 mdx:gap-10 xl:gap-0 sm:w-full">
            <MaskedImage
              animateNow={startImage}
              onReveal={() => setStartHeadings(true)}
            />

            <div className="z-10 md:md-1/2  flex flex-col h-full  md:h-fit items-center xl:h-full -translate-y-10 mdx:translate-y-0 mdx:items-start mdx:justify-start px-10">
              <div className="text-center  py-1 w-full  mdx:text-left mdx:w-full  ">
                <h1 className="text-[clamp(3rem,15vw,7rem)]   flex flex-col  w-full  overflow-hidden md:text-[7rem]   lg:text-[7rem] xl:text-[9.5rem] 2xl:text-[11rem] 2xl:leading-[12rem] leading-[14vh] 2sm:leading-none font-['Superset'] text-white tracking-wide">
                  <AnimatedLetters text="THE" delay={0} />
                  <AnimatedLetters text="GLADIOLUS" delay={0.3} />
                </h1>

                <h1 className="text-[clamp(3rem,15vw,7rem)]   mdx:text-[7rem] overflow-hidden lg:text-[7rem] xl:text-[9.5rem] 2xl:text-[11rem] 2xl:leading-[12rem] leading-[14vh] 2sm:leading-none font-['Superset'] text-[#F82E14] tracking-wide">
                  <AnimatedLetters
                    text="COACHING"
                    delay={0.4}
                    colorClass="text-[#F82E14]"
                  />
                </h1>
              </div>

              <p className="text-white text-md mdx:text-[1.5rem] xl:text-[1.5rem] xl:mt-16  overflow-hidden xl:w-[25rem] mt-2 leading-snug text-center mdx:text-left font-['FrankitonSansL']">
                <motion.span
                  initial={{ y: "100%", opacity: 0 }}
                  animate={
                    startHeadings
                      ? { y: 0, opacity: 1 }
                      : { y: "100%", opacity: 0 }
                  }
                  transition={{
                    ease: [0.22, 1, 0.36, 1],
                    duration: 0.7,
                    delay: 0.3, // slightly delayed after headings
                  }}
                  className="origin-left inline-block "
                >
                  Dream body. No cardio. No diets. Guaranteed results.
                </motion.span>
              </p>

              <div className="flex items-center overflow-hidden justify-center mt-10 mdx:justify-start">
                <motion.span
                  initial={{ y: "100%", opacity: 0 }}
                  animate={
                    startHeadings
                      ? { y: 0, opacity: 1 }
                      : { y: "100%", opacity: 0 }
                  }
                  transition={{
                    ease: [0.22, 1, 0.36, 1],
                    duration: 0.7,
                    delay: 0.3,
                  }}
                  className="text-xl py-[2px]  inline-block font-thin font-['light'] border-b-4 border-[#F82E14] text-zinc-100 tracking-wide"
                >
                  LET'S GO.
                </motion.span>
              </div>
            </div>
          </div>
        </div>

        <Last />
        <Page2 />
        <Page3 />
        <Page4 />
        <Page5 />
        <Page6 />
        <Page7 />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
