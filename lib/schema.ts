import { company, site } from "@/data/site-config";
import { services } from "@/data/services";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: company.name,
  description: site.defaultDescription,
  url: site.url,
  email: company.email,
  telephone: company.phones,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dar es Salaam",
    addressCountry: "TZ",
  },
  sameAs: [],
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: company.name,
  description: site.defaultDescription,
  url: site.url,
  email: company.email,
  telephone: company.phones,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dar es Salaam",
    addressCountry: "TZ",
  },
};

export function serviceSchema(serviceSlug: string) {
  const service = services.find((s) => s.slug === serviceSlug);
  if (!service) return null;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${service.title} | ${company.name}`,
    description: service.shortDescription,
    provider: {
      "@type": "Organization",
      name: company.name,
      url: site.url,
    },
    areaServed: {
      "@type": "Place",
      name: "Tanzania",
    },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${site.url}${item.path}`,
    })),
  };
}
