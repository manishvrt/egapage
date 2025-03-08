import React from "react";
const WhoFor = () => {
  return (
    <div className=" flex justify-center sticky top-0 items-center">
      <div className=" flex flex-col  justify-center overflow-hidden items-center bg-[#F3F4E9]  w-full h-screen">
        <span className="rounded-3xl  text-lg flex justify-center items-center gap-3 py-2 mb-6 border-zinc-200 small  px-7 ">
          <img
            src="https://www.svgrepo.com/show/488878/company.svg"
            alt="clients"
            className="w-6 h-6 inline-block"
          />
          eligibility
        </span>
        <h1 className="text-6xl gsans font-semibold text-center ">
          Who It's For
        </h1>
        <p className="mt-6 text-zinc-700 text-xl small">
          The EGA™ Mentorship Program is for you if...
        </p>
        <div className="grid grid-cols-2 max-w-7xl mx-auto w-full  gap-6 mt-20">
          <div className="w-full gap-6 flex justify-start rounded-3xl p-10 items-center h-28 bg-[#ffffff]">
            <img
              src="/gpoints.svg"
              alt=""
              className="w-10  h-10 object-cover"
            />
            <h1 className="text-xl small text-[#0c0c0c]">
              <strong>You Aspire for Growth</strong>: You’re a driven
              entrepreneur who knows your business has untapped potential.
            </h1>
          </div>
          <div className="w-full gap-6 flex justify-start rounded-3xl p-10 items-center h-28 bg-[#ffffff]">
            <img
              src="/gpoints.svg"
              alt=""
              className="w-10  h-10 object-cover"
            />
            <h1 className="text-xl small text-[#0c0c0c]">
              <strong>You’re Committed to Excellence</strong>: You’re ready to
              adopt bold strategies and a growth-driven mindset.
            </h1>
          </div>
          <div className="w-full gap-6 flex justify-start rounded-3xl p-10 items-center h-28 bg-[#ffffff]">
            <img
              src="/gpoints.svg"
              alt=""
              className="w-10  h-10 object-cover"
            />
            <h1 className="text-xl small text-[#0c0c0c]">
              <strong>You Lead with Vision</strong>: You aim to build a
              resilient business that thrives long-term, not just this quarter.
            </h1>
          </div>
          <div className="w-full gap-6 flex justify-start rounded-3xl p-10 items-center h-28 bg-[#ffffff]">
            <img
              src="/gpoints.svg"
              alt=""
              className="w-10  h-10 object-cover"
            />
            <h1 className="text-xl small text-[#0c0c0c]">
              <strong>You Value Strategic Expertise</strong>: You’re seeking
              expert insights, actionable strategies, and practical feedback to
              accelerate growth.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoFor;
