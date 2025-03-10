import React from "react";
import ForeaCard from "./ForeaCard";
import { foreaData } from "./foreaData";
const Forea = () => {
  return (
    <div className="bg h-auto py-20 flex flex-col justify-center  items-center">
        <span className="rounded-3xl text-lg flex justify-center items-center gap-3 py-2 mb-6 border-zinc-200 small px-7">
          <img
            src="https://www.svgrepo.com/show/488878/company.svg"
            alt="clients"
            className="w-6 h-6 inline-block"
          />
          focus areas
        </span>
        <h1 className="text-5xl gsans font-semibold text-center">What’s covered in EGA? EGA Focus Areas</h1>
        <p className="mt-6 text-zinc-700 text-xl small text-center">
          The EGA™ Mentorship Program is for you if...
        </p>
      <div className="grid sticky top-0 px-10 mt-20 w-full grid-cols-3 gap-10">
        {foreaData.map((item) => (
          <ForeaCard
            key={item.id}
            id={item.id}
            imsSrc={item.imsSrc}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Forea;
