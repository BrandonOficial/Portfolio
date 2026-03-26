"use client";

import { useState, useEffect } from "react";
import HeroSection from "@/components/sections/HeroSection";
import WorksSection from "@/components/sections/WorksSection";
import ThoughtsSection from "@/components/sections/ThoughtsSection";
import ConnectSection from "@/components/sections/ConnectSection";

// Os teus dados limpos
import { PROJECTS, ARTICLES, SOCIAL_LINKS } from "@/data/portfolio";

export default function Home() {
  const [isDark, setIsDark] = useState(true);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  // Monitorizador de Scroll Simples (apenas para a navegação lateral)
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["intro", "work", "thoughts", "connect"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
        <div className="flex flex-col gap-3">
          {["intro", "work", "thoughts", "connect"].map((section) => (
            <button
              key={section}
              onClick={() =>
                document
                  .getElementById(section)
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className={`w-1.5 h-6 rounded-full transition-all duration-500 ${
                activeSection === section
                  ? "bg-foreground"
                  : "bg-muted-foreground/20 hover:bg-muted-foreground/50"
              }`}
              aria-label={`Maps to ${section}`}
            />
          ))}
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-16">
        <HeroSection />
        <WorksSection projects={PROJECTS} />
        <ThoughtsSection articles={ARTICLES} />
        <ConnectSection socialLinks={SOCIAL_LINKS} />

        <footer className="py-12 sm:py-16 border-t border-border/50">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 sm:gap-8">
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">
                © 2026 Brandon Ramos. All rights reserved.
              </div>
            </div>
            {/* O teu botão de ToggleTheme pode ficar aqui */}
          </div>
        </footer>
      </main>

      <div className="fixed bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none"></div>
    </div>
  );
}
