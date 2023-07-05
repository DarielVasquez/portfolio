"use client";
import React, { useState, useEffect } from "react";
import FadeIn from "./FadeIn";

const AboutMe = () => {
  const [isHorizontal, setIsHorizontal] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerHeight < 625) {
        setIsHorizontal(true);
      } else {
        setIsHorizontal(false);
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section id="about" className="lg:col-span-4 text-stone-100 bg-teal-950">
      <div className="flex flex-col lg:justify-around justify-center items-center gap-y-4 min-h-[100vh] lg:min-h-screen sticky top-0 p-5">
        <FadeIn>
          <div
            className={`${
              isHorizontal ? "p-6" : "p-8 xl:p-12 xl:py-8"
            } bg-teal-800 rounded-md lg:max-h-[90svh] overflow-hidden`}
          >
            <div
              className={`relative z-10 gap-8 py-4 ${
                isHorizontal && "lg:gap-4 lg:py-2"
              } w-[50vw] lg:w-full flex flex-col justify-center items-center`}
            >
              <div className="relative">
                <h3 className="relative z-10 text-center text-xl font-light brightness-200">
                  About Me
                </h3>
                <div className="bg-teal-900 absolute top-[55%] left-[5%] h-3 w-24"></div>
              </div>
              <div className="flex justify-center rounded-full">
                <img
                  className={`shadow-[7px_7px_rgba(1,1,1,0.3)] object-cover rounded-3xl w-[60%] h-auto ${
                    isHorizontal
                      ? "lg:h-[25vh] lg:w-auto"
                      : "lg:w-[70%] lg:h-auto"
                  }`}
                  src="/profile/profile.png"
                  alt="Profile Picture Dariel Vasquez"
                />
              </div>
              <p
                className={`font-extralight text-xs md:text-sm xl:text-base min-w-[10ch] max-w-[36ch] brightness-200 scrollbar-thin scrollbar-thumb-rounded-md scrollbar-thumb-teal-900 scrollbar-track-teal-950 scrollbar-track-rounded-md ${
                  isHorizontal &&
                  "lg:text-sm xl:text-sm max-w-[40ch] lg:landscape:max-h-[30vh] overflow-auto"
                }`}
              >
                My name is <span className="font-normal">Dariel Vasquez</span>,
                I&apos;m a{" "}
                <span className="font-normal">computer science engineer</span>{" "}
                and a <span className="font-normal">full-stack developer</span>.
                Passionate about continuous learning and solving complex
                problems, I thrive in dynamic environments.{" "}
                <span className="font-normal text-teal-200">
                  Let&apos;s connect
                </span>{" "}
                and discuss how I can contribute to your projects.
              </p>
              <a
                className={`shadow-[7px_7px_rgba(1,1,1,0.3)] text-xs sm:text-sm bg-teal-600 text-white rounded-md p-2 ${
                  isHorizontal && "lg:text-xs"
                } transition ease-in-out hover:shadow-[5px_5px_rgba(1,1,1,0.3)] hover:bg-teal-700 w-24 sm:w-28 text-center`}
                target="_blank"
                href="https://drive.google.com/file/d/1cRnVaBv8efdOWdKaeNSY1OKNAbj6jCi8/view?usp=sharing"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </div>
            <svg
              className="absolute z-0 bottom-0 right-0 min-w-full  rounded-md"
              viewBox="45 -5 200 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M141.184 19.2L190.753 96H91.6156L141.184 19.2Z"
                fill="#134e4a"
              />
              <path
                d="M171.711 38.4L208.061 96H135.36L171.711 38.4Z"
                fill="#134e4a"
              />
              <path
                d="M103.026 57.6L139.377 96H66.676L103.026 57.6Z"
                fill="#134e4a"
              />
              <path
                d="M228.947 0L281.82 96H176.074L228.947 0Z"
                fill="#134e4a"
              />
              <path
                d="M61.0526 0L113.926 96H8.1795L61.0526 0Z"
                fill="#134e4a"
              />
            </svg>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default AboutMe;
