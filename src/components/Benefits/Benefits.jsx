import React from "react";
import BenefitCard from "./BenefitCard";
import { benefitData } from "./benefitData";
const Benefits = () => {
  return (
    <div>
      <div className="px-20  py-14  flex flex-col justify-center  ">
        <div className="flex items-center justify-between">
          <div className="flex  flex-col items-start">
            <h1 className="text-4xl tracking-wide small font-semibold text-[#0c0c0c] text-center">
              Benefits of EGA<sup>TM</sup>
            </h1>
            <p className="mt-8 tracking-tight text-3xl max-w-5xl small text-[#000000]/80 ">
              Research shows that having a coach or mentor can help you
              outperform peers, scale your business, increase job satisfaction,
              and reduce burnout.
            </p>
          </div>
          <div className="flex justify-end">
            <button className="mt-8 bg-[#ff0000] text-lg small text-white px-8 py-4 rounded-3xl">
              Apply Now
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 w-full  mt-20 gap-4">
          {benefitData.map((data, index) => (
            <BenefitCard
              key={index}
              id={data.id}
              benefitImage={data.benefitImage}
              benefitTitle={data.benefitTitle}
              benefitDescription={data.benefitDescription}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;