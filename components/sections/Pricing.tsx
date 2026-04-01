type Plan = {
  badge: string;
  badgeColor: "gray" | "featured" | "teal";
  name: string;
  price: string;
  period: string;
  features: string[];
  cta: string;
  featured?: boolean;
};

const PLANS: Plan[] = [
  {
    badge: "Gratuit",
    badgeColor: "gray",
    name: "Essentiel",
    price: "0 FCFA",
    period: "pour toujours",
    features: [
      "Jusqu'à 50 membres",
      "Agenda & événements",
      "Messagerie de base",
      "Support par email",
    ],
    cta: "Commencer",
  },
  {
    badge: "Populaire",
    badgeColor: "featured",
    name: "Communauté",
    price: "9 900 FCFA",
    period: "par mois",
    features: [
      "Membres illimités",
      "Collectes en ligne",
      "SMS & notifications push",
      "Rapports avancés",
    ],
    cta: "Démarrer l'essai gratuit",
    featured: true,
  },
  {
    badge: "Multi-sites",
    badgeColor: "teal",
    name: "Diocèse",
    price: "Sur devis",
    period: "plusieurs communautés",
    features: [
      "Accès multi-groupes",
      "Tableau de bord central",
      "API & intégrations",
      "Support dédié 24/7",
    ],
    cta: "Nous contacter",
  },
];

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
      <circle cx="7" cy="7" r="7" fill="currentColor" opacity="0.15" />
      <polyline
        points="4,7 6,9.5 10,4.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="bg-white">
      <div className="py-24 px-6 max-w-7xl mx-auto text-center">
        <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">
          Tarifs
        </p>

        <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">
          Simple et transparent
        </h2>

        <p className="mt-2 text-gray-500">
          Commencez gratuitement, évoluez à votre rythme.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl border p-8 text-left shadow-sm transition hover:shadow-md
            ${plan.featured ? "border-indigo-500 scale-105" : "border-gray-200"}
            `}
            >
              {/* Badge */}

              <span
                className={`inline-block text-xs font-semibold px-3 py-1 rounded-full
              ${
                plan.badgeColor === "gray"
                  ? "bg-gray-100 text-gray-700"
                  : plan.badgeColor === "featured"
                    ? "bg-indigo-100 text-indigo-700"
                    : "bg-teal-100 text-teal-700"
              }
              `}
              >
                {plan.badge}
              </span>

              {/* Plan Name */}

              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                {plan.name}
              </h3>

              {/* Price */}

              <div className="mt-4 flex items-end gap-2">
                <span className="text-3xl font-bold text-gray-900">
                  {plan.price}
                </span>
                <span className="text-sm text-gray-500">{plan.period}</span>
              </div>

              <hr className="my-6 border-gray-200" />

              {/* Features */}

              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-gray-700"
                  >
                    <span className="text-indigo-600">
                      <CheckIcon />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}

              <a
                href="#contact"
                className={`mt-8 block text-center rounded-lg px-4 py-3 font-medium transition
              ${
                plan.featured
                  ? "bg-indigo-600 text-white hover:bg-indigo-700"
                  : "bg-gray-100 text-gray-900 hover:bg-gray-200"
              }
              `}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
