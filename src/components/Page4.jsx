import React, { useRef } from "react";
import { Dumbbell, Users, ListChecks } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const values = [
  {
    icon: (
      <Dumbbell
        size={40}
        className="text-[#890900] mb-4 2sm:mb-6 lg:w-14 lg:h-14 xl:w-16 xl:h-16"
      />
    ),
    title: "STRONG",
    description: [
      "We will help you build physical and mental strength",
      "through our customised training programs",
      "that cater to each member’s unique needs and abilities.",
    ],
  },
  {
    icon: (
      <Users
        size={40}
        className="text-[#890900] mb-4 2sm:mb-6 lg:w-14 lg:h-14 xl:w-16 xl:h-16"
      />
    ),
    title: "FRIENDLY",
    description: [
      "We are welcoming, supportive, and caring",
      "so that everyone feels comfortable to perform at their best.",
      "But we’re not soft — expect to be pushed towards your goals.",
    ],
  },
  {
    icon: (
      <ListChecks
        size={40}
        className="text-[#890900] mb-4 2sm:mb-6 lg:w-14 lg:h-14 xl:w-16 xl:h-16"
      />
    ),
    title: "ACCOUNTABLE",
    description: [
      "We hold ourselves accountable for helping you achieve your best results.",
      "We are always working towards your goals,",
      "playing an active role in your fitness journey.",
    ],
  },
];

const Page4 = () => {
  const titleRefs = useRef([]);
  const wordRefs = useRef([]);
  const letterRefs = useRef([]); // NEW

  const containerRef = useRef(null);

  useGSAP(
    () => {
      letterRefs.current.forEach((group) => {
        if (!group?.length) return;
        gsap.from(group, {
          y: 40,
          opacity: 0,
          stagger: 0.03,
          ease: "power4.out",
          duration: 0.8,
          scrollTrigger: {
            trigger: group[0]?.parentNode,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });

      wordRefs.current.forEach((group) => {
        if (!group?.length) return;
        gsap.from(group, {
          y: 20,
          opacity: 0,
          stagger: 0.02,
          ease: "power2.out",
          duration: 0.5,
          scrollTrigger: {
            trigger: group[0]?.parentNode,
            start: "top bottom",
            toggleActions: "play none none none",
          },
        });
      });
    },
    { scope: containerRef } // ✅ scoped GSAP hook
  );

  return (
    <section className="bg-black text-white py-10 pt-28 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 mdsm:grid-cols-3 gap-12 lg:gap-16 xl:gap-20 2xl:gap-24 text-center">
        {values.map((item, index) => (
          <div
            key={index}
            className="flex flex-col 2sm:gap-5 mdsm:gap-2 items-center"
          >
            {item.icon}

            <h3 className="text-5xl uppercase tracking-wide mb-4 font-['Superset'] mdsm:text-[3rem] lg:text-[3.5rem] xl:text-[4rem] 2xl:text-[4.5rem]">
              {item.title.split("").map((letter, i) => {
                if (!letterRefs.current[index]) letterRefs.current[index] = [];
                return (
                  <span
                    key={i}
                    ref={(el) => (letterRefs.current[index][i] = el)}
                    className="inline-block"
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </span>
                );
              })}
            </h3>

            <div className="text-gray-300  text-lg leading-snug overflow-hidden w-[66%] 2sm:w-[400px] mdsm:w-[220px] lg:w-[70%]  mdsm:text-[1.1rem]  text-center font-['FrankitonSansL'] lg:text-xl xl:text-xl 2xl:text-2xl">
              {item.description.map((line, lineIndex) => {
                const words = line.split(" ");
                const refGroup = [];
                const wordSpans = words.map((word, i) => (
                  <span
                    key={i}
                    ref={(el) => (refGroup[i] = el)}
                    className="inline-block mr-[0.25ch]"
                  >
                    {word}
                  </span>
                ));
                wordRefs.current.push(refGroup);
                return <p key={lineIndex}>{wordSpans}</p>;
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Page4;
