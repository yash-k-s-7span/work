module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://d2c.guru",
  generateRobotsTxt: false,
  outDir: "./public",
  sitemapBaseFileName: "7span_d2c_guru_sitemap",
  generateIndexSitemap: false,
  exclude: ["/robots.txt"],
  additionalPaths: async () => {
    const blog = await fetch(
      "https://products.7span.in/items/bg_articles?filter[product][_eq]=fdc36b1d-f0a6-496c-8f2e-35d573f13a40"
    ).then((res) => res.json());

    const blogs = blog?.data?.map((item) => ({
      loc: `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${item?.slug}`,
      changefreq: "monthly",
    }));

    let category = await fetch(
      "https://products.7span.in/items/dg_categories?limit=-1&filter[status][_eq]=published"
    ).then((response) => response.json());

    const categories = category?.data?.map((item) => ({
      loc: `${process.env.NEXT_PUBLIC_SITE_URL}/categories/${item?.slug}`,
      changefreq: "monthly",
    }));

    let brand = await fetch(
      "https://products.7span.in/items/dg_brands?limit=-1&filter[status][_eq]=published"
    ).then((response) => response.json());

    const brands = brand?.data?.map((item) => ({
      loc: `${process.env.NEXT_PUBLIC_SITE_URL}/brands/${item?.slug}`,
      changefreq: "monthly",
    }));

    return [
      {
        loc: `${process.env.NEXT_PUBLIC_SITE_URL}`,
        changefreq: "monthly",
      },
      {
        loc: `${process.env.NEXT_PUBLIC_SITE_URL}/brands`,
        changefreq: "monthly",
      },
      {
        loc: `${process.env.NEXT_PUBLIC_SITE_URL}/categories`,
        changefreq: "monthly",
      },
      {
        loc: `${process.env.NEXT_PUBLIC_SITE_URL}/about-us`,
        changefreq: "monthly",
      },
      {
        loc: `${process.env.NEXT_PUBLIC_SITE_URL}/blog`,
        changefreq: "monthly",
      },
      ...blogs,
      ...categories,
      ...brands,
    ];
  },
};
