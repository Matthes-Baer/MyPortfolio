import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const domain = "https://portfolio-eight-taupe-99.vercel.app";

  return [
    {
      url: domain + "/de",
      lastModified: new Date(),
    },
    {
      url: domain + "/en",
      lastModified: new Date(),
    },
    {
      url: domain + "/de/main",
      lastModified: new Date(),
    },
    {
      url: domain + "/en/main",
      lastModified: new Date(),
    },
    {
      url: domain + "/de/main/timeline",
      lastModified: new Date(),
    },
    {
      url: domain + "/en/main/timeline",
      lastModified: new Date(),
    },
  ];
}
