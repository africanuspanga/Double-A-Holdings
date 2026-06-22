"use client";

import { motion } from "framer-motion";
import { services } from "@/data/services";
import { SectionLabel } from "@/components/shared/section-label";
import { SectionHeading } from "@/components/shared/section-heading";
import { ServicePanel } from "@/components/shared/service-panel";

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

export function ServicesGrid() {
  return (
    <section className="bg-soft-blue py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 lg:mb-16">
          <SectionLabel>Our Services</SectionLabel>
          <SectionHeading className="mt-4">
            One logistics partner. Multiple transport solutions.
          </SectionHeading>
          <p className="mt-5 text-slate-text text-lg leading-relaxed">
            From local road transport to international freight and final
            distribution, Double A Holdings Limited coordinates the services
            required to move cargo safely and efficiently.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 auto-rows-min"
        >
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
        </motion.div>
      </div>
    </section>
  );
}
