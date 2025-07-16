import React from "react";
import { Button } from "../ui/Button";
import Image from "next/image";

export const HeroSection: React.FC = () => {
  return (
    <section className="px-4 py-8 sm:px-6 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center justify-items-center gap-8 sm:gap-12 lg:grid-cols-2">
          {/* Product Image */}
          <div className="relative order-1 flex justify-center lg:order-none">
            {/* Bread Image Placeholder */}
            <Image
              src={"/best-option.png"}
              className="w-full max-w-sm rounded-xl border border-blue-600 sm:max-w-md md:h-[35rem] lg:max-w-lg"
              alt={"Panes Artesanales L'art du Pain"}
              width={500}
              height={500}
              priority
            />
          </div>

          {/* Content */}
          <div className="order-2 text-center lg:order-none lg:text-left">
            <h1 className="font-gloock mb-4 text-6xl leading-[1.1] font-bold text-blue-800 sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl">
              Lo artesanal
              <br />
              es lo
              <br />
              <span className="font-gloock text-blue-800">nuestro</span>
            </h1>

            <p className="font-outfit mx-auto mb-6 max-w-md text-base text-blue-800 sm:mb-8 sm:text-lg lg:mx-0">
              Desde 2014, creamos panes y pasteles con amor, tradición francesa
              y los mejores ingredientes artesanales.
            </p>

            <Button
              variant="primary"
              size="md"
              className="font-outfit bg-blue-800 px-6 py-3 text-base font-semibold text-white hover:bg-blue-900 sm:px-8 sm:text-lg"
            >
              Ver Productos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
