"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Send, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ nom: "", email: "", telephone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ouverture du client mail avec les informations pré-remplies
    const subject = encodeURIComponent(`Demande de contact – ${form.nom}`);
    const body = encodeURIComponent(
      `Nom : ${form.nom}\nEmail : ${form.email}\nTéléphone : ${form.telephone}\n\nMessage :\n${form.message}`
    );
    window.location.href = `mailto:bilalpharmaabdi@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const infos = [
    {
      icon: <MapPin size={20} />,
      label: "Adresse",
      value: "Ndjari 8ème Arrond.\nN'Djaména, République du Tchad",
      color: "blue",
    },
    {
      icon: <Phone size={20} />,
      label: "Téléphone / WhatsApp",
      value: "+235 66 82 86 66\n+235 66 42 98 39\n+235 99 10 59 06",
      href: "tel:+23566828666",
      color: "green",
    },
    {
      icon: <Mail size={20} />,
      label: "Email",
      value: "bkhazaliadam@gmail.com\nbilalpharmaabdi@gmail.com",
      href: "mailto:bilalpharmaabdi@gmail.com",
      color: "blue",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-bp-green uppercase tracking-widest mb-3">
            Nous joindre
          </p>
          <h2 className="section-title mx-auto">Contactez-nous</h2>
          <p className="section-subtitle mx-auto text-center mt-4">
            Notre équipe est disponible pour répondre à toutes vos questions
            et vous accompagner dans vos démarches.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Informations */}
          <div className="space-y-6">
            {infos.map((info) => (
              <div
                key={info.label}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex gap-5"
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    info.color === "blue"
                      ? "bg-bp-blue-muted text-bp-blue"
                      : "bg-bp-green-muted text-bp-green"
                  }`}
                >
                  {info.icon}
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                    {info.label}
                  </p>
                  {info.href ? (
                    <a
                      href={info.href}
                      className={`font-medium whitespace-pre-line hover:underline ${
                        info.color === "blue" ? "text-bp-blue" : "text-bp-green"
                      }`}
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="font-medium text-gray-700 whitespace-pre-line">
                      {info.value}
                    </p>
                  )}
                </div>
              </div>
            ))}

            {/* Directeur */}
            <div
              className="rounded-2xl p-6 text-white"
              style={{
                background: "linear-gradient(135deg, #1B3A8C, #1A6B3C)",
              }}
            >
              <p className="text-white/70 text-sm mb-1">Directeur Général</p>
              <p className="text-xl font-black">Dr. BILAL KAZALI ADAM</p>
              <p className="text-white/70 text-sm mt-2">
                Agence Agréée de Promotion et D'enregistrement des Produits
                Pharmaceutiques
              </p>
            </div>
          </div>

          {/* Formulaire */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <CheckCircle2 size={56} className="text-bp-green mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Message envoyé !
                </h3>
                <p className="text-gray-600">
                  Votre client mail s'est ouvert. Nous vous répondrons dans les
                  meilleurs délais.
                </p>
                <button
                  className="mt-6 text-bp-blue font-semibold underline"
                  onClick={() => setSent(false)}
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl font-bold text-gray-800 mb-6">
                  Envoyer un message
                </h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      name="nom"
                      required
                      value={form.nom}
                      onChange={handleChange}
                      placeholder="Votre nom"
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-bp-blue focus:ring-1 focus:ring-bp-blue transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      name="telephone"
                      value={form.telephone}
                      onChange={handleChange}
                      placeholder="+235 …"
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-bp-blue focus:ring-1 focus:ring-bp-blue transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="votre@email.com"
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-bp-blue focus:ring-1 focus:ring-bp-blue transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Décrivez votre besoin…"
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-bp-blue focus:ring-1 focus:ring-bp-blue transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-bp-blue text-white py-3 rounded-lg font-semibold hover:bg-bp-blue-dark transition-all duration-200 shadow-md"
                >
                  <Send size={16} />
                  Envoyer le message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
