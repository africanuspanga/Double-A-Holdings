import Link from "next/link";
import { company } from "@/data/site-config";
import {
  footerCompany,
  footerLegal,
  serviceNav,
} from "@/data/navigation";
import { Button } from "@/components/shared/button";
import { Mail, Phone, MapPin } from "lucide-react";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-deep-navy text-white">
      {/* CTA Strip */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold heading-font tracking-tight">
                Ready to move your cargo?
              </h2>
              <p className="mt-3 text-white/70 max-w-xl">
                Contact Double A Holdings Limited to discuss road transport,
                freight, heavy and bulk cargo and logistics support.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/request-a-quote/" variant="primary" size="lg">
                Request a Quote
              </Button>
              <Button href="/contact/" variant="white" size="lg">
                Contact Our Team
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Company */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-brand-cyan mb-5">
              Company
            </h3>
            <ul className="space-y-3">
              {footerCompany.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/80 hover:text-brand-cyan transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-brand-cyan mb-5">
              Services
            </h3>
            <ul className="space-y-3">
              {serviceNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/80 hover:text-brand-cyan transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-brand-cyan mb-5">
              Contact
            </h3>
            <ul className="space-y-3 text-white/80">
              <li>
                <a
                  href={`mailto:${company.email}`}
                  className="inline-flex items-center gap-2 hover:text-brand-cyan transition-colors"
                >
                  <Mail className="h-4 w-4 text-brand-cyan" />
                  {company.email}
                </a>
              </li>
              {company.phones.map((phone) => (
                <li key={phone}>
                  <a
                    href={`tel:${phone.replace(/\s/g, "")}`}
                    className="inline-flex items-center gap-2 hover:text-brand-cyan transition-colors"
                  >
                    <Phone className="h-4 w-4 text-brand-cyan" />
                    {phone}
                  </a>
                </li>
              ))}
              <li className="inline-flex items-start gap-2">
                <MapPin className="h-4 w-4 text-brand-cyan mt-0.5" />
                {company.location}
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-brand-cyan mb-5">
              Legal
            </h3>
            <ul className="space-y-3">
              {footerLegal.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/80 hover:text-brand-cyan transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Signature & Road Lane */}
      <div className="relative border-t border-white/10 overflow-hidden">
        <div className="absolute inset-x-0 bottom-0 h-12 opacity-20">
          <svg
            className="h-full w-full"
            preserveAspectRatio="none"
            viewBox="0 0 1200 60"
          >
            <rect x="0" y="24" width="1200" height="12" fill="#ffffff" />
            <rect x="0" y="0" width="1200" height="60" fill="none" />
            <line
              x1="0"
              y1="30"
              x2="1200"
              y2="30"
              stroke="#16a3df"
              strokeWidth="2"
              strokeDasharray="40 40"
            />
          </svg>
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-lg font-bold heading-font tracking-tight text-white">
            Moving Goods. Connecting Businesses.
          </p>
          <p className="text-sm text-white/60">
            © {currentYear} {company.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
