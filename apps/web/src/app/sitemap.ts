import type { MetadataRoute } from "next";

const origin = "https://drivetrack.co.uk";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: origin, priority: 1, changeFrequency: "monthly" },
    { url: `${origin}/features`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${origin}/privacy`, priority: 0.3, changeFrequency: "yearly" },
    { url: `${origin}/terms`, priority: 0.3, changeFrequency: "yearly" },
  ];
}
