import Features from "@/components/FeatureSection";
import Image from "next/image";
import { GlowCapture, Glow } from "@codaworks/react-glow";
import { BackgroundGradientAnimation } from "@/components/Background-gradient-animation";
import HeroSection from "@/components/hero-section";
import Particles from "@/components/ui/particles";
import { SphereMask } from "@/components/ui/sphere-mask";
import ClientSection from "@/components/client-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ClientSection />
      <SphereMask />
      <Features />

    </>
  );
}

// <main className="flex min-h-screen dark bg-background flex-col items-center justify-between md:p-24">

// </main>
