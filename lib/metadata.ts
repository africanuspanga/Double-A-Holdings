import type { Metadata } from "next";
import { company, site } from "@/data/site-config";

export function createMetadata({
  title,
  description,
  pathname,
}: {
  title?: string;
  description?: string;
  pathname?: string;
} = {}): Metadata {
  const pageTitle = title
    ? site.titleTemplate.replace("%s", title)
    : site.defaultTitle;
  const pageDescription = description || site.defaultDescription;
  const url = `${site.url}${pathname || "/"}`;

  return {
    title: pageTitle,
    description: pageDescription,
    metadataBase: new URL(site.url),
    alternates: {
      canonical: url,
    },
    icons: {
      icon: "/images/double-a-favicon.png",
      apple: "/images/double-a-favicon.png",
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url,
      siteName: company.name,
      locale: "en_US",
      type: "website",
      images: [`${site.url}/images/hero-truck.png`],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [`${site.url}/images/hero-truck.png`],
    },
  };
}
