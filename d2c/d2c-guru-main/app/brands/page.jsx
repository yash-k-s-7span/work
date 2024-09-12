import React from "react";
import BrandListing from "../components/brand-listing";
import { Suspense } from "react";
import ListingSkeleton from "../components/skeleton/listing";

export const metadata = {
  title: "Brands | D2C Guru",
  description: "D2C Guru have listing of D2C brands available globally.",
};

const Brands = async ({ searchParams }) => {
  const query = searchParams?.query || "";

  return (
    <div className="mb-8">
      <div className="bg-primary-500">
        <div className="container py-8 px-4 pt-32 md:pt-52 md:pb-32">
          <h1 className="font-display font-extrabold italic text-white text-4xl md:text-6xl">
            Explore Brands
          </h1>
        </div>
      </div>
      <div className="container px-4 md:px-20 mt-5">
        <Suspense key={query} fallback={<ListingSkeleton count="15" />}>
          <BrandListing query={query} />
        </Suspense>
      </div>
    </div>
  );
};

export default Brands;
