import { Hero } from '@/components/Hero';
import { ServicesSection } from '@/components/ServicesSection';
import { AboutSection } from '@/components/AboutSection';
import { PortfolioSection } from '@/components/PortfolioSection';
import { StatsSection } from '@/components/StatsSection';
import { ProcessSection } from '@/components/ProcessSection';
import { CtaSection } from '@/components/CtaSection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <AboutSection />
      <PortfolioSection />
      <StatsSection />
      <ProcessSection />
      <CtaSection />
    </>
  );
}
