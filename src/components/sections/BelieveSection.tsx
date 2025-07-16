import React from "react";
import { Button } from "../ui/Button";
import Image from "next/image";

export const BelieveSection: React.FC = () => {
  return (
    <section className="relative m-1 rounded-2xl bg-[#f5f1eb] px-4 py-8 sm:px-6 sm:py-12 lg:py-16">
      <div className="relative mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-start gap-8 sm:gap-12 lg:grid-cols-2">
          <div className="relative">
            <div className="mb-4 sm:mb-6">
              <h2 className="font-outfit text-2xl leading-tight font-bold text-blue-800 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl">
                Creemos en el poder
              </h2>
            </div>

            {/* Experience Badge */}
            <div className="mb-6 sm:mb-8">
              <p className="font-outfit text-xl text-blue-800 italic sm:text-2xl lg:text-3xl"></p>
            </div>

            {/* Description */}
            <div className="mb-6 space-y-3 sm:mb-8 sm:space-y-4">
              <p className="font-outfit max-w-md text-base leading-relaxed text-blue-800 sm:text-lg">
                Si quieres sentirte como en Francia, estos son 2 postres que sí
                o sí, tienes que probar
              </p>

              <div className="space-y-2">
                <p className="font-outfit text-base text-blue-800 sm:text-lg">
                  🥐 <strong>Croissant</strong>
                </p>
                <p className="font-outfit text-base text-blue-800 sm:text-lg">
                  🍯 <strong>Éclair</strong>
                </p>
              </div>

              <p className="font-outfit text-base text-blue-800 sm:text-lg">
                Bonus points si aprendes a pronunciarlos 😉
              </p>

              <p className="font-outfit text-base font-semibold text-blue-800 sm:text-lg">
                ¡Te esperamos!
              </p>
            </div>

            {/* See More Button */}
            <Button
              variant="secondary"
              size="md"
              className="font-outfit border-2 border-blue-800 bg-transparent px-6 py-2 text-base font-semibold text-blue-800! transition-colors hover:bg-blue-800! hover:text-white! sm:px-8 sm:py-3 sm:text-lg"
            >
              Ver más
            </Button>
          </div>

          {/* Columna Derecha */}
          <div className="relative">
            {/* "de gran café" - Parte superior derecha */}
            <div className="mb-6 text-center sm:mb-8 lg:text-right">
              <h3 className="font-outfit text-2xl leading-tight font-bold text-blue-800 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                de gran
                <br />
                <span className="font-gloock italic">café</span>
              </h3>
            </div>

            {/* Pastries Image Stack */}
            <div className="relative mb-6 sm:mb-8">
              {/* Main Éclair Image */}
              <div className="relative">
                <Image
                  src="/eclair.png"
                  className="w-full rounded-xl shadow-lg"
                  alt="Delicioso Éclair francés - L'art du Pain"
                  width={500}
                  height={400}
                  style={{ objectFit: "cover" }}
                />
              </div>

              {/* Floating Cheesecake */}
              <div className="absolute -top-2 -right-2 rotate-12 transform sm:-top-4 sm:-right-4">
                <Image
                  src="/cheesecake.png"
                  className="rounded-xl border-2 border-white shadow-lg sm:border-4"
                  alt="Cheesecake artesanal"
                  width={100}
                  height={100}
                  style={{ objectFit: "cover" }}
                  className="h-20 w-20 rounded-xl border-2 border-white shadow-lg sm:h-32 sm:w-32 sm:border-4 lg:h-36 lg:w-36"
                />
              </div>
            </div>

            {/* "y frescos pasteles" - Parte inferior derecha */}
            <div className="text-center lg:text-right">
              <h3 className="font-outfit text-2xl leading-tight font-bold text-blue-800 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
                y frescos
                <br />
                <span className="font-gloock italic">pasteles.</span>
              </h3>
            </div>
          </div>
        </div>

        {/* Bottom tagline - Centrado al final */}
        <div className="mt-8 text-center sm:mt-12">
          <p className="font-outfit text-base font-semibold text-blue-800 sm:text-lg">
            Recién hecho como debe ser. 🫶🏻
          </p>
        </div>
      </div>
    </section>
  );
};
