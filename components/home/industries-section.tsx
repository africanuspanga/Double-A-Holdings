"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const industries = [
  "Cargo Shippers and Receivers",
  "Retail and Wholesale Distribution",
  "Manufacturing",
  "Construction and Building Materials",
  "Agriculture and Food Distribution",
  "Automotive",
  "Consumer Goods",
  "International Trade",
  "Small and Medium-Sized Enterprises",
];

export function IndustriesSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-1">
            <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-widest text-brand-blue">
              <span className="h-px w-6 bg-brand-blue" />
              Industries
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold heading-font tracking-tight text-brand-navy display-heading">
              Transport capabilities for growing businesses
            </h2>
            <p className="mt-5 text-slate-text leading-relaxed">
              Our transport and logistics capabilities can support businesses
              operating in a wide range of sectors.
            </p>
          </div>
          <div className="lg:col-span-2">
            <ul className="grid sm:grid-cols-2 gap-3">
              {industries.map((industry, index) => (
                <motion.li
                  key={industry}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-3 p-4 bg-soft-blue rounded-lg border border-border-blue"
                >
                  <ArrowRight className="h-4 w-4 flex-shrink-0 text-brand-cyan" />
                  <span className="font-semibold text-brand-navy">{industry}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
