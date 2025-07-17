import React from "react";

const Page2 = () => {
  return (
    <div className="w-full min-h-screen relative py-20 bg-black flex flex-col items-end justify-end sm:px-28">
      <div className="w-[70vw] h-[70vh] sm:h-[100vh] sm:w-[65vw] bg-pink-400">
        <img
          className="w-full h-full object-cover sm:object-top"
          src="https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/2f8298a8-f770-4cb8-a224-a2613b158a83/width=450/7263809.jpeg"
          alt=""
        />
      </div>

      <div className="absolute left-5 top-1/3 sm:bottom-20 translate-y-1/4 sm:left-40 ">
        <h1 className="text-8xl text-white font-['Superset'] sm:text-[8rem] sm:tracking-wide">EXPERIENCE</h1>
        <h1 className="text-8xl text-white font-['Superset'] sm:text-[8rem] sm:tracking-wide">THE BENEFITS</h1>
        <h1 className="text-8xl text-white font-['Superset'] sm:text-[8rem] sm:tracking-wide">OF PERSONAL</h1>
        <h1 className="text-8xl text-white font-['Superset'] sm:text-[8rem] sm:tracking-wide">TRANING</h1>
      </div>

      <div className="px-5 mt-60 text-white font-['light'] flex flex-col gap-5  sm:w-1/2 sm:text-xl sm:mt-10">
        <p>
          We build personalized plans for your fat loss, muscle gain, or overall
          health. No fluff — just real, effective training and nutrition that
          fits your life.
        </p>

        <p>
          We build personalized plans for your fat loss, muscle gain, or overall
          health. No fluff — just real, effective training and nutrition that
          fits your life.
        </p>

        <p>
          You bring consistency. We bring the strategy. Together, we get
          results.
        </p>
      </div>
    </div>
  );
};

export default Page2;
