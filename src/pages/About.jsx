import React, { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitText from "../hook/SplitText";
import { motion } from "framer-motion";
import Page7 from "../components/Page7";
import Footer from "../components/Footer";
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import CoreValues from "../components/CoreValues";

const About = () => {
  const handleAnimationComplete = () => {};
  const topShapeRef = useRef(null);
  const bottomShapeRef = useRef(null);
  const [showMainContent, setShowMainContent] = useState(true);
  const imgRef = useRef(null);
  const imgRef2 = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (imgRef.current) {
        imgRef.current.style.transform = `translateY(${scrollY * -0.1}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (imgRef2.current) {
        imgRef2.current.style.transform = `translateY(${scrollY * -0.1}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="w-full h-full ">
        <div className="packages-landing relative overflow-hidden w-full h-screen flex items-center justify-center">
          <div className="bg-img absolute top-0 left-0 z-0 h-full w-full">
            <img
              className="w-full h-full object-cover object-top-right"
              src="https://www.primalstrength.com/cdn/shop/files/gym_design_Headers.jpg?v=1680779429&width=2000"
              alt=""
            />
          </div>

          <div className="content z-10 px-[1.5rem] 2sm:px-20 flex text-white flex-col items-center justify-center">
            <h1 className="text-[9rem] mdsm:text-[12rem] mdx:text-[12rem] leading-none font-['Superset'] text-center">ABOUT US</h1>

            

            <p className="text-center 2sm:text-[1.2rem] mdsm:text-[1.3rem] font-['light'] w-[70%] mt-4">
              <motion.span
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  ease: [0.22, 1, 0.36, 1],
                  duration: 0.7,
                  delay: 1, // slightly delayed after headings
                }}
                className="origin-left inline-block "
              >
                Reach your fitness goals with Hussain Farhat
              </motion.span>
            </p>

            <motion.span
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                ease: [0.22, 1, 0.36, 1],
                duration: 0.7,
                delay: 1,
              }}
              className="text-xl mdsm:text-[1.5rem] py-[2px] mt-8 inline-block font-thin font-['light'] border-b-4 border-[#F82E14] text-zinc-100 tracking-wide"
            >
              LET'S GO.
            </motion.span>
          </div>
        </div>

        <CoreValues />

        <div className="bg-black min-h-screen  text-white py-20 px-6 md:px-20">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-9xl md:text-[10rem] font-['Superset'] uppercase mb-4 text-center">
              Meet Your Trainer
            </h1>
            <p className="text-gray-300 text-center mt-10 max-w-3xl mx-auto mb-10">
              Founder of{" "}
              <span className="text-red-500 font-semibold">
                The Gladiolus Coaching
              </span>{" "}
              — A passionate fitness coach dedicated to transforming lives with
              tailored training and lifestyle programs. With years of experience
              in muscle gain, fat loss, and performance enhancement, Hussain
              empowers his clients to reach peak physical and mental form.
            </p>

            <div className="flex flex-col md:flex-row gap-10 items-center justify-center mb-16">
              <img
                src="src\assets\olympia.jpg" // Add your image here
                alt="Hussain Farhat"
                className="w-64 h-64 object-cover rounded-full border-4 border-red-500 shadow-lg"
              />
              <div className="space-y-4 text-center md:text-left">
                <h2 className="text-2xl font-semibold text-white">
                  Hussain Farhat
                </h2>
                <p className="text-gray-400">
                  Certified Fitness Trainer | Athlete | Founder
                </p>
                <div className="flex gap-6 justify-center md:justify-start text-red-500 text-2xl">
                  <a
                    href="https://www.instagram.com/hussainfarhat/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="https://www.facebook.com/hussainfarhat"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                  >
                    <FaFacebook />
                  </a>
                  <a
                    href="https://twitter.com/hussainfarhat"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                  >
                    <FaTwitter />
                  </a>
                  <a href="www.youtube.com/@Hussein.fht1" aria-label="YouTube">
                    <FaYoutube />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
            {/* YouTube Card */}
            <div className="bg-[#0f0f0f] rounded-xl flex flex-col items-center gap-3  md:flex md:items-center md:justify-between p-6 shadow-md border border-red-600">
              <div className="flex items-center gap-6">
                <img
                  src="https://yt3.googleusercontent.com/bjWjwzYxkxd2rohDlVqX3xVoKWofZ83vUWq-lu82vS7fOUxFredYYp1zB9sK1QRf-Kytt0dtlw=s160-c-k-c0x00ffffff-no-rj" // replace with real image or static avatar
                  alt="Hussain Farhat"
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div>
                  <p className="text-red-500 font-bold text-sm">YOUTUBE</p>
                  <h3 className="text-xl font-semibold text-white">
                    HUSSAIN FARHAT
                  </h3>
                  <p className="text-gray-400 text-sm">428K Subscribers</p>
                </div>
              </div>
              <a
                href="www.youtube.com/@Hussein.fht1"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 hover:bg-red-700 text-white md:px-4 md:py-2 px-2 py-1 rounded-full font-semibold"
              >
                Subscribe
              </a>
            </div>

            {/* Instagram Card */}
            <div className="bg-[#0f0f0f] rounded-xl flex flex-col items-center gap-3  md:flex md:items-center md:justify-between p-6 shadow-md border border-blue-600">
              <div className="flex items-center gap-6">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6T9_e-1LT3ohko1Q6MCIC4i55VR5buMaoxw&s" // Replace with Hussain’s Insta-style image
                  alt="Hussain Farhat"
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div>
                  <p className="text-blue-400 font-bold text-sm">INSTAGRAM</p>
                  <h3 className="text-xl font-semibold text-white">
                    HUSSAIN FARHAT
                  </h3>
                  <p className="text-gray-400 text-sm">2.7M Followers</p>
                </div>
              </div>
              <a
                href="https://instagram.com/hussainfarhat"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-600 text-white md:px-4 md:py-2 px-2 py-1 rounded-full font-semibold"
              >
                Follow
              </a>
            </div>
          </div>
        </div>
        <Page7 />
        <Footer />
      </div>
    </>
  );
};

export default About;

// About.jsx
// import React from "react";
