"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ImageSlider = ({ images, urlProject }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative flex justify-center">
      <a
        target="_blank"
        href={urlProject}
        rel="noopener noreferrer"
        className="flex justify-center"
      >
        <Image
          src={images[currentImageIndex]}
          height={1000}
          width={1000}
          alt="Slideshow Image"
          className="object-contain max-w-[80%] drop-shadow-[7px_7px_rgba(1,1,1,0.3)] transition ease-in-out hover:drop-shadow-[5px_5px_rgba(1,1,1,0.3)] hover:opacity-70 rounded-md"
        />
      </a>
      <div className="absolute top-[50%] left-0 right-0 flex justify-between md:px-2">
        <button
          className="text-stone-600 text-3xl hover:text-stone-400"
          onClick={prevImage}
        >
          <FaChevronLeft></FaChevronLeft>
        </button>
        <button
          className="text-stone-600 text-3xl hover:text-stone-400"
          onClick={nextImage}
        >
          <FaChevronRight></FaChevronRight>
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
