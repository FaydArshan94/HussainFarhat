import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

// Features list
const allFeatures = [
  "Live Coaching Access",
  "5 Sessions per Month",
  "Flexible Timing",
  "Priority Support",
  "Personalized Feedback",
  "Exclusive Q&A Access",
  "Nutrition Guidance",
  "Progress Tracking",
];

// Plans
const plans = [
  {
    name: "Starter",
    duration: "1 Month Plan",
    price: "$599",
    features: [
      "Live Coaching Access",
      "5 Sessions per Month",
      "Flexible Timing",
    ],
    badge: null,
  },
  {
    name: "Pro",
    duration: "3 Month Plan",
    price: "$1499",
    features: [
      "Live Coaching Access",
      "5 Sessions per Month",
      "Flexible Timing",
      "Priority Support",
      "Nutrition Guidance",
    ],
    badge: "Most Popular",
  },
  {
    name: "Elite",
    duration: "6 Month Plan",
    price: "$2699",
    features: [...allFeatures],
    badge: "Best Value",
  },
];

// Individual pricing card
const PricingCard = ({ plan }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      viewport={{ once: true, amount: 0.3 }}
      className="relative  shadow-2xl p-8 md:p-10 border flex flex-col items-center border-red-400  backdrop-blur-sm"
    >
      {plan.badge && (
        <span className="absolute -top-4 font-['light'] left-6 bg-red-400 text-white text-xs font-semibold px-4 py-1 rounded-full shadow-md tracking-wide uppercase">
          {plan.badge}
        </span>
      )}

      <h3 className="text-[5rem] font-['Superset'] uppercase text-zinc-800 dark:text-white mb-2">
        {plan.name}
      </h3>
      <p className="text-xl  text-zinc-600 font-['light'] dark:text-zinc-300 mb-1">
        {plan.duration}
      </p>
      <p className="text-[4rem] text-red-400 font-['Superset'] mb-6">
        {plan.price}
      </p>

      <ul className="space-y-3 mb-8">
        {allFeatures.map((feature, i) => {
          const available = plan.features.includes(feature);
          return (
            <li
              key={i}
              className={`flex items-start gap-2 text-sm md:text-base ${
                available
                  ? "text-[zinc-800] dark:text-zinc-200"
                  : "text-zinc-400 dark:text-zinc-500 opacity-50 line-through"
              }`}
            >
              <FaCheckCircle
                className={`mt-1 ${
                  available ? "text-[#ECF0F7]" : "text-gray-400"
                }`}
              />
              <span className="font-['light']">{feature}</span>
            </li>
          );
        })}
      </ul>

      <motion.button
        className="mt-auto w-full text-center py-3 text-white font-semibold text-sm tracking-wide uppercase transition"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative w-fit mx-auto flex flex-col gap-1">
          <span className="z-10 font-light">Choose Plan</span>
          <span className="absolute bottom-0 h-[3px] w-full bg-red-400 origin-left z-0" />
          <span
            className={`absolute bottom-0 h-[3px] w-full bg-green-400 origin-left z-10 transform transition-transform duration-300 ease-in-out ${
              isHovered ? "scale-x-100" : "scale-x-0"
            }`}
          />
        </div>
      </motion.button>
    </motion.div>
  );
};

// Plans Section
const PackagesSection = () => {
  return (
    <motion.section
      className="px-6 text-white"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-7xl xl:text-[6rem] font-['Superset'] uppercase text-center mb-20 text-white">
          Choose Your Plan
        </h2>
        <div className="flex flex-wrap  justify-center  gap-10 md:gap-5 xl:gap-5">
          {plans.map((plan, i) => (
            <div
              key={i}
              className="w-full sm:w-[calc(50%-20px)] lg:w-[calc(33.333%-22px)]"
            >
              <PricingCard plan={plan} />
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default PackagesSection;
