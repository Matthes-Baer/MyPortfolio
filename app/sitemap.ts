import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const domain = "https://matthesbaer.com";

  return [
    {
      url: `${domain}/en`, // English main route
      lastModified: new Date(),
    },
    {
      url: `${domain}/de`, // German main route
      lastModified: new Date(),
    },
    {
      url: `${domain}/en/main`, // English "main" page
      lastModified: new Date(),
    },
    {
      url: `${domain}/de/main`, // German "main" page
      lastModified: new Date(),
    },
    {
      url: `${domain}/en/main/timeline`, // English "main/timeline" page
      lastModified: new Date(),
    },
    {
      url: `${domain}/de/main/timeline`, // German "main/timeline" page
      lastModified: new Date(),
    },
  ];
}
