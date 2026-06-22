import { createMetadata } from "@/lib/metadata";
import { services } from "@/data/services";
import { PageHero } from "@/components/shared/page-hero";
import { ServicePanel } from "@/components/shared/service-panel";

export const metadata = createMetadata({
  title: "Services",
  pathname: "/services/",
});

const layoutMap: Record<
  string,
  { size: "large" | "tall" | "medium" | "small" | "full" }
> = {
  "road-transport": { size: "large" },
  "maritime-transport": { size: "tall" },
  "air-freight": { size: "medium" },
  "warehousing-and-distribution": { size: "medium" },
  "heavy-bulk-cargo": { size: "small" },
  "end-to-end-logistics": { size: "full" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="Our Services"
        title="One logistics partner. Multiple transport solutions."
        description="From local road transport to international freight and final distribution, Double A Holdings Limited coordinates the services required to move cargo safely and efficiently."
      />

      <section className="bg-soft-blue py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 auto-rows-min">
            {services.map((service) => (
              <ServicePanel
                key={service.slug}
                title={service.title}
                description={service.shortDescription}
                href={`/services/${service.slug}/`}
                image={service.heroImage}
                size={layoutMap[service.slug].size}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
