import React from "react";

const Page3 = () => {
  return (
    <div className="w-full relative h-screen px-[1rem] bg-black">
      <div className="w-full h-screen  ">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          src="https://maltapersonaltrainer.com/wp-content/uploads/2023/07/what-we-do.mp4"
        ></video>

        <div className="w-full h-full bg-black/90 absolute left-0 top-0"></div>

        <div className="w-full px-[2rem]  absolute top-1/2 -translate-y-1/2 left-0 md:top-1/2 md:-translate-y-1/2 flex flex-col md:flex-row md:items-end md:justify-evenly lg:justify-between xl:justify-center md:gap-[3rem] 2xl:gap-[7rem] justify-center    ">
          <div className="">
            <h1 className="text-[11rem] w-full 2sm:text-[12rem] md:text-[15rem] xl:text-[17rem] 2xl:text-[18rem] xl:mr-[10rem] font-['Superset'] uppercase leading-none  text-white  ">
              What
            </h1>
            <h1 className="text-[11rem]  2sm:text-[12rem] md:text-[15rem] xl:text-[17rem] 2xl:text-[18rem]  font-['Superset'] uppercase leading-none  text-white  ">
              WE do
            </h1>
          </div>

          <div className=" flex xs:w-[350px]  lg:w-[40%] 2xl:w-[500px] flex-col items-start  ">
            <p className="text-xl md:text-2xl xl:text-[1.8rem] 2xl:text-[1.9rem] xl:leading-[4vh] 2xl:leading-[4.5vh] text-white mt-10 leading-[3vh] md:leading-[4vh] font-['light'] ">
              Custom training programs, nutrition coaching, fitness assessments,
              goal setting, progress tracking, motivation, and accountability.
            </p>

            <div className="flex flex-col sm:w-fit  items-center justify-center mt-8">
              <h1 className="text-xl py-[2px] border-b-4 md:text-2xl border-white font-sans-serif font-['light'] text-white tracking-wide text-center">
                START NOW
              </h1>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page3;
