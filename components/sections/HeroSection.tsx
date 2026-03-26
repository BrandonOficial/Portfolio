"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  // Configuração das animações (Clean e Reutilizável)
  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="intro"
      className="min-h-screen flex items-center relative overflow-hidden pt-24"
    >
      {/* Background decorativo mantido intacto */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--background)_75%)]"></div>
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-foreground/[0.04] dark:bg-foreground/[0.02] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-foreground/[0.06] dark:bg-foreground/[0.03] rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--foreground)_1px,transparent_1px),linear-gradient(to_bottom,var(--foreground)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-[0.06] dark:opacity-[0.03]"></div>
      </div>

      <div className="w-full grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Coluna principal de conteúdo animada via Framer Motion */}
        <motion.div
          className="lg:col-span-7 space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUpVariants}
        >
          {/* Badge de data */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 bg-transparent px-4 py-2 backdrop-blur-sm"
          >
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs font-mono tracking-wider text-muted-foreground">
              FREE.DEV / 2026
            </span>
          </motion.div>

          {/* Título semântico */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[0.95] flex flex-col">
              <span>Inovação</span>
              <span className="bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent py-2">
                criatividade
              </span>
              <span>e foco</span>
            </h1>
          </motion.div>

          {/* Descrição e Pills */}
          <motion.div variants={itemVariants} className="max-w-xl space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Crie experiências digitais impactantes. Onde a criatividade
              encontra a tecnologia para construir conexões significativas.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Design Intuitivo", "Otimização de busca", "Clean code"].map(
                (pill) => (
                  <div
                    key={pill}
                    className="px-4 py-2 rounded-full bg-foreground/5 border border-foreground/10 text-sm"
                  >
                    {pill}
                  </div>
                ),
              )}
            </div>
          </motion.div>

          {/* Call to Actions */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4"
          >
            <div className="bg-foreground/10 rounded-[16px] border p-0.5">
              <Button
                asChild
                size="lg"
                className="rounded-[14px] px-8 text-base h-14"
              >
                <Link href="#work">
                  <span className="font-medium">Projetar</span>
                </Link>
              </Button>
            </div>
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="h-14 rounded-[14px] px-8 text-base"
            >
              <Link href="#connect">
                <span>Entre em contacto</span>
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Coluna lateral animada separadamente */}
        <motion.div
          className="lg:col-span-5 space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUpVariants}
        >
          {/* Card de disponibilidade */}
          <motion.div
            variants={itemVariants}
            className="p-6 rounded-2xl bg-foreground/[0.02] border border-foreground/10 backdrop-blur-sm"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">
                  Disponível para projetos
                </span>
              </div>
              <div className="text-xs text-muted-foreground font-mono">
                2026
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>Piracicaba, Brasil</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Tempo de resposta rápido</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="p-6 rounded-2xl border border-foreground/10 bg-gradient-to-br from-foreground/[0.02] to-transparent"
          >
            <p className="text-sm italic text-muted-foreground leading-relaxed">
              "Criando experiências que não apenas tenham uma boa aparência, mas
              que sejam sentidas corretamente."
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
