import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/", // Allows Google to crawl your entire website
      // You can block future internal pages like this: disallow: "/private/",
    },
    sitemap: "https://www.dhanwaanfinance.com/sitemap.xml",
  };
}