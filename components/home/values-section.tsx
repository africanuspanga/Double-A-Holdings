"use client";

import { motion } from "framer-motion";
import { companyValues } from "@/data/company-values";

export function ValuesSection() {
  return (
    <section className="bg-soft-blue py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold heading-font tracking-tight text-brand-navy display-heading mb-12 lg:mb-16">
          Driven by values that keep business moving
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-border-blue">
          {companyValues.map((value, index) => (
            <motion.div
              key={value.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="px-4 py-8 lg:py-10 text-center lg:text-left"
            >
              <span
                className="text-6xl lg:text-7xl font-extrabold heading-font text-transparent leading-none"
                style={{ WebkitTextStroke: "2px #0759ad" }}
              >
                {value.number}
              </span>
              <h3 className="mt-4 text-xl font-bold heading-font text-brand-navy">
                {value.title}
              </h3>
              <p className="mt-2 text-sm text-slate-text leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
