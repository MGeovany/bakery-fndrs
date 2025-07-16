import React from "react";
import { Button } from "../ui/Button";
import Image from "next/image";

export const BelieveSection: React.FC = () => {
  return (
    <section className="relative m-1 rounded-2xl bg-[#f5f1eb] px-6 py-16">
      <div className="relative mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
          <div className="relative">
            <div className="mb-4">
              <h2 className="font-outfit text-4xl leading-tight font-bold text-blue-800 lg:text-8xl">
                Creemos en el poder
              </h2>
            </div>

            {/* Experience Badge */}
            <div className="mb-8">
              <p className="font-outfit text-2xl text-blue-800 italic lg:text-3xl"></p>
            </div>

            {/* Description */}
            <div className="mb-8 space-y-4">
              <p className="font-outfit max-w-md text-lg leading-relaxed text-blue-800">
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
              variant="secondary"
              size="md"
              className="font-outfit border-2 border-blue-800 bg-transparent px-8 py-3 text-lg font-semibold text-blue-800! transition-colors hover:bg-blue-800! hover:text-white!"
            >
              Ver más
            </Button>
          </div>

          {/* Columna Derecha */}
          <div className="relative">
            {/* "de gran café" - Parte superior derecha */}
            <div className="mb-8 text-right">
              <h3 className="font-outfit text-4xl leading-tight font-bold text-blue-800 lg:text-6xl">
                de gran
                <br />
                <span className="font-gloock italic">café</span>
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

            {/* "y frescos pasteles" - Parte inferior derecha */}
            <div className="text-right">
              <h3 className="font-outfit text-4xl leading-tight font-bold text-blue-800 lg:text-7xl">
                y frescos
                <br />
                <span className="font-gloock italic">pasteles.</span>
              </h3>
            </div>
          </div>
        </div>

        {/* Bottom tagline - Centrado al final */}
        <div className="mt-12 text-center">
          <p className="font-outfit text-lg font-semibold text-blue-800">
            Recién hecho como debe ser. 🫶🏻
          </p>
        </div>
      </div>
    </section>
  );
};
