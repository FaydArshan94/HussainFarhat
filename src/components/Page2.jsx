import React from "react";

const Page2 = () => {
  return (
    <div className="w-full text-white min-h-screen  py-20 mdsm:px-[1.8rem] relative flex flex-col items-center justify-center px-4">
      <div className="w-[80vw] mdsm:w-[70vw] h-1/2  2sm:h-[60%] 2sm:mt-20 mdsm:right-[1.8rem] absolute top-0 right-0 xl:right-24 z-10 ">
        <img
          src="https://maltapersonaltrainer.com/wp-content/uploads/2023/07/MPT-Homepage-Benefits-of-PT.jpg"
          alt="Hero Image"
          className="object-cover w-full h-full"
        />
      </div>

      <div className="flex flex-col mdsm:flex-row mdsm:justify-between    z-10 mt-40 2sm:mt-60 sm:mt-[30rem] items-start w-full ">
        <div className="h1s relative mdsm:mt-[6rem] mdsm:pl-5 xl:pl-28 2xl:pl-40 mdsm:w-2/3 md:w-[70%] mdsm:text-left  font-['Superset'] flex flex-col items-start rounded-lg w-full">
          <h1 className="text-7xl   tracking-wide 2sm:text-8xl  md:text-[7.2rem]  lg:text-[7rem] xl:text-[7.5rem] 2xl:text-[8rem] text-center">
            EXPERIENCE
          </h1>
          <h1 className="text-7xl   tracking-wide 2sm:text-8xl  md:text-[7.2rem]  lg:text-[7rem] xl:text-[7.5rem] 2xl:text-[8rem] text-center">
            THE BENEFITS
          </h1>
          <h1 className="text-7xl   tracking-wide 2sm:text-8xl  md:text-[7.2rem]  lg:text-[7rem] xl:text-[7.5rem] 2xl:text-[8rem] text-center">
            OF PERSONAL
          </h1>
          <h1 className="text-7xl   tracking-wide 2sm:text-8xl  md:text-[7.2rem]  lg:text-[7rem] xl:text-[7.5rem] 2xl:text-[8rem] text-center">
            TRAINING
          </h1>
        </div>

        <div className=" mt-8  rounded-lg mdsm:mt-80 md:mt-96 font-['FrankitonSansL'] font-thin w-full 2sm:w-[70%] mdsm:w-2/3 md:w-[90%] lg:w-full flex flex-col items-start mdsm:items-end xl:items-center">
          <p className="text-lg sm:text-lg md:text-2xl md:w-[450px] lg:text-xl lg:w-[500px] xl:w-[75%] xl:text-2xl font-['FrankitonSansL']  mb-4 text-left">
            We build personalized plans for your fat loss, muscle gain, or
            overall health. No fluff — just real, effective training and
            nutrition that fits your life.
          </p>

          <p className="text-lg sm:text-lg md:text-2xl md:w-[450px] lg:text-xl lg:w-[500px] xl:w-[75%] xl:text-2xl font-['FrankitonSansL']  mb-4 text-left">
            We build personalized plans for your fat loss, muscle gain, or
            overall health. No fluff — just real, effective training and
            nutrition that fits your life.
          </p>

          <p className="text-lg sm:text-lg md:text-2xl md:w-[450px] lg:text-xl lg:w-[500px] xl:w-[75%] xl:text-2xl font-['FrankitonSansL']  mb-4 text-left">
            You bring consistency. We bring the strategy. Together, we get
            results.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page2;
