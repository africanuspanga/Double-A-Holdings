"use client";

import { motion } from "framer-motion";

const panels = [
  {
    number: "01",
    title: "Reliable",
    headline: "Count on us every time.",
    description:
      "We coordinate transport services around the cargo requirements, expected route and delivery priorities.",
  },
  {
    number: "02",
    title: "Professional",
    headline: "Experienced support and trusted service.",
    description:
      "Our approach emphasizes clear communication, responsible handling and practical transport coordination.",
  },
  {
    number: "03",
    title: "Dedicated",
    headline: "Focused on your success.",
    description:
      "We work to understand each client’s requirements and organize the appropriate logistics solution.",
  },
];

export function WhyDoubleA() {
  return (
    <section id="why-us" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 lg:mb-16">
          <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-widest text-brand-blue">
            <span className="h-px w-6 bg-brand-blue" />
            Why Double A
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold heading-font tracking-tight text-brand-navy display-heading">
            Professional transport backed by a clear commitment
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {panels.map((panel, index) => (
            <motion.div
              key={panel.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative bg-white border border-border-blue p-6 lg:p-8 rounded-xl overflow-hidden group hover:shadow-md transition-shadow"
            >
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-brand-cyan transition-all duration-300 group-hover:w-full" />
              <span className="text-6xl lg:text-7xl font-extrabold heading-font text-brand-blue/10 leading-none">
                {panel.number}
              </span>
              <h3 className="mt-4 text-2xl font-bold heading-font text-brand-navy">
                {panel.title}
              </h3>
              <p className="mt-3 text-lg font-semibold text-brand-blue">
                {panel.headline}
              </p>
              <p className="mt-3 text-slate-text leading-relaxed">
                {panel.description}
              </p>
            </motion.div>
          ))}
        </div>

        <p className="mt-12 text-center text-lg lg:text-xl font-semibold text-brand-navy max-w-2xl mx-auto">
          Your cargo is not simply moved. It is coordinated with purpose.
        </p>
      </div>
    </section>
  );
}
