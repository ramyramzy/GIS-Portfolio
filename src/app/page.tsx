import { HeroSection } from "@/features/home/HeroSection";
import { ContentSections } from "@/features/home/ContentSections";

export default function HomePage() {
  return (
    <main className="page-shell">
      <HeroSection />
      <ContentSections />
    </main>
  );
}