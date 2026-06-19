"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Clock3, LockKeyhole, Route } from "lucide-react";

const promises = [
  {
    icon: ShieldCheck,
    title: "Safety First",
    description: "Your cargo is treated as a priority throughout its journey.",
  },
  {
    icon: Clock3,
    title: "On Time, Every Time",
    description: "Transport coordination focused on dependable delivery.",
  },
  {
    icon: LockKeyhole,
    title: "Secure and Reliable",
    description: "Cargo handled with care and operational responsibility.",
  },
  {
    icon: Route,
    title: "End-to-End Solutions",
    description: "Support from pickup and transport through clearance and delivery.",
  },
];

export function PromiseStrip() {
  return (
    <section className="bg-white border-b border-border-blue">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {promises.map((promise, index) => (
            <motion.div
              key={promise.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex gap-4 py-8 lg:py-10 lg:px-6 border-b sm:border-b-0 lg:border-r last:border-r-0 border-border-blue"
            >
              <promise.icon className="h-7 w-7 flex-shrink-0 text-brand-blue" />
              <div>
                <h3 className="font-bold text-brand-navy heading-font">
                  {promise.title}
                </h3>
                <p className="mt-1 text-sm text-slate-text leading-relaxed">
                  {promise.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
