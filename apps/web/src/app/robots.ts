import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/features", "/privacy", "/terms"],
      disallow: [
        "/api/",
        "/auth/",
        "/booking/",
        "/book/",
        "/sign-in",
        "/today",
        "/calendar",
        "/availability",
        "/learners",
        "/settings",
      ],
    },
    sitemap: "https://drivetrack.co.uk/sitemap.xml",
  };
}
