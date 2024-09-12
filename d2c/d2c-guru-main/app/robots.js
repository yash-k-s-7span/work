export default function robots() {
  let rules = { userAgent: "*", disallow: "/" };
  if (process.env.NEXT_PUBLIC_VERCEL_ENV === "production") {
    rules = { userAgent: "*", allow: "/" };
  }

  return {
    rules: rules,
    sitemap:
      process.env.NEXT_PUBLIC_VERCEL_ENV == "production"
        ? "https://d2c.guru/7span_d2c_guru_sitemap.xml"
        : "https://qa.d2c.guru/7span_d2c_guru_sitemap.xml",
  };
}
