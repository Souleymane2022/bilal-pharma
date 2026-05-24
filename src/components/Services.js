import {
  ClipboardList,
  Megaphone,
  Scale,
  BookOpen,
  Microscope,
  Globe,
} from "lucide-react";

const services = [
  {
    icon: <ClipboardList size={28} />,
    title: "Enregistrement de Médicaments",
    description:
      "Accompagnement complet dans le processus d'enregistrement et d'homologation de vos produits pharmaceutiques auprès des autorités compétentes tchadiennes.",
    color: "blue",
  },
  {
    icon: <Megaphone size={28} />,
    title: "Promotion Pharmaceutique",
    description:
      "Stratégies de promotion ciblées pour vos médicaments et produits de santé, en conformité avec les réglementations en vigueur au Tchad.",
    color: "green",
  },
  {
    icon: <Scale size={28} />,
    title: "Conseil Réglementaire",
    description:
      "Expertise et conseil en matière de réglementation pharmaceutique locale et internationale pour sécuriser vos démarches administratives.",
    color: "blue",
  },
  {
    icon: <BookOpen size={28} />,
    title: "Dossiers d'Homologation",
    description:
      "Constitution et suivi de vos dossiers d'homologation : documentation technique, études cliniques, données qualité et sécurité.",
    color: "green",
  },
  {
    icon: <Microscope size={28} />,
    title: "Veille Réglementaire",
    description:
      "Surveillance continue des évolutions réglementaires pour anticiper les changements et maintenir la conformité de vos produits.",
    color: "blue",
  },
  {
    icon: <Globe size={28} />,
    title: "Expansion Sous-Régionale",
    description:
      "Accompagnement dans l'extension de vos activités aux marchés pharmaceutiques de la sous-région Afrique Centrale.",
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
      </div>
    </section>
  );
}
