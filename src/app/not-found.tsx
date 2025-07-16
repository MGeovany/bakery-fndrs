"use client";

import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";
import { FndrsSection } from "@/components";
import { SmoothScrollWrapper } from "@/components/layout/SmoothScrollWrapper";
import { SectionTransition } from "@/components/ui/SectionTransition";

export default function NotFound() {
  return (
    <SmoothScrollWrapper>
      <main className="min-h-screen bg-cream-200">
        {/* 404 Hero Section */}
        <section className="flex min-h-screen flex-col items-center justify-center px-6 py-20">
          <div className="mx-auto max-w-4xl text-center">
            {/* 404 Number */}
            <div className="mb-8">
              <h1 className="font-gloock text-8xl font-bold text-blue-800 lg:text-9xl">
                404
              </h1>
            </div>

            {/* Main Message */}
            <h2 className="font-gloock mb-6 text-3xl font-bold text-blue-800 lg:text-5xl">
              ¡Ups! Esta página no existe
            </h2>

            <p className="font-outfit mx-auto mb-8 max-w-2xl text-lg text-blue-600">
              Parece que te has perdido en nuestro sitio. No te preocupes, 
              incluso los mejores panaderos a veces se equivocan de receta.
            </p>

            {/* Navigation Buttons */}
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/"
                className="group inline-flex items-center gap-2 rounded-full bg-blue-800 px-6 py-3 font-outfit text-lg font-bold text-white transition-all duration-300 hover:bg-blue-700 hover:scale-105"
              >
                <Home className="h-5 w-5" />
                Volver al Inicio
              </Link>

              <button
                onClick={() => window.history.back()}
                className="group inline-flex items-center gap-2 rounded-full border-2 border-blue-800 px-6 py-3 font-outfit text-lg font-bold text-blue-800 transition-all duration-300 hover:bg-blue-800 hover:text-white"
              >
                <ArrowLeft className="h-5 w-5" />
                Página Anterior
              </button>
            </div>

            {/* Fun Message */}
            <div className="mt-12 rounded-xl bg-blue-50 p-6">
              <p className="font-outfit text-blue-700">
                💡 <strong>¿Sabías que?</strong> Mientras buscas la página correcta, 
                nuestros panaderos están horneando deliciosos productos frescos. 
                ¡Echa un vistazo a nuestros bestsellers!
              </p>
            </div>
          </div>
        </section>

        {/* FNDRS Section */}
        <SectionTransition>
          <FndrsSection />
        </SectionTransition>
      </main>
    </SmoothScrollWrapper>
  );
}
