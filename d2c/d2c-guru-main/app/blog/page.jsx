import React from "react";
import BlogCard from "../components/blog/blog-card";
import { client } from "@/utils/directus";
import { readItems } from "@directus/sdk";

export const metadata = {
  title: "Blogs | D2C Guru",
  description: "D2C Guru have listing of D2C brands available globally.",
};

export default async function Blog() {
  const blogs = await client.request(
    readItems("bg_articles", {
      fields: [
        "product",
        "status",
        "title",
        "summary",
        "slug",
        "cover",
        "date_published",
      ],
      filter: {
        product: "fdc36b1d-f0a6-496c-8f2e-35d573f13a40",
        status: "published",
      },
      sort: "-date_published",
    })
  );
  return (
    <div>
      <div className="bg-primary-500">
        <div className="container py-8 px-4 pt-32 md:pt-52 md:pb-32">
          <h1 className="font-display font-extrabold italic text-white text-4xl md:text-6xl">
            Blogs
          </h1>
        </div>
      </div>
      <div className="container py-24">
        <div className="grid md:grid-cols-2 gap-7">
          {blogs?.map((item) => {
            return (
              <BlogCard
                key={item?.id}
                title={item?.title}
                summary={item?.summary}
                coverImage={item?.cover}
                slug={item?.slug}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
