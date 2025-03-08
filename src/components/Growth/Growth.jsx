import React from "react";
import UnlockGen from "./UnlockGen";
import { moduleOneData } from "./moduleOneData";
import { moduleTwoData } from "./moduleTwoData";

const Growth = () => {
  return (
    <div>
      <div className="  bg-[#f1f1f1]/80 py-20 mb-20 mx-auto">
        <div className="flex px-20  flex-col items-center">
          <span className="rounded-3xl  text-lg flex justify-center items-center gap-3 py-2 mb-6 border-zinc-200 small  px-7 ">
          <img
            src="/eligible.png"
            alt="clients"
            className="w-6 h-6 inline-block"
          />
            eligibility
        </span>
          <h1 className="text-5xl max-w-5xl mx-auto gsans font-semibold text-center ">
            Partner with us to unlock explosive growth and elevate your business
            to new heights!
          </h1>
          <p className="mt-6 text-zinc-800 text-center max-w-7xl text-lg small">
            At EGA™, we prioritize quality over quantity. This isn't a
            mass-market program - I (Rajesh) and my expert team work closely
            with you, offering personalized strategies to grow your business. We
            only take on a select few clients each year, ensuring you receive
            the focused attention and support you deserve.
          </p>
        </div>

        <div className="grid   mt-20 lg:grid-cols-2 gap-6">
          
          <div className="bg-[#ffffff]/50 p-5 lg:p-8 flex flex-col  gap-4 w-full h-auto rounded-r-[35px]">
            <div>
              <span className="flex justify-center  bg-[#ff0000] small text-[#ffffff]  items-center rounded-full text-lg w-fit px-6 p-2 ">
                Who It's Not for
              </span>
              <h1 className=" mt-5 lg:mt-4 text-2xl lg:text-2xl gsans font-semibold">
                The EGA™ Mentorship Program is not for you if...
              </h1>
            </div>
            <div className="space-y-8 mt-0 lg:mt-6 lg:space-y-2 ">
              {moduleTwoData.map((data, index) => (
                <UnlockGen key={index} {...data} />
              ))}
            </div>
          </div>
          <div className="bg-[#ffffff]/50 p-5 lg:p-8 flex flex-col  gap-4 w-full h-auto rounded-l-[35px]">
            <div>
              <span className="flex justify-center  bg-[#00c49a] small text-[#ffffff]  items-center rounded-full text-lg w-fit px-6 p-2 ">
                Who it's for
              </span>
              <h1 className=" mt-5 lg:mt-4 text-2xl lg:text-2xl gsans font-semibold">
                The EGA™ Mentorship Program is for you if...
              </h1>
            </div>
            <div className="space-y-4 mt-0 lg:mt-6 lg:space-y-2 ">
              {moduleOneData.map((data, index) => (
                <UnlockGen key={index} {...data} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Growth;
