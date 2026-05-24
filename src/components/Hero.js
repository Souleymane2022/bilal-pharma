"use client";

import { ArrowRight, ShieldCheck, Award, Globe } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0F2266 0%, #1B3A8C 40%, #1A6B3C 100%)",
      }}
    >
      {/* Motif décoratif */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute top-20 right-10 w-96 h-96 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-10 left-5 w-64 h-64 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(26,107,60,0.4) 0%, transparent 70%)",
          }}
        />
        {/* Grille */}
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Texte */}
          <div className="text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Agence Agréée au Tchad
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
              <span className="text-white">Votre Partenaire</span>
              <br />
              <span className="text-green-300">Pharmaceutique</span>
              <br />
              <span className="text-blue-200">de Confiance</span>
            </h1>

            <p className="text-lg text-white/80 leading-relaxed mb-8 max-w-lg">
              BILAL PHARMA est une agence agréée spécialisée dans la{" "}
              <strong className="text-white">promotion</strong> et{" "}
              <strong className="text-white">l'enregistrement</strong> des
              produits pharmaceutiques au Tchad et dans la sous-région.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-white text-bp-blue px-6 py-3 rounded-lg font-bold hover:bg-blue-50 transition-all duration-200 shadow-lg"
              >
                Nous contacter
                <ArrowRight size={18} />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 border-2 border-white/50 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-200"
              >
                Nos services
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: "100%", label: "Agréé" },
                { value: "N'Djaména", label: "Tchad" },
                { value: "24/7", label: "Disponible" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20"
                >
                  <div className="text-2xl font-black text-white">
                    {stat.value}
                  </div>
                  <div className="text-xs text-white/60 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Carte visuelle */}
          <div className="hidden lg:flex justify-center">
            <div className="relative">
              {/* Carte principale */}
              <div className="bg-white rounded-2xl shadow-2xl p-8 w-80">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-bp-blue rounded-xl flex items-center justify-center">
                    <ShieldCheck className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-gray-800">Agence Agréée</div>
                    <div className="text-xs text-gray-500">République du Tchad</div>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      icon: <Award size={16} />,
                      color: "text-bp-blue",
                      bg: "bg-bp-blue-muted",
                      label: "Promotion Pharmaceutique",
                    },
                    {
                      icon: <Globe size={16} />,
                      color: "text-bp-green",
                      bg: "bg-bp-green-muted",
                      label: "Enregistrement Médicaments",
                    },
                    {
                      icon: <ShieldCheck size={16} />,
                      color: "text-bp-blue",
                      bg: "bg-bp-blue-muted",
                      label: "Conformité Réglementaire",
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center gap-3 p-3 rounded-lg bg-gray-50"
                    >
                      <div className={`${item.bg} ${item.color} p-2 rounded-lg`}>
                        {item.icon}
                      </div>
                      <span className="text-sm font-medium text-gray-700">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 text-center">
                  <p className="text-xs text-gray-500">
                    Ndjari 8ème Arrond. — N'Djaména, Tchad
                  </p>
                </div>
              </div>

              {/* Badge flottant */}
              <div className="absolute -top-4 -right-4 bg-bp-green text-white rounded-xl px-4 py-2 shadow-lg text-sm font-bold">
                Certifié ✓
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vague bas */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 80L1440 80L1440 20C1200 60 960 0 720 20C480 40 240 0 0 20L0 80Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
