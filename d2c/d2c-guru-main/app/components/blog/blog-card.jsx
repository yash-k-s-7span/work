import React from "react";
import { RightArrow } from "../icons/right-arrow";
import Link from "next/link";
import { getDirectUsImage } from "@/utils";
import NoDataFoundImage from "../../assets/icons/no-data-found.svg";

export default function BlogCard({ slug, coverImage, title, summary }) {
  return (
    <Link
      href={`blog/${slug}`}
      className="flex flex-col lg:flex-row mb-8 group"
    >
      <img
        src={coverImage ? getDirectUsImage(coverImage) : NoDataFoundImage.src}
        alt=""
        className="lg:w-1/2 aspect-square object-contain"
      />
      <div className="w-full lg:w-1/2 h-full flex flex-col justify-between pl-0 lg:pl-6 pt-4 md:pt-0 lg">
        <div>
          <h3 className="font-bold text-xl xl:text-2xl">{title}</h3>
          <p className="mt-1 text-primary-400 line-clamp-3">{summary}</p>
        </div>
        <div className="flex cursor-pointer items-center">
          <p className="mr-3 text-xl font-bold">Read more</p>
          <RightArrow className="group-hover:translate-x-4 duration-300" />
        </div>
      </div>
    </Link>
  );
}
