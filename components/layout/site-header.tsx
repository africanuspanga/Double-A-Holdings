"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, Mail, Phone, MapPin } from "lucide-react";
import { mainNav } from "@/data/navigation";
import { company } from "@/data/site-config";
import { siteAssets } from "@/data/assets";
import { cn } from "@/lib/utils";
import { Button } from "@/components/shared/button";
import { MobileMenu } from "@/components/layout/mobile-menu";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Utility Bar */}
      <div className="bg-deep-navy text-white text-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center gap-4 lg:gap-6">
              <span className="hidden sm:inline-flex items-center gap-1.5 text-white/80">
                <MapPin className="h-3.5 w-3.5 text-brand-cyan" />
                {company.location}
              </span>
              <a
                href={`mailto:${company.email}`}
                className="inline-flex items-center gap-1.5 text-white/80 hover:text-brand-cyan transition-colors"
              >
                <Mail className="h-3.5 w-3.5 text-brand-cyan" />
                <span className="hidden sm:inline">{company.email}</span>
                <span className="inline sm:hidden">Email</span>
              </a>
            </div>
            <div className="flex items-center gap-4 lg:gap-6">
              {company.phones.map((phone) => (
                <a
                  key={phone}
                  href={`tel:${phone.replace(/\s/g, "")}`}
                  className="hidden md:inline-flex items-center gap-1.5 text-white/80 hover:text-brand-cyan transition-colors"
                >
                  <Phone className="h-3.5 w-3.5 text-brand-cyan" />
                  {phone}
                </a>
              ))}
              <a
                href={`tel:${company.phones[0].replace(/\s/g, "")}`}
                className="md:hidden inline-flex items-center gap-1.5 text-white/80 hover:text-brand-cyan transition-colors"
              >
                <Phone className="h-3.5 w-3.5 text-brand-cyan" />
                Call
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header
        className={cn(
          "sticky top-0 z-50 border-b border-transparent transition-all duration-300",
          scrolled
            ? "bg-white/95 backdrop-blur shadow-sm border-border-blue"
            : "bg-white/90"
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[4.5rem] lg:h-20">
            <Link href="/" className="relative flex items-center gap-3">
              <Image
                src={siteAssets.logo}
                alt={`${company.name} logo`}
                width={160}
                height={48}
                className="h-12 w-auto lg:h-14"
                priority
              />
            </Link>

            <nav className="hidden lg:flex items-center gap-8">
              {mainNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative text-sm font-semibold uppercase tracking-wide text-brand-navy hover:text-brand-blue transition-colors py-2 group"
                >
                  {item.label}
                  <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-brand-cyan transition-all group-hover:w-full" />
                </Link>
              ))}
            </nav>

            <div className="hidden lg:block">
              <Button href="/request-a-quote/" variant="primary" size="md" showArrow>
                Request a Quote
              </Button>
            </div>

            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="lg:hidden inline-flex items-center justify-center p-2 text-brand-navy hover:text-brand-blue focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan rounded-lg"
              aria-expanded={mobileOpen}
              aria-label="Open navigation menu"
            >
              <Menu className="h-7 w-7" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
