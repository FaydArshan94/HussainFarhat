import { motion } from "framer-motion";

const CoreValues = () => {
  const values = [
    {
      title: "BELIEF",
      text: "By consistently reaching fitness goals through our target-driven programs, your belief will become a deep and permanent conviction in your ability to perform.",
    },
    {
      title: "PURPOSE",
      text: "We are committed to providing the tools and support that you need to realise your purpose and live the change at home and in the studio.",
    },
    {
      title: "DISCIPLINE",
      text: "Discipline is the ingredient that turns your goals into accomplishments, and confidence into your ability to push harder.",
    },
    {
      title: "FOCUS",
      text: "We help eliminate distractions and dial into your goal, one step at a time. Focus is your power—own it.",
    },
    {
      title: "CONSISTENCY",
      text: "Your results don’t come from one perfect day, but from stringing many good ones together. We help you keep the rhythm.",
    },
  ];

  return (
    <div className="bg-black w-full px-4 md:px-10 py-10 space-y-8">
      {values.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.4,
            ease: "easeOut",
            delay: index * 0.1,
          }}
          viewport={{ once: true, amount: 0.3 }}
          className="border border-[#951517] text-white flex flex-col mdsm:flex-row mdsm:items-center justify-between px-4 md:px-8 py-6 gap-4 "
        >
          <div className="flex items-center px-6 justify-center gap-6 md:gap-10">
            <div className="flex gap-8">
              <span className="text-white text-2xl md:text-6xl">&#8594;</span>
              <h2 className="text-[#951517] text-5xl md:text-6xl font-['Superset'] tracking-wide">
                {item.title}
              </h2>
            </div>
          </div>
          <p className="text-sm font-['light'] md:text-lg md:pr-20 text-center md:text-left md:w-2/3 leading-relaxed">
            {item.text}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default CoreValues;
