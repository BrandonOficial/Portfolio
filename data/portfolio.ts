// src/data/portfolio.ts

// ============================================================================
// INTERFACES (Contratos de Dados)
// ============================================================================

export interface Project {
  year: string;
  role: string;
  company: string;
  description: string;
  tech: string[];
  images: string[];
  highlight?: boolean;
  liveUrl?: string;
  githubUrl?: string;
}

export interface Article {
  image: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  url: string;
  featured?: boolean;
}

export interface SocialLink {
  name: string;
  handle: string;
  url: string;
  iconId: "github" | "v0" | "hubspot" | "linkedin"; // O componente UI vai mapear esse ID para o SVG correto
  colorClass: string;
}

// ============================================================================
// DADOS
// ============================================================================

export const PROJECTS: Project[] = [
  {
    year: "2024",
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
    liveUrl: "",
    githubUrl: "",
  },
  {
    year: "2025",
    role: "Dev Front-end",
    company: "Nuuvik",
    description:
      "Estrutura builder de paginas com integração de pagamento e serviços de hospedagem.",
    tech: ["Next", "MongoDB", "Python", "TS", "Docker"],
    images: ["/homenuuvik.png", "/servicesnuuvik.png", "/supnuuvik.png"],
    liveUrl: "https://nuuvik.com",
    githubUrl: "",
  },
  {
    year: "2025",
    role: "Full Stack",
    company: "Nom",
    description: "Blog com sistema próprio de criação de artigo",
    tech: ["React", "TS", "Supabase"],
    highlight: true,
    images: ["/nomhome.png", "/nomarticle.png", "/nomfooter.png"],
    liveUrl: "https://nom-blog-newsletter-phoz.vercel.app/",
    githubUrl: "https://github.com/BrandonOficial/NomBlogNewsletter",
  },
  {
    year: "2026",
    role: "Extensão",
    company: "NoKanban",
    description: "Extensão Vscode de produtividade e integração",
    tech: ["TS", "Vscode"],
    images: ["/NoKanban.png"],
    liveUrl:
      "https://marketplace.visualstudio.com/items?itemName=nokanban-dev.nokanban",
    githubUrl: "https://github.com/BrandonOficial/nokanban",
  },
  {
    year: "2026",
    role: "Logística Encomendas",
    company: "Condomínio",
    description:
      "Sistema Logístico de encomendas registro e retirada de correspondências e entregas",
    tech: ["TS", "React", "SQL", "REST"],
    images: [
      "/DashboardLogistic.png",
      "/ConfiguracoesLogistic.png",
      "/MoradoresLogistic.png",
      "/EncomendasLogistic.png",
    ],
    liveUrl: "",
    githubUrl: "https://github.com/BrandonOficial/simple-dashboard",
  },
];

export const ARTICLES: Article[] = [
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
    url: "https://nom-blog-newsletter-phoz.vercel.app/article/1",
  },
  {
    image:
      "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=600&fit=crop",
    title: "Um Mergulho Profundo no Artesanato do Clean Code",
    excerpt:
      "Lições aprendidas com a construção e manutenção de sistemas de design em vários",
    date: "Ago 2025",
    readTime: "13 min de leitura",
    category: "Desenvolvimento",
    url: "https://nom-blog-newsletter-phoz.vercel.app/article/2",
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "GitHub",
    handle: "@BrandonOficial",
    url: "https://github.com/BrandonOficial",
    iconId: "github",
    colorClass: "hover:border-purple-500/30 hover:bg-purple-500/5",
  },
  {
    name: "LinkedIn",
    handle: "BrandonRamos",
    url: "https://www.linkedin.com/in/brandon-ramos-73ba27206/",
    iconId: "linkedin",
    colorClass: "hover:border-cyan-500/30 hover:bg-cyan-500/5",
  },
];
