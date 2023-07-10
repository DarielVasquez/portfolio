import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="p-8 lg:p-12 text-white bg-stone-800 dark:bg-stone-800">
      <div className="flex flex-col md:flex-row gap-5 justify-around items-center">
        <div className="order-2 md:order-1">
          <p className="text-xs sm:text-sm font-extralight">
            © 2023 Created and designed by Dariel Vasquez.
          </p>
        </div>
        <div className="text-2xl flex items-center gap-2 order-1 md:order-2">
          <span className="text-xs sm:text-sm font-extralight">
            Contact me:
          </span>
          <a
            target="_blank"
            href="https://github.com/DarielVasquez"
            rel="noopener noreferrer"
            className="flex justify-center hover:text-teal-500"
          >
            <FaGithub></FaGithub>
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/dariel-vasquez-a53a18214/"
            rel="noopener noreferrer"
            className="flex justify-center hover:text-teal-500"
          >
            <FaLinkedin></FaLinkedin>
          </a>
          <a
            target="_blank"
            href="mailto:darielalejandro10@gmail.com"
            rel="noopener noreferrer"
            className="flex justify-center hover:text-teal-500"
          >
            <MdEmail></MdEmail>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
