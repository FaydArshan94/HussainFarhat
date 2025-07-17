import React from "react";

const Page7 = () => {
  return (
    <div className="relative w-full min-h-[55vh] flex items-center justify-center bg-black/30  text-white px-4 py-10 overflow-hidden sm:h-[70vh]">
      {/* Static Marquee Background */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2  -translate-y-1/2 w-full h-full z-0 flex flex-col gap-4 opacity-[0.05] pointer-events-none">
        {Array.from({ length: 3 }).map((_, i) => (
          <h1
            key={i}
            className="whitespace-nowrap text-[10rem] sm:leading-[25vh] font-['Superset'] text-black  tracking-normal sm:text-[12rem]"
          >
            DON'T PUT IT OFFDON'T PUT IT OFFDON'T PUT IT OFFDON'T PUT IT OFF
          </h1>
        ))}
      </div>

      {/* Main Foreground Content */}
      <div className=" z-10 max-w-2xl text-center w-full  absolute left-1/2 top-1/2 -translate-x-1/2  -translate-y-1/2 sm:max-w-4xl">
        <h1 className="text-[10rem] font-['Superset'] leading-none sm:text-[12rem] sm:w-full">
          DON'T PUT  IT OFF
        </h1>
        <h1 className="mt-6 w-fit mx-auto text-lg font-['light'] sm:text-xl tracking-wider font-light border-b-4 border-white hover:bg-white hover:text-[#003EFF] transition duration-300 cursor-pointer">
          CHOOSE YOUR PACK NOW
        </h1>
      </div>
    </div>
  );
};

export default Page7;
