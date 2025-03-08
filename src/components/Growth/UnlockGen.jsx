import React from "react";

const UnlockGen = (
    { serveText,green }
) => {
  return (
    <>
      <h1 className="flex small text-[#333333] text-sm lg:text-lg gap-3 justify-start items-center">
        <img 
        src={green ? "/gpoints.svg" : "/rpoints.svg"} 
        alt="" className="lg:w-5 w-4 h-4  lg:h-5 object-cover" />
        {serveText}
      </h1>
    </>
  );
};

export default UnlockGen;