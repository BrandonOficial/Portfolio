"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface ProjectCarouselProps {
  images: string[];
  title: string;
}

export function ProjectCarousel({ images, title }: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Memoizando as funções para evitar re-renderizações desnecessárias
  const goToPrevious = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault(); // Impede que o clique "vaze" para elementos pai
      setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    },
    [images.length],
  );

  const goToNext = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    },
    [images.length],
  );

  // Tratamento de exceção: componente robusto não quebra se o array for vazio
  if (!images || images.length === 0) {
    return (
      <div className="relative w-full h-48 sm:h-56 bg-muted/30 rounded-lg overflow-hidden flex items-center justify-center border border-dashed border-foreground/20">
        <span className="text-xs text-muted-foreground font-mono">
          Sem imagens
        </span>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full min-h-[12rem] sm:min-h-[14rem] bg-muted/30 rounded-lg overflow-hidden group">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0"
        >
          <Image
            src={images[currentIndex] || "/placeholder.svg"}
            alt={`${title} - Imagem ${currentIndex + 1}`}
            fill
            className="object-cover"
            // Otimização crucial de banda (Diz ao browser qual tamanho baixar)
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            // LCP Optimization: Apenas a primeira imagem ganha prioridade de carregamento
            priority={currentIndex === 0}
          />
        </motion.div>
      </AnimatePresence>

      {images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-lg bg-black/40 hover:bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm cursor-pointer"
            aria-label="Imagem anterior"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-lg bg-black/40 hover:bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm cursor-pointer"
            aria-label="Próxima imagem"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentIndex(index);
                }}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  index === currentIndex
                    ? "w-6 bg-white shadow-sm"
                    : "w-1.5 bg-white/50 hover:bg-white/90"
                }`}
                aria-label={`Ir para a imagem ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
