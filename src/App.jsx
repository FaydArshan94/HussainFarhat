import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

const App = () => {
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

  useGSAP(() => {
    if (!showContent) return;

    const landing = landingRef.current;

    gsap.to(landing, {
      rotate: 0,
      scale: 1,
      duration: 1,
      ease: "expo.inOut",
    });

    const moveHandler = (e) => {
      const xmove = (e.clientX / window.innerWidth - 0.5) * 40;

      gsap.to(".photosdiv .text", {
        x: `${xmove * 0.4}%`,
      });

      gsap.to(".bg", {
        x: `${xmove * 1.5}`,
      });
    };

    landing?.addEventListener("mousemove", moveHandler);

    return () => landing?.removeEventListener("mousemove", moveHandler);
  }, [showContent]);

  return (
    <>
      <Navbar />
      <Home />












      {/* SVG Loader */}
      {/* <div className="svg fixed w-full h-screen  z-[100] flex items-center justify-center overflow-hidden bg-black">
        <img className="eye h-40" src="src/assets/abyDRUeZdxkU.png" alt="eye" />
      </div> */}

      {/* {showContent && (
        <div className="main w-full overflow-x-hidden">
          
          <div
            ref={landingRef}
            className="landing relative w-full h-screen overflow-hidden bg-black"
          >
            <img
              className="w-full h-full object-cover"
              src="https://maltapersonaltrainer.com/wp-content/uploads/2023/06/hero-bg-1280x725.jpg"
              alt=""
            />
          </div>
        </div>
      )} */}
    </>
  );
};

export default App;
