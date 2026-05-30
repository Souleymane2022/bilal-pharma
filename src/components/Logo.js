"use client";
import Image from "next/image";

export default function Logo({ size = "md" }) {
  const dims = {
    sm: { w: 168, h: 56 },
    md: { w: 210, h: 70 },
    lg: { w: 300, h: 100 },
  };
  const d = dims[size];

  return (
    <Image
      src="/logo.jpg"
      alt="BILAL PHARMA – Agence Agréée de Promotion et d'Enregistrement des Produits Pharmaceutiques"
      width={d.w}
      height={d.h}
      className="object-contain"
      priority
    />
  );
}
