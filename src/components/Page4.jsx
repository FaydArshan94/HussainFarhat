import React from "react";
import { Dumbbell, Users, ListChecks } from "lucide-react"; // Icons from lucide-react

const values = [
  {
    icon: <Dumbbell size={40} className="text-blue-500 mb-4" />,
    title: "STRONG",
    description:
      "We will help you build physical and mental strength through our customised training programs that cater to each member’s unique needs and abilities.",
  },
  {
    icon: <Users size={40} className="text-blue-500 mb-4" />,
    title: "FRIENDLY",
    description:
      "We are welcoming, supportive, and caring so that everyone feels comfortable to perform at their best. But we’re not soft, so expect to be motivated and pushed towards your goals.",
  },
  {
    icon: <ListChecks size={40} className="text-blue-500 mb-4" />,
    title: "ACCOUNTABLE",
    description:
      "We hold ourselves accountable for helping you achieve your best results. We are always working towards your goals, playing an active role in your fitness journey.",
  },
];

const Page4 = () => {
  return (
    <section className="bg-black text-white py-10 pt-28 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center ">
        {values.map((item, index) => (
          <div key={index} className="flex flex-col sm:gap-6 items-center">
            {item.icon}
            <h3 className="text-4xl  uppercase tracking-wide mb-4 font-['Superset'] sm:text-6xl">{item.title}</h3>
            <p className="text-gray-300 text-sm leading-relaxed text-center max-w-[15rem] sm:text-xl font-['light'] sm:max-w-xs sm:leading-snug">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Page4;
