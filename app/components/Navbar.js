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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

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
    <nav
      id="navbar"
      style={{
        top: `${navbarTop}px`,
      }}
      className="mix-blend-exclusion text-sm md:text-xl font-light fixed w-full z-50 transition-all ease-in-out duration-300 bg-white bg-opacity-20 lg:bg-transparent lg:bg-opacity-0"
    >
      <div className="container mx-auto py-4 px-8">
        <ul className="text-stone-400 flex justify-evenly lg:justify-end gap-3 sm:gap-5">
          <li
            className="lg:mr-auto cursor-pointer"
            onClick={() => scrollToTop()}
          >
            Home
          </li>
          <li
            className="cursor-pointer"
            onClick={() => handleScrollToElement("about")}
          >
            About
          </li>
          <li
            className="cursor-pointer"
            onClick={() => handleScrollToElement("skills")}
          >
            Skills
          </li>
          <li
            className="cursor-pointer"
            onClick={() => handleScrollToElement("projects")}
          >
            Projects
          </li>
          <li
            className="cursor-pointer"
            onClick={() => handleScrollToElement("contact")}
          >
            Contact
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
