import React, { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const Page2 = () => {
  const imgRef = useRef(null);
  const headingRef = useRef(null);
  const headingContainerRef = useRef(null);
  const paragraphContainerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (imgRef.current) {
        imgRef.current.style.transform = `translateY(${scrollY * -0.1}px)`; // parallax speed
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useGSAP(() => {
    gsap.from(imgRef.current, {
      opacity: 0,
      duration: 1.2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: imgRef.current,
        start: "top 90%",
        toggleActions: "play none none reverse",
        // markers: true, // Uncomment for debugging
      },
    });
  });

  useGSAP(
    () => {
      // Animate headings
      gsap.from(headingContainerRef.current.querySelectorAll("h1"), {
        y: 100,
        opacity: 0,
        ease: "power4.out",
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
          trigger: headingContainerRef.current,
          start: "top 80%",
          end: "top 40%",
          toggleActions: "play none none reverse",
        },
      });

      // Animate paragraphs
    },
    { scope: headingContainerRef }
  ); // Keep scope to any common container or just remove this if not necessary

  useGSAP(() => {
    gsap.from(paragraphContainerRef.current.querySelectorAll("p"), {
      y: 50,
      opacity: 0,
      stagger: 0.2,
      ease: "power4.out",
      duration: 0.8,
      scrollTrigger: {
        trigger: paragraphContainerRef.current,
        start: "top 85%",
      },
    });
  }); // Keep scope to any common container or just remove this if not necessary

  return (
    <div className="w-full text-white min-h-screen  py-20 mdsm:px-[1.8rem] relative flex flex-col items-center justify-center px-4">
      <div className="w-[80vw] mdsm:w-[70vw] xl:h-[80%] overflow-hidden h-1/2  2sm:h-[60%] 2sm:mt-20 mdsm:right-[1.8rem] absolute top-0 right-0 xl:right-24 z-10 ">
        <img
          ref={imgRef}
          data-scroll
          data-scroll-speed="-1"
          src="https://maltapersonaltrainer.com/wp-content/uploads/2023/07/MPT-Homepage-Benefits-of-PT.jpg"
          alt="Hero Image"
          className="object-cover w-full h-full"
        />
      </div>

      <div className="flex flex-col mdsm:flex-row mdsm:justify-between    z-10 mt-40 2sm:mt-60 sm:mt-[30rem] items-start w-full ">
        <div
          ref={headingContainerRef}
          className="h1s relative 2sm:mt-[20rem] mdsm:mt-[10rem] md:mt-[10rem]  lg:mt-[10rem] xl:mt-[30rem] mdsm:pl-5 xl:pl-28 2xl:pl-40 mdsm:w-2/3 md:w-[70%] mdsm:text-left  font-['Superset'] flex flex-col items-start rounded-lg w-full"
        >
          <h1 className="text-7xl  tracking-wide 2sm:text-8xl md:text-[7rem] lg:text-[7rem] xl:text-[8rem] 2xl:text-[8rem] text-center">
            EXPERIENCE
          </h1>

          <h1 className="text-7xl   tracking-wide 2sm:text-8xl  md:text-[7rem]  lg:text-[7rem] xl:text-[7.5rem] 2xl:text-[8rem] text-center">
            THE BENEFITS
          </h1>
          <h1 className="text-7xl   tracking-wide 2sm:text-8xl  md:text-[7rem]  lg:text-[7rem] xl:text-[7.5rem] 2xl:text-[8rem] text-center">
            OF PERSONAL
          </h1>
          <h1 className="text-7xl   tracking-wide 2sm:text-8xl  md:text-[7rem]  lg:text-[7rem] xl:text-[7.5rem] 2xl:text-[8rem] text-center">
            TRAINING
          </h1>
        </div>

        <div
          ref={paragraphContainerRef}
          className=" mt-8  rounded-lg mdsm:mt-80 2xl:mt-[60rem] llg:mt-[40rem] font-['FrankitonSansL'] font-thin w-full 2sm:w-[70%] mdsm:w-2/3 md:w-[90%] lg:w-full flex flex-col items-start mdsm:items-end xl:items-center"
        >
          <p className="text-lg sm:text-lg md:text-2xl md:w-[450px] lg:text-xl lg:w-[500px] xl:w-[75%] xl:text-2xl font-['FrankitonSansL']  mb-4 text-left">
            We build personalized plans for your fat loss, muscle gain, or
            overall health. No fluff — just real, effective training and
            nutrition that fits your life.
          </p>

          <p className="text-lg sm:text-lg md:text-2xl md:w-[450px] lg:text-xl lg:w-[500px] xl:w-[75%] xl:text-2xl font-['FrankitonSansL']  mb-4 text-left">
            We build personalized plans for your fat loss, muscle gain, or
            overall health. No fluff — just real, effective training and
            nutrition that fits your life.
          </p>

          <p className="text-lg sm:text-lg md:text-2xl md:w-[450px] lg:text-xl lg:w-[500px] xl:w-[75%] xl:text-2xl font-['FrankitonSansL']  mb-4 text-left">
            You bring consistency. We bring the strategy. Together, we get
            results.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page2;
