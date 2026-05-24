import { Trophy, Users, Lock, Zap, Heart, Handshake } from "lucide-react";

const reasons = [
  {
    icon: <Trophy size={24} />,
    title: "Agrément Officiel",
    description:
      "Seule agence agréée par les autorités sanitaires du Tchad pour la promotion et l'enregistrement des produits pharmaceutiques.",
  },
  {
    icon: <Users size={24} />,
    title: "Expertise Reconnue",
    description:
      "Une équipe dirigée par le Dr. BILAL KAZALI ADAM, fort d'une expertise approfondie dans le domaine pharmaceutique tchadien.",
  },
  {
    icon: <Lock size={24} />,
    title: "Conformité Totale",
    description:
      "Respect strict des normes réglementaires locales et internationales pour garantir la mise sur le marché de vos produits.",
  },
  {
    icon: <Zap size={24} />,
    title: "Rapidité & Efficacité",
    description:
      "Traitement rapide de vos dossiers grâce à nos relations établies avec les administrations compétentes.",
  },
  {
    icon: <Heart size={24} />,
    title: "Engagement Santé",
    description:
      "Un engagement profond pour améliorer l'accès aux médicaments de qualité pour la population tchadienne.",
  },
  {
    icon: <Handshake size={24} />,
    title: "Partenariat Durable",
    description:
      "Nous bâtissons des relations de confiance à long terme avec nos clients pour accompagner leur croissance.",
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
            pharmaceutiques au Tchad.
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
                        : "linear-gradient(135deg, #1A6B3C, #27913A)",
                  }}
                >
                  {reason.icon}
                </div>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-2">{reason.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
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
            background: "linear-gradient(135deg, #1B3A8C 0%, #1A6B3C 100%)",
          }}
        >
          <h3 className="text-2xl md:text-3xl font-black mb-4">
            Prêt à développer votre présence pharmaceutique au Tchad ?
          </h3>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Contactez BILAL PHARMA dès aujourd'hui et bénéficiez d'un
            accompagnement expert, agréé et personnalisé.
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
