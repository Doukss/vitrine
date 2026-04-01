import Link from 'next/link'

const COLUMNS = [
  {
    title: 'Produit',
    links: [
      { label: 'Fonctionnalités', href: '/#features' },
      { label: 'Tarifs',          href: '/#pricing'  },
      { label: 'Démo gratuite',   href: '/demo'       },
      { label: 'Nouveautés',      href: '#'           },
    ],
  },
  {
    title: 'Ressources',
    links: [
      { label: 'Documentation', href: '#' },
      { label: 'Guide de démarrage', href: '#' },
      { label: 'Blog',          href: '#' },
      { label: 'Support',       href: 'mailto:support@ummati.app' },
    ],
  },
  {
    title: 'Légal',
    links: [
      { label: 'Confidentialité', href: '/confidentialite' },
      { label: 'CGU',             href: '/cgu'             },
      { label: 'Cookies',         href: '#'                },
      { label: 'Mentions légales', href: '#'               },
    ],
  },
]

const SOCIALS = [
  {
    label: 'Facebook',
    href: '#',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
  },
  {
    label: 'Twitter / X',
    href: '#',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4 4l16 16M4 20L20 4" stroke="currentColor" strokeWidth="2"
              strokeLinecap="round" fill="none"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: '#',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    href: '#',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400">

      {/* Corps principal */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">

          {/* Brand — prend 2 colonnes */}
          <div className="md:col-span-2 flex flex-col gap-5">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 w-fit">
              <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center shrink-0">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                     stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3l2 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6z"/>
                </svg>
              </div>
              <span className="text-white font-semibold text-base tracking-tight">SnapseTech</span>
            </Link>

            <p className="text-sm leading-relaxed text-gray-500 max-w-xs">
              La plateforme tout-en-un pour les groupes religieux.
              Membres, événements, dons et communication au même endroit.
            </p>

            {/* Réseaux sociaux */}
            <div className="flex gap-2 mt-1">
              {SOCIALS.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 rounded-lg border border-gray-800 flex items-center justify-center
                             text-gray-500 hover:text-white hover:border-gray-600 transition-colors"
                >
                  {icon}
                </a>
              ))}
            </div>

            {/* Badge langue */}
            <div className="flex items-center gap-2 mt-1">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                   className="text-gray-600">
                <circle cx="12" cy="12" r="10"/>
                <line x1="2" y1="12" x2="22" y2="12"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
              <span className="text-xs text-gray-600">Français</span>
            </div>
          </div>

          {/* Colonnes de liens */}
          {COLUMNS.map(({ title, links }) => (
            <div key={title} className="flex flex-col gap-4">
              <p className="text-xs font-semibold text-white uppercase tracking-widest">
                {title}
              </p>
              <ul className="flex flex-col gap-3">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-sm text-gray-500 hover:text-gray-200 transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>
      </div>

      {/* Barre du bas */}
      <div className="border-t border-gray-900">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row
                        items-center justify-between gap-3">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} SnapseTech. Tous droits réservés.
          </p>
          <p className="text-xs text-gray-700">
            Conçu pour les communautés du monde entier 🌍
          </p>
        </div>
      </div>

    </footer>
  )
}