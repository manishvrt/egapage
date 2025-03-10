import React from "react";

const WhoNot = () => {
  return (
    <div className="flex justify-center  items-start w-full">
      {/* Left Section */}
      <div className="flex flex-col justify-center items-center bg-[#48e5c2]/20  py-20 w-1/2 h-auto">
        <span className="rounded-3xl text-lg flex justify-center items-center gap-3 py-2 mb-6 border-zinc-200 small px-7">
          <img
            src="https://www.svgrepo.com/show/488878/company.svg"
            alt="clients"
            className="w-6 h-6 inline-block"
          />
          Eligibility
        </span>
        <h1 className="text-5xl gsans font-semibold text-center">Who It's For</h1>
        <p className="mt-6 text-zinc-700 text-xl small text-center">
          The EGA™ Mentorship Program is for you if...
        </p>
        <div className="grid grid-cols-1 p-10 w-full max-w-3xl gap-6 mt-10">
          {[
            {
              text: "You Aspire for Growth: You’re a driven entrepreneur who knows your business has untapped potential.",
            },
            {
              text: "You’re Committed to Excellence: You’re ready to adopt bold strategies and a growth-driven mindset.",
            },
            {
              text: "You Lead with Vision: You aim to build a resilient business that thrives long-term, not just this quarter.",
            },
            {
              text: "You Value Strategic Expertise: You’re seeking expert insights, actionable strategies, and practical feedback to accelerate growth.",
            },
          ].map((item, index) => (
            <div key={index} className="w-full flex gap-6 items-center p-6 bg-white rounded-3xl h-28">
              <img src="/gpoints.svg" alt="" className="w-10 h-10 object-cover" />
              <h1 className="text-xl small text-[#0c0c0c]">{item.text}</h1>
            </div>
          ))}
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col justify-center items-center bg-[#fff2f2]  py-20 w-1/2 h-auto">
        <span className="rounded-3xl text-lg flex justify-center items-center gap-3 py-2 mb-6 border-zinc-200 small px-7">
          <img
            src="https://www.svgrepo.com/show/488878/company.svg"
            alt="clients"
            className="w-6 h-6 inline-block"
          />
          Eligibility
        </span>
        <h1 className="text-5xl gsans font-semibold text-center">Who It's Not For</h1>
        <p className="mt-6 text-zinc-700 text-xl small text-center">
          The EGA™ Mentorship Program is NOT for you if...
        </p>
        <div className="grid grid-cols-1 p-10 w-full max-w-3xl gap-6 mt-10">
          {[
            {
              text: "Your business is in its infancy (no proven results or clients yet).",
            },
            {
              text: "Your sole focus is profit over delivering value to customers.",
            },
            {
              text: "You’re unwilling to embrace new ideas and prefer to go it alone.",
            },
            {
              text: "You expect results without committing time, effort, and resources.",
            },
            // {
            //   text: "You’re not prepared to invest in strategies and growth support.",
            // },
          ].map((item, index) => (
            <div key={index} className="w-full flex gap-6 items-center p-6 bg-white rounded-3xl h-28">
              <img src="/rpoints.svg" alt="" className="w-10 h-10 object-cover" />
              <h1 className="text-xl small text-[#0c0c0c]">{item.text}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhoNot;
