import type { MetadataRoute } from "next";
import { site } from "@/data/site-config";
import { services } from "@/data/services";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "/",
    "/about/",
    "/services/",
    "/request-a-quote/",
    "/contact/",
    "/privacy-policy/",
    "/terms-and-conditions/",
  ];

  const staticPages: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "/" ? 1.0 : 0.7,
  }));

  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${site.url}/services/${service.slug}/`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticPages, ...servicePages];
}
