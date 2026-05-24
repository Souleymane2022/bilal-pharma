"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import Logo from "./Logo";

const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "À propos", href: "#apropos" },
  { label: "Services", href: "#services" },
  { label: "Pourquoi nous", href: "#avantages" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md py-2"
          : "bg-white/95 backdrop-blur-sm py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <Logo size="sm" />

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-bp-blue rounded-lg hover:bg-bp-blue-muted transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA desktop */}
        <a
          href="tel:+23566828666"
          className="hidden md:flex items-center gap-2 bg-bp-green text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-bp-green-dark transition-all duration-200"
        >
          <Phone size={15} />
          +235 66 82 86 66
        </a>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="px-4 py-3 text-sm font-medium text-gray-700 hover:text-bp-blue hover:bg-bp-blue-muted rounded-lg transition-all"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+23566828666"
            className="mt-2 flex items-center justify-center gap-2 bg-bp-green text-white px-4 py-3 rounded-lg text-sm font-semibold"
          >
            <Phone size={15} />
            Appeler maintenant
          </a>
        </div>
      )}
    </header>
  );
}
