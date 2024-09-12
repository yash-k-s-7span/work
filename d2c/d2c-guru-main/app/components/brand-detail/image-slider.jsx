"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import ProductImage from "../../assets/images/brand-image.png";
import PrevSlideArrow from "../icons/prev-slide-arrow";
import NextSlideArrow from "../icons/next-slide-arrow";
import Image from "next/image";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToScroll: 1,
  swipeToSlide: true,
  touchThreshold: 10,
  centerMode: false,
  arrows: false,
  variableWidth: true,
  className: "center",
  responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        centerMode: false,
        variableWidth: false,
        className: "center",
      },
    },
    {
      breakpoint: 430,
      settings: {
        slidesToShow: 1,
        centerMode: false,
        variableWidth: true,
      },
    },
  ],
};

export default function BrandSlider() {
  const sliderRef = useRef(null);

  const handlePrevSlide = () => {
    sliderRef.current.slickPrev();
  };

  const handleNextSlide = () => {
    sliderRef.current.slickNext();
  };

  const imageArray = Array.from({ length: 4 });

  return (
    <div className="px-4 lg:px-20 pb-32 text-primary-500">
      <div className="flex justify-between mb-10">
        <h2 className="font-display font-extrabold italic text-2xl md:text-5xl">Products</h2>
        <div className="flex gap-4">
          <button onClick={handlePrevSlide}>
            <PrevSlideArrow />
          </button>
          <button onClick={handleNextSlide}>
            {" "}
            <NextSlideArrow />
          </button>
        </div>
      </div>
      <Slider {...settings} ref={sliderRef}>
        {imageArray.map((_, index) => (
          <div className="mx-2" key={index}>
            <Image src={ProductImage} alt="product image" width={302} className="border border-primary-500 h-96" />
          </div>
        ))}
      </Slider>
    </div>
  );
}
