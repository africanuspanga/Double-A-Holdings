import { createMetadata } from "@/lib/metadata";
import { company } from "@/data/site-config";
import { companyValues } from "@/data/company-values";
import { serviceNav } from "@/data/navigation";
import { siteAssets } from "@/data/assets";
import { PageHero } from "@/components/shared/page-hero";
import { Button } from "@/components/shared/button";
import { SectionLabel } from "@/components/shared/section-label";
import { SectionHeading } from "@/components/shared/section-heading";
import { TransportNetwork } from "@/components/home/transport-network";
import Image from "next/image";
import Link from "next/link";
import { Check, Phone, Mail, MapPin } from "lucide-react";

export const metadata = createMetadata({
  title: "About",
  pathname: "/about/",
});

const whyPanels = [
  {
    title: "Reliable",
    headline: "Count on us every time.",
    description:
      "We coordinate transport services around cargo requirements, expected route and delivery priorities.",
  },
  {
    title: "Professional",
    headline: "Experienced support and trusted service.",
    description:
      "Our approach emphasizes clear communication, responsible handling and practical transport coordination.",
  },
  {
    title: "Dedicated",
    headline: "Focused on your success.",
    description:
      "We work to understand each client’s requirements and organize the appropriate logistics solution.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About Us"
        title="Moving businesses through dependable transport"
        description={`${company.name} is a Tanzania-based transport and logistics company focused on helping businesses move cargo through reliable, safe and professionally coordinated services.`}
      />

      {/* Company overview */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionLabel>Company Overview</SectionLabel>
              <SectionHeading className="mt-4">
                Transport solutions built around your business
              </SectionHeading>
              <p className="mt-6 text-slate-text leading-relaxed">
                {company.name} provides road transport, maritime transport,
                air-freight coordination, warehousing and distribution support,
                heavy and bulk cargo transport and end-to-end logistics
                solutions.
              </p>
              <p className="mt-4 text-slate-text leading-relaxed">
                Our approach is guided by integrity, reliability, teamwork,
                innovation and excellence. We work to coordinate cargo movement
                around each client’s requirements while maintaining clear
                communication from pickup through final delivery.
              </p>
            </div>
            <div className="relative h-80 lg:h-[28rem] rounded-xl overflow-hidden">
              <Image
                src={siteAssets.about}
                alt="Double A Holdings team"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Transport philosophy */}
      <section className="bg-soft-blue py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <SectionLabel>Our Philosophy</SectionLabel>
            <SectionHeading className="mt-4">
              Coordinated with purpose
            </SectionHeading>
            <p className="mt-6 text-lg text-slate-text leading-relaxed">
              We believe cargo should be handled with care, clarity and a clear
              plan. Every shipment receives attention to its route, timing and
              handling requirements, so clients can focus on their business.
            </p>
          </div>
        </div>
      </section>

      {/* Quality, safety and delivery */}
      <section className="bg-deep-navy text-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              { title: "Delivery", text: "On-time service remains a central part of the company promise." },
              { title: "Quality", text: "Each transport assignment is coordinated professionally and with attention to detail." },
              { title: "Safety", text: "Cargo safety and responsible transportation remain priorities throughout the journey." },
            ].map((item, i) => (
              <div
                key={item.title}
                className="p-6 lg:p-8 border border-white/10 rounded-xl bg-white/5"
              >
                <span className="text-4xl font-extrabold heading-font text-brand-cyan">
                  0{i + 1}
                </span>
                <h3 className="mt-4 text-2xl font-bold heading-font">
                  {item.title}
                </h3>
                <p className="mt-3 text-white/80 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service capabilities */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionLabel>Service Capabilities</SectionLabel>
          <SectionHeading className="mt-4">
            One partner. Multiple transport solutions.
          </SectionHeading>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {serviceNav.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group flex items-center justify-between p-5 border border-border-blue rounded-xl bg-soft-blue hover:border-brand-cyan transition-colors"
              >
                <span className="font-semibold text-brand-navy group-hover:text-brand-blue">
                  {service.label}
                </span>
                <Check className="h-5 w-5 text-brand-cyan opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Company values */}
      <section className="bg-soft-blue py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionLabel>Values</SectionLabel>
          <SectionHeading className="mt-4">
            Driven by values that keep business moving
          </SectionHeading>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {companyValues.map((value) => (
              <div key={value.number} className="bg-white p-6 rounded-xl border border-border-blue">
                <span
                  className="text-5xl font-extrabold heading-font text-transparent"
                  style={{ WebkitTextStroke: "2px #0759ad" }}
                >
                  {value.number}
                </span>
                <h3 className="mt-4 text-xl font-bold heading-font text-brand-navy">
                  {value.title}
                </h3>
                <p className="mt-2 text-slate-text text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <TransportNetwork />

      {/* Why choose Double A */}
      <section id="why-us" className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionLabel>Why Double A</SectionLabel>
          <SectionHeading className="mt-4">
            Professional transport backed by a clear commitment
          </SectionHeading>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {whyPanels.map((panel) => (
              <div
                key={panel.title}
                className="p-6 lg:p-8 border border-border-blue rounded-xl hover:shadow-md transition-shadow"
              >
                <h3 className="text-2xl font-bold heading-font text-brand-navy">
                  {panel.title}
                </h3>
                <p className="mt-3 text-lg font-semibold text-brand-blue">
                  {panel.headline}
                </p>
                <p className="mt-3 text-slate-text">{panel.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-brand-blue text-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold heading-font">
            Let’s move your cargo forward
          </h2>
          <p className="mt-5 text-white/90 max-w-2xl mx-auto">
            Contact Double A Holdings Limited to discuss road transport,
            freight, heavy and bulk cargo, warehousing, distribution or
            end-to-end logistics requirements.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/request-a-quote/" variant="primary" size="lg">
              Request a Quote
            </Button>
            <Button href="/contact/" variant="white" size="lg">
              Contact Our Team
            </Button>
          </div>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-white/80 text-sm">
            <a href={`mailto:${company.email}`} className="inline-flex items-center gap-2 hover:text-white">
              <Mail className="h-4 w-4" />
              {company.email}
            </a>
            <a href={`tel:${company.phones[0].replace(/\s/g, "")}`} className="inline-flex items-center gap-2 hover:text-white">
              <Phone className="h-4 w-4" />
              {company.phones[0]}
            </a>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              {company.location}
            </span>
          </div>
        </div>
      </section>

      {/* Verified info placeholder */}
      <section className="bg-surface-grey py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="p-6 lg:p-8 bg-white border border-border-blue rounded-xl">
            <h2 className="text-xl font-bold heading-font text-brand-navy">
              Company Information
            </h2>
            <p className="mt-2 text-slate-text">
              The following details will be added once verified information is
              supplied:
            </p>
            <ul className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-slate-text">
              {[
                "Year established",
                "Founder information",
                "Management team",
                "Company registration details",
                "Fleet information",
                "Office locations",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan" />
                  {item}
                </li>
              ))}
            </ul>
            {/* TODO: Replace with verified company information */}
          </div>
        </div>
      </section>
    </>
  );
}
