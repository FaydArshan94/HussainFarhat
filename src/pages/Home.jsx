import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import Marquee from "../components/Marquee";
import Page2 from "../components/Page2";
import Page3 from "../components/Page3";
import Page4 from "../components/Page4";
import Page5 from "../components/Page5";
import Page6 from "../components/Page6";
import Page7 from "../components/Page7";
import Footer from "../components/Footer";
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
        <div className="main w-full relative oveflow-hidden">
          {/* Landing Section */}
          <div
            ref={landingRef}
            className="landing relative   w-full h-[90vh] sm:h-[120vh] overflow-hidden sm:bg-bg-[url(https://maltapersonaltrainer.com/wp-content/uploads/2023/06/hero-bg-1280x725.jpg)] "
          >
            <img
              className="w-full h-full absolute z-0 sepia-50 object-cover"
              src="https://maltapersonaltrainer.com/wp-content/uploads/2023/06/hero-bg-1280x725.jpg"
              alt=""
            />

            <div className="h-[70vh] z-1  w-1/2 sm:w-full sm:h-full flex flex-col sm:flex-row sm:justify-center items-center justify-between sm:items-start absolute top-24 sm:top-[10%] sm:gap-10 left-1/2 -translate-x-1/2">
              <div className="w-full sm:w-1/3 h-full sm:h-[90vh]  shadow-lg overflow-hidden">
                <img
                  className="w-[100vh] z-20 h-[60vh] object-cover sm:h-full"
                  src="https://instagram.fagr1-2.fna.fbcdn.net/v/t51.2885-15/504346431_17951153696978424_9171351455365472855_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjEyODV4MTcxMy5zZHIuZjc1NzYxLmRlZmF1bHRfaW1hZ2UifQ&_nc_ht=instagram.fagr1-2.fna.fbcdn.net&_nc_cat=100&_nc_oc=Q6cZ2QFpCawqQauQ5zjvQEo0b0aZT337vt6yco-7ntzD2P6BhUkBJhVgF17nW33MIFXXsdUkWwhyvz2c6tv7gXOO7CNx&_nc_ohc=vgLVhfeYKQYQ7kNvwH7iTY5&_nc_gid=lOR0AQgm7dDTLmMQmDiCLA&edm=APoiHPcBAAAA&ccb=7-5&ig_cache_key=MzY0ODQxMDM3MTc0OTkzODA1Ng%3D%3D.3-ccb7-5&oh=00_AfR2W-0-fSvp81nRRyoPl5iIDUBus57qZhZ6XlMxhFrbDA&oe=687F0A44&_nc_sid=22de04"
                  alt=""
                />
              </div>

              <div className="z-10 sm:flex sm:flex-col justify-center items-center sm:items-start sm:w-1/3">
                <div className="sm:flex sm:flex-col  sm:items-start">
                  <h1 className="text-8xl hidden sm:block font-['Superset'] text-white tracking-wide text-center sm:text-[9rem]">
                    THE{" "}
                  </h1>
                  <h1 className="text-8xl font-['Superset'] text-white tracking-wide text-center sm:text-[9rem]">
                    GLADIOLUS{" "}
                  </h1>
                  <h1 className="text-8xl font-['Superset'] text-white tracking-wide text-center sm:text-[9rem]">
                    COACHING
                  </h1>
                </div>

                <p className="text-white text-center text-md leading-none font-sans-serif mt-4 sm:text-2xl sm:w-full  sm:text-left">
                  Dream body. No cardio. No diets. Guaranteed results.
                </p>

                <div className="flex flex-col   items-center justify-center mt-8">
                  <h1 className="text-xl py-[2px] font-sans-serif font-['light'] text-white tracking-wide text-center">
                    LET'S GO.
                    <div className=" h-[3px] bg-zinc-50 "></div>
                  </h1>
                </div>
              </div>
            </div>

            <div className="shapes w-full h-1/2 absolute z-0 top-1/2  sm:h-full sm:w-full -translate-y-1/2 left-0 flex flex-col items-center justify-center  sm:left-1/2 sm:-translate-x-1/2">
              <div className="shape h-16 scale-[2] z-0 w-full bg-zinc-950 opacity-100 -rotate-20 sm:w-1/4 sm:h-20 sm:mt-24 sm:-rotate-5 sm:rotate-x-30 sm:-rotate-y-40"></div>
              <div className="shape h-28 scale-[1.8] mt-10 z-1 w-full bg-zinc-950 opacity-95  rotate-20 sm:rotate-180 sm:h-40 sm:w-[50%] sm:scale-[2] sm:mt-60 sm:rotate-x-30 sm:-rotate-y-40 "></div>
            </div>
          </div>

          <Marquee />

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
