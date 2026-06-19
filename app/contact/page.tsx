import { createMetadata } from "@/lib/metadata";
import { company } from "@/data/site-config";
import { PageHero } from "@/components/shared/page-hero";
import { ContactForm } from "@/components/shared/contact-form";
import { Button } from "@/components/shared/button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const metadata = createMetadata({
  title: "Contact",
  pathname: "/contact/",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Contact Us"
        title="Let’s move your cargo forward"
        description="Contact Double A Holdings Limited to discuss road transport, freight, customs clearance, warehousing, distribution or end-to-end logistics requirements."
      />

      <section className="bg-soft-blue py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white p-6 lg:p-8 rounded-2xl border border-border-blue shadow-sm">
                <h2 className="text-xl font-bold heading-font text-brand-navy">
                  Contact information
                </h2>
                <div className="mt-6 space-y-5">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-blue">
                      Email
                    </span>
                    <a
                      href={`mailto:${company.email}`}
                      className="mt-1 flex items-center gap-2 text-brand-navy font-medium hover:text-brand-blue"
                    >
                      <Mail className="h-4 w-4 text-brand-cyan" />
                      {company.email}
                    </a>
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-blue">
                      Telephone
                    </span>
                    <div className="mt-1 space-y-2">
                      {company.phones.map((phone) => (
                        <a
                          key={phone}
                          href={`tel:${phone.replace(/\s/g, "")}`}
                          className="flex items-center gap-2 text-brand-navy font-medium hover:text-brand-blue"
                        >
                          <Phone className="h-4 w-4 text-brand-cyan" />
                          {phone}
                        </a>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-blue">
                      Location
                    </span>
                    <span className="mt-1 flex items-start gap-2 text-brand-navy font-medium">
                      <MapPin className="h-4 w-4 text-brand-cyan mt-0.5" />
                      {company.location}
                    </span>
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-blue">
                      Office hours
                    </span>
                    <span className="mt-1 flex items-start gap-2 text-brand-navy font-medium">
                      <Clock className="h-4 w-4 text-brand-cyan mt-0.5" />
                      {/* TODO: Replace with verified office hours */}
                      Monday – Friday: 08:00 – 17:00
                    </span>
                  </div>
                </div>
                <div className="mt-8 flex flex-col gap-3">
                  {company.phones.map((phone) => (
                    <Button
                      key={phone}
                      href={`tel:${phone.replace(/\s/g, "")}`}
                      variant="secondary"
                      size="md"
                      className="w-full"
                    >
                      <Phone className="h-4 w-4" />
                      Call {phone}
                    </Button>
                  ))}
                  <Button
                    href={`mailto:${company.email}`}
                    variant="outline"
                    size="md"
                    className="w-full"
                  >
                    <Mail className="h-4 w-4" />
                    Email us
                  </Button>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="bg-white p-6 rounded-2xl border border-border-blue shadow-sm">
                <h3 className="font-bold heading-font text-brand-navy">
                  Our location
                </h3>
                <p className="mt-2 text-sm text-slate-text">
                  {/* TODO: Add verified office address or embedded map */}
                  Map placeholder — Dar es Salaam, Tanzania
                </p>
                <div className="mt-4 h-40 bg-surface-grey rounded-xl flex items-center justify-center border border-border-blue">
                  <MapPin className="h-8 w-8 text-brand-cyan" />
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
