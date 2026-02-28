import React, { useEffect, useState } from 'react';
import { motion, useScroll } from 'framer-motion';
import HeroSection from '../components/case/HeroSection';
import AboutSection from '../components/case/AboutSection';
import VibeCodingSection from '../components/case/VibeCodingSection';
import SkillsSection from '../components/case/SkillsSection';
import TechStackSection from '../components/case/TechStackSection';
import AIBusinessSection from '../components/case/AIBusinessSection';
import SEOMagicSection from '../components/case/SEOMagicSection';
import RAGPlatformSection from '../components/case/RAGPlatformSection';
import NutritionAppSection from '../components/case/NutritionAppSection';
import RunaAISection from '../components/case/RunaAISection';
import DiscountBotSection from '../components/case/DiscountBotSection';
import LandingsSection from '../components/case/LandingsSection';
import InteractiveBoard from '../components/case/InteractiveBoard';

import Footer from '../components/Footer';

export default function Home() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="relative bg-[#0a0a0a] min-h-screen overflow-hidden">
      {/* Cyberpunk grid background */}
      <div className="fixed inset-0 z-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255, 107, 53, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 107, 53, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Content */}
      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <VibeCodingSection />
        <SkillsSection />
        <TechStackSection />
        <AIBusinessSection />
        <SEOMagicSection />
        <RAGPlatformSection />
        <NutritionAppSection />
        <RunaAISection />
        <DiscountBotSection />
        <LandingsSection />
        <InteractiveBoard />
        <Footer />
      </div>

      {/* Ambient particles */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-orange-500 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </div>
  );
}