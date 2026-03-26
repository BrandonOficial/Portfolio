"use client";

import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Article } from "@/data/portfolio";

interface ThoughtsSectionProps {
  articles: Article[];
}

export default function ThoughtsSection({ articles }: ThoughtsSectionProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  // Lógica limpa: separamos os dados antes de renderizar (Clean Code)
  const featuredPost = articles.find(post => post.featured);
  const normalPosts = articles.filter(post => !post.featured);

  return (
    <section id="thoughts" className="min-h-screen py-20 sm:py-32 relative">
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-1/4 h-1/4 bg-foreground/[0.02] rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-1/3 h-1/3 bg-foreground/[0.03] rounded-full blur-3xl"></div>
      </div>

      <motion.div 
        className="space-y-16 sm:space-y-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <motion.div variants={itemVariants} className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-transparent px-4 py-2">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs font-mono tracking-wider text-muted-foreground">INSIGHTS E REFLEXÕES</span>
            </div>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-medium tracking-tight leading-tight">
              Pensamentos <span className="block mt-1 text-muted-foreground">Recentes</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              Insights sobre design, desenvolvimento e arquitetura digital. Explorando a intersecção entre criatividade e tecnologia.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="lg:col-span-5 lg:mt-16">
            <div className="p-6 rounded-2xl border border-foreground/10 bg-gradient-to-br from-foreground/[0.02] to-transparent">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold mb-1">{articles.length}</div>
                  <div className="text-xs text-muted-foreground">Artigos publicados</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-1">+100</div>
                  <div className="text-xs text-muted-foreground">Total de leituras</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="space-y-8">
          {featuredPost && (
            <motion.article variants={itemVariants} className="group relative p-8 sm:p-10 lg:p-12 border border-foreground/20 rounded-2xl bg-gradient-to-br from-foreground/[0.03] to-transparent hover:border-foreground/40 transition-all duration-700 cursor-pointer overflow-hidden">
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-foreground/[0.02] rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative grid lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="px-3 py-1 bg-foreground/10 rounded-full text-xs font-medium">{featuredPost.category}</div>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground font-mono">
                      <span>{featuredPost.date}</span>
                      <div className="w-1 h-1 bg-muted-foreground/50 rounded-full"></div>
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight group-hover:text-muted-foreground transition-colors duration-300">
                    {featuredPost.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-lg max-w-2xl">{featuredPost.excerpt}</p>
                  <a href={featuredPost.url} target="_blank" rel="noopener noreferrer">
                    <div className="flex items-center gap-2 text-sm pt-4 group-hover:gap-3 transition-all duration-300">
                      <span className="font-medium">Ler artigo</span>
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="lg:col-span-5">
                  <div className="aspect-[4/3] rounded-xl overflow-hidden border border-foreground/10 group-hover:border-foreground/20 transition-colors duration-700">
                    <img src={featuredPost.image} alt={featuredPost.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                </div>
              </div>
            </motion.article>
          )}

          <div className="grid lg:grid-cols-3 gap-6">
            {normalPosts.map((post, index) => (
              <motion.article variants={itemVariants} key={index} className="group relative p-6 border border-foreground/10 rounded-xl hover:border-foreground/30 transition-all duration-500 cursor-pointer bg-background hover:bg-foreground/[0.02]">
                <div className="space-y-4">
                  <div className="aspect-[16/9] rounded-xl overflow-hidden border border-foreground/10 group-hover:border-foreground/20 transition-colors duration-700">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="px-2.5 py-1 bg-foreground/5 rounded-md text-xs font-medium">{post.category}</div>
                    <div className="text-xs text-muted-foreground font-mono">{post.readTime}</div>
                  </div>
                  <h3 className="text-lg font-medium leading-snug group-hover:text-muted-foreground transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between pt-2 border-t border-foreground/5">
                    <span className="text-xs text-muted-foreground font-mono">{post.date}</span>
                    <a href={post.url} target="_blank" rel="noopener noreferrer">
                      <svg className="w-4 h-4 text-muted-foreground group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <motion.div variants={itemVariants} className="flex justify-center pt-8">
          <a href="https://nom-blog-newsletter-phoz.vercel.app/" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg" className="rounded-xl group hover:bg-foreground/5">
              <span>Outros Artigos</span>
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}