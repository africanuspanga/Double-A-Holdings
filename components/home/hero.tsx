"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ShieldCheck, Clock3, Users } from "lucide-react";
import { company } from "@/data/site-config";
import { siteAssets } from "@/data/assets";
import { Button } from "@/components/shared/button";

const features = [
  { icon: ShieldCheck, label: "Reliable", text: "Count on us every time" },
  { icon: Users, label: "Professional", text: "Experienced and trusted service" },
  { icon: Clock3, label: "Dedicated", text: "Focused on your success" },
];

export function Hero() {
  return (
    <section className="relative bg-deep-navy text-white overflow-hidden">
      <div className="relative mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 min-h-[650px] lg:min-h-[750px]">
          {/* Content area */}
          <div className="relative z-10 flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-widest text-brand-cyan"
            >
              <span className="h-px w-6 bg-brand-cyan" />
              Transport and Logistics Solutions
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold heading-font tracking-tight display-heading"
            >
              We deliver{" "}
              <span className="text-brand-cyan">quality</span>, safety and
              reliability.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 text-lg lg:text-xl text-white/80 max-w-xl leading-relaxed"
            >
              {company.name} provides dependable road, sea and air transport
              solutions supported by warehousing, customs clearance and
              end-to-end logistics coordination.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <Button
                href="/request-a-quote/"
                variant="primary"
                size="lg"
                showArrow
              >
                Request a Quote
              </Button>
              <Button href="/services/" variant="white" size="lg">
                Explore Our Services
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-10 pt-8 border-t border-white/10"
            >
              <p className="text-xl font-bold heading-font">
                Your Cargo. Our Commitment.
              </p>
              <p className="mt-2 text-white/70 max-w-md">
                Reliable transport solutions designed to move your business
                forward.
              </p>
            </motion.div>

            {/* Route decoration */}
            <div className="hidden lg:block absolute top-1/2 right-0 translate-x-1/2 w-64 h-24 pointer-events-none">
              <svg viewBox="0 0 300 100" className="w-full h-full">
                <motion.path
                  d="M 0 80 Q 80 80 120 60 T 240 40 L 300 30"
                  fill="none"
                  stroke="#16a3df"
                  strokeWidth="2"
                  strokeDasharray="8 6"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 0.8 }}
                />
                <motion.circle
                  cx="0"
                  cy="80"
                  r="5"
                  fill="#16a3df"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                />
                <motion.circle
                  cx="120"
                  cy="60"
                  r="5"
                  fill="#16a3df"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.8 }}
                />
                <motion.polygon
                  points="290,25 300,30 290,35"
                  fill="#16a3df"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.1 }}
                />
              </svg>
            </div>
          </div>

          {/* Visual area */}
          <div className="relative lg:absolute lg:inset-y-0 lg:right-0 lg:w-[55%] overflow-hidden">
            <div
              className="absolute inset-0 lg:-left-24 bg-deep-navy"
              style={{
                clipPath:
                  "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
              }}
            />
            <div
              className="relative h-72 sm:h-96 lg:h-full w-full"
              style={{
                clipPath:
                  "polygon(0 0, 100% 0, 100% 100%, 12% 100%)",
              }}
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                poster={siteAssets.heroPoster}
                className="hidden lg:block absolute inset-0 h-full w-full object-cover"
              >
                <source src={siteAssets.heroVideo} type="video/mp4" />
              </video>
              <Image
                src={siteAssets.heroPoster}
                alt="Cargo truck on an open highway"
                fill
                priority
                className="block lg:hidden absolute inset-0 h-full w-full object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-deep-navy/80 via-deep-navy/20 to-transparent lg:from-deep-navy/60" />
            </div>
          </div>
        </div>
      </div>

      {/* Micro features */}
      <div className="relative z-20 bg-white text-brand-black border-t border-border-blue">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border-blue">
            {features.map((feature, index) => (
              <motion.div
                key={feature.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 py-6 sm:px-6 lg:px-10"
              >
                <feature.icon className="h-6 w-6 text-brand-cyan" />
                <div>
                  <p className="font-bold text-brand-navy heading-font">
                    {feature.label}
                  </p>
                  <p className="text-sm text-slate-text">{feature.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
