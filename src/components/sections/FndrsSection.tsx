"use client";

import React from "react";
import { ExternalLink, Sparkles, Code, Rocket } from "lucide-react";

export const FndrsSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 px-6 py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute top-32 right-20 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-32 right-1/3 w-20 h-20 border border-white/20 rounded-full"></div>
      </div>

      <div className="relative mx-auto max-w-4xl text-center">
        {/* Icon */}
        <div className="mb-8 flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
            <Sparkles className="h-8 w-8 text-white" />
          </div>
        </div>

        {/* Main Heading */}
        <h2 className="font-gloock mb-6 text-4xl font-bold text-white lg:text-6xl">
          ¿Te gustaría trabajar con nosotros?
        </h2>

        {/* Subheading */}
        <p className="font-outfit mb-8 text-xl text-blue-100 lg:text-2xl">
          Transformamos ideas en experiencias digitales extraordinarias
        </p>

        {/* Description */}
        <p className="font-outfit mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-blue-200">
          Creamos sitios web únicos, aplicaciones innovadoras y soluciones digitales 
          que hacen que tu negocio destaque. Desde el concepto hasta el lanzamiento, 
          convertimos tu visión en realidad digital.
        </p>

        {/* Features */}
        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="flex flex-col items-center">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
              <Code className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-outfit mb-2 text-lg font-bold text-white">
              Desarrollo a Medida
            </h3>
            <p className="font-outfit text-sm text-blue-200">
              Soluciones personalizadas para tu negocio
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-outfit mb-2 text-lg font-bold text-white">
              Diseño Excepcional
            </h3>
            <p className="font-outfit text-sm text-blue-200">
              Interfaces que enamoran y convierten
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
              <Rocket className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-outfit mb-2 text-lg font-bold text-white">
              Resultados Rápidos
            </h3>
            <p className="font-outfit text-sm text-blue-200">
              De la idea al lanzamiento en tiempo récord
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="space-y-4">
          <p className="font-outfit text-lg text-blue-100">
            ¿Listo para llevar tu proyecto al siguiente nivel?
          </p>
          
          <a
            href="https://thefndrs.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-outfit text-lg font-bold text-blue-900 transition-all duration-300 hover:bg-blue-50 hover:scale-105 hover:shadow-xl"
          >
            Descubre FNDRS
            <ExternalLink className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Bottom Text */}
        <p className="font-outfit mt-8 text-sm text-blue-300">
          thefndrs.com - Donde las ideas cobran vida digital
        </p>
      </div>
    </section>
  );
};
