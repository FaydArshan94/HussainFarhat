import React from "react";
import { motion } from "framer-motion";

const Page6 = () => {
  const wordAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.04, duration: 0.4 },
    }),
  };

  const text =
    "Exactly that. We don’t put you through programs designed for someone else. This is all about you. Sign up for 1-on-1 sessions or a small group of your choice (max 4).";
  const words = text.split(" ");

  return (
    <div className="w-full min-h-screen bg-black text-white font-['Superset'] flex flex-col mdsm:flex-row mdsm:gap-20 md:gap-2 lg:gap-[2rem] xl:gap-[5rem] 3xl:gap-[8rem] items-start justify-start lg:justify-between 3xl:justify-center px-4 md:px-10 py-10 3xl:px-60 3xl:py-20">
      {/* Text Section */}
      <div className="w-full max-w-[1400px] 3xl:max-w-[1600px] sm:h-full mb-12 sm:mt-20 2xl:w-[70%]">
        <h1 className="text-[4rem] sm:text-[8rem] md:text-[9rem] lg:text-[8rem] xl:text-[9rem] leading-none uppercase">
          <span className="block">The Personal</span>
          <span className="block">Trainer</span>
          <span className="block text-[#890900]">You Need</span>
        </h1>

        {/* Animated Paragraph */}
        <motion.p
          className="text-[1rem] font-['light'] xs:w-[60vw] mdsm:w-[50vw] mdsm:text-[1rem] md:w-full lg:w-[85%] xl:text-[1.4rem] 3xl:text-[1.5rem] 3xl:leading-[2.5rem] leading-snug font-light text-white mt-6 flex flex-wrap"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {words.map((word, i) => (
            <motion.span
              key={i}
              className="mr-2 inline-block"
              custom={i}
              variants={wordAnimation}
            >
              {word}
            </motion.span>
          ))}
        </motion.p>

        {/* Animated Button */}
        <motion.button
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: words.length * 0.04 + 0.2, duration: 0.4 }}
          viewport={{ once: true }}
          className="mt-6 font-['light'] text-[1.5rem] xs:text-[1rem] mdsm:text-[1.3rem] 3xl:text-[2rem] tracking-tight font-light border-b-4 border-[#890900] text-white hover:text-[#0058FF] hover:border-white transition-all duration-200 uppercase"
        >
          Start Your Journey
        </motion.button>
      </div>

      {/* Pricing Section */}
      <div className="w-full h-full flex flex-col items-center sm:h-1/2 4xl:w-1/2 5xl:w-1/2 4xl:h-screen 5xl:h-screen  ">
        <div className="flex flex-col items-start justify-center  w-full xl:w-[50vw] 2sm:w-[70%] mdsm:w-full gap-4 3xl:gap-6">
          {/* Toggle */}

          <div className="w-full flex justify-center">
            <div className="flex items-center font-['light'] gap-4 mb-2 px-4 py-2 rounded-md  3xl:text-[1.2rem]">
              <span className="text-sm 2sm:text-[1rem] mdsm:text-[1rem] lg:text-[1.2rem] xl:text-[1.5rem] 2xl:text-[1.8rem] text-white">
                1 - to - 1
              </span>
              <div className="relative inline-block w-10 h-5 rounded-full bg-[#0A0A0B]">
                <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full transition-transform duration-300 translate-x-[20px]" />
              </div>
              <span className="text-sm 2sm:text-[1rem] mdsm:text-[1rem] lg:text-[1.2rem] xl:text-[1.5rem] 2xl:text-[1.8rem] text-zinc-200">
                Small private group
              </span>
            </div>
          </div>

          {/* Cards */}
          <div className="flex flex-col gap-4 w-full  md:w-[45vw]  xl:h-[70vh]  xl:w-full 3xl:w-1/2 md:flex-row md:flex-wrap md:justify-center 3xl:justify-center">
            {[
              { label: "1 SESSIONS", price: "40€" },
              { label: "5 SESSIONS", price: "190€" },
              { label: "10 SESSIONS", price: "350€" },
              { label: "20 SESSIONS", price: "600€" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="w-full md:w-[45%] 4xl:w-1/3 5xl:w-1/3 px-2 mb-4 flex justify-center "
              >
                <div
                  className="w-full border border-[#292929] p-8 py-16 text-center font-['light']
                    md:border-[#890900] md:p-0 md:py-0 md:px-0 
                    md:h-[200px] lg:h-[200px] xl:h-[250px] 3xl:h-[350px] 
                    flex flex-col items-center justify-center"
                >
                  <h2 className="text-3xl md:text-[1.1rem] xl:text-[1.5rem] 3xl:text-[1.6rem] tracking-widest text-white mb-2 md:mb-0">
                    {item.label}
                  </h2>
                  <p className="text-5xl md:text-[40px] 3xl:text-[60px] mt-4 font-black text-[#890900]">
                    {item.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page6;
