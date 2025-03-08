import React from "react";

const BenefitCard = ({
    benefitImage,
    benefitTitle,
    benefitDescription,
    id
}) => {
  return (
    <div>
      <div className="w-full  flex justify-between items-center gap-4 rounded-[35px] p-8 border border-zinc-200 h-auto py-8 ">
        <div className="flex  items-center gap-14">
        <span className="w-20 h-20 flex justify-center items-center">
          <img
            src={benefitImage}
            className="w-12 object-cover h-12 "
            alt="Group 1"
          />
        </span>
        <div>
          <h1 className="text-3xl tracking-wide gsans font-bold text-[#0c0c0c] ">
            {benefitTitle}
          </h1>
          <p className="mt-4 text-xl small text-[#0c0c0c]/70 ">
            {benefitDescription}
          </p>
        </div>
        </div>
       <div>
       <h1 className="text-[#0c0c0c]/20 gsans text-3xl font-semibold">
       0{id}
       </h1>

       </div>
      </div>
    </div>
  );
};

export default BenefitCard;