import { useEffect } from "react";
import { HeroSection } from "@/apps/main/components/HeroSection";
import { AboutSection } from "@/apps/main/components/AboutSection";

import { PortfolioSection } from "@/apps/main/components/PortfolioSection";
import { ExperienceSection } from "@/apps/main/components/ExperienceSection";
import { BrandingSection } from "@/apps/main/components/BrandingSection";
import { CreatorSection } from "@/apps/main/components/CreatorSection";
import { ContactSection } from "@/apps/main/components/ContactSection";
import { Footer } from "@/apps/main/components/Footer";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { NavBar } from "@/apps/main/components/NavBar";

import { LanguageProvider } from "@/contexts/LanguageContext";
import { MediumArticlesSection } from "@/apps/main/components/MediumArticlesSection";
import { ScrollSmoother } from "@/components/ScrollSmoother";
import logo from "@/assets/ic_logo.jpeg";

export default function App() {
  useEffect(() => {
    let link = document.querySelector<HTMLLinkElement>('link[rel="icon"]');
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    }
    link.href = logo;
  }, []);

  return (
    <LanguageProvider>
      <ThemeProvider>
        <div className="min-h-screen bg-white dark:bg-[#080811] text-slate-900 dark:text-white transition-colors duration-300">
          <ScrollSmoother />
          <NavBar />
          <HeroSection />
          <AboutSection />
          <ExperienceSection />

          <BrandingSection />
          <PortfolioSection />
          <MediumArticlesSection />
          <CreatorSection />
          <ContactSection />
          <Footer />
        </div>
      </ThemeProvider>
    </LanguageProvider>
  );
}
