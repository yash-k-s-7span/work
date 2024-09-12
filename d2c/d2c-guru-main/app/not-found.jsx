import Image from "next/image";
import React from "react";
import NotFoundPageImg from "@/app/assets/images/404-guru.png";
import ButtonLink from "./ui/button";

function NotFound() {
  return (
    <div className="bg-primary-500 h-screen w-screen absolute top-0 z-50">
      <div className="container h-svh flex flex-col md:flex-row gap-10 justify-between items-center w-full text-white px-4 md:px-20 relative py-10">
        <div className="flex flex-col justify-center bg-transparent relative">
          <h2 className="text-3xl md:text-4xl mb-2 lg:text-6xl font-extrabold text-neutral-200 text-balance">
            Oops!!
          </h2>
          <h2 className="text-xl md:text-2xl mb-6 md:mb-8 lg:mb-12 lg:text-4xl font-extrabold font-body">
            May be you lost the path...
          </h2>
          <ButtonLink
            className="bg-white text-primary-500 font-bold px-6 py-3 !w-fit"
            href="/"
          >
            Find Your Way
          </ButtonLink>
        </div>
        <div className="relative  md:mt-10">
          {/* mt-24 */}
          <Image
            src={NotFoundPageImg.src}
            alt="Hero Image"
            className="bg-primary-500"
            width={NotFoundPageImg.width}
            height={NotFoundPageImg.height}
          />
        </div>
      </div>
    </div>
  );
}

export default NotFound;
