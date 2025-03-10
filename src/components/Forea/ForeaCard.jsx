import React from "react";

const ForeaCard = ({ imsSrc,id, title, description }) => {
  return (
    <div className="">
      <div className="w-full border border-zinc-200 relative pb-10 h-auto overflow-hidden  flex flex-col justify-center  items-start bg-[#ffffff] rounded-[65px]">
        <img src={imsSrc} alt="" className="w-full h-60  object-cover" />
        <div className="px-4">
          <span className="w-10 top-56 gsans text-white absolute h-10 rounded-full bg-[#ff0000] flex justify-center items-center ">
           0{id}
          </span>
        </div>

        <h1 className="text-2xl px-4 text- mt-12 text-[#0c0c0c] font-semibold gsans">
          {title}
        </h1>
        <p className="small px-4 text- text-lg mt-6">{description}</p>
        <div className="px-6">
          <button className="text-lg  gap-3 w-fit mt-8 border border-zinc-300 h-14 small flex justify-center items-center rounded-[30px] px-6 font-medium text-black">
            Learn More
            <img
              src="https://www.svgrepo.com/show/533685/cursor-alt.svg"
              alt=""
              className="w-5 h-5 object-cover"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForeaCard;
