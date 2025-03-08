import React, { useRef } from "react";

const BenefitCard = ({ benefitImage, benefitTitle, benefitDescription }) => {
  return (
    <>
      <div className=" group">
        <div className="flex bg-[#ffffff]/50 dark:bg-[#101010] flex-col justify-between rounded-[25px] p-8   h-auto  overflow-hidden transition ease-out active:opacity-75">
          <div className="flex gap-8 items-center">
            <img
              src={benefitImage}
              alt="service"
              className="lg:w-12 lg:h-14 w-16 h-16  object-cover"
            />
            <div className="flex flex-col">
            <h1 className="text-[#0c0c0c] dark:text-[#ffffff] text-3xl lg:text-2xl font-semibold small ">
              {benefitTitle}
            </h1>
            <p className="small text-[16px] text-[#4d4d4d] mt-4 lg:text-xl dark:text-[#B1B1B1]">
              {benefitDescription}
            </p>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default BenefitCard;
