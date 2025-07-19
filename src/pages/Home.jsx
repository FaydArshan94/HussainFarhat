import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
// import Marquee from "../components/Marquee";
import Page2 from "../components/Page2";
import Page3 from "../components/Page3";
import Page4 from "../components/Page4";
import Page5 from "../components/Page5";
import Page6 from "../components/Page6";
import Page7 from "../components/Page7";
import Footer from "../components/Footer";
import Last from "../components/Last";

import fht from "../assets/fht.jpg";
const Home = () => {
  const [showContent, setShowContent] = useState(false);
  const landingRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(".eye", {
      scale: 10,
      duration: 2,
      delay: 1,
      ease: "expo.inOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.7) {
          document.querySelector(".svg")?.remove();
          setShowContent(true);
          this.kill();
        }
      },
    });
  });

  // useGSAP(() => {
  //   if (!showContent) return;

  //   const landing = landingRef.current;

  //   gsap.to(landing, {
  //     rotate: 0,
  //     scale: 1,
  //     duration: 1,
  //     ease: "expo.inOut",
  //   });

  //   const moveHandler = (e) => {
  //     const xmove = (e.clientX / window.innerWidth - 0.5) * 40;

  //     gsap.to(".photosdiv .text", {
  //       x: `${xmove * 0.4}%`,
  //     });

  //     gsap.to(".bg", {
  //       x: `${xmove * 1.5}`,
  //     });
  //   };

  //   landing?.addEventListener("mousemove", moveHandler);

  //   return () => landing?.removeEventListener("mousemove", moveHandler);
  // }, [showContent]);

  return (
    <>
      {/* SVG Loader */}
      <div className="svg fixed w-full h-screen  z-[100] flex items-center justify-center overflow-hidden bg-black">
        <img
          className="eye h-40"
          src="https://images.typeform.com/images/abyDRUeZdxkU"
          alt="eye"
        />
      </div>

      {showContent && (
        <div className="main w-full bg-black relative oveflow-hidden ">
          {/* Landing Section */}
          <div
            ref={landingRef}
            className="landing relative flex items-start justify-center min-h-[115vh] w-full  sm:h-[120vh] overflow-hidden bg-[url(https://maltapersonaltrainer.com/wp-content/uploads/2023/06/hero-bg-1280x725.jpg)] bg-cover bg-no-repeat bg-center"
          >
            {/* <img
              className="w-full h-full absolute z-0 sepia-50 object-cover"
              src="https://maltapersonaltrainer.com/wp-content/uploads/2023/06/hero-bg-1280x725.jpg"
              alt=""
            /> */}
            <div className="shapes w-full h-1/2 absolute  z-10 top-1/2  sm:h-full sm:w-full -translate-y-1/2 left-0 flex flex-col items-center justify-center  sm:left-1/2 sm:-translate-x-1/2">
              <div className="shape h-16 scale-[2] z-0 w-full bg-zinc-950 opacity-100 -rotate-20 sm:w-1/4 sm:h-20 sm:mt-24 sm:-rotate-5 sm:rotate-x-30 sm:-rotate-y-40"></div>
              <div className="shape h-28 scale-[1.8] mt-10 z-1 w-full bg-zinc-950 opacity-95  rotate-20 sm:rotate-180 sm:h-40 sm:w-[50%] sm:scale-[2] sm:mt-60 sm:rotate-x-30 sm:-rotate-y-40 "></div>
            </div>

            <div className="inner ... z-40 h-full relative px-4 mt-[15vh]  w-full flex flex-col items-center sm:w-full sm:h-full   sm:flex-row sm:justify-center  sm:items-start  sm:top-[10%] sm:gap-10 ">
              <div className="w-[16rem]    sm:w-1/3 z-10 sm:h-[90vh]  shadow-lg overflow-hidden">
                <img
                  className="z-20 h-full w-full object-cover sm:h-full"
                  src={fht}
                  alt=""
                />
              </div>

              <div className="z-10 absolute top-[90%] w-[80%] px-10 sm:flex sm:flex-col text-center justify-center items-center sm:items-start sm:w-1/3">
                <div className=" text-center  sm:text-left">
                  <h1 className="text-[clamp(5rem,15vw,8rem)]  leading-none font-['Superset'] text-white tracking-wide">
                    THE GLADIOLUS
                  </h1>
                  <h1 className="text-[clamp(5rem,15vw,8rem)]  leading-none font-['Superset'] text-[#890900] tracking-wide">
                    COACHING
                  </h1>
                </div>

                <p className="text-white  z-10 px-4 text-lg leading-snug font-['light'] mt-6 sm:text-2xl sm:w-full  sm:text-left">
                  Dream body. No cardio. No diets. Guaranteed results.
                </p>

                <div className="flex flex-col   items-center justify-center mt-10">
                  <h1 className="text-xl py-[2px] font-thin font-['light'] border-b-4 border-[#890900] text-zinc-100 tracking-wide text-center">
                    LET'S GO.
                  </h1>
                </div>
              </div>
            </div>
          </div>

          {/* <Marquee /> */}
          <Last />

          <Page2 />
          <Page3 />
          <Page4 />
          <Page5 />
          <Page6 />
          <Page7 />
          <Footer />
        </div>
      )}
    </>
  );
};

export default Home;
