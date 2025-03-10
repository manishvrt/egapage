import React from "react";

const Proview = () => {
  return (
    <div className="">
      <div className="bg-[#ffffff] dark:bg-[#0c0c0c]   w-full h-screen  rounded-[40px]">
        <div className="grid grid-cols-1 h-screen items-center gap-6 lg:grid-cols-6">
          <div className="col-span-2">
            <img
              src="https://images.pexels.com/photos/8022977/pexels-photo-8022977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="impact"
              className="lg:w-full w-40 h-40 lg:h-screen object-cover"
            />
          </div>
          <div className="col-span-4 p-14">
            <span className="gsans font-semibold text-vrtcolor text-xl lg:text-2xl"></span>
            <h1 className="gsans dark:text-[#ffffff] font-semibold mt-6  text-[#0c0c0c] text-3xl lg:text-5xl">
              Program Overview
            </h1>
            <p className="small dark:text-[#989999] mt-8 text-md lg:text-xl text-gray-700">
              The EGATM Program is your gateway to scaling smarter, leading
              confidently, and achieving sustainable success. Designed for
              ambitious entrepreneurs, this transformational journey equips you
              with proven strategies, actionable tools, and expert insights to
              grow a thriving, scalable business.
            </p>
            <p className="small dark:text-[#989999] mt-8 text-md lg:text-xl text-gray-700">
              <p className="small dark:text-[#989999] mt-8 text-md lg:text-xl text-gray-700">
                Imagine overcoming growth challenges and transforming your
                business into a high-performing powerhouse that excels in any
                market.
              </p>
            </p>
            <p className="small dark:text-[#989999] mt-8 text-md lg:text-xl text-gray-700">
              Like Sarah, who increased her revenue by 150% with our tailored
              growth strategies. Or John, who redefined his leadership approach,
              building a more engaged and productive team.
            </p>
            <p className="small dark:text-[#989999] mt-8 text-md lg:text-xl text-gray-700">
              This is your opportunity to turn ambition into action and results.
            </p>
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
        </div>
      </div>
    </div>
  );
};

export default Proview;
