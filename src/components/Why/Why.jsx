import React from "react";
import WhyGen from "./WhyGen";
import { whyData } from "./whyData";
const Why = () => {
  return (
    <div className="">
      <div className="bg-[#ffffff] dark:bg-[#0c0c0c]   w-full h-screen ">
        <div className="grid items-center lg:gap-12 grid-cols-1 lg:grid-cols-5">
          <div className="lg:col-span-2 flex justify-center">
            <img
              src="https://images.pexels.com/photos/162539/architecture-building-amsterdam-blue-sky-162539.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="impact"
              className="  w-full h-screen  object-cover"
            />
          </div>
          <div className="lg:col-span-3 mt-10 lg:mt-0">
            <h1 className="small gap-2 tracking-tight  max-w-2xl items-center flex text-[17px] lg:text-[20px] text-[#0c0c0c] dark:text-[#ffffff]">
              <span className="dark:bg-[#ffffff] bg-[#0c0c0c] w-2 h-2 rounded-full inline-block"></span>
              serve
            </h1>
            <h1 className="gsans dark:text-[#ffffff] font-semibold mt-6  text-[#0c0c0c] text-3xl lg:text-5xl">
              Why Choose EGA™?
            </h1>
            <p className="small pr-10 dark:text-[#989999] mt-4 text-md lg:text-lg text-gray-700">
              The EGA™ Program is not just another business workshop - it’s a
              proven growth system designed to transform the way you scale and
              lead your business.
            </p>
            <p className="small pr-10 dark:text-[#989999] mt-4 text-md lg:text-lg text-gray-700">
              Whether you’re overwhelmed by daily operations or seeking
              strategies to achieve sustainable growth, EGA™ provides the
              actionable tools, expert insights, and personalized guidance you
              need to elevate your business to the next level.
            </p>
            <div className="mt-10  flex flex-wrap gap-6 ">
              {whyData.map((serve, index) => (
                <WhyGen serveText={serve.serveText} key={index} />
              ))}
            </div>
            <button className="text-lg gap-3 w-fit mt-14 bg-[#ff0000] h-14 small flex justify-center items-center rounded-3xl px-6 font-medium text-white">
             
              Secure Your Spot
              <img
                src="https://www.vrt9.net/research/survey.svg"
                alt=""
                className="w-5 h-5 object-cover"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
