import React from "react";
import BrandCardContainer from "@/app/components/brand-card-container";
import { client } from "@/utils/directus";
import { readItems } from "@directus/sdk";
import Categories from "@/app/components/Categories";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const categoryDetail = await client.request(
    readItems(`dg_categories`, {
      fields: ["label"],
      filter: { slug: params.slug, status: "published" },
    })
  );
  return {
    title: categoryDetail?.length
      ? `${categoryDetail[0]?.label} | D2C Guru`
      : "Brand detail",
    description: `This is page about ${
      categoryDetail?.length ? categoryDetail[0]?.label : "category detail"
    }.`,
    openGraph: {
      title: `${categoryDetail[0]?.label} | D2C Guru`,
      description: `This is page about ${
        categoryDetail?.length ? categoryDetail[0].label : "category detail"
      }.`,
    },
  };
}

const brandCategories = async ({ params }) => {
  const brands = await client.request(
    readItems("dg_brands", {
      fields: [
        "name",
        "bio",
        "tags.dg_tags_id.id",
        "tags.dg_tags_id.label",
        "tags.dg_tags_id.slug",
        "logo",
        "slug",
        "categories.dg_categories_id.id",
        "categories.dg_categories_id.label",
        "categories.dg_categories_id.slug",
        "website",
        "status",
      ],
      filter: { status: "published" },
      limit: -1,
    })
  );
  const categories = await client.request(
    readItems("dg_categories", {
      fields: ["label", "logo", "slug", "status"],
      filter: { status: "published" },
    })
  );
  if (!categories?.map((item) => item?.slug).includes(params?.slug)) {
    notFound();
  }
  const categoryName = categories.find(
    (item) => item?.slug === params?.slug
  )?.label;

  const categorySlug = categories.find(
    (item) => item?.slug === params?.slug
  )?.slug;

  const filteredBrands = brands.filter((brand) => {
    return (
      brand?.categories?.length > 0 &&
      brand?.categories?.some((category) => {
        return (
          category?.dg_categories_id?.slug &&
          category?.dg_categories_id?.slug == categorySlug
        );
      })
    );
  });

  const similarTags = filteredBrands
    .map((item) => item?.tags?.map((tag) => tag?.dg_tags_id?.slug))
    .slice(0, 8)
    .flat();

  const uniqueTags = Array.from(new Set(similarTags));

  const similarBrand = brands.filter((brand) =>
    brand?.tags?.some((tag) => uniqueTags?.includes(tag?.dg_tags_id?.slug))
  );

  return (
    <>
      <div className="bg-primary-500">
        <div className="container py-8 px-4 pt-32 md:pt-52 md:pb-32">
          <h1 className="font-display font-extrabold italic text-white text-4xl md:text-6xl">
            {categoryName}
          </h1>
        </div>
      </div>
      <div className="">
        {filteredBrands.length > 0 && (
          <BrandCardContainer
            className={"pb-0 md:pb-0"}
            title={`Best in ${categoryName}`}
            data={filteredBrands}
            isButton={true}
            variant="light"
            url={`/brands?category=${categorySlug}`}
          />
        )}
        {similarBrand.length > 0 && (
          <BrandCardContainer
            title={`Similar in ${categoryName}`}
            data={similarBrand}
            isButton={true}
            variant="light"
            url={`/brands?tag=${uniqueTags}`}
          />
        )}

        <Categories title="Popular categories" />
      </div>
    </>
  );
};

export default brandCategories;
