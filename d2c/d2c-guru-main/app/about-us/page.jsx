import React from "react";
import SocialMedia from "../components/social-media";
import InstagramIcon from "@/app/components/icons/instagram";
import { client } from "@/utils/directus";
import { readItems } from "@directus/sdk";
import AboutUsHero from "../components/about/hero";
import BrandStatistics from "../components/about/statistics";
import BrandCardContainer from "../components/brand-card-container";
import FacebookIcon from "../components/icons/facebook";

export const metadata = {
  title: "About us | D2C Guru",
  description: "D2C Guru have listing of D2C brands available globally.",
};
async function page() {
  const brands = await client.request(
    readItems("dg_brands", {
      fields: [
        "name",
        "bio",
        "tags.dg_tags_id.label",
        "logo",
        "slug",
        "status",
      ],
      filter: { status: "published" },
      limit: 8,
    })
  );

  const brandsCount = await client.request(
    readItems("dg_brands?filter[status][_eq]=published&aggregate[count]=id")
  );
  const categoryCount = await client.request(
    readItems("dg_categories?filter[status][_eq]=published&aggregate[count]=id")
  );

  const socialLinks = [
    // { url: "https://www.facebook.com", target: "_blank", icon: FacebookIcon },
    {
      url: "https://www.instagram.com/d2c.guru",
      target: "_blank",
      icon: InstagramIcon,
    },
    // { url: "https://www.twitter.com", target: "_blank", icon: TwitterIcon },
    // { url: "https://www.linkedin.com", target: "_blank", icon: LinkedinIcon },
  ];

  return (
    <div>
      <div className="bg-primary-500">
        <div className="container py-8 px-4 pt-32 md:pt-52 md:pb-32">
          <h1 className="font-display font-extrabold italic text-white text-4xl md:text-6xl">
            About us
          </h1>
        </div>
      </div>
      <div>
        <AboutUsHero />
        <BrandStatistics
          brands={`${brandsCount[0]?.count.id}`}
          categories={categoryCount[0]?.count.id}
          teamMembers="10"
        />
        <SocialMedia
          className="text-primary-500 flex flex-col md:flex-row justify-center items-center gap-8 bg-primary-500 py-14 md:py-20"
          linkClassName="bg-white p-3 rounded-full"
          titleClassName="font-extrabold font-display text-white italic text-2xl md:text-5xl text-center"
          socialLinks={socialLinks}
          title="Follow us on Instagram"  
          iconClassName="social-icon"
        />
        <BrandCardContainer
          title="Explore other Brands"
          data={brands}
          isButton={true}
          variant="light"
          url="/brands"
        />
      </div>
    </div>
  );
}

export default page;
