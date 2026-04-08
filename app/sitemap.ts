import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.dhanwaanfinance.com";

  // 1. Main Navigation Pages (7 pages)
  // Added trailing slashes to match your URL structure
  const mainPages = [
    { route: "", priority: 1.0, changeFreq: "daily" },
    { route: "how-it-works", priority: 0.8, changeFreq: "weekly" },
    { route: "pricing", priority: 0.8, changeFreq: "weekly" },
    { route: "blogs", priority: 0.9, changeFreq: "daily" },
    { route: "features", priority: 0.8, changeFreq: "weekly" },
    { route: "faqs", priority: 0.6, changeFreq: "weekly" },
    { route: "signup", priority: 0.7, changeFreq: "monthly" },
  ].map((item) => ({
    url: `${baseUrl}/${item.route}${item.route ? "/" : ""}`,
    lastModified: new Date(),
    changeFrequency: item.changeFreq as any,
    priority: item.priority,
  }));

  // 2. Policy Pages (5 pages)
  const policyPages = [
    "privacy-policy",
    "terms-and-conditions",
    "cookies-policy",
    "copyright-policy",
    "data-policy",
  ].map((route) => ({
    url: `${baseUrl}/${route}/`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.3,
  }));

  return [...mainPages, ...policyPages];
}