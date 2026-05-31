import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const points = [
  "Stratégies de promotion : campagnes sur mesure adaptées à vos besoins",
  "Formation et accompagnement des équipes de vente et des professionnels de santé",
  "Études de marché : analyse approfondie des tendances et des comportements des prescripteurs",
  "Communication digitale : contenus attractifs sur les réseaux sociaux et plateformes en ligne",
];

export default function About() {
  return (
    <section id="apropos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visuel – logo réel */}
          <div className="relative">
            <div
              className="rounded-2xl p-1 shadow-xl"
              style={{ background: "linear-gradient(135deg, #1B3A8C 50%, #3CB83A 50%)" }}
            >
              <div className="bg-white rounded-xl p-8 flex flex-col items-center">
                {/* Logo officiel */}
                <div className="flex justify-center mb-6">
                  <Image
                    src="/logo.png"
                    alt="BILAL PHARMA logo"
                    width={300}
                    height={100}
                    className="object-contain"
                    priority
                  />
                </div>

                <div className="border-t border-gray-100 pt-6 w-full grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-bp-blue-muted rounded-xl">
                    <p className="text-xs text-gray-500">Directeur Général</p>
                    <p className="text-sm font-bold text-bp-blue mt-1">
                      Dr. BILAL KHAZALI ADAM
                    </p>
                  </div>
                  <div className="text-center p-3 bg-bp-green-muted rounded-xl">
                    <p className="text-xs text-gray-500">Localisation</p>
                    <p className="text-sm font-bold text-bp-green mt-1">
                      N'Djaména, Tchad
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Décoration */}
            <div className="absolute -z-10 -top-4 -left-4 w-full h-full bg-bp-blue-muted rounded-2xl" />
          </div>

          {/* Contenu */}
          <div>
            <p className="text-sm font-semibold text-bp-green uppercase tracking-widest mb-3">
              Qui sommes-nous
            </p>
            <h2 className="section-title mb-6">
              Une agence pharmaceutique<br />
              <span className="text-bp-green">au service de votre santé</span>
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6 text-justify">
              Chez <strong className="text-bp-blue">BILAL PHARMA</strong>, nous
              sommes spécialisés dans la promotion et la communication des
              produits pharmaceutiques. Notre équipe d'experts met à votre
              disposition son savoir-faire pour vous aider à atteindre vos
              objectifs marketing et à renforcer la visibilité de vos produits
              sur le marché.
            </p>

            <p className="text-gray-600 leading-relaxed mb-8 text-justify">
              Dirigée par{" "}
              <strong className="text-bp-blue">Dr. BILAL KHAZALI ADAM</strong>,
              notre agence implantée à N'Djaména accompagne les laboratoires
              pharmaceutiques nationaux et internationaux avec une approche
              personnalisée, innovante et rigoureusement conforme aux normes
              éthiques et réglementaires en vigueur.
            </p>

            <ul className="space-y-4">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle2
                    className="text-bp-green mt-0.5 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-gray-700 text-justify">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
