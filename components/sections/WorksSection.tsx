"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ProjectCarousel } from "@/components/project-carousel";
import { Project } from "@/data/portfolio"; // Importamos apenas a tipagem!

interface WorksSectionProps {
  projects: Project[];
}

export default function WorksSection({ projects }: WorksSectionProps) {
  // Variantes de animação para o container (stagger) e para os cards individuais
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section id="work" className="min-h-screen py-20 sm:py-32 relative">
      {/* Background decorativo */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-1/3 h-1/3 bg-foreground/[0.02] rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-1/4 h-1/4 bg-foreground/[0.03] rounded-full blur-3xl"></div>
      </div>

      <div className="space-y-16 sm:space-y-24">
        {/* Header da Seção */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={cardVariants}
          className="grid lg:grid-cols-12 gap-8 items-end"
        >
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 bg-transparent px-4 py-2">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs font-mono tracking-wider text-muted-foreground">
                PROJETOS SELECIONADOS
              </span>
            </div>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-medium tracking-tight leading-tight">
              Tech Created
              <span className="block mt-1 text-muted-foreground">Projetos</span>
            </h2>
          </div>
          <div className="lg:col-span-4 flex flex-col items-start lg:items-end gap-2">
            <div className="text-sm text-muted-foreground">
              Do início à excelência
            </div>
            <div className="flex items-center gap-3">
              <div className="h-px w-12 bg-foreground/20"></div>
              <div className="text-2xl font-mono font-light">2023 — 2026</div>
            </div>
          </div>
        </motion.div>

        {/* Lista de Projetos */}
        <motion.div
          className="space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {projects.map((job, index) => (
            <motion.div
              key={`${job.company}-${index}`}
              variants={cardVariants}
              className={`group relative ${index % 2 === 0 ? "lg:pr-24" : "lg:pl-24"}`}
            >
              <div
                className={`relative rounded-2xl border overflow-hidden transition-all duration-700 ${
                  job.highlight
                    ? "border-foreground/20 bg-gradient-to-br from-foreground/[0.03] to-transparent hover:border-foreground/40"
                    : "border-foreground/10 hover:border-foreground/30"
                }`}
              >
                {/* Efeito de hover no background do card */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-foreground/[0.02] rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                <div className="grid lg:grid-cols-5 gap-0">
                  {/* Coluna do Carrossel */}
                  <div className="lg:col-span-3 relative aspect-[16/10] lg:aspect-auto">
                    <ProjectCarousel images={job.images} title={job.company} />
                    <div className="absolute top-6 left-6 bg-background/90 backdrop-blur-md border border-foreground/10 rounded-full px-4 py-2 shadow-lg z-10">
                      <span className="text-sm font-mono font-medium">
                        {job.year}
                      </span>
                    </div>
                  </div>

                  {/* Coluna de Informações */}
                  <div className="lg:col-span-2 p-8 lg:p-10 flex flex-col justify-between relative z-10 bg-background/50 backdrop-blur-sm lg:bg-transparent lg:backdrop-blur-none">
                    <div className="space-y-6">
                      <div className="space-y-3">
                        <h3 className="text-2xl sm:text-3xl font-medium leading-tight group-hover:text-muted-foreground transition-colors duration-300">
                          {job.role}
                        </h3>
                        <div className="flex items-center gap-2">
                          <div className="text-lg text-muted-foreground">
                            {job.company}
                          </div>
                        </div>
                      </div>

                      {/* Descrição e Links que adicionámos anteriormente */}
                      <div className="space-y-4">
                        <p className="text-muted-foreground leading-relaxed text-sm">
                          {job.description}
                        </p>

                        <div className="flex flex-wrap items-center gap-4 pt-2">
                          {job.liveUrl && (
                            <a
                              href={job.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-sm font-medium hover:text-green-500 transition-colors duration-300 group/link"
                            >
                              <span>Ver Projeto</span>
                              <svg
                                className="w-4 h-4 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                />
                              </svg>
                            </a>
                          )}

                          {job.githubUrl && (
                            <a
                              href={job.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                            >
                              <svg
                                className="w-4 h-4"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <span>Repositório</span>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 mt-6 border-t border-foreground/10">
                      <div className="text-xs text-muted-foreground mb-3 font-mono">
                        TECH STACK
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {job.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1.5 text-xs border border-foreground/10 bg-foreground/[0.02] rounded-lg hover:bg-foreground/[0.05] transition-colors duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 border-2 border-foreground/0 group-hover:border-foreground/10 rounded-2xl transition-colors duration-700 pointer-events-none"></div>
              </div>

              {/* Linha conectora entre projetos */}
              {index < projects.length - 1 && (
                <div className="hidden lg:block absolute left-1/2 -bottom-4 w-px h-8 bg-gradient-to-b from-foreground/20 to-transparent transform -translate-x-1/2"></div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Footer da seção */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-foreground/10"
        >
          <div className="text-sm text-muted-foreground">
            Apresentando {projects.length} projetos
          </div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/BrandonOficial?tab=repositories"
          >
            <Button variant="ghost" className="rounded-xl group cursor-pointer">
              <span>Ver mais projetos no GitHub</span>
              <svg
                className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
