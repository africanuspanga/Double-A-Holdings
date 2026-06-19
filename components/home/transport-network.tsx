"use client";

import { motion, useReducedMotion } from "framer-motion";

const stages = [
  { number: "01", title: "Enquiry", description: "The client provides cargo, route and delivery information." },
  { number: "02", title: "Planning", description: "The shipment requirements and suitable transport method are reviewed." },
  { number: "03", title: "Pickup", description: "Cargo collection is coordinated from the agreed origin." },
  { number: "04", title: "Transportation", description: "Cargo moves through the selected road, air or maritime route." },
  { number: "05", title: "Clearance and Handling", description: "Required cargo-clearance and handling processes are coordinated." },
  { number: "06", title: "Delivery", description: "The shipment reaches its agreed final destination." },
];

export function TransportNetwork() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-white py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-20">
          <span className="inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-widest text-brand-blue">
            <span className="h-px w-6 bg-brand-blue" />
            Connected Logistics
            <span className="h-px w-6 bg-brand-blue" />
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold heading-font tracking-tight text-brand-navy display-heading">
            From pickup to final destination
          </h2>
        </div>

        {/* Desktop horizontal route */}
        <div className="hidden lg:block relative">
          <div className="absolute top-[2.25rem] left-0 right-0 h-0.5 bg-border-blue" />
          <motion.div
            className="absolute top-[2.25rem] left-0 h-0.5 bg-brand-cyan"
            initial={{ width: "0%" }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: shouldReduceMotion ? 0 : 1.5, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-[1.5rem] left-0 z-10"
            initial={{ x: 0 }}
            whileInView={{ x: "calc(100vw - 8rem)" }}
            viewport={{ once: true }}
            transition={{ duration: shouldReduceMotion ? 0 : 1.8, ease: "easeInOut" }}
            style={{ maxWidth: "100%" }}
          >
            <div className="h-8 w-10 bg-brand-cyan rounded-sm flex items-center justify-center shadow-md">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#031a38" strokeWidth="3">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </motion.div>
          <div className="relative grid grid-cols-6 gap-4">
            {stages.map((stage, index) => (
              <motion.div
                key={stage.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="mx-auto h-16 w-16 flex items-center justify-center bg-white border-2 border-brand-cyan shadow-sm z-20 relative">
                  <span className="text-xl font-extrabold heading-font text-brand-navy">
                    {stage.number}
                  </span>
                </div>
                <h3 className="mt-5 font-bold heading-font text-brand-navy">
                  {stage.title}
                </h3>
                <p className="mt-2 text-sm text-slate-text px-1">
                  {stage.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile / tablet vertical route */}
        <div className="lg:hidden relative">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border-blue" />
          <motion.div
            className="absolute left-6 top-0 w-0.5 bg-brand-cyan"
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: shouldReduceMotion ? 0 : 1.2 }}
          />
          <div className="space-y-8">
            {stages.map((stage, index) => (
              <motion.div
                key={stage.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-16"
              >
                <div className="absolute left-0 top-0 h-12 w-12 flex items-center justify-center bg-white border-2 border-brand-cyan shadow-sm">
                  <span className="text-lg font-extrabold heading-font text-brand-navy">
                    {stage.number}
                  </span>
                </div>
                <h3 className="font-bold heading-font text-brand-navy">
                  {stage.title}
                </h3>
                <p className="mt-1 text-sm text-slate-text">
                  {stage.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
