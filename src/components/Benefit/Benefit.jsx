"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BenefitCard from "./BenefitCard";
import { benefitData } from "../Benefits/benefitData";
// import Button from "../Reusables/Button";
gsap.registerPlugin(ScrollTrigger);

const Benefit = () => {
  const serviceCardsRef = useRef([]);

  useEffect(() => {
    serviceCardsRef.current = serviceCardsRef.current.slice(
      0,
      benefitData.length
    );

    serviceCardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "bottom 20%", // Ensure the animation completes before exiting the viewport
            toggleActions: "play none none none", // Prevents reverse animation
          },
        }
      );
    });
  }, []);

  return (
    <div id="learn" className="bg-[#f4f4f4]/70  dark:bg-[#0c0c0c] h-auto">
      <div className="grid grid-cols-1  gap-6 max-w-7xl mx-auto lg:grid-cols-5">
        {/* Left Section - Sticky */}
        <div className="lg:col-span-2 gsans mt-10 px-6 lg:px-0 lg:h-screen lg:sticky lg:top-0  flex flex-col lg:justify-center items-start ">
          <h1 className="small gap-2 tracking-tight  max-w-2xl items-center flex text-[20px] text-[#0c0c0c] dark:text-[#ffffff]">
            <span className="dark:bg-[#ffffff] bg-[#0c0c0c] w-2 h-2 rounded-full inline-block"></span>
            our solution
          </h1>
          <h1 className="gsans  mt-10 font-semibold leading-[80px] text-6xl lg:text-7xl  dark:text-[#ffffff] text-[#0c0c0c]">
            Benefits <br /> of EGA™
          </h1>
          <p className="small hidden lg:block text-sm lg:text-xl tracking-tight dark:text-zinc-200 text-[#0c0c0c] mt-10">
            Research shows that having a coach or mentor can help you outperform
            peers, scale your business, increase job satisfaction, and reduce
            burnout.
          </p>
          <button className="text-lg gap-3 w-fit mt-14 bg-[#ff0000] h-14 small flex justify-center items-center rounded-3xl px-6 font-medium text-white">
             
              Secure Your Spot
              <img
                src="https://www.vrt9.net/research/survey.svg"
                alt=""
                className="w-5 h-5 object-cover"
              />
            </button>
          {/* <CustomButton className=" text-[#ffffff] h-16 mt-12 text-sm  lg:text-lg  px-6 bg-[#CD1C1E] small rounded-2xl">
            Take the first step toward transforming your business
          </CustomButton> */}
        </div>

        {/* Right Section - Scrollable Content */}
        <div className="lg:col-span-3 p-4 overflow-y-auto">
          <div className="flex flex-col gap-4 mt-16 lg:mt-32 mb-20">
            {benefitData.map((data, index) => (
              <div
                ref={(el) => (serviceCardsRef.current[index] = el)}
                key={index}
              >
                <BenefitCard
                  key={index}
                  benefitImage={data.benefitImage}
                  benefitTitle={data.benefitTitle}
                  benefitDescription={data.benefitDescription}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefit;
