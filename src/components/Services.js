import {
  TrendingUp,
  GraduationCap,
  Newspaper,
  FileImage,
  BarChart2,
  Share2,
  Calendar,
  Shield,
  Network,
  Activity,
} from "lucide-react";

const services = [
  {
    icon: <TrendingUp size={28} />,
    title: "Stratégies de Marketing Pharmaceutique",
    description:
      "Élaboration de campagnes de marketing sur mesure pour promouvoir efficacement les produits pharmaceutiques, en utilisant des canaux traditionnels et numériques.",
    color: "blue",
  },
  {
    icon: <GraduationCap size={28} />,
    title: "Éducation Médicale et Formation",
    description:
      "Organisation de sessions de formation et de séminaires pour les professionnels de santé afin de les informer sur les nouveaux produits, les études cliniques et les meilleures pratiques.",
    color: "green",
  },
  {
    icon: <Newspaper size={28} />,
    title: "Gestion des Relations Publiques",
    description:
      "Création et diffusion de communiqués de presse, gestion de la réputation de la marque et relations avec les médias pour renforcer la visibilité des produits.",
    color: "blue",
  },
  {
    icon: <FileImage size={28} />,
    title: "Élaboration de Supports de Communication",
    description:
      "Conception de brochures, dépliants, vidéos et autres supports destinés à informer les professionnels de santé et les patients sur les caractéristiques et les avantages des produits.",
    color: "green",
  },
  {
    icon: <BarChart2 size={28} />,
    title: "Analyse et Études de Marché",
    description:
      "Réalisation d'études de marché pour comprendre les tendances, les besoins des consommateurs et la concurrence, afin d'orienter les stratégies de promotion.",
    color: "blue",
  },
  {
    icon: <Share2 size={28} />,
    title: "Gestion des Réseaux Sociaux",
    description:
      "Développement de stratégies de communication sur les réseaux sociaux pour engager les professionnels de santé et les patients, en partageant des contenus éducatifs et informatifs.",
    color: "green",
  },
  {
    icon: <Calendar size={28} />,
    title: "Planification d'Événements",
    description:
      "Organisation de congrès, de tables rondes et d'autres événements pour favoriser les échanges entre les acteurs du secteur et promouvoir les produits.",
    color: "blue",
  },
  {
    icon: <Shield size={28} />,
    title: "Support à la Conformité Réglementaire",
    description:
      "Assistance dans le respect des réglementations en matière de promotion des médicaments, y compris la création de documents conformes aux normes éthiques et légales.",
    color: "green",
  },
  {
    icon: <Network size={28} />,
    title: "Partenariats Stratégiques",
    description:
      "Mise en relation avec des acteurs clés du secteur, tels que des médecins, des hôpitaux et d'autres institutions de santé, pour créer des synergies et élargir la portée des produits.",
    color: "blue",
  },
  {
    icon: <Activity size={28} />,
    title: "Suivi et Analyse des Performances",
    description:
      "Évaluation des résultats des campagnes de promotion, collecte de données et ajustement des stratégies en fonction des performances pour maximiser le retour sur investissement.",
    color: "green",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-24"
      style={{ background: "linear-gradient(180deg, #F0F4FF 0%, #F0FAF4 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-bp-green uppercase tracking-widest mb-3">
            Ce que nous faisons
          </p>
          <h2 className="section-title mx-auto">Nos Services</h2>
          <p className="section-subtitle mx-auto text-center mt-4">
            Nous offrons une gamme complète de services pharmaceutiques pour
            accompagner votre développement au Tchad et en Afrique.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const isBlue = service.color === "blue";
            return (
              <div
                key={service.title}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 group border border-gray-100 hover:border-transparent hover:-translate-y-1"
              >
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 ${
                    isBlue
                      ? "bg-bp-blue-muted text-bp-blue group-hover:bg-bp-blue group-hover:text-white"
                      : "bg-bp-green-muted text-bp-green group-hover:bg-bp-green group-hover:text-white"
                  }`}
                >
                  {service.icon}
                </div>
                <h3
                  className={`text-lg font-bold mb-3 ${
                    isBlue ? "text-bp-blue" : "text-bp-green"
                  }`}
                >
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Conclusion */}
        <div className="mt-12 text-center max-w-3xl mx-auto">
          <p className="text-gray-500 italic text-sm leading-relaxed border-t border-gray-200 pt-8">
            Les services offerts par BILAL PHARMA visent à maximiser la visibilité et l'impact
            de vos produits sur le marché tout en respectant les normes éthiques et réglementaires.
          </p>
        </div>
      </div>
    </section>
  );
}
