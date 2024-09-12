import Categories from "./components/Categories";
import Hero from "./components/home/hero";
import { client } from "@/utils/directus";
import { readItems } from "@directus/sdk";
import BrandCardContainer from "./components/brand-card-container";
import Logo from "@/app/assets/icons/logo.svg";

export const metadata = {
  title: "D2C Guru",
  description: "D2C Guru have listing of D2C brands available globally.",
  openGraph: {
    title: "D2C Guru",
    images: [Logo.src],
    description: "D2C Guru have listing of D2C brands available globally.",
  },
};

export default async function Home() {
  const brands = await client.request(
    readItems("dg_brands", {
      fields: [
        "name",
        "bio",
        "tags.dg_tags_id.label",
        "logo",
        "slug",
        "launch_date",
        "status",
      ],
      filter: { status: "published" },
    })
  );

  const sortedBrands = brands.sort(
    (a, b) => new Date(b.launch_date) - new Date(a.launch_date)
  );

  return (
    <>
      <Hero />
      <BrandCardContainer
        title="Newly launched"
        isButton={false}
        data={sortedBrands}
      />
      {/* this sections closed we need this sections in future */}
      {/* <BrandReview data={brands} /> */}
      {/* <Categories title="Popular categories" /> */}
      {/* <BrandCardContainer
        title="Top Brands"
        data={brands}
        isButton={true}
        variant="dark"
        url="/brands"
      /> */}
      <Categories title="Popular categories" />
    </>
  );
}
