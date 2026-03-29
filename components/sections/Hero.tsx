'use client';

import { useState, useEffect } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-[#000f1f] via-[#001a2f] to-[#000f1f]">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

     

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge with animation */}
          <div className={`transform transition-all duration-700 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 mb-8 hover:bg-white/10 transition-colors">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-sm font-medium text-gray-300">
                ✨ Nouvelle version 2.0 disponible
              </span>
            </div>
          </div>

          {/* Main title */}
          <div className={`transform transition-all duration-700 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">
                Gérez votre
              </span>
              <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                communauté
              </span>
              <span className="bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">
                {' '}avec sérénité
              </span>
            </h1>
          </div>

          {/* Description */}
          <div className={`transform transition-all duration-700 delay-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
              La plateforme tout-en-un pour les groupes religieux — 
              membres, événements, communication et dons, au même endroit.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transform transition-all duration-700 delay-900 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <button className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium text-white transition-all duration-300 ease-out bg-gradient-to-r from-green-600 to-emerald-600 rounded-full hover:from-green-700 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-[#000f1f] shadow-lg hover:shadow-xl transform hover:scale-105">
              <span className="relative flex items-center gap-2">
                Démarrer gratuitement
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
            
            <button className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium transition-all duration-300 ease-out bg-white/5 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20 transform hover:scale-105">
              <span className="relative flex items-center gap-2 text-white">
                Voir les fonctionnalités
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </button>
          </div>

          {/* Social proof / stats */}
          <div className={`mt-16 pt-8 border-t border-white/10 transform transition-all duration-700 delay-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <p className="text-sm text-gray-500 mb-4">Rejoignez plus de 1000+ communautés</p>
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div>
                <div className="text-2xl font-bold text-white">50k+</div>
                <div className="text-xs text-gray-500">Membres actifs</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">200+</div>
                <div className="text-xs text-gray-500">Événements/mois</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">98%</div>
                <div className="text-xs text-gray-500">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}