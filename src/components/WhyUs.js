import { Award, Target, Zap, Globe, BarChart, Scale, Headphones } from "lucide-react";

const reasons = [
  {
    icon: <Award size={24} />,
    title: "Expertise Sectorielle",
    description:
      "Notre agence dispose d'une équipe d'experts ayant une connaissance approfondie du secteur pharmaceutique. Nous comprenons les défis spécifiques auxquels font face les entreprises et les professionnels de santé.",
  },
  {
    icon: <Target size={24} />,
    title: "Approche Personnalisée",
    description:
      "Chaque client est unique. Nous prenons le temps de comprendre vos besoins spécifiques et de concevoir des stratégies sur mesure qui répondent à vos objectifs commerciaux et marketing.",
  },
  {
    icon: <Zap size={24} />,
    title: "Innovation Continue",
    description:
      "Le marché pharmaceutique évolue rapidement. Nous nous engageons à rester à la pointe des tendances et des technologies, en intégrant des méthodes innovantes dans nos campagnes.",
  },
  {
    icon: <Globe size={24} />,
    title: "Réseau Solide",
    description:
      "Grâce à notre vaste réseau de contacts dans le secteur, nous facilitons les relations entre les laboratoires, les professionnels de santé et les décideurs pour accroître la visibilité de vos produits.",
  },
  {
    icon: <BarChart size={24} />,
    title: "Mesure de Performance",
    description:
      "Nous suivons et analysons les performances de nos campagnes pour garantir un retour sur investissement optimal et ajuster nos stratégies en temps réel.",
  },
  {
    icon: <Scale size={24} />,
    title: "Engagement envers l'Éthique",
    description:
      "Nous agissons toujours dans le respect des normes éthiques et des réglementations en vigueur dans le secteur pharmaceutique, garantissant la crédibilité et la confiance de nos clients.",
  },
  {
    icon: <Headphones size={24} />,
    title: "Support Complet",
    description:
      "De la conception de la stratégie à l'exécution des campagnes, nous offrons un support complet à chaque étape du processus, vous permettant de vous concentrer sur votre cœur de métier.",
  },
];

export default function WhyUs() {
  return (
    <section id="avantages" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-bp-green uppercase tracking-widest mb-3">
            Nos atouts
          </p>
          <h2 className="section-title mx-auto">Pourquoi Choisir BILAL PHARMA ?</h2>
          <p className="section-subtitle mx-auto text-center mt-4">
            Des raisons concrètes de nous faire confiance pour vos projets
            pharmaceutiques au Tchad et dans la sous-région.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, i) => (
            <div key={reason.title} className="flex gap-5">
              <div className="flex-shrink-0">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold shadow-md"
                  style={{
                    background:
                      i % 2 === 0
                        ? "linear-gradient(135deg, #1B3A8C, #2B5CE6)"
                        : "linear-gradient(135deg, #3CB83A, #4DC84B)",
                  }}
                >
                  {reason.icon}
                </div>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-2">{reason.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed text-justify">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bannière CTA */}
        <div
          className="mt-20 rounded-2xl p-8 md:p-12 text-white text-center"
          style={{
            background: "linear-gradient(135deg, #1B3A8C 0%, #3CB83A 100%)",
          }}
        >
          <h3 className="text-2xl md:text-3xl font-black mb-4">
            Ensemble, faisons avancer la santé !
          </h3>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Choisir BILAL PHARMA, c'est opter pour un partenaire engagé, capable de vous
            accompagner dans la promotion de vos produits pharmaceutiques de manière efficace
            et éthique.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-white text-bp-blue px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all duration-200 shadow-lg text-lg"
          >
            Parler à un expert →
          </a>
        </div>
      </div>
    </section>
  );
}
