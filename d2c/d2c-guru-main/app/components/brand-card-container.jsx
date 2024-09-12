"use client";
import React, { Fragment, useRef } from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import BrandCard from "./brand-card";
import ButtonLink from "../ui/button";
import { RightArrow } from "./icons/right-arrow";

function BrandCardContainer({
  data = [],
  variant,
  title,
  url = "",
  isButton,
  className,
}) {
  const variantClass = {
    light: "bg-white text-primary-500",
    dark: "bg-primary-500 text-white",
  };

  return (
    <div className={`${variantClass[variant]}`}>
      <div className={`container py-20 md:py-24 ${className}`}>
        <div className="flex flex-col sm:items-center sm:flex-row justify-between mb-10">
          <h2 className="font-display font-extrabold italic text-2xl md:text-5xl">
            {title}
          </h2>

          {isButton && (
            <ButtonLink
              href={url}
              icon={
                <RightArrow className="group-hover:translate-x-4 duration-300" />
              }
              className="w-fit group py-2 px-4 bg-primary-500 text-white text-lg font-body font-bold mt-4 md:mt-0"
            >
              View All
            </ButtonLink>
          )}
        </div>
        <div className="flex flex-wrap justify-start -mx-4">
          {data?.slice(0, 8)?.map((item) => {
            return (
              <Fragment key={item?.id}>
                <BrandCard
                  className="mb-8 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4"
                  variant={variant}
                  imageSrc={item?.logo}
                  href={item?.slug}
                  title={item?.name}
                  desc={item?.bio}
                  tags={item?.tags}
                />
              </Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default BrandCardContainer;
