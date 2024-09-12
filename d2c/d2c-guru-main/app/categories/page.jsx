import React from "react";
import { client } from "@/utils/directus";
import { readItems } from "@directus/sdk";
import NoDataFoundImage from "@/app/assets/icons/no-data-found.svg";

import Link from "next/link";
import { getDirectUsImage } from "@/utils";

export const metadata = {
  title: "Categories | D2C Guru",
};

async function brandCategories() {
  const categories = await client.request(
    readItems("dg_categories", {
      fields: ["label", "logo.filename_disk", "slug"],
      filter: { status: "published" },
    })
  );

  return (
    <>
      <div className="bg-primary-500">
        <div className="container py-8 px-4 pt-32 md:pt-52 md:pb-32">
          <h1 className="font-display font-extrabold italic text-white text-4xl md:text-6xl">
            Categories
          </h1>
        </div>
      </div>
      <div className="container py-20">
        <div className="categories w-full font-bold text-xl lg:text-2xl">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14">
            {categories.map((category) => (
              <Link
                href={`/categories/${category?.slug}`}
                key={category?.label}
                className="text-center group cursor-pointer flex flex-col justify-center items-center"
              >
                <div className="border rounded-full border-primary-500 w-32 md:w-40 h-32 md:h-40 flex items-center justify-center mb-8">
                  <img
                    src={
                      category?.logo?.filename_disk
                        ? getDirectUsImage(category?.logo?.filename_disk)
                        : NoDataFoundImage.src
                    }
                    alt="category logo"
                    className="h-20 md:h-24 w-20 md:w-24 group-hover:-rotate-12 duration-300"
                  />
                </div>
                <p className="relative mx-auto w-fit font-bold text-xl md:text-2xl block after:block after:content-[''] after:absolute after:-bottom-0 after:h-[1px] after:bg-black after:w-full after:scale-x-0 after:group-hover:scale-x-100 after:transition after:duration-300 after:origin-left text-black py-2 hover:text-black">
                  {category?.label}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default brandCategories;
