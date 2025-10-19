"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { Button } from "@/components/ui/button";
import { ProjectCarousel } from "@/components/project-carousel";

export default function Home() {
  const [isDark, setIsDark] = useState(true);
  const [activeSection, setActiveSection] = useState("");
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "0px 0px -20% 0px" }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative">
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
              aria-label={`Navigate to ${section}`}
            />
          ))}
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-16">
        {/* Hero Section */}
        <header
          id="intro"
          ref={(el) => {
            sectionsRef.current[0] = el;
          }}
          className="min-h-screen flex items-center opacity-0 relative overflow-hidden"
        >
          <div className="relative pt-24 w-full">
            {/* Background decorativo com grades e gradientes */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute inset-0 [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--background)_75%)]"></div>
              <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-foreground/[0.04] dark:bg-foreground/[0.02] rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-foreground/[0.06] dark:bg-foreground/[0.03] rounded-full blur-3xl"></div>
              {/* Grid pattern */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--foreground)_1px,transparent_1px),linear-gradient(to_bottom,var(--foreground)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-[0.06] dark:opacity-[0.03]"></div>
            </div>

            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Coluna principal de conteúdo */}
              <div className="lg:col-span-7 space-y-8">
                <AnimatedGroup preset="blur-slide">
                  {/* Badge de data com design destacado */}
                  <div className="inline-flex items-center gap-2 bg-transparent px-4 py-2 backdrop-blur-sm">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs font-mono tracking-wider text-muted-foreground">
                      FREE.DEV / 2025
                    </span>
                  </div>

                  {/* Título com destaque visual */}
                  <div className="space-y-4">
                    <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[0.95]">
                      Inovação
                      <span className="block mt-2 bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
                        criatividade
                      </span>
                      <span className="block mt-2">foco</span>
                    </h1>
                  </div>

                  {/* Descrição com cards de destaque inline */}
                  <div className="max-w-xl space-y-6">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Crie experiências digitais impactantes. Onde a
                      criatividade encontra a tecnologia para construir conexões
                      significativas.
                    </p>

                    {/* Pills de features */}
                    <div className="flex flex-wrap gap-2">
                      <div className="px-4 py-2 rounded-full bg-foreground/5 border border-foreground/10 text-sm">
                        Design Intuitivo
                      </div>
                      <div className="px-4 py-2 rounded-full bg-foreground/5 border border-foreground/10 text-sm">
                        Otimização de busca
                      </div>
                      <div className="px-4 py-2 rounded-full bg-foreground/5 border border-foreground/10 text-sm">
                        Clean code
                      </div>
                    </div>
                  </div>

                  {/* CTAs com layout horizontal destacado */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
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
                        <span>Entre em contato</span>
                      </Link>
                    </Button>
                  </div>
                </AnimatedGroup>
              </div>

              {/* Coluna lateral com informações e stats */}
              <div className="lg:col-span-5 space-y-6">
                <AnimatedGroup preset="blur-slide" className="space-y-6">
                  {/* Card de disponibilidade */}
                  <div className="p-6 rounded-2xl bg-foreground/[0.02] border border-foreground/10 backdrop-blur-sm">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium">
                          Disponível para projetos
                        </span>
                      </div>
                      <div className="text-xs text-muted-foreground font-mono">
                        2025
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
                  </div>

                  {/* Stats mini cards 
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-foreground/[0.02] border border-foreground/10">
                      <div className="text-3xl font-bold mb-1">100+</div>
                      <div className="text-xs text-muted-foreground">
                        Projects Delivered
                      </div>
                    </div>
                    <div className="p-4 rounded-xl bg-foreground/[0.02] border border-foreground/10">
                      <div className="text-3xl font-bold mb-1">5+</div>
                      <div className="text-xs text-muted-foreground">
                        Years Experience
                      </div>
                    </div>
                  </div>
*/}
                  {/* Quote ou tagline adicional */}
                  <div className="p-6 rounded-2xl border border-foreground/10 bg-gradient-to-br from-foreground/[0.02] to-transparent">
                    <p className="text-sm italic text-muted-foreground leading-relaxed">
                      "Criando experiências que não apenas tenham uma boa
                      aparência, mas que sejam sentidas corretamente."
                    </p>
                  </div>
                </AnimatedGroup>
              </div>
            </div>
          </div>
        </header>

        <section
          id="work"
          ref={(el) => {
            sectionsRef.current[1] = el;
          }}
          className="min-h-screen py-20 sm:py-32 opacity-0 relative"
        >
          {/* Background decorativo */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-1/4 right-0 w-1/3 h-1/3 bg-foreground/[0.02] rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 left-0 w-1/4 h-1/4 bg-foreground/[0.03] rounded-full blur-3xl"></div>
          </div>

          <div className="space-y-16 sm:space-y-24">
            {/* Header modernizado */}
            <div className="grid lg:grid-cols-12 gap-8 items-end">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 bg-transparent px-4 py-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs font-mono tracking-wider text-muted-foreground">
                    PROJETOS SELECIONADOS
                  </span>
                </div>
                <h2 className="text-5xl sm:text-6xl lg:text-7xl font-medium tracking-tight leading-tight">
                  Tech Created
                  <span className="block mt-1 text-muted-foreground">
                    Projetos
                  </span>
                </h2>
              </div>
              <div className="lg:col-span-4 flex flex-col items-start lg:items-end gap-2">
                <div className="text-sm text-muted-foreground">
                  Do início à excelência
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-px w-12 bg-foreground/20"></div>
                  <div className="text-2xl font-mono font-light">
                    2023 — 2025
                  </div>
                </div>
              </div>
            </div>

            {/* Grid de projetos com layout assimétrico */}
            <div className="space-y-8">
              {[
                {
                  year: "2023",
                  role: "Desenvolvedor Trainee",
                  company: "MTcorp",
                  description:
                    "Arquitetura de automação para fluxos de sistemas e recursos com tecnologia de IA.",
                  tech: ["Python", "IA", "RPA"],
                  highlight: true,
                  images: [
                    "/team-collaboration-interface.jpg",
                    "/developer-tools-ui.jpg",
                    "/ai-features-interface.jpg",
                  ],
                },
                {
                  year: "2025",
                  role: "Dev Front-end",
                  company: "Nuuvik",
                  description:
                    "Built performant interfaces for project management and team collaboration.",
                  tech: ["Next", "MonoDB", "Python", "TS", "Docker"],
                  images: [
                    "/homenuuvik.png",
                    "/servicesnuuvik.png",
                    "/supnuuvik.png",
                  ],
                },
                {
                  year: "2025",
                  role: "Full Stack",
                  company: "Nom",
                  description:
                    "Estrutura builder de paginas com integração de pagamento e serviços de hospedagem",
                  tech: ["React", "TS", "Supabase"],
                  highlight: true,
                  images: ["/nomhome.png", "/nomarticle.png", "/nomfooter.png"],
                },
                {
                  year: "2025",
                  role: "Full Stack",
                  company: "Nuuvik.AI",
                  description:
                    "Created booking flow optimizations and host management tools.",
                  tech: ["React", "PostgresSQL", "N8N"],
                  images: [
                    "/SaaShome.png",
                    "/SaaService.png",
                    "/SaaStestimoials.png",
                    "/Screenshot (156).png",
                  ],
                },
              ].map((job, index) => (
                <div
                  key={index}
                  className={`group relative ${
                    index % 2 === 0 ? "lg:pr-24" : "lg:pl-24"
                  }`}
                >
                  <div
                    className={`relative rounded-2xl border overflow-hidden transition-all duration-700 ${
                      job.highlight
                        ? "border-foreground/20 bg-gradient-to-br from-foreground/[0.03] to-transparent hover:border-foreground/40"
                        : "border-foreground/10 hover:border-foreground/30"
                    }`}
                  >
                    {/* Decoração de canto */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-foreground/[0.02] rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                    <div className="grid lg:grid-cols-5 gap-0">
                      {/* Coluna de imagem */}
                      <div className="lg:col-span-3 relative aspect-[16/10] lg:aspect-auto">
                        <ProjectCarousel
                          images={job.images}
                          title={job.company}
                        />

                        {/* Badge ano flutuante */}
                        <div className="absolute top-6 left-6 bg-background/90 backdrop-blur-md border border-foreground/10 rounded-full px-4 py-2 shadow-lg">
                          <span className="text-sm font-mono font-medium">
                            {job.year}
                          </span>
                        </div>
                      </div>

                      {/* Coluna de conteúdo */}
                      <div className="lg:col-span-2 p-8 lg:p-10 flex flex-col justify-between">
                        <div className="space-y-6">
                          <div className="space-y-3">
                            <h3 className="text-2xl sm:text-3xl font-medium leading-tight group-hover:text-muted-foreground transition-colors duration-300">
                              {job.role}
                            </h3>
                            <div className="flex items-center gap-2">
                              <div className="text-lg text-muted-foreground">
                                {job.company}
                              </div>
                              {job.highlight && (
                                <div className="px-2 py-0.5 bg-transparent"></div>
                              )}
                            </div>
                          </div>

                          <p className="text-muted-foreground leading-relaxed text-sm">
                            {job.description}
                          </p>
                        </div>

                        {/* Tech stack com design melhorado */}
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

                    {/* Hover effect overlay */}
                    <div className="absolute inset-0 border-2 border-foreground/0 group-hover:border-foreground/10 rounded-2xl transition-colors duration-700 pointer-events-none"></div>
                  </div>

                  {/* Linha conectora entre projetos */}
                  {index < 3 && (
                    <div className="hidden lg:block absolute left-1/2 -bottom-4 w-px h-8 bg-gradient-to-b from-foreground/20 to-transparent transform -translate-x-1/2"></div>
                  )}
                </div>
              ))}
            </div>

            {/* Footer da seção */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-foreground/10">
              <div className="text-sm text-muted-foreground">
                Apresentando {[2023, 2022, 2021, 2019].length} projetos ao longo
                de {new Set([2023, 2022, 2021, 2019]).size} anos
              </div>
              <a
                target="_blank"
                href="https://github.com/BrandonOficial?tab=repositories"
              >
                <Button
                  variant="ghost"
                  className="rounded-xl group cursor-pointer"
                >
                  <span>Ver mais projetos</span>
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
            </div>
          </div>
        </section>

        <section
          id="thoughts"
          ref={(el) => {
            sectionsRef.current[2] = el;
          }}
          className="min-h-screen py-20 sm:py-32 opacity-0 relative"
        >
          {/* Background decorativo */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-1/3 left-1/4 w-1/4 h-1/4 bg-foreground/[0.02] rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/3 right-1/4 w-1/3 h-1/3 bg-foreground/[0.03] rounded-full blur-3xl"></div>
          </div>

          <div className="space-y-16 sm:space-y-24">
            {/* Header modernizado */}
            <div className="grid lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 bg-transparent px-4 py-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs font-mono tracking-wider text-muted-foreground">
                    INSIGHTS E REFLEXÕES
                  </span>
                </div>
                <h2 className="text-5xl sm:text-6xl lg:text-7xl font-medium tracking-tight leading-tight">
                  Pensamentos
                  <span className="block mt-1 text-muted-foreground">
                    Recentes
                  </span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                  Insights sobre design, desenvolvimento e arquitetura digital.
                  Explorando a intersecção entre criatividade e tecnologia.
                </p>
              </div>

              {/* Stats card */}
              <div className="lg:col-span-5 lg:mt-16">
                <div className="p-6 rounded-2xl border border-foreground/10 bg-gradient-to-br from-foreground/[0.02] to-transparent">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <div className="text-3xl font-bold mb-1">2</div>
                      <div className="text-xs text-muted-foreground">
                        Artigos publicados
                      </div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold mb-1">146</div>
                      <div className="text-xs text-muted-foreground">
                        Total de leituras
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Grid de artigos com layout em destaque */}
            <div className="space-y-8">
              {[
                {
                  image:
                    "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=600&fit=crop",
                  title:
                    "Desvendando o Big O e as Estruturas de Dados Essenciais: Uma Aula Rápida",
                  excerpt:
                    "Explorando como os fundamentos da notação Big O e estruturas básicas.",
                  date: "Ago 2025",
                  readTime: "7 min",
                  featured: true,
                  category: "Desenvolvimento",
                },
              ].map((post, index) => {
                // Primeiro artigo em destaque
                if (index === 0 && post.featured) {
                  return (
                    <article
                      key={index}
                      className="group relative p-8 sm:p-10 lg:p-12 border border-foreground/20 rounded-2xl bg-gradient-to-br from-foreground/[0.03] to-transparent hover:border-foreground/40 transition-all duration-700 cursor-pointer overflow-hidden"
                    >
                      {/* Decoração de canto */}
                      <div className="absolute bottom-0 right-0 w-48 h-48 bg-foreground/[0.02] rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                      <div className="relative grid lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-7 space-y-6">
                          {/* Meta info */}
                          <div className="flex items-center gap-4">
                            <div className="px-3 py-1 bg-foreground/10 rounded-full text-xs font-medium">
                              {post.category}
                            </div>
                            <div className="flex items-center gap-3 text-xs text-muted-foreground font-mono">
                              <span>{post.date}</span>
                              <div className="w-1 h-1 bg-muted-foreground/50 rounded-full"></div>
                              <span>{post.readTime} de leitura</span>
                            </div>
                          </div>

                          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight group-hover:text-muted-foreground transition-colors duration-300">
                            {post.title}
                          </h3>

                          <p className="text-muted-foreground leading-relaxed text-lg max-w-2xl">
                            {post.excerpt}
                          </p>

                          <a
                            href="https://nom-blog-newsletter-phoz.vercel.app/article/1"
                            target="_blank"
                          >
                            <div className="flex items-center gap-2 text-sm pt-4 group-hover:gap-3 transition-all duration-300">
                              <span className="font-medium">Ler artigo</span>
                              <svg
                                className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                              </svg>
                            </div>
                          </a>
                        </div>

                        {/* Imagem do artigo */}
                        <div className="lg:col-span-5">
                          <div className="aspect-[4/3] rounded-xl overflow-hidden border border-foreground/10 group-hover:border-foreground/20 transition-colors duration-700">
                            <img
                              src={post.image}
                              alt={post.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                          </div>
                        </div>
                      </div>
                    </article>
                  );
                }

                // Demais artigos em grid
                return null;
              })}

              {/* Grid para os outros artigos */}
              <div className="grid lg:grid-cols-3 gap-6">
                {[
                  {
                    image:
                      "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=600&fit=crop",
                    title: "Um Mergulho Profundo no Artesanato do Clean Code",
                    excerpt:
                      "Lições aprendidas com a construção e manutenção de sistemas de design em vários",
                    date: "Ago 2025",
                    readTime: "13 min de leitura",
                    category: "Desenvolvimento",
                  },
                ].map((post, index) => (
                  <article
                    key={index}
                    className="group relative p-6 border border-foreground/10 rounded-xl hover:border-foreground/30 transition-all duration-500 cursor-pointer bg-background hover:bg-foreground/[0.02]"
                  >
                    <div className="space-y-4">
                      {/* Imagem do artigo */}
                      <div className="lg:col-span-5">
                        <div className="aspect-[16/9] rounded-xl overflow-hidden border border-foreground/10 group-hover:border-foreground/20 transition-colors duration-700">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                        </div>
                      </div>

                      {/* Meta info */}
                      <div className="flex items-center justify-between">
                        <div className="px-2.5 py-1 bg-foreground/5 rounded-md text-xs font-medium">
                          {post.category}
                        </div>
                        <div className="text-xs text-muted-foreground font-mono">
                          {post.readTime}
                        </div>
                      </div>

                      <h3 className="text-lg font-medium leading-snug group-hover:text-muted-foreground transition-colors duration-300">
                        {post.title}
                      </h3>

                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                        {post.excerpt}
                      </p>

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-2 border-t border-foreground/5">
                        <span className="text-xs text-muted-foreground font-mono">
                          {post.date}
                        </span>
                        <a
                          href="https://nom-blog-newsletter-phoz.vercel.app/article/2"
                          target="_blank"
                        >
                          <svg
                            className="w-4 h-4 text-muted-foreground group-hover:translate-x-1 transition-transform duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* CTA para ver todos os artigos */}
            <div className="flex justify-center pt-8">
              <a
                href="https://nom-blog-newsletter-phoz.vercel.app/"
                target="_blank"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-xl group hover:bg-foreground/5"
                >
                  <span>Outros Artigos</span>
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
            </div>
          </div>
        </section>

        <section
          id="connect"
          ref={(el) => {
            sectionsRef.current[3] = el;
          }}
          className="py-20 sm:py-32 opacity-0 relative"
        >
          {/* Background decorativo */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-2/3 bg-foreground/[0.02] rounded-full blur-3xl"></div>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--foreground)_1px,transparent_1px),linear-gradient(to_bottom,var(--foreground)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.02]"></div>
          </div>

          <div className="space-y-16 sm:space-y-24">
            {/* Header com CTA visual */}
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 bg-transparent px-4 py-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs font-mono tracking-wider text-muted-foreground">
                    ABERTO A OPORTUNIDADES
                  </span>
                </div>
                <h2 className="text-5xl sm:text-6xl lg:text-7xl font-medium tracking-tight leading-tight">
                  Vamos
                  <span className="block mt-1 bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
                    Conectar
                  </span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                  Sempre interessado em novas oportunidades e colaborações. Seja
                  para quem tem um projeto em mente ou para quem quer apenas
                  conversar sobre tecnologia.
                </p>
              </div>

              {/* Card de contato principal */}
              <div className="lg:col-span-5">
                <div className="relative p-10 rounded-2xl border border-foreground/20 bg-gradient-to-br from-foreground/[0.03] to-transparent hover:border-foreground/30 transition-all duration-700 group">
                  {/* Decoração de canto */}
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
                        {/* Ícone e título separados */}
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

                        {/* Seta no final */}
                        <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover/link:text-foreground transition-colors duration-300">
                          <span>Clique para enviar</span>
                          <svg
                            className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </svg>
                        </div>
                      </div>
                    </Link>

                    {/* Stats rápidos */}
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-foreground/10">
                      <div>
                        <div className="text-2xl font-bold">24h</div>
                        <div className="text-xs text-muted-foreground">
                          Tempo de resposta
                        </div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold">100%</div>
                        <div className="text-xs text-muted-foreground">
                          Taxa de resposta
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social links com layout moderno */}
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="text-xs text-muted-foreground font-mono tracking-wider">
                  OUTRAS REDES
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-foreground/20 to-transparent"></div>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  {
                    name: "GitHub",
                    handle: "@BrandonOficial",
                    url: "https://github.com/BrandonOficial",
                    icon: (
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ),
                    color: "hover:border-purple-500/30 hover:bg-purple-500/5",
                  },
                  {
                    name: "v0.dev",
                    handle: "@felixmacaspac",
                    url: "#",
                    icon: (
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
                    ),
                    color: "hover:border-blue-500/30 hover:bg-blue-500/5",
                  },
                  {
                    name: "HubSpot",
                    handle: "@felixmacaspac",
                    url: "#",
                    icon: (
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
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    ),
                    color: "hover:border-orange-500/30 hover:bg-orange-500/5",
                  },
                  {
                    name: "LinkedIn",
                    handle: "BrandonRamos",
                    url: "https://www.linkedin.com/in/brandon-ramos-73ba27206/",
                    icon: (
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    ),
                    color: "hover:border-cyan-500/30 hover:bg-cyan-500/5",
                  },
                ].map((social) => (
                  <Link
                    key={social.name}
                    href={social.url}
                    className={`group/social relative p-6 border border-foreground/10 rounded-xl transition-all duration-500 hover:shadow-lg ${social.color}`}
                  >
                    {/* Decoração de fundo */}
                    <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.02] to-transparent opacity-0 group-hover/social:opacity-100 transition-opacity duration-500 rounded-xl"></div>

                    <div className="relative space-y-4">
                      <div className="flex items-start justify-between">
                        <div className="w-10 h-10 rounded-lg bg-foreground/5 flex items-center justify-center group-hover/social:bg-foreground/10 transition-colors duration-300">
                          {social.icon}
                        </div>
                        <svg
                          className="w-4 h-4 text-muted-foreground group-hover/social:translate-x-1 group-hover/social:-translate-y-1 transition-transform duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
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
                  </Link>
                ))}
              </div>
            </div>

            {/* Footer da seção com CTA alternativa */}
            <div className="relative p-8 sm:p-12 rounded-2xl border border-foreground/10 bg-gradient-to-br from-foreground/[0.02] to-transparent overflow-hidden">
              {/* Decoração de fundo */}
              <div className="absolute top-0 right-0 w-1/2 h-full bg-foreground/[0.02] rounded-l-full blur-3xl"></div>

              <div className="relative grid lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <h3 className="text-2xl sm:text-3xl font-medium">
                    Prefere um bate-papo rápido?
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Agende uma ligação de 30 minutos para discutir seu projeto,
                    suas ideias ou simplesmente dizer oi. Sem compromisso,
                    apenas conversa.
                  </p>
                </div>
                <div className="flex justify-start lg:justify-end">
                  <a
                    href="https://calendar.app.google/fxWEgwoB3VwmUnjVA"
                    target="_blank"
                  >
                    <Button
                      size="lg"
                      className="rounded-xl px-8 group cursor-pointer"
                    >
                      <span>Agendar chamada</span>
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
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="py-12 sm:py-16 border-t border-border/50">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 sm:gap-8">
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">
                © 2025 Brandon Ramos. All rights reserved.
              </div>
              <div className="text-xs text-muted-foreground">
                Built with Next.js by Brandon Ramos
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className="group p-3 rounded-lg border border-border hover:border-muted-foreground/50 transition-all duration-300 hover:bg-muted/10"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <svg
                    className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707a1 1 0 001.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707a1 1 0 001.414 0zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>

              <button className="group p-3 rounded-lg border border-border hover:border-muted-foreground/50 transition-all duration-300 hover:bg-muted/10">
                <svg
                  className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </footer>
      </main>

      <div className="fixed bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none"></div>
    </div>
  );
}
