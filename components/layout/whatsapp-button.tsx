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
      className="fixed bottom-5 right-5 z-40 flex items-center justify-center h-14 w-14 rounded-full bg-[#25D366] shadow-lg hover:scale-110 hover:shadow-xl transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#25D366]"
      aria-label="Chat with us on WhatsApp"
    >
      <Image
        src={siteAssets.whatsapp}
        alt=""
        fill
        className="object-cover p-0"
        sizes="56px"
      />
    </a>
  );
}
