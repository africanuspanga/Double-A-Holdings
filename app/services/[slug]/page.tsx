import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  Truck,
  Ship,
  Plane,
  Warehouse,
  FileCheck,
  Route,
  ArrowRight,
  Check,
} from "lucide-react";
import { createMetadata } from "@/lib/metadata";
import {
  getServiceBySlug,
  getAllServiceSlugs,
  type Service,
} from "@/data/services";
import { company, site } from "@/data/site-config";
import { serviceSchema, breadcrumbSchema } from "@/lib/schema";
import { PageHero } from "@/components/shared/page-hero";
import { SectionLabel } from "@/components/shared/section-label";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/shared/button";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Truck,
  Ship,
  Plane,
  Warehouse,
  FileCheck,
  Route,
};

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return createMetadata({
    title: service.title,
    description: service.shortDescription,
    pathname: `/services/${slug}/`,
  });
}

function ServiceIcon({ iconName }: { iconName: string }) {
  const Icon = iconMap[iconName] || Truck;
  return <Icon className="h-8 w-8 text-brand-cyan" />;
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const related = service.relatedServices
    .map((s) => getServiceBySlug(s))
    .filter((s): s is Service => Boolean(s));

  const schema = serviceSchema(slug);
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services/" },
    { name: service.title, path: `/services/${slug}/` },
  ]);

  return (
    <>
      <PageHero
        label={service.title}
        title={service.title}
        description={service.shortDescription}
      />

      {/* Introduction */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-72 lg:h-[28rem] rounded-xl overflow-hidden order-2 lg:order-1">
              <Image
                src={service.heroImage}
                alt={`${service.title} service`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-xl bg-soft-blue mb-6">
                <ServiceIcon iconName={service.iconName} />
              </div>
              <SectionHeading as="h2">
                {service.title} coordination
              </SectionHeading>
              <p className="mt-6 text-lg text-slate-text leading-relaxed">
                {service.introduction}
              </p>
              {service.disclaimer && (
                <p className="mt-4 text-sm text-slate-text bg-surface-grey p-4 rounded-lg border border-border-blue">
                  {service.disclaimer}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-soft-blue py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionLabel>Capabilities</SectionLabel>
          <SectionHeading className="mt-4">What we coordinate</SectionHeading>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.capabilities.map((capability) => (
              <div
                key={capability}
                className="flex items-start gap-3 p-5 bg-white border border-border-blue rounded-xl"
              >
                <Check className="h-5 w-5 flex-shrink-0 text-brand-cyan mt-0.5" />
                <span className="text-brand-navy font-medium">{capability}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <SectionLabel>Suitable For</SectionLabel>
              <SectionHeading className="mt-4">
                Why clients choose this service
              </SectionHeading>
              <p className="mt-6 text-slate-text leading-relaxed">
                {service.title} is suited to businesses that need professional
                coordination, clear communication and dependable handling for
                their cargo.
              </p>
            </div>
            <div className="space-y-4">
              {service.benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-3 p-4 border border-border-blue rounded-xl"
                >
                  <ArrowRight className="h-5 w-5 text-brand-cyan" />
                  <span className="font-semibold text-brand-navy">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-deep-navy text-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionLabel light>Process</SectionLabel>
          <SectionHeading light className="mt-4">
            How {service.title.toLowerCase()} works
          </SectionHeading>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {service.process.map((step, index) => (
              <div
                key={step}
                className="relative p-6 bg-white/5 border border-white/10 rounded-xl"
              >
                <span className="text-3xl font-extrabold heading-font text-brand-cyan">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-4 text-white/90 text-sm leading-relaxed">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Double A */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionLabel>Why Double A</SectionLabel>
          <SectionHeading className="mt-4">
            Professional transport backed by a clear commitment
          </SectionHeading>
          <p className="mt-6 text-slate-text max-w-3xl leading-relaxed">
            We coordinate transport services around your cargo requirements,
            expected route and delivery priorities. Our approach emphasizes
            clear communication, responsible handling and practical logistics
            coordination.
          </p>
        </div>
      </section>

      {/* Related services */}
      {related.length > 0 && (
        <section className="bg-soft-blue py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionLabel>Related Services</SectionLabel>
            <SectionHeading className="mt-4">
              Explore more transport solutions
            </SectionHeading>
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {related.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/services/${rel.slug}/`}
                  className="group p-6 bg-white border border-border-blue rounded-xl hover:border-brand-cyan transition-colors"
                >
                  <h3 className="text-xl font-bold heading-font text-brand-navy group-hover:text-brand-blue">
                    {rel.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-text">
                    {rel.shortDescription}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-brand-cyan">
                    Explore
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-brand-blue text-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold heading-font">
            Request a {service.title.toLowerCase()} quote
          </h2>
          <p className="mt-5 text-white/90 max-w-2xl mx-auto">
            Tell us about your cargo, route and timeline. Our team will review
            the details and contact you about the appropriate solution.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/request-a-quote/" variant="primary" size="lg" showArrow>
              Request a Quote
            </Button>
            <Button href="/contact/" variant="white" size="lg">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
    </>
  );
}
