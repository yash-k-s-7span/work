"use client";
import Image from "next/image";
import NoDataFoundImage from "../../assets/icons/no-data-found.svg";
import { LeftArrow } from "../icons/left-arrow";
import { RightArrow } from "../icons/right-arrow";
import { getDirectUsImage } from "@/utils";
import BrandTag from "../brand-tag";
import Slider from "react-slick";
import { useRef } from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

let settings = {
  infinite: false,
  speed: 600,
  slidesToShow: 1,
  slidesToScroll: 1,
  swipeToSlide: true,
  arrows: false,
};

export default function BrandDetailHero({
  data,
  images = [],
  logo,
  name,
  bio,
  categories,
}) {
  const sliderRef = useRef(null);

  const gallery = images.map((item) => item?.directus_files_id);

  const nextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const prevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  return (
    <div className="bg-primary-500 text-white">
      <div className="container flex flex-col md:flex-row gap-12 md:gap-28 justify-between w-full pt-32 md:pt-52 px-4 md:px-12 relative pb-10 md:pb-16">
        <div className="w-full md:w-1/2 flex flex-col bg-transparent relative">
          <div className="bg-white h-32 w-32 flex items-center justify-center">
            <img
              src={getDirectUsImage(logo)}
              alt="brand logo"
              width={120}
              height={120}
            />
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-6xl mt-2 sm:mt-10 mb-3 italic font-extrabold font-display">
            {name}
          </h1>
          <p className="text-lg md:text-xl font-normal text-neutral-200 font-body text-balance">
            {bio}
          </p>
          {categories.length > 0 && (
            <div className="gap-2 mt-6 flex flex-col">
              <span>Categories:</span>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => {
                  category?.tags?.filter(
                    (item) => item?.dg_tags_id?.status === "published"
                  );
                  return (
                    <BrandTag
                      key={category?.id}
                      variant="dark"
                      className="w-fit"
                      label={category?.label}
                    />
                  );
                })}
              </div>
            </div>
          )}
          {data.tags.length > 0 && (
            <div className="gap-2 mt-6 flex flex-col">
              <span>Tags:</span>
              <div className="flex flex-wrap gap-2">
                {data.tags.map((tag) => {
                  return (
                    <BrandTag
                      key={tag?.id}
                      variant="dark"
                      label={tag?.label}
                      className="border-white text-white text-sm w-fit"
                    />
                  );
                })}
              </div>
            </div>
          )}
        </div>
        <div className="w-full md:w-1/2">
          {data.hero_gallery.length > 0 ? (
            <Slider ref={sliderRef} {...settings}>
              {gallery.map((item, index) => {
                return (
                  <div key={index} className="w-full relative group">
                    <img
                      src={getDirectUsImage(item?.filename_disk)}
                      alt="product image"
                      className="border border-primary-500 aspect-square w-full object-contain"
                    />
                    <div className="hidden group-hover:block absolute bottom-1 left-1/2 transform -translate-x-1/2 bg-primary-300 px-3 py-1 text-black">
                      {index + 1} / {gallery.length}
                    </div>
                  </div>
                );
              })}
            </Slider>
          ) : (
            <Image
              src={NoDataFoundImage.src}
              alt="Hero Image"
              width={632}
              height={581}
              className="mt-2 md:mt-0"
            />
          )}
          {data.hero_gallery.length > 1 && (
            <div className="flex gap-10 pt-6 items-center justify-center">
              <button onClick={prevSlide}>
                <LeftArrow />
              </button>
              <button onClick={nextSlide}>
                <RightArrow />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
