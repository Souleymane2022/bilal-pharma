"use client";

export default function Logo({ size = "md", showText = true }) {
  const sizes = {
    sm: { icon: 36, text: "text-lg" },
    md: { icon: 48, text: "text-2xl" },
    lg: { icon: 64, text: "text-3xl" },
  };
  const s = sizes[size];

  return (
    <div className="flex items-center gap-3">
      {/* SVG Logo inspiré du logo bp + caducée */}
      <svg
        width={s.icon}
        height={s.icon}
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Cercle fond */}
        <circle cx="30" cy="30" r="28" fill="white" stroke="#1B3A8C" strokeWidth="2" />

        {/* Lettre b - bleu */}
        <text
          x="8"
          y="42"
          fontSize="32"
          fontWeight="bold"
          fontFamily="Georgia, serif"
          fill="#1B3A8C"
        >
          b
        </text>

        {/* Lettre p - vert */}
        <text
          x="28"
          y="42"
          fontSize="32"
          fontWeight="bold"
          fontFamily="Georgia, serif"
          fill="#1A6B3C"
        >
          p
        </text>

        {/* Serpent du caducée stylisé - bleu */}
        <path
          d="M30 8 C26 12, 34 16, 30 20 C26 24, 34 28, 30 32"
          stroke="#1B3A8C"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.6"
        />
        {/* Serpent - vert */}
        <path
          d="M30 10 C34 14, 26 18, 30 22 C34 26, 26 30, 30 34"
          stroke="#1A6B3C"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.6"
        />
      </svg>

      {showText && (
        <div className="flex flex-col leading-none">
          <span className={`${s.text} font-black tracking-wider`}>
            <span className="text-bp-blue">BILAL</span>{" "}
            <span className="text-bp-green">PHARMA</span>
          </span>
          {size !== "sm" && (
            <span className="text-[9px] text-gray-500 tracking-widest uppercase mt-0.5">
              Agence Pharmaceutique Agréée
            </span>
          )}
        </div>
      )}
    </div>
  );
}
