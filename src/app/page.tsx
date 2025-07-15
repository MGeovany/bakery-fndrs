import {
  Header,
  HeroSection,
  BelieveSection,
  ScrollingBanner,
  Footer,
} from "@/components";

export default function HomePage() {
  return (
    <main className="bg-cream-200 min-h-screen">
      <Header />
      <HeroSection />
      <ScrollingBanner />
      <BelieveSection />
      <Footer />
    </main>
  );
}
