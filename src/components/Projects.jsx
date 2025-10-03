import React from "react";
import { Link } from "react-router-dom";
import { mainProjects, allProjects } from "../data/projects.js";

export default function Projects() {
  return (
    <section id="projects" className="max-w-7xl mx-auto mt-12 mb-16 px-4">
      <h2 className="section-title">Projets & Expériences</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {mainProjects.map((p) => (
          <div key={p.id} className="card flex flex-col relative z-10 bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-xl transition-shadow duration-300 w-full">
            {/* Image avec overlay au hover */}
            <div className="relative overflow-hidden rounded-lg mb-4">
              <img src={p.media} alt={p.title} className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105" />
            </div>

            {/* Contenu */}
            <div className="flex-grow flex flex-col">
              <h3 className="font-bold text-xl mb-2 text-gray-900">{p.title}</h3>
              <div className="text-xs text-gray-500 mb-3 flex items-center gap-2">
                <span>📅 {p.date}</span>
                <span>•</span>
                <span>📍 {p.location}</span>
              </div>
              <p className="mb-3 text-sm text-gray-700 leading-relaxed">{p.desc}</p>

              {/* Résultats quantifiés - Version dense avec puces vertes */}
              {p.results && p.results.length > 0 && (
                <div className="mb-3 space-y-1">
                  {p.results.map((result, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span className="text-green-600 text-sm mt-0.5">✓</span>
                      <span className="text-xs text-gray-700 leading-tight">{result}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tech.slice(0, 5).map((t, j) => (
                  <span key={j} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-md font-medium">
                    {t}
                  </span>
                ))}
                {p.tech.length > 5 && (
                  <span className="text-xs text-gray-500 self-center">+{p.tech.length - 5}</span>
                )}
              </div>

              {/* Liens */}
              <div className="mt-auto pt-3 border-t border-gray-100">
                <div className="flex gap-3">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-orange-600 hover:text-orange-700 font-semibold text-sm transition-colors"
                    >
                      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      Code
                    </a>
                  )}
                  {p.video && (
                    <a
                      href={p.video}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-blue-600 hover:text-blue-700 font-semibold text-sm transition-colors"
                    >
                      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                      </svg>
                      Démo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <p className="text-gray-600 mb-4 text-sm">
          Vous avez vu mes 6 projets principaux, découvrez les {allProjects.length - mainProjects.length} autres !
        </p>
        <a
          href="/#/all-projects?top=true"
          className="btn-primary inline-flex items-center gap-3 py-3 px-6 rounded-lg bg-orange-500 text-white hover:bg-orange-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer font-bold"
          onClick={(e) => {
            e.preventDefault();
            sessionStorage.setItem('scrollToTop', 'true');
            localStorage.setItem('allProjectsScrollTop', 'true');
            const timestamp = Date.now();
            const url = `${window.location.origin}/#/all-projects?top=true&t=${timestamp}`;
            window.location.replace(url);
          }}
        >
          <span className="font-mono tracking-wider text-lg">EXPLORER MES {allProjects.length} PROJETS</span>
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" className="animate-bounce">
            <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
          </svg>
        </a>
      </div>
    </section>
  );
}
