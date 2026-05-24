import "./globals.css";

export const metadata = {
  title: "BILAL PHARMA – Agence Agréée de Promotion et D'enregistrement des Produits Pharmaceutiques",
  description:
    "BILAL PHARMA est une agence agréée basée à N'Djaména, Tchad, spécialisée dans la promotion et l'enregistrement des produits pharmaceutiques.",
  keywords: "BILAL PHARMA, pharmacie, médicaments, Tchad, N'Djaména, enregistrement pharmaceutique",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
