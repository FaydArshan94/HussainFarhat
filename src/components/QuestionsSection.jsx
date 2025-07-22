import React, { useState } from "react";
import { RiArrowDownWideFill } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";
import SplitText from "../hook/SplitText";

const faqData = [
  {
    question:
      "What types of training methods and techniques are used at Malta Personal Trainer?",
    answer:
      "We use strength training, HIIT, mobility, and endurance-based approaches tailored to you.",
  },
  {
    question:
      "What type of equipment and facilities are available for personal training sessions?",
    answer:
      "We offer free weights, machines, resistance bands, and specialized equipment.",
  },
  {
    question: "Do you provide nutritional guidance and meal planning support?",
    answer:
      "Yes, we offer expert meal planning and diet consultations to match your goals.",
  },
  {
    question:
      "What are the benefits of choosing Malta Personal Trainer over traditional gym workouts?",
    answer:
      "You get 1-on-1 focus, tailored plans, faster progress, and accountability.",
  },
];

const QuestionsSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="questions py-20 xl:py-40 min-h-screen w-full text-center bg-black px-4 md:px-10">
      <div className="">
        <SplitText
        text="ABOUT THE PACKS"
        className="text-9xl    md:text-[8rem] lg:text-[9rem] xl:text-[10rem] 2xl:text-[10rem] 5xl:text-[30rem] leading-none text-white text-center font-['Superset']"
        delay={100}
        duration={0.6}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-100px"
        // onLetterAnimationComplete={() => setShowFitness(true)} // ➜ show FITNESS next
      />
      </div>
      

      <div className="w-[90%] sm:w-[85%] md:w-[80%] lg:max-w-8xl   mx-auto mt-10 space-y-6 lg:mt-20">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="p-4 xl:p-6 2xl:p-16 rounded-md border border-zinc-700 transition-all duration-300"
          >
            {/* Header */}
            <div
              className="flex justify-between items-start gap-1 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <p className="text-white font-medium w-full text-center text-base mdsm:text-xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl 5xl:text-9xl">
                {faq.question}
              </p>
              <RiArrowDownWideFill
                className={`text-white text-2xl md:text-[2.5rem] transform transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </div>

            {/* Animated answer with slide reveal effect */}
            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="overflow-hidden mt-4"
                >
                  <p className="text-gray-400 text-sm md:text-base text-center">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionsSection;
