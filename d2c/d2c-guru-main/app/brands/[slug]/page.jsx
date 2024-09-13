import { client } from "@/utils/directus";
import { readItems } from "@directus/sdk";
import React from "react";
import { unstable_noStore as noStore } from "next/cache";
import BrandDetailHero from "@/app/components/brand-detail/hero";
import AboutBrandDetail from "@/app/components/brand-detail/about";
import SocialMedia from "@/app/components/social-media";
import ButtonLink from "@/app/ui/button";
import { RightArrow } from "@/app/components/icons/right-arrow";
import { notFound } from "next/navigation";
import BrandCardContainer from "@/app/components/brand-card-container";

export async function generateMetadata({ params }) {
  const brandDetail = await client.request(
    readItems(`dg_brands`, {
      fields: ["name", "logo"],
      filter: { slug: params.slug, status: "published" },
    })
  );
  return {
    title: brandDetail.length
      ? `${brandDetail[0]?.name} | D2C Guru`
      : "Brand detail",
    description: `This is page about ${
      brandDetail.length ? brandDetail[0]?.name : "Brand detail"
    }.`,
    openGraph: {
      title: `${brandDetail[0]?.name} | D2C Guru`,
      images: [
        `${process.env.NEXT_PUBLIC_DIRECTUS_URL}/assets/${brandDetail[0]?.logo}`,
      ],
      description: `This is page about ${
        brandDetail.length ? brandDetail[0].name : "Brand detail"
      }.`,
    },
  };
}

const BrandDetail = async ({ params }) => {
  noStore();

  const getBrands = await client.request(
    readItems("dg_brands", {
      fields: [
        "name",
        "bio",
        "tags.dg_tags_id.label",
        "tags.dg_tags_id.slug",
        "tags.dg_tags_id.status",
        "logo",
        "slug",
        "status",
      ],
      filter: { status: "published" },
      limit: -1,
    })
  );

  const brandDetail = await client
    .request(
      readItems("dg_brands", {
        fields: [
          "name",
          "website",
          "bio",
          "about",
          "slug",
          "launch_date",
          "logo.id",
          "categories.dg_categories_id.id",
          "categories.dg_categories_id.label",
          "tags.dg_tags_id.id",
          "tags.dg_tags_id.label",
          "tags.dg_tags_id.slug",
          "instagram",
          "facebook",
          "twitter",
          "linkedin",
          "youtube",
          "pinterest",
          "headquarters",
          "founders.dg_founders_id.id",
          "founders.dg_founders_id.name",
          "hero_gallery.directus_files_id.filename_disk",
        ],
        filter: { slug: params.slug, status: "published" },
      })
    )
    .then((res) => {
      if (res.length) {
        return {

          name: res[0].name,
          logo: res[0].logo?.id,
          website: res[0].website,
          bio: res[0].bio,
          about: res[0].about,
          launch_date: res[0].launch_date,
          categories:
            res[0].categories.map((item) => item.dg_categories_id) ?? [],
          tags: res[0].tags.map((item) => item.dg_tags_id) ?? [],
          instagram: res[0].instagram,
          facebook: res[0].facebook,
          twitter: res[0].twitter,
          linkedin: res[0].linkedin,
          youtube: res[0].youtube,
          pinterest: res[0].pinterest,
          founders: res[0].founders ?? [],
          headquarters: res[0].headquarters ?? [],
          hero_gallery: res[0].hero_gallery ?? "",
        };
      }
    });
  if (!getBrands?.map((item) => item.slug).includes(params.slug)) {
    notFound();
  }

  const brands = getBrands.filter((item) => item?.name !== brandDetail?.name);

  const socialLinks = [
    {
      name: "Instagram",
      url: brandDetail?.instagram,
    },
    { name: "Facebook", url: brandDetail?.facebook },
    { name: "Twitter", url: brandDetail?.twitter },
    { name: "LinkedIn", url: brandDetail?.linkedin },
    { name: "YouTube", url: brandDetail?.youtube },
    { name: "Pinterest", url: brandDetail?.pinterest },
  ].filter((link) => link.url);

  const similarTags = brandDetail?.tags?.map((item) => {
    return item?.slug;
  });
  const similarBrand = brands.filter((brand) =>
    brand?.tags?.some((tag) => similarTags.includes(tag?.dg_tags_id?.slug))
  );

  return (
    <div>
      <BrandDetailHero
        data={brandDetail}
        name={brandDetail?.name}
        bio={brandDetail?.bio}
        categories={brandDetail?.categories}
        images={brandDetail?.hero_gallery}
        logo={brandDetail?.logo}
      />
      <AboutBrandDetail about={brandDetail.about} />
      {similarBrand.length > 0 && (
        <BrandCardContainer
          data={similarBrand}
          title="Similar brands"
          isButton={true}
          url={`/brands?tag=${similarTags}`}
        />
      )}

      <div className="bg-white text-primary-500 py-14 md:py-20 border-t-2 border-primary-500">
        <div className="container px-4 md:px-12 flex justify-between">
          <div>
            <h2 className="font-extrabold font-display italic text-2xl md:text-5xl mb-6 md:mb-10">
              Like this Brand?
            </h2>
            <ButtonLink
              target="blank"
              href={brandDetail?.website}
              icon={
                <RightArrow className="group-hover:translate-x-4 duration-500" />
              }
              className="py-2 px-2 md:px-4 group bg-white text-primary-500 text-md md:text-lg font-body font-bold block"
            >
              View Now
            </ButtonLink>
          </div>
          {socialLinks.length > 0 && (
            <SocialMedia
              className=" py-14 md:py-20"
              linkClassName="bg-white p-3 border border-primary-500 text-primary-500 hover:border-primary-400 hover:text-primary-400 rounded-full"
              titleClassName="font-extrabold font-display text-primary-500 italic text-2xl md:text-5xl mb-6 md:mb-10"
              socialLinks={socialLinks}
              iconClassName="social-icon"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default BrandDetail;
