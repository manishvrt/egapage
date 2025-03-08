import React from "react";

const Clients = () => {
  return (
    <div className="  flex justify-center 0 items-center">
      <div className=" py-32 flex flex-col justify-between overflow-hidden items-center h-screen bg-[#ff0000]/5 w-full ">
        <div>
          <span className="rounded-3xl  text-lg flex justify-center items-center gap-3 py-2 mb-6 border-zinc-200 small  px-7 ">
            <img
              src="https://www.svgrepo.com/show/487834/statistic-board.svg"
              alt="clients"
              className="w-6 h-6 inline-block"
            />
            statistics
          </span>
          <h1 className="text-6xl gsans font-semibold text-center ">
            Numbers that speak for themselves
          </h1>
          <p className="mt-6 text-zinc-700 text-center text-lg small">
            We’ve helped companies from all over the world to grow their
            business with our services and products.
          </p>
        </div>
        <div className=" flex justify-evenly w-full ">
          <div className="flex flex-col">
            <h1 className="text-6xl gsans font-semibold text-center ">35+</h1>
            <p className="small text-lg text-zinc-800 mt-3 text-md text-center">
              years of experience in<br/> Entrepreneur Consulting
            </p>
          </div>
          <div className="flex flex-col">
            <h1 className="text-6xl gsans font-semibold text-center ">1400+</h1>
            <p className="small text-lg mt-3 text-zinc-800 text-center">
              Entrepreneur led<br/> businesses Transformed
            </p>
          </div>
          <div className="flex flex-col">
            <h1 className="text-6xl gsans font-semibold text-center ">
              14573+
            </h1>
            <p className="small text-lg text-zinc-800 mt-3 text-center">
              Executives and CEOs<br/> Trained and Mentored
            </p>
          </div>
          <div className="flex flex-col">
            <h1 className="text-6xl gsans font-semibold text-center ">$500+</h1>
            <p className="small text-lg text-zinc-800 mt-3 text-center">
              Millions of Economic value<br/> generated for our clients
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
