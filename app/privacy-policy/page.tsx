import { createMetadata } from "@/lib/metadata";
import { company } from "@/data/site-config";
import { PageHero } from "@/components/shared/page-hero";

export const metadata = createMetadata({
  title: "Privacy Policy",
  pathname: "/privacy-policy/",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        label="Legal"
        title="Privacy Policy"
        description="This page outlines how Double A Holdings Limited handles your information."
      />
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 prose prose-lg text-slate-text">
          <p>
            {company.name} (“we”, “us”, or “our”) is committed to protecting
            your privacy. This Privacy Policy explains how we collect, use, and
            safeguard your personal information when you use our website or
            contact us.
          </p>

          <h2 className="text-2xl font-bold heading-font text-brand-navy mt-10 mb-4">
            Information we collect
          </h2>
          <p>
            We may collect personal information that you voluntarily provide,
            such as your name, company name, email address, phone number and
            message details when you complete a contact or quote form.
          </p>

          <h2 className="text-2xl font-bold heading-font text-brand-navy mt-10 mb-4">
            How we use your information
          </h2>
          <p>
            We use the information you provide to respond to enquiries,
            coordinate transport and logistics services, and communicate with
            you about your requests.
          </p>

          <h2 className="text-2xl font-bold heading-font text-brand-navy mt-10 mb-4">
            Sharing your information
          </h2>
          <p>
            We do not sell your personal information. We may share information
            with trusted partners only when necessary to provide the services
            you have requested.
          </p>

          <h2 className="text-2xl font-bold heading-font text-brand-navy mt-10 mb-4">
            Security
          </h2>
          <p>
            We take reasonable measures to protect your information from
            unauthorised access, alteration, or disclosure.
          </p>

          <h2 className="text-2xl font-bold heading-font text-brand-navy mt-10 mb-4">
            Contact us
          </h2>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at{" "}
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
