import { motion, useScroll } from 'framer-motion';
import SiteNav from '../components/landing/SiteNav';
import InfisicalHero from '../components/landing/InfisicalHero';
import TechMarqueeStrip from '../components/landing/TechMarqueeStrip';
import ProductPillars from '../components/landing/ProductPillars';
import MidBanner from '../components/landing/MidBanner';
import SubFeaturesRow from '../components/landing/SubFeaturesRow';
import QuoteBand from '../components/landing/QuoteBand';
import IntegrationsGrid from '../components/landing/IntegrationsGrid';
import GovernanceSection from '../components/landing/GovernanceSection';
import ReliabilitySection from '../components/landing/ReliabilitySection';
import StatsSection from '../components/landing/StatsSection';
import CasesSectionHeader from '../components/landing/CasesSectionHeader';
import VibeCodingSection from '../components/case/VibeCodingSection';
import SkillsSection from '../components/case/SkillsSection';
import TechStackSection from '../components/case/TechStackSection';
import ShadowGPTSection from '../components/case/ShadowGPTSection';
import HiremiSection from '../components/case/HiremiSection';
import SEOMagicSection from '../components/case/SEOMagicSection';
import RAGPlatformSection from '../components/case/RAGPlatformSection';
import NutritionAppSection from '../components/case/NutritionAppSection';
import RunaAISection from '../components/case/RunaAISection';
import FinalCta from '../components/landing/FinalCta';
import Footer from '../components/Footer';
import InfisicalPageShell from '../components/infisical-shell/InfisicalPageShell';

export default function Home() {
  const { scrollYProgress } = useScroll();

  return (
    <InfisicalPageShell>
      <motion.div
        className="fixed top-0 left-0 right-0 z-[60] h-0.5 origin-left bg-ifi-lime"
        style={{ scaleX: scrollYProgress }}
      />

      <SiteNav />
      <div className="typography-site relative flex flex-1 flex-col">
        <InfisicalHero />
        <TechMarqueeStrip />
        <ProductPillars />
        <MidBanner />
        <SubFeaturesRow />
        <QuoteBand />
        <IntegrationsGrid />
        <GovernanceSection />
        <ReliabilitySection />
        <StatsSection />
        <VibeCodingSection />
        <SkillsSection />
        <TechStackSection />
        <CasesSectionHeader />
        {/* Единый фон для продуктовых кейсов — без столкновения пастельных градиентов и полупрозрачных слоёв. */}
        <div className="relative overflow-hidden border-y border-ifi-border/80 bg-mineshaft-900">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(224,237,52,0.055),transparent_55%)]"
            aria-hidden
          />
          <div className="relative z-10">
            <ShadowGPTSection />
            <div className="mx-auto max-w-6xl px-4">
              <div
                className="h-px w-full bg-gradient-to-r from-transparent via-ifi-border/55 to-transparent"
                aria-hidden
              />
            </div>
            <HiremiSection />
            <div className="mx-auto max-w-6xl px-4">
              <div
                className="h-px w-full bg-gradient-to-r from-transparent via-ifi-border/55 to-transparent"
                aria-hidden
              />
            </div>
            <SEOMagicSection />
            <div className="mx-auto max-w-6xl px-4">
              <div
                className="h-px w-full bg-gradient-to-r from-transparent via-ifi-border/55 to-transparent"
                aria-hidden
              />
            </div>
            <RAGPlatformSection />
          </div>
        </div>
        <NutritionAppSection />
        <RunaAISection />
        <FinalCta />
        <Footer />
      </div>
    </InfisicalPageShell>
  );
}
