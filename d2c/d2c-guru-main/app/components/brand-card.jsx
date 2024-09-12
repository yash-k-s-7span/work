"use client";
import Link from "next/link";
import BrandTag from "./brand-tag";
import { getDirectUsImage } from "@/utils";
import { useState } from "react";
import NoDataFoundImage from "../assets/icons/no-data-found.svg";

export default function BrandCard({
  href,
  title,
  desc,
  tags,
  imageSrc,
  variant = "light",
  className,
}) {
  const variantClass = {
    light: "bg-white text-primary-500",
    dark: "bg-primary-500 text-white",
  };
  const moreTags = tags?.slice(0, 2);
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className={className}>
      <Link
        href={`/brands/${href}`}
        className={`flex flex-col border border-primary-500 ${variantClass[variant]}`}
      >
        <img
          src={imageSrc ? getDirectUsImage(imageSrc) : NoDataFoundImage.src}
          alt="brand image"
          className="w-full h-full aspect-square object-contain bg-white p-4"
        />
      </Link>

      <div>
        <h3 className="text-2xl font-bold mt-4 mb-1">{title}</h3>
        <p className="text-base font-medium line-clamp-2">{desc}</p>
        {tags?.length > 0 && (
          <div className="space-x-1 mt-3 flex flex-wrap">
            {tags.length <= 3 ? (
              tags?.map((tag, index) => {
                return (
                  <div className="mb-1" key={index}>
                    <BrandTag
                      label={tag?.dg_tags_id?.label}
                      variant={variant}
                    />
                  </div>
                );
              })
            ) : (
              <>
                {isExpanded ? (
                  tags?.map((tag, index) => {
                    return (
                      <div className="mb-1" key={index}>
                        <BrandTag
                          label={tag?.dg_tags_id?.label}
                          variant={variant}
                        />
                      </div>
                    );
                  })
                ) : (
                  <>
                    {moreTags.map((tag, index) => {
                      return (
                        <BrandTag
                          key={index}
                          label={tag?.dg_tags_id?.label}
                          variant={variant}
                        />
                      );
                    })}
                    <span
                      onClick={() => setIsExpanded(true)}
                      className={`${
                        variant == "light"
                          ? "bg-primary-200 text-black hover:bg-primary-300"
                          : "bg-primary-400 text-white hover:bg-primary-300"
                      } rounded-full px-3 py-1 mb-1 font-jakarta text-xs font-medium cursor-pointer`}
                    >
                      {`+ ${tags?.length - 2} more`}
                    </span>
                  </>
                )}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
