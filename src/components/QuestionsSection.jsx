import React, { useState } from "react";
import { RiArrowDownWideFill } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";
import SplitText from "../hook/SplitText";
import { useMemo } from "react";
const faqData = [
  {
    question:
      "What types of training methods and techniques are used at Hussain Farhat Coaching?",
    answer:
      "At Hussain Farhat Coaching, we believe in a results-driven and science-backed approach to fitness. Our training methodology combines multiple techniques like strength training, hypertrophy-focused workouts (for muscle growth), functional training for improved mobility and core strength, and HIIT (High-Intensity Interval Training) for fat loss and cardiovascular endurance. Each client’s program is carefully customized based on their body type, goals (weight loss, muscle gain, toning), fitness level, and available equipment (home or gym). The goal is not just to make you look better, but also to move better, feel stronger, and stay consistent for long-term transformation.",
  },
  {
    question: "Do you offer online coaching or only in-person sessions?",
    answer:
      "Yes, we offer both online and in-person coaching options. Our online coaching is designed to be just as effective as face-to-face training. You’ll receive a personalized workout plan, complete with video demonstrations, written instructions, and weekly check-ins through WhatsApp or Google Meet. All progress is tracked digitally, and you'll receive full-time support, form corrections via videos, and motivation to stay on track. This makes it perfect for busy students, professionals, or anyone who wants to train from home or their local gym.",
  },
  {
    question:
      "Is this program suitable for beginners or only advanced individuals?",
    answer:
      "Absolutely! Our coaching is beginner-friendly and also caters to intermediate and advanced fitness levels. Every plan is custom-built based on your experience and capability. If you're just starting out, we’ll begin with foundational exercises to build strength, confidence, and form. For experienced lifters or athletes, we introduce progressive overload, advanced splits, and intense circuits to break plateaus and reach peak performance. No matter where you're starting from, our system is designed to guide you step-by-step.",
  },
  {
    question:
      "Do you provide nutrition or diet guidance along with the workout plans?",
    answer:
      "Yes, nutrition is a vital part of your transformation, and we support you with a basic but effective meal plan. Based on your age, weight, activity level, and goals, we suggest a protein-rich, balanced diet using easily available Indian foods. Whether your goal is muscle gain or fat loss, we’ll teach you how to structure your meals, how to track calories (if needed), and how to build sustainable habits. For those who fast (like during Ramadan) or have specific dietary needs, we offer flexible nutrition strategies too.",
  },
];

const QuestionsSection = () => {
  const splitHeading = useMemo(
    () => (
      <h1 className="text-9xl md:text-[8rem] uppercase lg:text-[9rem] xl:text-[10rem] 2xl:text-[10rem] 5xl:text-[30rem] leading-none text-white text-center font-['Superset']">about the packs</h1>
    ),
    []
  );

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="questions py-20 xl:py-10 min-h-screen w-full text-center bg-black px-4 md:px-10">
      <div className="">{splitHeading}</div>

      <div className="w-[90%] sm:w-[85%] md:w-[80%] lg:max-w-8xl   mx-auto mt-10 space-y-6 xl:space-y-10 lg:mt-20">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="p-4 xl:p-6 2xl:p-16 rounded-md  transition-all duration-300"
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
                  <p className="text-gray-400 text-sm xl:text-xl md:text-base text-center">
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
