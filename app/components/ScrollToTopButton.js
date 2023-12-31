"use client";
import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import Scroll from "./Scroll";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  }, []);

  return (
    <Scroll element="home">
      <button
        className={`fixed z-50 bottom-5 right-5 w-10 h-10 flex justify-center items-center bg-[#003C42] hover:bg-[#062427] text-[#fff] rounded-full cursor-pointer transition-all duration-500 ${
          isVisible ? "visible opacity-100" : "invisible opacity-0"
        }`}
        title="Scroll to Top"
      >
        <FaArrowUp className="animate-bounce" />
      </button>
    </Scroll>
  );
};

export default ScrollToTopButton;
