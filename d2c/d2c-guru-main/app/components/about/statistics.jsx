import React from "react";

export default function BrandStatistics(props) {
  const { brands, categories, teamMembers } = props;

  return (
    <div className="text-primary-500 bg-white">
      <div className="container flex flex-col md:flex-row justify-between  gap-10 py-24 md:py-40 px-16 lg:px-28 xl:px-56">
        <div className="flex items-center flex-col gap-3 md:gap-6">
          <span className="font-extrabold font-display text-5xl md:text-7xl">
            {brands}+
          </span>
          <label className="text-xl md:text-2xl">Brands Listed</label>
        </div>
        <div className="flex items-center flex-col gap-3 md:gap-6">
          <span className="font-extrabold font-display text-5xl md:text-7xl">
            {categories}+
          </span>
          <label className="text-xl md:text-2xl">Categories Listed</label>
        </div>
        <div className="flex items-center flex-col gap-3 md:gap-6">
          <span className="font-extrabold font-display text-5xl md:text-7xl">
            {teamMembers}+
          </span>
          <label className="text-xl md:text-2xl">Team Members</label>
        </div>
      </div>
    </div>
  );
}
