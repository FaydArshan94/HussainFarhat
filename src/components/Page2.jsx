import React, { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Page2 = () => {
  const imgRef = useRef(null);
  const headingRef = useRef(null);
  const headingContainerRef = useRef(null);
  const paragraphContainerRef = useRef(null);

  // Image parallax scroll
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

  // Fade in image
  useGSAP(() => {
    gsap.from(imgRef.current, {
      opacity: 0,
      duration: 1.2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: imgRef.current,
        start: "top 90%",
        toggleActions: "play none none reverse",
      },
    });
  });

  // Animate paragraph on scroll
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
  });

  useGSAP(() => {
    gsap.to(headingContainerRef.current.querySelectorAll("h1 span"), {
      y: 0,
      opacity: 1,
      stagger: 0.15,
      duration: 0.8,
      ease: "power4.out",
      scrollTrigger: {
        trigger: headingContainerRef.current,
        start: "top 80%",
        end: "top 30%",
        toggleActions: "play none none reverse",
        // markers: true,
      },
    });
  });

  return (
    <div className="w-full text-white relative flex flex-col items-end justify-center pl-4 lg:pl-10 xl:pl-20 2xl:pl-40">
      {/* Experience H1 */}

      {/* Background Image */}
      <div className="absolute top-0 right-0 w-[70vw] h-[100vh] mdsm:h-[120vh] lg:h-[130vh] xl:h-[140vh] 2xl:h-[150vh] overflow-hidden z-0">
        <img
          ref={imgRef}
          src="https://maltapersonaltrainer.com/wp-content/uploads/2023/07/MPT-Homepage-Benefits-of-PT.jpg"
          alt="Hero"
          className="object-cover object-left w-full h-full"
        />
      </div>

      {/* Content Block */}
      <div className="relative mt-[20rem]  z-10 flex flex-col mdsm:flex-row mdsm:justify-between mdsm:gap-5 w-full mdsm:mt-[20rem] md:mt-[30rem]">
        {/* Heading lines */}
        <div
          ref={headingContainerRef}
          className="mdsm:pl-5 xl:pl-28 2xl:pl-40 mdsm:w-full md:w-[70%] lg:w-full font-['Superset'] flex flex-col items-start"
        >
          {["EXPERIENCE","THE BENEFITS", "OF PERSONAL", "TRAINING"].map((line, i) => (
            <h1
              key={i}
              className="text-[5rem] leading-[6rem] tracking-wide 2sm:text-[6rem] md:text-[7rem] lg:text-[7.5rem] xl:text-[7.5rem] xl:leading-[8.5rem] 2xl:text-[9rem] 3xl:text-[14rem] text-left overflow-hidden"
            >
              {line.split(" ").map((word, index) => (
                <span
                  key={index}
                  className="inline-block mr-2 opacity-0 translate-y-6"
                >
                  {word}
                </span>
              ))}
            </h1>
          ))}
        </div>

        {/* Paragraphs */}
        <div
          ref={paragraphContainerRef}
          className="mt-12 2sm:w-[70%] mdsm:w-fit md:w-[90%] rounded-lg mdsm:mt-60 md:mt-80 lg:translate-y-20 font-['FrankitonSansL'] font-thin w-full flex flex-col items-start xl:items-center"
        >
          {[
            "We build personalized plans for your fat loss, muscle gain, or overall health. No fluff — just real, effective training and nutrition that fits your life.",
            "We build personalized plans for your fat loss, muscle gain, or overall health. No fluff — just real, effective training and nutrition that fits your life.",
            "You bring consistency. We bring the strategy. Together, we get results.",
          ].map((text, i) => (
            <p
              key={i}
              className="text-md w-[80%] md:text-xl md:w-[450px] lg:text-2xl lg:w-[500px] xl:w-[75%] xl:text-2xl 2xl:text-3xl mb-4 text-left"
            >
              {text}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page2;
