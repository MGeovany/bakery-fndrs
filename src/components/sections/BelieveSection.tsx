import React from "react";
import { Button } from "../ui/Button";
import Image from "next/image";

export const BelieveSection: React.FC = () => {
  return (
    <section className="bg-[#f5f1eb] px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Content */}
          <div className="text-left">
            {/* Main Title */}
            <h2 className="font-outfit mb-8 text-4xl leading-tight font-bold text-blue-800 lg:text-6xl">
              Creemos
              <br />
              en el poder
            </h2>

            {/* Experience Badge */}
            <div className="mb-8">
              <p className="font-outfit text-2xl text-blue-800 italic lg:text-3xl">
                (10 años de
                <br />
                experiencia)
              </p>
            </div>

            {/* Description */}
            <div className="mb-8 space-y-4">
              <p className="font-outfit text-lg leading-relaxed text-blue-800">
                Si quieres sentirte como en Francia, estos son 2 postres que sí
                o sí, tienes que probar
              </p>

              <div className="space-y-2">
                <p className="font-outfit text-lg text-blue-800">
                  🥐 <strong>Croissant</strong>
                </p>
                <p className="font-outfit text-lg text-blue-800">
                  🍯 <strong>Éclair</strong>
                </p>
              </div>

              <p className="font-outfit text-lg text-blue-800">
                Bonus points si aprendes a pronunciarlos 😉
              </p>

              <p className="font-outfit text-lg font-semibold text-blue-800">
                ¡Te esperamos!
              </p>
            </div>

            {/* See More Button */}
            <Button
              variant="outline"
              size="md"
              className="font-outfit border-2 border-blue-800 px-8 py-3 text-lg font-semibold text-blue-800 transition-colors hover:bg-blue-800 hover:text-white"
            >
              Ver más
            </Button>

            {/* Quality Badge */}
            <div className="mt-8">
              <div className="inline-block">
                <p className="font-outfit text-sm tracking-wider text-blue-800 uppercase">
                  CALIDAD:
                </p>
                <p className="font-outfit text-lg font-bold text-blue-800">
                  10/10
                </p>
              </div>
            </div>
          </div>

          {/* Product Image */}
          <div className="relative">
            {/* Right side content */}
            <div className="mb-8 text-right">
              <h3 className="font-outfit text-4xl leading-tight font-bold text-blue-800 lg:text-6xl">
                de gran
                <br />
                <span className="italic">café</span>
              </h3>
            </div>

            {/* Pastries Image Stack */}
            <div className="relative mb-8">
              {/* Main Éclair Image */}
              <div className="relative">
                <Image
                  src="/eclair.png"
                  className="rounded-xl shadow-lg"
                  alt="Delicioso Éclair francés - L'art du Pain"
                  width={500}
                  height={400}
                  style={{ objectFit: "cover" }}
                />
              </div>

              {/* Floating Cheesecake */}
              <div className="absolute -top-4 -right-4 rotate-12 transform">
                <Image
                  src="/cheesecake.png"
                  className="rounded-xl border-4 border-white shadow-lg"
                  alt="Cheesecake artesanal"
                  width={150}
                  height={150}
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>

            <div className="text-right">
              <h3 className="font-outfit text-4xl leading-tight font-bold text-blue-800 lg:text-6xl">
                y frescos
                <br />
                <span className="italic">pasteles.</span>
              </h3>
            </div>

            {/* Freshness Badge */}
            <div className="mt-8 text-right">
              <div className="inline-block">
                <p className="font-outfit text-sm tracking-wider text-blue-800 uppercase">
                  FRESCURA:
                </p>
                <p className="font-outfit text-lg font-bold text-blue-800">
                  10/10
                </p>
              </div>
            </div>

            {/* Bottom tagline */}
            <div className="mt-8 text-center">
              <p className="font-outfit text-lg font-semibold text-blue-800">
                Recién hecho como debe ser. 🫶🏻
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
