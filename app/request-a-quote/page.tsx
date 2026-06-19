import { createMetadata } from "@/lib/metadata";
import { company } from "@/data/site-config";
import { PageHero } from "@/components/shared/page-hero";
import { QuoteForm } from "@/components/shared/quote-form";
import { Phone, Mail, MapPin } from "lucide-react";

export const metadata = createMetadata({
  title: "Request a Quote",
  pathname: "/request-a-quote/",
});

export default function RequestQuotePage() {
  return (
    <>
      <PageHero
        label="Request a Quote"
        title="Tell us what you need to move"
        description="Share the cargo details, origin, destination and preferred delivery date. Our team will review the information and contact you about the appropriate transport solution."
      />

      <section className="bg-soft-blue py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <QuoteForm />
            </div>
            <div className="lg:col-span-1">
              <div className="bg-deep-navy text-white p-6 lg:p-8 rounded-2xl sticky top-28">
                <h2 className="text-xl font-bold heading-font">
                  Contact us directly
                </h2>
                <p className="mt-3 text-white/70 text-sm">
                  Prefer to talk? Reach our team by phone or email.
                </p>
                <div className="mt-6 space-y-4">
                  <a
                    href={`tel:${company.phones[0].replace(/\s/g, "")}`}
                    className="flex items-center gap-3 text-white/90 hover:text-brand-cyan transition-colors"
                  >
                    <Phone className="h-5 w-5 text-brand-cyan" />
                    {company.phones[0]}
                  </a>
                  <a
                    href={`tel:${company.phones[1].replace(/\s/g, "")}`}
                    className="flex items-center gap-3 text-white/90 hover:text-brand-cyan transition-colors"
                  >
                    <Phone className="h-5 w-5 text-brand-cyan" />
                    {company.phones[1]}
                  </a>
                  <a
                    href={`mailto:${company.email}`}
                    className="flex items-center gap-3 text-white/90 hover:text-brand-cyan transition-colors"
                  >
                    <Mail className="h-5 w-5 text-brand-cyan" />
                    {company.email}
                  </a>
                  <span className="flex items-start gap-3 text-white/90">
                    <MapPin className="h-5 w-5 text-brand-cyan mt-0.5" />
                    {company.location}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
