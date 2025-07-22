import React, { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { motion } from "framer-motion";
import QuestionsSection from "../components/QuestionsSection";
import Page7 from "../components/Page7";
import Footer from "../components/Footer";
import SplitText from "../hook/SplitText";

const Packages = () => {
  const handleAnimationComplete = () => {};
  const topShapeRef = useRef(null);
  const bottomShapeRef = useRef(null);
  const [showMainContent, setShowMainContent] = useState(true);

  const [showSplitText, setShowSplitText] = useState(false);
  const [showParagraph, setShowParagraph] = useState(false);

  const [showYour, setShowYour] = useState(false);
  const [showFitness, setShowFitness] = useState(false);

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

          <div className="mt-10 mdx:px-10 3xl:px-32 grid grid-cols-1 2sm:grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8 lg:gap-5 xl:gap-10 2xl:gap-16 w-full max-w-8xl">
            {/* Session 1 */}
            <div className="border border-blue-600 p-8 2sm:p-16 mdx:p-[1.5rem] lg:p-[2rem] xl:p-[2.5rem] 2xl:p-[2rem] 2xl:py-[3rem] 3xl:p-[5rem]  text-center hover:bg-blue-900 transition">
              <p className="text-white text-[2rem] mdx:text-[1.2rem] xl:text-[1.5rem] 2xl:text-[2.5rem]  font-['light']">
                1 SESSION
              </p>
              <p className="text-[3rem] mdx:text-[2.5rem] font-['light'] font-bold text-blue-500 mt-2">
                40€
              </p>
            </div>

            {/* Session 5 */}
            <div className="border border-blue-600 p-8 2sm:p-16 mdx:p-[1.5rem] lg:p-[2rem] xl:p-[2.5rem] 2xl:p-[2rem] 2xl:py-[3rem] 3xl:p-[5rem]  text-center hover:bg-blue-900 transition">
              <p className="text-white text-[2rem] mdx:text-[1.2rem] xl:text-[1.5rem] 2xl:text-[2.5rem]  font-['light']">
                5 SESSIONS
              </p>
              <p className="text-[3rem] mdx:text-[2.5rem] font-['light'] font-bold text-blue-500 mt-2">
                190€
              </p>
            </div>

            {/* Session 10 */}
            <div className="border border-blue-600 p-8 2sm:p-16 mdx:p-[1.5rem] lg:p-[2rem] xl:p-[2.5rem] 2xl:p-[2rem] 2xl:py-[3rem] 3xl:p-[5rem]  text-center hover:bg-blue-900 transition">
              <p className="text-white text-[2rem] mdx:text-[1.2rem] xl:text-[1.5rem] 2xl:text-[2.5rem]  font-['light']">
                10 SESSIONS
              </p>
              <p className="text-[3rem] mdx:text-[2.5rem] font-['light'] font-bold text-blue-500 mt-2">
                350€
              </p>
            </div>

            {/* Session 20 */}
            <div className="border border-blue-600 p-8 2sm:p-16 mdx:p-[1.5rem] lg:p-[2rem] xl:p-[2.5rem] 2xl:p-[2rem] 2xl:py-[3rem] 3xl:p-[5rem]  text-center hover:bg-blue-900 transition">
              <p className="text-white text-[2rem] mdx:text-[1.2rem] xl:text-[1.5rem] 2xl:text-[2.5rem]  font-['light']">
                20 SESSIONS
              </p>
              <p className="text-[3rem] mdx:text-[2.5rem] font-['light'] font-bold text-blue-500 mt-2">
                650€
              </p>
            </div>
          </div>
        </div>
        <div className="group  min-h-screen w-full bg-black text-white flex flex-col items-center px-4 py-20">
          <h1 className="text-[6rem] font-['Superset'] text-center uppercase mdsm:text-[7rem]  lg:text-9xl xl:[9rem] 2xl:text-[10rem] 3xl:text-[12rem] text-white ">
            Group Training
          </h1>
          <p className="text-center text-md font-['light'] mdsm:text-xl lg:text-2xl  2xl:text-3xl 3xl:text-4xl lg:mt-10 text-gray-300 max-w-sm md:max-w-3xl mt-4">
            Train in your own small group and succeed together with our
            elite-level coaches, additional nutritional advice, and
            target-driven approach.
          </p>

          <div className="mt-10 mdx:px-10 3xl:px-32 grid grid-cols-1 2sm:grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8 lg:gap-5 xl:gap-10 2xl:gap-16 w-full max-w-8xl">
            {/* Session 1 */}
            <div className="border border-blue-600 p-8 2sm:p-16 mdx:p-[1.5rem] lg:p-[2rem] xl:p-[2.5rem] 2xl:p-[2rem] 2xl:py-[3rem] 3xl:p-[5rem]  text-center hover:bg-blue-900 transition">
              <p className="text-white text-[2rem] mdx:text-[1.2rem] xl:text-[1.5rem] 2xl:text-[2.5rem]  font-['light']">
                Single Session
              </p>
              <p className="text-[3rem] mdx:text-[2.5rem] font-['light'] font-bold text-blue-500 mt-2">
                40€
              </p>
            </div>

            {/* Session 5 */}
            <div className="border border-blue-600 p-8 2sm:p-16 mdx:p-[1.5rem] lg:p-[2rem] xl:p-[2.5rem] 2xl:p-[2rem] 2xl:py-[3rem] 3xl:p-[5rem]  text-center hover:bg-blue-900 transition">
              <p className="text-white text-[2rem] mdx:text-[1.2rem] xl:text-[1.5rem] 2xl:text-[2.5rem]  font-['light']">
                5 Session Pack
              </p>
              <p className="text-[3rem] mdx:text-[2.5rem] font-['light'] font-bold text-blue-500 mt-2">
                190€
              </p>
            </div>

            {/* Session 10 */}
            <div className="border border-blue-600 p-8 2sm:p-16 mdx:p-[1.5rem] lg:p-[2rem] xl:p-[2.5rem] 2xl:p-[2rem] 2xl:py-[3rem] 3xl:p-[5rem]  text-center hover:bg-blue-900 transition">
              <p className="text-white text-[2rem] mdx:text-[1.2rem] xl:text-[1.5rem] 2xl:text-[2.5rem]  font-['light']">
                10 Session Pack
              </p>
              <p className="text-[3rem] mdx:text-[2.5rem] font-['light'] font-bold text-blue-500 mt-2">
                350€
              </p>
            </div>

            {/* Session 20 */}
            <div className="border border-blue-600 p-8 2sm:p-16 mdx:p-[1.5rem] lg:p-[2rem] xl:p-[2.5rem] 2xl:p-[2rem] 2xl:py-[3rem] 3xl:p-[5rem]  text-center hover:bg-blue-900 transition">
              <p className="text-white text-[2rem] mdx:text-[1.2rem] xl:text-[1.5rem] 2xl:text-[2.5rem]  font-['light']">
                20 Session Pack
              </p>
              <p className="text-[3rem] mdx:text-[2.5rem] font-['light'] font-bold text-blue-500 mt-2">
                650€
              </p>
            </div>
          </div>
        </div>
        <QuestionsSection />
        <Page7 />
        <Footer />
      </div>
    </>
  );
};

export default Packages;
