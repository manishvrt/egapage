import React from "react";
import WhyGen from "./Why/WhyGen";
import { businessInsightData } from "./businessInsightData";
const Progain = () => {
  return (
    <div className="">
      <div className="bg-[#ffffff] dark:bg-[#0c0c0c]   w-full h-screen  rounded-[40px]">
        <div className="grid grid-cols-1 h-screen items-center gap-6 lg:grid-cols-6">
          <div className="col-span-4 p-14">
            <span className="gsans font-semibold text-vrtcolor text-xl lg:text-2xl"></span>
            <h1 className="gsans dark:text-[#ffffff] font-semibold mt-6  text-[#0c0c0c] text-3xl lg:text-5xl">
            When you join, you'll gain:
            </h1>
            
            
            <div className="flex flex-col gap-4 items-start">
            {businessInsightData.map((serve, index) => (
              <div key={index} className="flex items-center gap-2">
                <WhyGen serveText={serve.serveText} />
              </div>
            ))}
          </div>
            <p className="small dark:text-[#989999] font-semibold mt-14 text-md lg:text-3xl text-[#0c0c0c]">
              Ready to take the leap?
            </p>
            <button className="text-lg gap-3 w-fit mt-8 bg-[#ff0000] h-14 small flex justify-center items-center rounded-3xl px-6 font-medium text-white">
              Join the Transformation
              <img
                src="https://www.vrt9.net/research/survey.svg"
                alt=""
                className="w-5 h-5 object-cover"
              />
            </button>
          </div>
          <div className="col-span-2">
            <img
              src="https://images.pexels.com/photos/8022977/pexels-photo-8022977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="impact"
              className="lg:w-full w-40 h-40 lg:h-screen object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progain;
