"use client";
import { useEffect, useState } from "react";

const SmoothBackground = ({ children }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    if (typeof window !== "undefined") {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  const calculateBackgroundPosition = () => {
    if (typeof window !== "undefined") {
      const xPercentage = (mousePosition.x / window.innerWidth) * 3;
      const yPercentage = (mousePosition.y / window.innerHeight) * 3;

      return `${xPercentage}% ${yPercentage}%`;
    }

    return "0% 0%";
  };

  return (
    <div
      className="sticky landscape:relative lg:landscape:sticky inset-x-0 top-0 bg-cover bg-[#003C42]"
      style={{
        backgroundPosition: calculateBackgroundPosition(),
        backgroundImage: `url(/background/mountain.png)`,
        backgroundRepeat: "no-repeat",
      }}
    >
      {children}
    </div>
  );
};

export default SmoothBackground;
