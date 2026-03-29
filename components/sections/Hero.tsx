export default function Hero() {
  return (
    <section className="relative w-full min-h-screen py-20 px-6 bg-[#000f1f]">
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500 opacity-20 blur-3xl rounded-full"></div>

      {/* Header */}
      <div className="text-center mb-16 relative z-10 p-10">
        <h2 className="text-xl bg-gray-800 w-98 rounded-4xl text-white border inline-block px-6 py-1">
          Nouvelle version 2.0 disponible
        </h2>
        <p className="text-gray-400 mt-3 text-7xl p-6">
          Gérez votre <span className="text-green-900">communauté</span> avec{" "}
          <br /> sérénité
        </p>
        <p className="text-gray-500 mt-6 text-2xl">
          La plateforme tout-en-un pour les groupes religieux — <br />
          membres, événements, communication et dons, au
          <br /> même endroit.
        </p>
        <div className="py-14 gap-6 flex justify-center">
          <button className="bg-green-600 hover:bg-green-900 text-white font-bold py-2 px-4 rounded">
            Démarrer gratuitement
          </button>
          <button className="bg-transparent hover:bg-gray-600 text-white font-bold py-2 px-4 border border-white rounded">
            Voir les fonctionnalités
          </button>
        </div>
      </div>
    </section>
  );
}
