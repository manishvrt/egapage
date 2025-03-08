import React from "react";

const WhyGen = (
    { serveText }
) => {
  return (
    <>
      <h1 className="flex small text-md lg:text-xl gap-3 justify-start items-center">
        <img src="/points.svg" alt="" className="w-5  h-5 object-cover" />
        {serveText}
      </h1>
    </>
  );
};

export default WhyGen;