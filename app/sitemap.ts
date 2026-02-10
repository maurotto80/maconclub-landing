import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://maconclub.com",
      lastModified: new Date(),
    },
  ];
}
