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
        <div className="main w-full  bg-black relative overflow-hidden ">
          {/* Landing Section */}
          <div
            ref={landingRef}
            className="landing relative px-[2rem]  flex  items-center justify-center h-[110vh] sm:h-[120vh] md:h-[100vh] lg:h-screen 2xl:h-[120vh] w-full overflow-hidden bg-[url(https://maltapersonaltrainer.com/wp-content/uploads/2023/06/hero-bg-1280x725.jpg)] bg-cover bg-no-repeat bg-center "
          >
            <div className="shapes w-full h-1/2 absolute  z-10 top-1/2   -translate-y-1/2 left-0 flex flex-col items-center justify-center  ">
              <div className="shape absolute  -top-20  mt-10  ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1249"
                  height="299"
                  opacity="0.8"
                  viewBox="0 0 1249 799"
                  fill="none"
                >
                  <path
                    fill="#0a0a0a"
                    d="M 0 0 L 0 313 L 1249 799 L 1249 486 Z"
                  ></path>
                </svg>
              </div>

              <div className="shape absolute mt-40  ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1249"
                  height="399"
                  opacity="0.8"
                  viewBox="0 0 1249 799"
                  fill="none"
                >
                  <path
                    fill="#0a0a0a"
                    d="M 0 0 L 0 313 L 1249 799 L 1249 486 Z"
                  ></path>
                </svg>
              </div>
            </div>

            <div className="inner z-40 h-[90vh] md:h-full relative   w-full flex flex-col items-center mdx:flex-row md:justify-center  mdx:items-center md:px-20  mdx:w-full  mdx:gap-10 sm:w-full ">
              <div className="w-[30vh]  h-[30rem] 2sm:h-[40rem] 2sm:w-[38vh]  md:w-[32rem] md:h-[70vh] lg:h-[62vh] lg:w-[30rem] xl:w-[28rem] xl:h-[66vh] 2xl:w-[30rem] 2xl:h-[93vh] z-10 shadow-lg ">
                <img
                  className="z-20 h-full w-full object-cover "
                  src={fht}
                  alt=""
                />
              </div>

              <div className="z-10 w-full md:w-fit flex flex-col h-full md:h-fit items-center -translate-y-10 mdx:translate-y-0 mdx:items-start mdx:justify-start mdx:px-0 px-10  ">
                <div className="text-center mdx:text-left mdx:w-1/2 ">
                  <h1 className="text-[clamp(5rem,15vw,8rem)] mdx:text-[8rem] lg:text-[7rem] xl:text-[7.5rem] 2xl:text-[11rem] 2xl:leading-[12rem] leading-none font-['Superset'] text-white tracking-wide">
                    THE GLADIOLUS
                  </h1>
                  <h1 className="text-[clamp(5rem,15vw,8rem)] mdx:text-[8rem] lg:text-[7rem] xl:text-[7.5rem] 2xl:text-[11rem] 2xl:leading-[12rem] leading-none font-['Superset'] text-[#890900] tracking-wide">
                    COACHING
                  </h1>
                </div>

                <div className="flex items-center   text-center mdx:w-[20rem] xl:w-[25rem] justify-center mdx:justify-start">
                  <p className="text-white z-10 xs:w-1/2 mdx:w-full text-xl mdx:text-[1.5em] lg:text-[1.5rem] xl:text-[1.5rem] mdx:text-left leading-snug font-['FrankitonSansL'] mt-6">
                    Dream body. No cardio. No diets. Guaranteed results.
                  </p>
                </div>

                <div className="flex items-center justify-center mt-10 mdx:justify-start text-left">
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
