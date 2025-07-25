// src/components/Loader.jsx
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const Loader = ({ onComplete }) => {
  const svgRef = useRef(null);
  const eyeRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        // Run callback after animation finishes
        onComplete?.();
        sessionStorage.setItem("hasSeenLoader", "true");
        document.body.classList.remove("no-scroll");
      },
    });

    tl.to(eyeRef.current, { opacity: 1, duration: 1, ease: "power2.inOut" })
      .to(svgRef.current, { y: "-100%", duration: 1.2, ease: "power3.inOut" });
  }, []);

  useEffect(() => {
    document.body.classList.add("no-scroll");
  }, []);

  return (
    <div
      ref={svgRef}
      className="svg fixed top-0 left-0 w-full h-screen z-[100] bg-black flex items-center justify-center"
    >
      <img
        ref={eyeRef}
        className="eye h-40 opacity-25 transition-opacity duration-1000"
        src="https://images.typeform.com/images/abyDRUeZdxkU"
        alt="eye"
      />
    </div>
  );
};

export default Loader;
