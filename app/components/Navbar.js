"use client";
import React, { useState, useEffect } from "react";
import Scroll from "./Scroll";

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [navbarTop, setNavbarTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (prevScrollPos > currentScrollPos) {
        setNavbarTop(0);
      } else {
        setNavbarTop(-70);
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <nav
      id="navbar"
      style={{
        top: `${navbarTop}px`,
      }}
      className="mix-blend-exclusion text-sm md:text-xl font-light fixed w-full z-50 transition-all ease-in-out duration-300 bg-white bg-opacity-20 lg:bg-transparent lg:bg-opacity-0"
    >
      <div className="container mx-auto py-2 md:py-3 lg:py-4 px-8">
        <ul className="text-stone-300 flex justify-evenly lg:justify-end gap-3 sm:gap-5">
          <li
            aria-haspopup="true"
            className="lg:mr-auto cursor-pointer hover:text-stone-100"
          >
            <Scroll element="home">Home</Scroll>
          </li>
          <li
            aria-haspopup="true"
            className="cursor-pointer hover:text-stone-100"
          >
            <Scroll element="about">About</Scroll>
          </li>
          <li
            aria-haspopup="true"
            className="cursor-pointer hover:text-stone-100"
          >
            <Scroll element="skills">Skills</Scroll>
          </li>
          <li
            aria-haspopup="true"
            className="cursor-pointer hover:text-stone-100"
          >
            <Scroll element="projects">Projects</Scroll>
          </li>
          <li
            aria-haspopup="true"
            className="cursor-pointer hover:text-stone-100"
          >
            <Scroll element="contact">Contact</Scroll>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
