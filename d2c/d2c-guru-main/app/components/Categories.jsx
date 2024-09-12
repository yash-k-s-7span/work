"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { client } from "@/utils/directus";
import { readItems } from "@directus/sdk";
import EyeWearLogo from "@/app/assets/icons/eye-wear.svg";
import { getDirectUsImage } from "@/utils";

function Categories({ title }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const category = await client.request(
        readItems("dg_categories", {
          fields: ["label", "logo.filename_disk", "is_popular", "slug"],
          filter: { is_popular: true, status: "published" },
        })
      );
      setCategories(category);
    };
    fetchCategories();
  }, []);
  const router = useRouter();
  return (
    <div className="container px-4 text-primary-500 py-14 md:py-28">
      <h3 className="mb-8 lg:mb-12 xl:mb-14 font-display font-extrabold italic text-5xl">
        {title}
      </h3>
      <div className="categories w-full overflow-x-auto font-bold text-xl lg:text-2xl">
        <div className="flex gap-8 md:gap-14 py-2">
          {categories?.map((category) => (
            <div
              key={category?.id}
              className="text-center group cursor-pointer"
              onClick={() => {
                router.push(`/categories/${category?.slug}`);
              }}
            >
              <div className="border rounded-full border-primary-500 w-32 md:w-40 h-32 md:h-40 flex items-center justify-center mb-8 group-hover:-rotate-12 duration-300">
                <img
                  src={
                    category?.logo.filename_disk
                      ? getDirectUsImage(category?.logo?.filename_disk)
                      : EyeWearLogo.src
                  }
                  className="h-20 md:h-24 w-20 md:w-24 "
                  alt="category logo"
                />
              </div>
              <p className="relative mx-auto w-fit font-bold text-xl md:text-2xl block after:block after:content-[''] after:absolute after:-bottom-0 after:h-[1px] after:bg-black after:w-full after:scale-x-0 after:group-hover:scale-x-100 after:transition after:duration-300 after:origin-left text-black py-2 hover:text-black">
                {category?.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Categories;
