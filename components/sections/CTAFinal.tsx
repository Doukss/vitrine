"use client";

import { useState } from "react";

export default function CTAFinal() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) return;

    console.log("Demo request:", email);

    setSent(true);
  };

  return (
    <section id="contact" className="bg-gray-100 py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">
          Prêt à vous lancer ?
        </p>

        <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">
          Transformez votre communauté dès aujourd'hui
        </h2>

        <p className="mt-3 text-gray-500">
          Rejoignez plus de 320 groupes religieux qui font confiance à Ummati.
          Essai gratuit 30 jours, sans carte bancaire.
        </p>

        {sent ? (
          <div className="mt-8 flex items-center justify-center gap-2 text-green-600 font-medium">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            Merci ! Nous vous contacterons dans les 24h.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col sm:flex-row gap-3 justify-center"
          >
            <input
              type="email"
              placeholder="votre@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-label="Votre adresse email"
              className="w-full text-gray-700 sm:w-auto flex-1 rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <button
              type="submit"
              className="rounded-lg bg-indigo-600 text-white px-6 py-3 font-medium hover:bg-indigo-700 transition"
            >
              Demander une démo
            </button>
          </form>
        )}

        <p className="mt-4 text-sm text-gray-400">
          Sans engagement · Réponse sous 24h · Support inclus
        </p>
      </div>
    </section>
  );
}
