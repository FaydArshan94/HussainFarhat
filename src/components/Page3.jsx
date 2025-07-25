import React from "react";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Page3 = () => {

  const containerRef = useRef(null);
  const Whatref = useRef(null);
  const WhattextRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      containerRef.current,
      { scaleX: 0, transformOrigin: "center" },
      {
        scaleX: 1.2,
        ease: "power3.out",
        duration: 1.5,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          // markers: true, // uncomment for debugging
          end: "top top",
          // markers: true, // uncomment for debugging
        },
      }
    )
    gsap.fromTo(
      Whatref.current,
      { y: -100 },
      {
        y: 0,
        ease: "power3.out",
        duration: 1.5,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          // markers: true, // uncomment for debugging
          end: "top top",
          scrub: 1.5,
          // markers: true, // uncomment for debugging
        },
      }
    )
    gsap.fromTo(
      WhattextRef.current,
      { y: 200, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: "power3.out",
        duration: 1.5,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          // markers: true, // uncomment for debugging
          end: "top top",
          scrub: 1.5,
          // markers: true, // uncomment for debugging
        },
      }
    );
  }, []);

  return (
    <div className="w-full relative    mt-40 ">
      <div className="w-full h-[120vh] md:h-[140vh]  ">
        <video
          ref={containerRef}

          className="w-full h-full object-cover skew-x-6"
          autoPlay
          loop
          muted
          src="https://maltapersonaltrainer.com/wp-content/uploads/2023/07/what-we-do.mp4"
        ></video>

        <div className="w-full h-full bg-black/90 absolute left-0 top-0"></div>

        <div className="w-full px-[1rem]  absolute top-1/2 -translate-y-1/2 left-0 md:top-1/2 md:-translate-y-1/2 flex flex-col md:flex-row md:items-end md:justify-evenly lg:justify-between xl:justify-center md:gap-[3rem] 2xl:gap-[7rem] justify-center    ">
          <div
          ref={Whatref}
          className="">
            <h1 className="text-[8rem] w-full 2sm:text-[9rem] md:text-[15rem] xl:text-[17rem] 2xl:text-[18rem] xl:mr-[10rem] font-['Superset'] uppercase leading-none  text-white  ">
              What
            </h1>
            <h1 className="text-[8rem]  2sm:text-[9rem] md:text-[15rem] xl:text-[17rem] 2xl:text-[18rem]  font-['Superset'] uppercase leading-none  text-white  ">
              WE do
            </h1>
          </div>

          <div
          ref={WhattextRef}
          className=" flex xs:w-[350px]  lg:w-[40%] 2xl:w-[500px] flex-col items-start  ">
            <p className="text-lg md:text-2xl xl:text-[1.8rem] 2xl:text-[1.9rem]  text-white mt-10 leading-none  font-['light'] ">
              Custom training programs, nutrition coaching, fitness assessments,
              goal setting, progress tracking, motivation, and accountability.
            </p>

            <div className="flex flex-col sm:w-fit  items-center justify-center mt-6">
              <h1 className="text-md py-[2px] border-b-4 md:text-2xl border-white font-sans-serif font-['light'] text-white tracking-wide text-center">
                START NOW
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page3;
