type StepType = {
  id: number;
  title: string;
  desc: string;
};

type StepProps = {
  step: StepType;
  isLast: boolean;
};

const STEPS = [
  {
    id: 1,
    title: "Créez votre espace",
    desc: "Inscrivez votre communauté, personnalisez votre profil et logo en 5 minutes.",
  },
  {
    id: 2,
    title: "Invitez vos membres",
    desc: "Import CSV ou lien d'invitation unique. Vos membres reçoivent un email d'accueil.",
  },
  {
    id: 3,
    title: "Gérez & grandissez",
    desc: "Accès complet à tous les outils depuis n'importe quel appareil, n'importe où.",
  },
];

function Step({ step, isLast }: StepProps) {
  return (
    <div className="flex flex-col md:flex-row items-center">
      <div className="bg-white border border-gray-200 rounded-xl p-6 max-w-xs text-center shadow-sm hover:shadow-md transition">
        <div className="text-indigo-600 font-bold text-xl">
          {String(step.id).padStart(2, "0")}
        </div>

        <h3 className="mt-3 text-lg font-semibold text-gray-900">
          {step.title}
        </h3>

        <p className="mt-2 text-sm text-gray-500">{step.desc}</p>
      </div>

      {!isLast && (
        <div className="mx-6 hidden md:block text-gray-300">
          <svg width="32" height="16" viewBox="0 0 32 16" fill="none">
            <path
              d="M0 8h28M22 2l8 6-8 6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )}
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto text-center">
      <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">
        Comment ça marche
      </p>

      <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">
        Opérationnel en 3 étapes
      </h2>

      <p className="mt-2 text-gray-500">Pas de formation technique requise.</p>

      <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-10">
        {STEPS.map((step, index) => (
          <Step key={step.id} step={step} isLast={index === STEPS.length - 1} />
        ))}
      </div>
    </section>
  );
}
