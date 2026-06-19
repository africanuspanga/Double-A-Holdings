import { createMetadata } from "@/lib/metadata";
import { Hero } from "@/components/home/hero";
import { PromiseStrip } from "@/components/home/promise-strip";
import { CompanyIntro } from "@/components/home/company-intro";
import { ServicesGrid } from "@/components/home/services-grid";
import { RoadFeatureSection } from "@/components/home/road-feature-section";
import { TransportNetwork } from "@/components/home/transport-network";
import { WhyDoubleA } from "@/components/home/why-double-a";
import { SafetyQualitySection } from "@/components/home/safety-quality-section";
import { ValuesSection } from "@/components/home/values-section";
import { IndustriesSection } from "@/components/home/industries-section";
import { FinalCta } from "@/components/home/final-cta";

export const metadata = createMetadata({
  title: "Transport and Logistics Tanzania",
  pathname: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <PromiseStrip />
      <CompanyIntro />
      <ServicesGrid />
      <RoadFeatureSection />
      <TransportNetwork />
      <WhyDoubleA />
      <SafetyQualitySection />
      <ValuesSection />
      <IndustriesSection />
      <FinalCta />
    </>
  );
}
