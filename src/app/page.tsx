"use client";

import {
  Header,
  HeroSection,
  BelieveSection,
  ScrollingBanner,
  Footer,
  ScrollProgress,
  FndrsSection,
} from "@/components";
import { BestSellersSection } from "@/components/sections/BestSellersSection";
import { SmoothScrollWrapper } from "@/components/layout/SmoothScrollWrapper";
import { SectionTransition } from "@/components/ui/SectionTransition";

export default function HomePage() {
  return (
    <SmoothScrollWrapper>
      <ScrollProgress />
      <main className="bg-cream-200 min-h-screen">
        <Header />
        <HeroSection />
        <ScrollingBanner />
        <SectionTransition delay={200}>
          <BestSellersSection />
        </SectionTransition>
        <SectionTransition delay={300}>
          <BelieveSection />
        </SectionTransition>

        <Footer />
      </main>
    </SmoothScrollWrapper>
  );
}
