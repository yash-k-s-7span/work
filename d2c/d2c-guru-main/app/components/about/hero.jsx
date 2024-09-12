import React from "react";
import HeroImage from "@/app/assets/images/about-us-hero.png";

function AboutUsHero() {
  return (
    <div className="container flex flex-col-reverse lg:flex-row gap-10 justify-between px-4 py-14 md:py-20">
      <div className="w-full lg:w-2/5">
        <h2 className="font-display font-extrabold italic text-5xl mb-4 lg:mb-6">
          D2C GURU
        </h2>
        <p className="text-xl">
          Here at{" "}
          <span className="italic font-semibold capitalize">D2C GURU,</span>
          we&apos;ve curated a comprehensive directory of the hottest
          Direct-to-Consumer brands, all conveniently housed under one roof.
          Discover a universe of innovative companies cutting out the middleman
          and delivering exceptional products straight to your door.
        </p>
      </div>
      <div className="flex shadow-rb justify-center border p-20 border-primary-500 w-full lg:w-2/5">
        <img src={HeroImage?.src} alt="D2C Guru image" />
      </div>
    </div>
  );
}

export default AboutUsHero;
