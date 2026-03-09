'use client';

import { useState, useEffect } from 'react';
import { HeroSection } from '@/components/landing/hero-section';
import { FeaturesSection } from '@/components/landing/features-section';
import { HowItWorksSection } from '@/components/landing/how-it-works-section';
import { ScreenshotsSection } from '@/components/landing/screenshots-section';
import { UseCasesSection } from '@/components/landing/use-cases-section';
import { TechStackSection } from '@/components/landing/tech-stack-section';
import { FaqSection } from '@/components/landing/faq-section';
import { FinalCtaSection } from '@/components/landing/final-cta-section';
import { FooterSection } from '@/components/landing/footer-section';

export default function HomePage() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark');
    setTheme(isDark ? 'dark' : 'light');

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          const isDark = document.documentElement.classList.contains('dark');
          setTheme(isDark ? 'dark' : 'light');
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col">
      <HeroSection theme={theme} />
      <FeaturesSection />
      <HowItWorksSection />
      <ScreenshotsSection />
      <UseCasesSection />
      <TechStackSection theme={theme} />
      <FaqSection />
      <div className='h-12 md:h-28' />
      <FooterSection theme={theme} />
    </div>
  );
}
