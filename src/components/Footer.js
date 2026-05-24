import { Phone, Mail, MapPin } from "lucide-react";
import Logo from "./Logo";

const links = [
  { label: "Accueil", href: "#accueil" },
  { label: "À propos", href: "#apropos" },
  { label: "Services", href: "#services" },
  { label: "Pourquoi nous", href: "#avantages" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-bp-blue-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Colonne 1 - Logo & description */}
          <div>
            <div className="mb-5">
              <Logo size="sm" showText={true} />
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Agence Agréée de Promotion et D'enregistrement des Produits
              Pharmaceutiques, basée à N'Djaména, Tchad.
            </p>
          </div>

          {/* Colonne 2 - Navigation */}
          <div>
            <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-widest">
              Navigation
            </h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3 - Contact */}
          <div>
            <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-widest">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-white/60 text-sm">
                  Ndjari 8ème Arrond.<br />N'Djaména, Tchad
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-green-400 mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <a href="tel:+23566828666" className="text-white/60 hover:text-white block transition-colors">
                    +235 66 82 86 66
                  </a>
                  <a href="tel:+23566429839" className="text-white/60 hover:text-white block transition-colors">
                    +235 66 42 98 39
                  </a>
                  <a href="tel:+23599105906" className="text-white/60 hover:text-white block transition-colors">
                    +235 99 10 59 06
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-green-400 mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <a
                    href="mailto:bkhazaliadam@gmail.com"
                    className="text-white/60 hover:text-white block transition-colors"
                  >
                    bkhazaliadam@gmail.com
                  </a>
                  <a
                    href="mailto:bilalpharmaabdi@gmail.com"
                    className="text-white/60 hover:text-white block transition-colors"
                  >
                    bilalpharmaabdi@gmail.com
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Barre de séparation */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} BILAL PHARMA. Tous droits réservés.
          </p>
          <p className="text-white/40 text-xs">
            Agence Agréée de Promotion et D'enregistrement des Produits Pharmaceutiques
          </p>
        </div>
      </div>
    </footer>
  );
}
