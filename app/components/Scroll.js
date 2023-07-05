"use client";
import React from "react";

const Scroll = ({ children, element }) => {
  const handleScrollToElement = (id) => {
    const element = document.getElementById(id);
    if (id === "home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else if (element) {
      const { top } = element.getBoundingClientRect();
      window.scrollTo({
        top: window.pageYOffset + top,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="inline" onClick={() => handleScrollToElement(element)}>
      {children}
    </div>
  );
};

export default Scroll;
