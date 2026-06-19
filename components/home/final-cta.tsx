"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { company } from "@/data/site-config";
import { Button } from "@/components/shared/button";

export function FinalCta() {
  return (
    <section className="relative bg-brand-blue text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-brand-blue to-brand-navy" />
      {/* Angled cyan shape */}
      <div
        className="absolute top-0 right-0 h-full w-1/3 bg-brand-cyan/20"
        style={{ clipPath: "polygon(30% 0, 100% 0, 100% 100%, 0 100%)" }}
      />
      {/* Faded truck silhouette */}
      <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none">
        <svg
          width="600"
          height="300"
          viewBox="0 0 600 300"
          fill="currentColor"
          className="text-white"
        >
          <path d="M50 180h300v60h-50v-30h-20v30H50v-60zM380 150h120l60 50v40h-40v-30h-40v30H380V150z" />
          <circle cx="120" cy="255" r="35" />
          <circle cx="460" cy="255" r="35" />
        </svg>
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold heading-font tracking-tight display-heading"
          >
            Tell us what you need to move
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-lg text-white/90 max-w-2xl leading-relaxed"
          >
            Share the cargo details, origin, destination and preferred delivery
            date. Our team will review the information and contact you about the
            appropriate transport solution.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-5"
          >
            <Button
              href="/request-a-quote/"
              variant="primary"
              size="lg"
              showArrow
            >
              Request a Transport Quote
            </Button>
            <a
              href={`tel:${company.phones[0].replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 text-white font-semibold hover:text-brand-cyan transition-colors"
            >
              <Phone className="h-5 w-5" />
              Call {company.phones[0]}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
