import { createMetadata } from "@/lib/metadata";
import { company } from "@/data/site-config";
import { PageHero } from "@/components/shared/page-hero";

export const metadata = createMetadata({
  title: "Terms and Conditions",
  pathname: "/terms-and-conditions/",
});

export default function TermsPage() {
  return (
    <>
      <PageHero
        label="Legal"
        title="Terms and Conditions"
        description="Please read these terms carefully before using our website or requesting our services."
      />
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 prose prose-lg text-slate-text">
          <p>
            These Terms and Conditions govern your use of the {company.name}{" "}
            website and the logistics and transport services we coordinate. By
            accessing the website or submitting an enquiry, you agree to these
            terms.
          </p>

          <h2 className="text-2xl font-bold heading-font text-brand-navy mt-10 mb-4">
            Services
          </h2>
          <p>
            We coordinate road transport, maritime transport, air freight,
            warehousing and distribution support, heavy and bulk cargo
            transport and end-to-end logistics solutions based on the
            information you provide. Service availability and scope are
            confirmed on a case-by-case basis.
          </p>

          <h2 className="text-2xl font-bold heading-font text-brand-navy mt-10 mb-4">
            Quotations
          </h2>
          <p>
            Quotations are provided based on the cargo details, route and
            service requirements supplied by the client. Final pricing and
            terms are confirmed before any transport or logistics service
            begins.
          </p>

          <h2 className="text-2xl font-bold heading-font text-brand-navy mt-10 mb-4">
            Liability
          </h2>
          <p>
            We take reasonable care in coordinating cargo movement. Liability
            for loss or damage is limited to the terms agreed in the specific
            service contract and applicable law.
          </p>

          <h2 className="text-2xl font-bold heading-font text-brand-navy mt-10 mb-4">
            Website content
          </h2>
          <p>
            The content on this website is for general information purposes.
            While we aim to keep information accurate, we do not guarantee that
            it is complete, current or error-free.
          </p>

          <h2 className="text-2xl font-bold heading-font text-brand-navy mt-10 mb-4">
            Changes to terms
          </h2>
          <p>
            We may update these Terms and Conditions from time to time. Please
            review this page periodically for changes.
          </p>

          <h2 className="text-2xl font-bold heading-font text-brand-navy mt-10 mb-4">
            Contact us
          </h2>
          <p>
            For questions about these terms, please contact us at{" "}
            <a
              href={`mailto:${company.email}`}
              className="text-brand-blue hover:text-brand-cyan"
            >
              {company.email}
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
