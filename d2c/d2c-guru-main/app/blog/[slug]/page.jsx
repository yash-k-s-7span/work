import React from "react";
import BlogHero from "@/app/components/blog/hero";
import BlogDetail from "@/app/components/blog/blog-detail";
import { notFound } from "next/navigation";
import { client } from "@/utils/directus";
import { readItems } from "@directus/sdk";

export async function generateMetadata({ params }) {
  const blogs = await client.request(
    readItems("bg_articles", {
      fields: ["title", "seo_description", "cover.filename_disk", "slug"],
      filter: {
        product: "fdc36b1d-f0a6-496c-8f2e-35d573f13a40",
      },
    })
  );

  const blogMeta = blogs?.filter((item) => item?.slug === params?.slug);

  return {
    title: blogMeta[0]?.title + " | " + "D2C Guru",
    description: blogMeta[0]?.seo_description,
    openGraph: {
      title: blogMeta[0]?.title,
      description: blogMeta[0]?.seo_description,
      images: [
        `${process.env.NEXT_PUBLIC_DIRECTUS_URL}/assets/${blogMeta[0]?.cover?.filename_disk}`,
      ],
    },
  };
}

async function Blog({ params }) {
  const blogs = await client.request(
    readItems("bg_articles", {
      fields: [
        "title",
        "slug",
        "summary",
        "cover.filename_disk",
        "date_published",
        "author.first_name",
        "author.last_name",
        "sections.item.*.*.*",
      ],

      filter: {
        product: { id: "fdc36b1d-f0a6-496c-8f2e-35d573f13a40" },
        slug: params.slug,
      },
    })
  );

  if (params.slug != blogs?.map((item) => item.slug)) {
    notFound();
  }
  const blogDetail = blogs.filter((item) => item.slug === params.slug);

  const items = blogDetail[0]?.sections?.map((item) => item?.item);
  const contents = items.map((item) => item?.content);
  const blocks = contents.map((item) => item?.blocks);
  const blogsDetails = blocks.flat();

  return (
    <div>
      <BlogHero
        title={blogDetail[0]?.title}
        firstName={blogDetail[0]?.author?.first_name}
        lastName={blogDetail[0]?.author?.last_name}
        coverImage={blogDetail[0]?.cover.filename_disk}
        dateCreated={blogDetail[0]?.date_published}
      />
      <div className="py-14 max-w-3xl px-6 mx-auto">
        <div>
          <h3 className="mb-6 italic font-body font-extrabold text-xl md:text-4xl">
            Introduction
          </h3>
          <p>{blogDetail[0]?.summary}</p>
          <div className="py-12">
            <BlogDetail blogsDetails={blogsDetails} name={items[0]?.name} />
          </div>
          <div className="border-t-2 border-primary-500 pt-8">
            <span className="">
              {blogDetail[0]?.author?.first_name}{" "}
              {blogDetail[0]?.author?.last_name}
            </span>
          </div>
        </div>
      </div>
      {/* we need this code in future for recent blog */}
      {/* <div className="container flex flex-col gap-2 sm:flex-row justify-between mb-10">
        <h2 className="font-display font-extrabold italic text-2xl md:text-5xl">
          Recent blogs
        </h2>

        <div className="flex gap-4">
          <ButtonLink
            href="/blog"
            icon={<RightArrow />}
            className="py-2 px-2 md:px-4 sm:mx-auto w-fit bg-primary-500 text-white text-md md:text-lg font-body font-bold"
          >
            View All
          </ButtonLink>
        </div>
      </div>
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-10">
        <div className="">
          <Link
            href={`/blog/${blogDetail[0].slug}`}
            className={`flex flex-col border border-primary-500 `}
          >
            <img
              src={getDirectUsImage(blogDetail[0].cover.filename_disk)}
              alt="brand image"
              className="w-full h-f aspect-square object-contain bg-white p-4"
            />
          </Link>

          <div>
            <h3 className="text-2xl font-bold mt-4 mb-1">
              {blogDetail[0].title}
            </h3>
            <p className="text-base font-medium line-clamp-2">
              {blogDetail[0].summary}
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Blog;
