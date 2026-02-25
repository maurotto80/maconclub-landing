import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://maconclub.com";

  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date("2026-02-25"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/software-gestionale-asd`,
      lastModified: new Date("2026-02-25"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/gestionale-societa-sportiva`,
      lastModified: new Date("2026-02-25"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/software-contabilita-asd`,
      lastModified: new Date("2026-02-25"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];
}