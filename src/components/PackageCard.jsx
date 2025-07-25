import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react"; // Lucide icons (or use SVG directly)
import large from "../assets/large.png";
const PackageCard = ({ title, video, details }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const transition = {
    duration: 0.8,
    delay: 0.2,
    ease: [0, 0.71, 0.2, 1.01],
  };

  return (
    <div
      className=" relative w-full 
  h-[25rem] sm:h-[28rem] md:h-[38rem] lg:h-[36rem] xl:h-[35rem] 2xl:h-[44rem]
  rounded-xl overflow-hidden shadow-lg transition-all select-none duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src={large}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlay Layer */}
      <div
        className={`absolute inset-0 z-10 flex flex-col justify-end items-center px-6 pb-10 pt-6 transition-all duration-300 ${
          isHovered ? "bg-black/20" : "bg-black/40"
        }`}
      >
        <h3 className="text-[2rem] sm:text-4xl  xl:text-[3rem] uppercase font-['Superset'] text-center mb-10  text-white">
          {title}
        </h3>
      </div>

      {/* Plus/Minus Button (Bottom Center) */}
      <button
        onClick={() => setShowDetails((prev) => !prev)}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 text-white rounded-full hover:text-red-400 transition-all"
      >
        <motion.div
          animate={{ rotate: showDetails ? 90 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <Plus className="w-10 h-10" />
        </motion.div>
      </button>

      {/* Details Modal */}
      <AnimatePresence>
        {showDetails && (
          <motion.div
            className="absolute inset-0 bg-black bg-opacity-95 z-30 p-6 overflow-y-auto flex flex-col justify-center items-center text-white"
            initial={{ opacity: 0, y: 100, scaleY: 0.8 }}
            animate={{ opacity: 1, y: 0, scaleY: 1 }}
            exit={{ opacity: 0, y: 100, scaleY: 0.8 }}
            transition={transition}
          >
            <div className="max-w-3xl w-full">
              <motion.h3
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-2xl sm:text-3xl font-bold mb-6 text-center text-white"
              >
                {title}
              </motion.h3>

              <ul className="space-y-6">
                {details.map((point, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.15, duration: 0.5 }}
                    className="flex items-start gap-4 bg-white/5 rounded-xl p-2 hover:bg-white/10 transition-all"
                  >
                    <span className="text-green-400 mt-1"></span>
                    <p className="text-gray-300 leading-relaxed text-xs sm:text-base">
                      {point}
                    </p>
                  </motion.li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => setShowDetails((prev) => !prev)}
              className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white rounded-full hover:text-red-400 transition-all"
            >
              <Minus className="w-10 h-10" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PackageCard;
