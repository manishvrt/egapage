"use client";
import React from "react";
import LogoSlider from "./LogoSlider"; // Import the component

const images = [
  "https://vrtmanagementgroup.com/wp-content/uploads/2023/09/Cynergy-Logo-1.png",
  "https://vrtmanagementgroup.com/wp-content/uploads/2022/04/005.png",
  "https://vrtmanagementgroup.com/wp-content/uploads/2022/04/009.png",
  "https://vrtmanagementgroup.com/wp-content/uploads/2022/04/021.png",
  "https://vrtmanagementgroup.com/wp-content/uploads/2022/04/020.png",
  "https://vrtmanagementgroup.com/wp-content/uploads/2022/04/029.png",
  "https://vrtmanagementgroup.com/wp-content/uploads/2022/04/043.png",
  "https://vrtmanagementgroup.com/wp-content/uploads/2022/04/002.png",
  "https://vrtmanagementgroup.com/wp-content/uploads/2022/04/013.png",
  "https://vrtmanagementgroup.com/wp-content/uploads/2022/04/022.png",
];

const DualLogoSlider = () => {
  return (
    <div className="space-y-5 mt-20">
       <LogoSlider direction="left" />
       <LogoSlider direction="right" />
    </div>
  );
};

export default DualLogoSlider;
