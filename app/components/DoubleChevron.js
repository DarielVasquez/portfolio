"use client";
import React from "react";
import { BsChevronDoubleDown } from "react-icons/bs";

const DoubleChevron = () => {
  const handleScrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const { top } = element.getBoundingClientRect();
      window.scrollTo({
        top: window.pageYOffset + top,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      onClick={() => handleScrollToElement("about")}
      className="flex sm:justify-center"
    >
      <BsChevronDoubleDown className="animate-bounce absolute bottom-4 cursor-pointer sm:bottom-8 right-8 sm:right-auto text-2xl sm:text-4xl"></BsChevronDoubleDown>
    </div>
  );
};

export default DoubleChevron;
