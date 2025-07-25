import React, { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { motion } from "framer-motion";
import Page2 from "../components/Page2";
import Page3 from "../components/Page3";
import Page4 from "../components/Page4";
import Page5 from "../components/Page5";
import Page7 from "../components/Page7";
import Footer from "../components/Footer";
import Last from "../components/Last";
import Loader from "../components/Loader";
import Landing from "../components/Landing";

const Home = () => {
  const [showMainContent, setShowMainContent] = useState(
    sessionStorage.getItem("hasSeenLoader") === "true"
  );

  const topShapeRef = useRef(null);
  const bottomShapeRef = useRef(null);

  // useGSAP(() => {
  //   const tl = gsap.timeline();

  //   tl.to(".eye", { opacity: 1, duration: 1, ease: "power2.inOut" })
  //     .add(() => {
  //       setShowMainContent(true);
  //       sessionStorage.setItem("hasSeenLoader", "true");
  //     })
  //     .to(".main", { opacity: 1, duration: 1, ease: "power2.inOut" }, "<")
  //     .to(".svg", {
  //       y: "-100%",
  //       duration: 1.2,
  //       ease: "power3.inOut",
  //       onComplete: () => document.body.classList.remove("no-scroll"),
  //     });
  // }, []);

  const AnimatedLetters = ({ text, delay = 0, colorClass = "" }) => {
    return (
      <span className="inline-block overflow-hidden">
        {text.split("").map((letter, i) => (
          <motion.span
            key={i}
            initial={{ y: "100%", opacity: 0 }}
            // animate={startHeadings ? { y: 0, opacity: 1 } : {}}
            transition={{
              ease: [0.22, 1, 0.36, 1],
              duration: 0.6,
              delay: delay + i * 0.05, // stagger by index
            }}
            className={`inline-block ${
              letter === " " ? "w-2" : ""
            } ${colorClass}`}
          >
            {letter}
          </motion.span>
        ))}
      </span>
    );
  };

  return (
    <div className="w-full bg-black/10 overflow-hidden relative">
      {!showMainContent && (
        <Loader
          onComplete={() => {
            setShowMainContent(true);
            gsap.to(".main", {
              opacity: 1,
              duration: 1,
              ease: "power2.inOut",
            });
          }}
        />
      )}

      <div className="main opacity-100 transition-opacity duration-700">
        {/* Landing Section */}

        <Landing />

        <Last />
        <Page2 />
        <Page3 />
        <Page4 />
        <Page5 />
        {/* <Page6 /> */}
        <Page7 />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
