import type { Metadata } from "next";
// Certifique-se de que a importação da fonte e do CSS global estão aqui
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

// ============================================================================
// CONFIGURAÇÃO DE SEO
// ============================================================================
export const metadata: Metadata = {
  title: {
    default: "Brandon Ramos | Desenvolvedor Front-end & Full Stack",
    template: "%s | Brandon Ramos",
  },
  description:
    "Portfólio de Brandon Ramos. Desenvolvedor focado em criar experiências digitais impactantes, interfaces inovadoras e arquiteturas de software robustas usando Clean Code.",
  keywords: [
    "Brandon Ramos",
    "Desenvolvedor",
    "Front-end",
    "Full Stack",
    "Next.js",
    "React",
    "TypeScript",
    "Piracicaba",
    "UI/UX",
  ],
  authors: [
    { name: "Brandon Ramos", url: "https://github.com/BrandonOficial" },
  ],
  creator: "Brandon Ramos",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://portfolio-one-flax-40.vercel.app/",
    title: "Brandon Ramos | Desenvolvedor Front-end & Full Stack",
    description:
      "Construindo conexões significativas através de tecnologia e design intuitivo.",
    siteName: "Portfólio Brandon Ramos",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Capa do Portfólio de Brandon Ramos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brandon Ramos | Desenvolvedor",
    description:
      "Construindo conexões significativas através de tecnologia e design intuitivo.",
    creator: "@BrandonOficial",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
