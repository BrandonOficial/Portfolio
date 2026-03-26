"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SocialLink } from "@/data/portfolio";

interface ConnectSectionProps {
  socialLinks: SocialLink[];
}

export default function ConnectSection({ socialLinks }: ConnectSectionProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Dicionário de SVGs baseado no ID que vem dos dados
  const renderIcon = (iconId: string) => {
    switch (iconId) {
      case "github":
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path
              fillRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              clipRule="evenodd"
            />
          </svg>
        );
      case "linkedin":
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        );
      case "v0":
      case "hubspot":
      default:
        // Ícone por defeito (o que usavas no v0 e hubspot)
        return (
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            />
          </svg>
        );
    }
  };

  return (
    <section id="connect" className="py-20 sm:py-32 relative">
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-2/3 bg-foreground/[0.02] rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--foreground)_1px,transparent_1px),linear-gradient(to_bottom,var(--foreground)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.02]"></div>
      </div>

      <motion.div
        className="space-y-16 sm:space-y-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <motion.div
            variants={itemVariants}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 bg-transparent px-4 py-2">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs font-mono tracking-wider text-muted-foreground">
                ABERTO A OPORTUNIDADES
              </span>
            </div>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-medium tracking-tight leading-tight">
              Vamos{" "}
              <span className="block mt-1 bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
                Conectar
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              Sempre interessado em novas oportunidades e colaborações. Seja
              para quem tem um projeto em mente ou para quem quer apenas
              conversar sobre tecnologia.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="lg:col-span-5">
            <div className="relative p-10 rounded-2xl border border-foreground/20 bg-gradient-to-br from-foreground/[0.03] to-transparent hover:border-foreground/30 transition-all duration-700 group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-foreground/[0.03] rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative space-y-6">
                <div className="text-xs text-muted-foreground font-mono tracking-wider">
                  CONTATO PRINCIPAL
                </div>
                <Link
                  href="mailto:brandonbr.ramos@gmail.com"
                  className="group/link block"
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 flex-shrink-0 rounded-full bg-foreground/10 flex items-center justify-center group-hover/link:bg-foreground/20 transition-colors duration-300">
                        <svg
                          className="w-7 h-7"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm text-muted-foreground mb-1">
                          Envie-me um e-mail
                        </div>
                        <div className="text-lg font-medium group-hover/link:text-muted-foreground transition-colors duration-300 break-all">
                          brandonbr.ramos@gmail.com
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="text-xs text-muted-foreground font-mono tracking-wider">
              OUTRAS REDES
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-foreground/20 to-transparent"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group/social relative p-6 border border-foreground/10 rounded-xl transition-all duration-500 hover:shadow-lg ${social.colorClass}`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.02] to-transparent opacity-0 group-hover/social:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                <div className="relative space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="w-10 h-10 rounded-lg bg-foreground/5 flex items-center justify-center group-hover/social:bg-foreground/10 transition-colors duration-300">
                      {renderIcon(social.iconId)}
                    </div>
                  </div>
                  <div>
                    <div className="font-medium text-foreground group-hover/social:text-muted-foreground transition-colors duration-300 mb-1">
                      {social.name}
                    </div>
                    <div className="text-sm text-muted-foreground font-mono">
                      {social.handle}
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
