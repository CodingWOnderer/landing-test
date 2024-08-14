import HeroSection from "@/components/hero-section";
import { SphereMask } from "@/components/ui/sphere-mask";
import ClientSection from "@/components/client-section";
import FeatureSection from "@/components/features/FeatureSection";
import InspirationSection from "@/components/inspiration-section";
import AppSection from "@/components/app-section";
import LatestInsightSection from "@/components/latest-insight-section";
import StudioSection from "@/components/stydio-section";
import AffiliateSection from "@/components/AffliatedSection";

export default function Home() {
  return (
    <div className="dark">
      <HeroSection />
      <ClientSection />
      <SphereMask />
      <div className="max-w-7xl mx-auto">
        <p className=" max-w-3xl text-center mx-auto text-[#f4f4f4]">
          CapCons allows people to have control over who they share their
          stories and experiences with. Your stories will reach to 100% of the
          people in your circles.
        </p>
      </div>
      <FeatureSection />
      <InspirationSection />
      <LatestInsightSection />
      <StudioSection />
      <AppSection />
      <AffiliateSection />
    </div>
  );
}
