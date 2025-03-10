import React from "react";
import WhyGen from "../Why/WhyGen";
import { personalInsightData } from "./personalInsightData";
import { businessInsightData } from "./businessInsightData";
import HomeCta from "../Reusables/HomeCta";

const Insights = () => {
  return (
    <div>
        <div className="p-16 bg-blue-50  ">
      <div className="flex flex-col justify-center items-center gap-4 mb-6">
        <span className="rounded-3xl text-lg flex  items-center gap-3 py-2 border-zinc-200 small px-7">
          <img
            src="https://www.svgrepo.com/show/488878/company.svg"
            alt="clients"
            className="w-6 h-6 inline-block"
          />
          focus areas
        </span>
        <h1 className="text-5xl gsans font-semibold">
          EGATM Program Assessments and Insights
        </h1>
      </div>
      <p className="mt-6 text-zinc-700 text-xl small text-center">
        The EGA™ Mentorship Program is for you if...
      </p>
      <div className="grid mt-20 grid-cols-2 gap-8 justify-start items-center">
        <div className="w-full p-10 h-[50svh] bg-[#ffffff] rounded-[40px] flex flex-col items-start justify-between">
          <h1 className="text-3xl gsans font-bold  mb-4">
            Business and Stages of Growth
            <br /> Assessments
          </h1>
          <div className="flex flex-col gap-4 items-start">
            {businessInsightData.map((serve, index) => (
              <div key={index} className="flex items-center gap-2">
                <WhyGen serveText={serve.serveText} />
              </div>
            ))}
          </div>
          {/* <div className="">
            <button className="text-lg  gap-3 w-fit mt-8 border border-zinc-300 h-14 small flex justify-center items-center rounded-[30px] px-6 font-medium text-black">
              Learn More
              <img
                src="https://www.svgrepo.com/show/533685/cursor-alt.svg"
                alt=""
                className="w-5 h-5 object-cover"
              />
            </button>
          </div> */}
        </div>
        <div className="w-full p-10 h-[50svh] bg-[#ffffff] rounded-[40px] flex flex-col items-start justify-between">
          <h1 className="text-3xl gsans font-bold mb-4">
            Personal / Leadership Development Assessments
          </h1>
          <div className="flex flex-col gap-4 items-start">
            {personalInsightData.map((serve, index) => (
              <div key={index} className="flex items-center ">
                <WhyGen serveText={serve.serveText} />
              </div>
            ))}
          </div>
          {/* <div className="">
            <button className="text-lg  gap-3 w-fit mt-8 border border-zinc-300 h-14 small flex justify-center items-center rounded-[30px] px-6 font-medium text-black">
              Learn More
              <img
                src="https://www.svgrepo.com/show/533685/cursor-alt.svg"
                alt=""
                className="w-5 h-5 object-cover"
              />
            </button>
          </div> */}
        </div>
      </div>
      
      
    </div>
    <HomeCta/>
    </div>
    
    
  );
};

export default Insights;
