import HeroSection from "@/components/hero-section";
import { SphereMask } from "@/components/ui/sphere-mask";
import ClientSection from "@/components/client-section";
import FeatureSection from "@/components/features/FeatureSection";
import InspirationSection from "@/components/inspiration-section";
import AppSection from "@/components/app-section";
import LatestInsightSection from "@/components/latest-insight-section";
import StudioSection from "@/components/stydio-section";
import { Typography } from "@/components/typography";
import { blogData } from "@/lib/mocks";

export default function Home() {
  return (
    <div className="dark">
      <HeroSection />
      <ClientSection />
      <SphereMask />
      <div className="max-w-7xl mx-auto">
        <Typography
          as={"p"}
          variant={"p"}
          className=" max-w-3xl text-center mx-auto text-[#f4f4f4]"
        >
          CapCons allows people to have control over who they share their
          stories and experiences with. Your stories will reach to 100% of the
          people in your circles.
        </Typography>
      </div>
      <FeatureSection />
      <InspirationSection />
      <LatestInsightSection
        heading="Latest Insights"
        subHeading="Read testimonials from users who have experienced moments of joy, growth, and connection on our platform."
        blogCards={blogData}
        preTag={"Testinomial"}
      />
      <StudioSection />
      <AppSection />
    </div>
  );
}
