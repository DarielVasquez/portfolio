"use client";
import React, { useState, useEffect } from "react";

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
      className="mix-blend-exclusion text-sm md:text-xl font-base fixed w-full z-50 transition-all ease-in-out duration-300 bg-white bg-opacity-20 lg:bg-transparent lg:bg-opacity-0"
    >
      <div className="container mx-auto py-4 px-8">
        <ul className="text-stone-400 flex justify-evenly lg:justify-end gap-3 sm:gap-5">
          <li className="lg:mr-auto">
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
