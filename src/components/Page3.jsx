import React from "react";

const Page3 = () => {
  return (
    <div className="w-full relative min-h-screen bg-black">
      <div className="w-full h-screen ">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          src="https://maltapersonaltrainer.com/wp-content/uploads/2023/07/what-we-do.mp4"
        ></video>

        <div className="w-full h-full bg-black/90 absolute left-0 top-0"></div>

        <div className="w-full h-full absolute top-0 left-0 flex flex-col items-start justify-center px-5  sm:flex-row sm:justify-start sm:px-20 sm:items-end sm:gap-60">
          <h1 className="text-[12rem]  font-['Superset'] uppercase leading-none  text-white  sm:text-[15rem] sm:h-full sm:flex sm:items-center sm:w-1/4">
            What I do
          </h1>

          <div className="sm:w-1/3 flex flex-col items-start  sm:h-full sm:flex sm:items-start sm:justify-end sm:py-20 sm:flex-col">
            <p className="text-xl text-white mt-10 leading-[3vh] font-['light'] sm:text-2xl sm:leading-[5vh]">
              Custom training programs, nutrition coaching, fitness assessments,
              goal setting, progress tracking, motivation, and accountability.
            </p>

            <div className="flex flex-col sm:w-fit items-center justify-center mt-8">
              <h1 className="text-xl py-[2px] font-sans-serif font-['light'] text-white tracking-wide text-center">
                START NOW
              </h1>
              <div className="w-full h-[3px] bg-zinc-50 "></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page3;
