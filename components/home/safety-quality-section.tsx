"use client";

import { motion } from "framer-motion";
import { Shield, Clock, Award, Lock } from "lucide-react";

const principles = [
  {
    icon: Clock,
    title: "Delivery",
    description: "On-time service remains a central part of the company promise.",
  },
  {
    icon: Award,
    title: "Quality",
    description:
      "Each transport assignment should be coordinated professionally and with attention to detail.",
  },
  {
    icon: Lock,
    title: "Safety",
    description:
      "Cargo safety and responsible transportation remain priorities throughout the journey.",
  },
];

export function SafetyQualitySection() {
  return (
    <section className="relative bg-deep-navy text-white overflow-hidden py-20 lg:py-28">
      <div className="absolute inset-0 bg-gradient-to-br from-deep-navy via-brand-navy to-brand-blue opacity-90" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-widest text-brand-cyan">
              <span className="h-px w-6 bg-brand-cyan" />
              Quality and Safety
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold heading-font tracking-tight display-heading">
              A dependable approach to every shipment
            </h2>
            <p className="mt-6 text-white/80 leading-relaxed max-w-xl">
              Double A Holdings Limited places strong emphasis on responsible
              cargo handling, operational communication and reliable transport
              coordination. From the initial enquiry to final delivery, each
              shipment should be approached with attention to cargo
              requirements, route planning and client expectations.
            </p>
          </div>

          <div className="relative">
            {/* Shield outline */}
            <div className="absolute -top-10 -right-10 opacity-10">
              <Shield className="h-64 w-64 lg:h-80 lg:w-80 text-brand-blue" strokeWidth={1} />
            </div>
            <div className="relative space-y-5">
              {principles.map((principle, index) => (
                <motion.div
                  key={principle.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="flex items-start gap-5 bg-white/5 border border-white/10 p-5 rounded-xl"
                >
                  <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-lg bg-brand-cyan/10 text-brand-cyan">
                    <principle.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold heading-font">
                      {principle.title}
                    </h3>
                    <p className="mt-1 text-white/70 leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
