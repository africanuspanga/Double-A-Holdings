"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Phone, MapPin } from "lucide-react";
import { mainNav, serviceNav } from "@/data/navigation";
import { company } from "@/data/site-config";
import { Button } from "@/components/shared/button";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const lastFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (open) {
      lastFocused.current = document.activeElement as HTMLElement;
      document.body.style.overflow = "hidden";
      const firstFocusable = panelRef.current?.querySelector<HTMLElement>(
        'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
      );
      firstFocusable?.focus();
    } else {
      document.body.style.overflow = "";
      lastFocused.current?.focus();
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (!open) return;
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key === "Tab" && panelRef.current) {
        const focusables = Array.from(
          panelRef.current.querySelectorAll<HTMLElement>(
            'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
          )
        ).filter((el) => !el.hasAttribute("disabled"));
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          ref={panelRef}
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed inset-0 z-[100] bg-deep-navy text-white overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center justify-between">
              <span className="text-xl font-bold heading-font tracking-tight">
                {company.name}
              </span>
              <button
                type="button"
                onClick={onClose}
                className="p-2 text-white hover:text-brand-cyan focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan rounded-lg"
                aria-label="Close navigation menu"
              >
                <X className="h-8 w-8" />
              </button>
            </div>

            <nav className="mt-12 flex flex-col gap-2">
              {mainNav.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className="group flex items-baseline gap-4 py-4 border-b border-white/10"
                >
                  <span className="text-brand-cyan font-bold text-sm">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-3xl sm:text-4xl font-bold heading-font tracking-tight group-hover:text-brand-cyan transition-colors">
                    {item.label}
                  </span>
                </Link>
              ))}
            </nav>

            <div className="mt-10">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-cyan mb-4">
                Services
              </h3>
              <div className="grid gap-2 sm:grid-cols-2">
                {serviceNav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={onClose}
                    className="text-white/80 hover:text-brand-cyan transition-colors py-1"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <Button
                href="/request-a-quote/"
                onClick={onClose}
                variant="primary"
                size="lg"
                className="w-full sm:w-auto"
              >
                Request a Quote
              </Button>
              <Button
                href="/contact/"
                onClick={onClose}
                variant="white"
                size="lg"
                className="w-full sm:w-auto"
              >
                Contact Us
              </Button>
            </div>

            <div className="mt-12 grid gap-4 text-white/70 text-sm">
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-brand-cyan" />
                {company.location}
              </span>
              <a
                href={`mailto:${company.email}`}
                className="inline-flex items-center gap-2 hover:text-brand-cyan transition-colors"
              >
                <Mail className="h-4 w-4 text-brand-cyan" />
                {company.email}
              </a>
              {company.phones.map((phone) => (
                <a
                  key={phone}
                  href={`tel:${phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-2 hover:text-brand-cyan transition-colors"
                >
                  <Phone className="h-4 w-4 text-brand-cyan" />
                  {phone}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
