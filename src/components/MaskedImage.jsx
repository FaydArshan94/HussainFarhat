import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import fht from "../assets/fht.jpg";

const hiddenMask = `repeating-linear-gradient(135deg, 
  rgba(0,0,0,0) 0px, 
  rgba(0,0,0,0) 30px, 
  rgba(0,0,0,1) 30px, 
  rgba(0,0,0,1) 60px)`;

const visibleMask = `repeating-linear-gradient(135deg, 
  rgba(0,0,0,0) 0px, 
  rgba(0,0,0,0) 0px, 
  rgba(0,0,0,1) 0px, 
  rgba(0,0,0,1) 60px)`;

const MaskedImage = ({ animateNow, onReveal }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [startAnimation, setStartAnimation] = useState(false);
  const [animationDone, setAnimationDone] = useState(false);

  useEffect(() => {
    if (animateNow && isLoaded) {
      setStartAnimation(true);
      const timeout = setTimeout(() => {
        setAnimationDone(true);
        if (onReveal) onReveal(); // tell Home.jsx to start heading animations
      }, 1000); // match this to your mask animation duration
      return () => clearTimeout(timeout);
    }
  }, [animateNow, isLoaded]);

  const maskStyle = animationDone
    ? {} // No mask anymore after animation completes
    : {
        WebkitMaskImage: startAnimation ? visibleMask : hiddenMask,
        maskImage: startAnimation ? visibleMask : hiddenMask,
      };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: startAnimation ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      style={maskStyle}
      className="w-[30vh] h-[30rem] 2sm:h-[40rem] 2sm:w-[38vh] md:w-[32rem] md:h-[70vh] lg:h-[62vh] lg:w-[30rem] xl:w-[28rem] xl:h-[85vh] 2xl:w-[30rem] 2xl:h-[93vh] z-10 shadow-lg"
    >
      <img
        src={fht}
        alt="fht"
        className="w-full h-full object-cover"
        onLoad={() => setIsLoaded(true)}
      />
    </motion.div>
  );
};

export default MaskedImage;
