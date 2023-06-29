"use client";
import React from "react";
import { useInView } from "react-intersection-observer";

const FadeIn = ({ children, direction, order }) => {
  const delayValue = 150 * order + "ms";
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  return (
    <div
      ref={ref}
      style={{ transitionDelay: order ? delayValue : "0ms" }}
      className={`transition-all duration-1000 blur-0 ${
        inView
          ? "opacity-100 translate-x-0"
          : `opacity-0 -translate-x-full blur-md ${
              direction === "right"
                ? "md:translate-x-full"
                : "md:-translate-x-full"
            }`
      }`}
    >
      {children}
    </div>
  );
};

export default FadeIn;
