"use client";
import React from "react";

const Arrow = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div className="relative w-5 h-2">
      {/* Left Bar */}
      <div
        className={`absolute bg-black w-full h-full rounded transform transition-transform duration-500 ${
          isOpen ? "-rotate-45 top-1/2 -translate-y-1/2" : "rotate-35"
        }`}
      ></div>

      {/* right Bar */}
      <div
        className={`absolute bg-black w-full h-full rounded transform transition-transform duration-500 ${
          isOpen ? "rotate-45 top-1/2 -translate-y-1/2" : "-rotate-35"
        }`}
        style={{ left: "26px" }}
      ></div>
    </div>
  );
};

export default Arrow;
