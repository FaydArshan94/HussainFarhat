import React from "react";

const Page6 = () => {
  return (
    <div className="w-full min-h-screen bg-black text-white font-['Superset'] flex flex-col items-center justify-start px-4 py-16 sm:flex-row sm:justify-between sm:px-16 sm:items-start  ">
      {/* Text Section */}
      <div className="max-w-md mb-12 sm:mt-20">
        <h1 className="text-[5rem] leading-none uppercase sm:text-[8.5rem]">
          <span className="block">The Personal</span>
          <span className="block">Trainer</span>
          <span className="block text-[#890900]">You Need</span>
        </h1>
        <p className="text-[1rem] font-['light'] leading-normal font-light text-white mt-6 sm:text-[1.3rem]">
          Exactly that. We don’t put you through programs designed for someone
          else. This is all about you. Sign up for 1-on-1 sessions or a small
          group of your choice (max 4).
        </p>
        <button className="mt-6 font-['light'] text-[1.5rem] tracking-tight font-light border-b-4 border-[#890900] text-white hover:text-[#0058FF] hover:border-white transition-all duration-200 uppercase">
          Start Your Journey
        </button>
      </div>

      {/* Pricing Section */}
      <div className="flex flex-col items-start w-full max-w-md gap-4 sm:gap-2  sm:max-w-xl">
        {/* Toggle */}
        <div className="flex items-center font-['light']  gap-4 mb-4">
          <span className="text-sm sm:text-xl  ">1 - to - 1</span>
          <div className="relative inline-block w-10 h-5 rounded-full bg-[#0A0A0B]">
            <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full transition-transform duration-300 translate-x-[20px]" />
          </div>
          <span className="text-sm sm:text-xl text-zinc-200">Small private group</span>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-4 w-full sm:grid grid-cols-2 sm:gap-12 ">
          {[
            { label: "1 SESSIONS", price: "40€" },
            { label: "5 SESSIONS", price: "190€" },
            { label: "10 SESSIONS", price: "350€" },
            { label: "20 SESSIONS", price: "600€" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="w-full border border-[#292929] p-8 py-16 text-center "
            >
              <h2 className="text-3xl font-['light'] mb-2">{item.label}</h2>
              <p className="text-5xl text-[#890900] font-['light'] font-bold">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page6;
