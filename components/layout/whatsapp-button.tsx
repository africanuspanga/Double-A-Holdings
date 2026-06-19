"use client";

import Image from "next/image";
import { siteAssets } from "@/data/assets";
import { company } from "@/data/site-config";

export function WhatsAppButton() {
  const message = encodeURIComponent(
    `Hello ${company.name}, I would like to discuss a transport request.`
  );
  return (
    <a
      href={`https://wa.me/${company.whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center h-14 w-14 rounded-full bg-white shadow-lg border border-border-blue hover:scale-105 transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
      aria-label="Chat with us on WhatsApp"
    >
      <Image
        src={siteAssets.whatsapp}
        alt="WhatsApp"
        width={32}
        height={32}
        className="h-8 w-8"
      />
    </a>
  );
}
