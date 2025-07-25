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
import SplitText from "../hook/SplitText";
import Loader from "../components/Loader"
import PackagePlan from "../components/PackagePlan"


const Home = () => {
  const [showMainContent, setShowMainContent] = useState(
    sessionStorage.getItem("hasSeenLoader") === "true"
  );

  const topShapeRef = useRef(null);
  const bottomShapeRef = useRef(null);



  // useGSAP(() => {
  //   const tl = gsap.timeline();

  //   tl.to(".eye", { opacity: 1, duration: 1, ease: "power2.inOut" })
  //     .add(() => {
  //       setShowMainContent(true);
  //       sessionStorage.setItem("hasSeenLoader", "true");
  //     })
  //     .to(".main", { opacity: 1, duration: 1, ease: "power2.inOut" }, "<")
  //     .to(".svg", {
  //       y: "-100%",
  //       duration: 1.2,
  //       ease: "power3.inOut",
  //       onComplete: () => document.body.classList.remove("no-scroll"),
  //     });
  // }, []);

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

  const AnimatedLetters = ({ text, delay = 0, colorClass = "" }) => {
    return (
      <span className="inline-block overflow-hidden">
        {text.split("").map((letter, i) => (
          <motion.span
            key={i}
            initial={{ y: "100%", opacity: 0 }}
            // animate={startHeadings ? { y: 0, opacity: 1 } : {}}
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
    <div className="w-full bg-black/10 overflow-hidden relative">
      {!showMainContent && (
        <Loader
          onComplete={() => {
            setShowMainContent(true);
            gsap.to(".main", {
              opacity: 1,
              duration: 1,
              ease: "power2.inOut",
            });
          }}
        />
      )}

      <div className="main opacity-100 transition-opacity duration-700">
        {/* Landing Section */}

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
              text="GLADIOLOUS"
              className="text-[5rem] 2sm:text-[6rem] mdsm:text-[8rem] mdx:text-[8rem] xl:text-[10rem] leading-none font-['Superset'] text-center"
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
              text="COACHING"
              className="text-[5rem] 2sm:text-[6rem]  mdsm:text-[8rem] mdx:text-[8rem] xl:text-[10rem] leading-none font-['Superset'] text-center"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              // onLetterAnimationComplete={handleAnimationComplete} // ➜ then show paragraph
            />

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

        <Last />
        <Page2 />
        <Page3 />
        <Page4 />
        <Page5 />
        <PackagePlan />
        {/* <Page6 /> */}
        <Page7 />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
