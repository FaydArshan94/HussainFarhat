import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Marquee = () => {
  const marqueeRef = useRef();

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.to(".marquee-track", {
        xPercent: -100,
        duration: 200, // Super slow
        ease: "linear",
        repeat: -1,
      });
    }, marqueeRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      className="w-full  bg-black text-white flex items-start pt-40  overflow-hidden"
      ref={marqueeRef}
    >
      <div className="whitespace-nowrap flex sm:gap-20 gap-10 marquee-track">
        {[
          "Weight Loss",
          "Healthy Lifestyle",
          "Muscle Gain",
          "Weight Loss",
          "Healthy Lifestyle",
          "Muscle Gain",
        ].map((text, index) => (
          <div className="flex items-center justify-between gap-10 sm:gap-20">
          <span
            key={index}
            className="sm:text-[10rem] text-8xl gap-10 font-['Superset'] tracking-wide flex items-center sm:gap-40 mx-4 uppercase text-transparent"
            style={{
              WebkitTextStroke: "1.5px white",
              color: "transparent",
            }}
          >
            {text} 
          </span>
          <span className="sm:text-8xl text-6xl text-center italic font-bold  text-[#890900]">/</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
