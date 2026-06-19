"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteAssets } from "@/data/assets";
import { SectionLabel } from "@/components/shared/section-label";
import { SectionHeading } from "@/components/shared/section-heading";

export function CompanyIntro() {
  return (
    <section className="relative bg-white overflow-hidden py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          {/* Section number */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <span className="text-7xl lg:text-9xl font-extrabold heading-font text-border-blue leading-none">
              01
            </span>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <SectionLabel>About Double A</SectionLabel>
            <SectionHeading className="mt-4">
              Transport solutions built around your business
            </SectionHeading>
            <div className="mt-6 space-y-4 text-slate-text leading-relaxed">
              <p>
                Double A Holdings Limited is a Tanzania-based transport and
                logistics company serving businesses that require dependable
                cargo movement and coordinated logistics support.
              </p>
              <p>
                Our services combine road transport, maritime transport, air
                freight, warehousing, distribution, customs-clearance assistance
                and end-to-end logistics coordination.
              </p>
              <p>
                We focus on quality, safety and reliable service while helping
                customers move cargo efficiently from origin to destination.
              </p>
            </div>
            <Link
              href="/about/"
              className="mt-8 inline-flex items-center gap-2 font-bold text-brand-blue hover:text-brand-cyan transition-colors"
            >
              Discover Our Company
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

          {/* Image with decorative A */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative lg:col-span-5"
          >
            <span
              aria-hidden="true"
              className="absolute -top-10 -right-6 text-[14rem] leading-none font-extrabold heading-font text-transparent select-none pointer-events-none"
              style={{
                WebkitTextStroke: "2px #cfe2f2",
              }}
            >
              A
            </span>
            <div className="relative h-[420px] lg:h-[560px] rounded-xl overflow-hidden">
              <Image
                src={siteAssets.about}
                alt="Logistics team coordinating cargo transport"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/30 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
