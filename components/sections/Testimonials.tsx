"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";

const TESTIMONIALS = [
  {
    quote:
      "Avant, on gérait tout sur Excel. Maintenant toute l'équipe a accès aux infos en temps réel. Un gain de temps énorme pour notre communauté.",
    name: "Pasteur Diallo",
    role: "Église Grâce & Vérité, Dakar",
    initials: "PD",
    color: "purple",
  },
  {
    quote:
      "La fonctionnalité de collecte en ligne a transformé notre façon de recevoir les contributions. Même nos membres de la diaspora participent maintenant.",
    name: "Sœur Mariama",
    role: "Association islamique Al Fajr",
    initials: "SM",
    color: "teal",
  },
  {
    quote:
      "La gestion des présences par QR code a complètement changé notre façon de suivre nos fidèles. Simple, rapide, sans papier.",
    name: "Frère Koné",
    role: "Communauté Évangile Vie, Abidjan",
    initials: "FK",
    color: "amber",
  },
  {
    quote:
      "En moins d'une semaine, tous nos responsables de groupes étaient opérationnels. L'interface est vraiment intuitive.",
    name: "Pasteure Ndiaye",
    role: "Église Mission Espoir, Saint-Louis",
    initials: "PN",
    color: "purple",
  },
];

const avatarStyles: Record<string, string> = {
  purple: "bg-purple-100 text-purple-700",
  teal: "bg-teal-100 text-teal-700",
  amber: "bg-amber-100 text-amber-700",
};

function Stars() {
  return (
    <div className="flex gap-0.5" aria-label="5 étoiles">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill="#BA7517"
          stroke="none"
        >
          <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", slidesToScroll: 1 },
    [Autoplay({ delay: 4000, stopOnInteraction: true })],
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi],
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="bg-gray-50 py-20 px-4 text-center overflow-hidden">
      {/* Header */}
      <p className="text-xl font-semibold text-indigo-900 tracking-widest uppercase mb-2">
        Témoignages
      </p>
      <h2 className="text-4xl md:text-3xl font-semibold text-gray-900 tracking-tight mb-3">
        Ce que disent nos responsables
      </h2>
      <p className="text-sm text-gray-400 mb-12 max-w-sm mx-auto leading-relaxed">
        Des vraies communautés, de vrais résultats.
      </p>

      {/* Slider */}
      <div className="relative max-w-4xl mx-auto">
        {/* Bouton précédent */}
        <button
          onClick={scrollPrev}
          aria-label="Précédent"
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10
                     w-9 h-9 rounded-full bg-white border border-gray-200
                     flex items-center justify-center shadow-sm
                     hover:bg-gray-50 transition-colors hidden md:flex"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        {/* Viewport Embla */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-5">
            {TESTIMONIALS.map(({ quote, name, role, initials, color }) => (
              <div
                key={name}
                className="min-w-0 flex-[0_0_100%] sm:flex-[0_0_calc(50%-10px)]"
              >
                <div
                  className="bg-white border border-gray-100 rounded-2xl p-7 text-left flex flex-col gap-5 h-full
                                transition-all duration-300"
                >
                  <Stars />

                  {/* Guillemets décoratifs */}
                  <div className="relative">
                    <span className="absolute -top-3 -left-1 text-5xl text-indigo-100 font-serif leading-none select-none">
                      "
                    </span>
                    <blockquote className="text-sm text-gray-600 leading-relaxed pt-3 relative z-10">
                      {quote}
                    </blockquote>
                  </div>

                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100 mt-auto">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-semibold shrink-0 ${avatarStyles[color]}`}
                    >
                      {initials}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        {name}
                      </p>
                      <p className="text-xs text-gray-400 mt-0.5">{role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bouton suivant */}
        <button
          onClick={scrollNext}
          aria-label="Suivant"
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10
                     w-9 h-9 rounded-full bg-white border border-gray-200
                     flex items-center justify-center shadow-sm
                     hover:bg-gray-50 transition-colors hidden md:flex"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      {/* Pagination dots */}
      <div className="flex justify-center gap-2 mt-8">
        {TESTIMONIALS.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            aria-label={`Aller au témoignage ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === selectedIndex
                ? "w-6 h-2 bg-indigo-900"
                : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
