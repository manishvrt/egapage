import React from "react";
import LogoSlider from "./LogoSlider";
import DualLogoSlider from "./DualLogoSlider";
const Clients = () => {
  return (
    <div className=" flex justify-center  items-center">
      <div className=" flex flex-col justify-center overflow-hidden items-center bg-[#F3F4E9] w-full h-screen">
        <span className="rounded-3xl  text-lg flex justify-center items-center gap-3 py-2 border-zinc-200 small  px-7 ">
          <img
            src="https://www.svgrepo.com/show/488878/company.svg"
            alt="clients"
            className="w-6 h-6 inline-block"
          />
          clients
        </span>
        <h1 className="text-6xl gsans font-semibold text-center ">
          Companies We’ve Helped
        </h1>
        <p className="mt-6 text-zinc-700 text-lg small">
          We’ve helped companies from all over the world to grow their business
          with our services and products.
        </p>
       <DualLogoSlider/>
      </div>
    </div>
  );
};

export default Clients;
