"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Check } from "lucide-react";
import { siteAssets } from "@/data/assets";
import { SectionLabel } from "@/components/shared/section-label";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/shared/button";

const points = [
  "Flexible cargo movement",
  "Business-to-business transport",
  "Port and warehouse transfers",
  "Coordinated final delivery",
  "Clear client communication",
  "Safety-focused handling",
];

export function RoadFeatureSection() {
  return (
    <section className="relative bg-deep-navy text-white overflow-hidden">
      {/* Full-width image */}
      <div className="relative h-80 sm:h-[28rem] lg:h-[40rem]">
        <Image
          src={siteAssets.heroTruck}
          alt="White cargo truck driving on a highway"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-deep-navy via-deep-navy/70 to-transparent" />
        {/* Cyan route line */}
        <svg
          className="absolute top-1/4 right-0 h-48 w-64 lg:w-96 pointer-events-none"
          viewBox="0 0 400 150"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M 0 120 Q 150 120 220 80 T 400 30"
            fill="none"
            stroke="#16a3df"
            strokeWidth="3"
            strokeDasharray="10 8"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
          />
        </svg>
      </div>

      {/* Content panel */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-32 sm:-mt-40 lg:-mt-64 pb-16 lg:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-deep-navy border border-white/10 p-6 sm:p-10 lg:p-14 max-w-2xl rounded-xl lg:rounded-2xl"
        >
          <SectionLabel light>Road Transport</SectionLabel>
          <SectionHeading light className="mt-4">
            Dependable transport for every mile
          </SectionHeading>
          <p className="mt-5 text-white/80 leading-relaxed">
            Our road-transport solutions are designed to help businesses move
            cargo efficiently between ports, warehouses, business locations and
            final destinations. We coordinate each movement according to the
            shipment requirements, route and expected delivery schedule.
          </p>
          <ul className="mt-8 grid sm:grid-cols-2 gap-3">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-2">
                <Check className="h-5 w-5 flex-shrink-0 text-brand-cyan mt-0.5" />
                <span className="text-white/90 text-sm">{point}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <Button
              href="/request-a-quote/"
              variant="primary"
              size="lg"
              showArrow
            >
              Discuss Your Transport Requirements
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Highway lane graphic */}
      <div className="relative h-10 bg-brand-navy overflow-hidden">
        <svg
          className="absolute inset-0 h-full w-full"
          preserveAspectRatio="none"
          viewBox="0 0 1200 40"
        >
          <rect x="0" y="14" width="1200" height="12" fill="#082d63" />
          <line
            x1="0"
            y1="20"
            x2="1200"
            y2="20"
            stroke="#16a3df"
            strokeWidth="2"
            strokeDasharray="30 30"
          />
        </svg>
      </div>
    </section>
  );
}
