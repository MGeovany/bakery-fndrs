"use client";

import {
  Header,
  HeroSection,
  BelieveSection,
  ScrollingBanner,
  Footer,
  ScrollProgress,
} from "@/components";
import { SmoothScrollWrapper } from "@/components/layout/SmoothScrollWrapper";
import { SectionTransition } from "@/components/ui/SectionTransition";

export default function HomePage() {
  return (
    <SmoothScrollWrapper>
      <ScrollProgress />
      <main className="bg-cream-200 min-h-screen">
        <Header />
        <SectionTransition>
          <HeroSection />
        </SectionTransition>
        <ScrollingBanner />
        <SectionTransition delay={200}>
          <BelieveSection />
        </SectionTransition>

        <Footer />
      </main>
    </SmoothScrollWrapper>
  );
}
