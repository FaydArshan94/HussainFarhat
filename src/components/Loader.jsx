// src/components/Loader.jsx
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const Loader = ({ onComplete }) => {
  const svgRef = useRef(null);
  const eyeRef = useRef(null);
  const headingRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        onComplete?.();
        sessionStorage.setItem("hasSeenLoader", "true");
        document.body.classList.remove("no-scroll");
      },
    });

    // Typing effect on heading
    const letters = headingRef.current.querySelectorAll("span");

    tl.to(eyeRef.current, {
      opacity: 1,
      duration: 2,
      ease: "power2.inOut",
    });

    tl.to(
      letters,
      {
        opacity: 1,
        duration: 0.05,
        stagger: 0.04,
        ease: "power1.inOut",
      },
      "<+0.5"
    );

    tl.to(svgRef.current, {
      y: "-100%",
      duration: 1.5,
      ease: "power3.inOut",
      delay: 0.5,
    });
  }, []);

  useEffect(() => {
    document.body.classList.add("no-scroll");
  }, []);

  const headingText = "Get ready to transform.";

  return (
    <div
      ref={svgRef}
      className="svg fixed top-0 left-0 w-full h-screen z-[100] bg-black flex flex-col items-center justify-center"
    >
      <img
        ref={eyeRef}
        className="eye h-40 opacity-25 transition-opacity duration-1000"
        src="https://images.typeform.com/images/abyDRUeZdxkU"
        alt="eye"
      />
      <h1
        ref={headingRef}
        className="font-['light'] text-xl md:text-5xl text-zinc-200 flex gap-1 flex-wrap justify-center"
      >
        {headingText.split("").map((char, index) => (
          <span
            key={index}
            style={{ opacity: 0, display: "inline-block" }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h1>
    </div>
  );
};

export default Loader;
