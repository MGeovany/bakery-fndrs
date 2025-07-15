import React from "react";
import { Button } from "../ui/Button";
import Image from "next/image";

export const HeroSection: React.FC = () => {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Product Image */}
          <div className="relative">
            {/* Bread Image Placeholder */}
            <Image
              src={"/best-option.png"}
              className="rounded-xl border border-blue-600"
              alt={"Panes Artesanales L'art du Pain"}
              width={500}
              height={500}
            />
          </div>

          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="font-outfit mb-6 text-4xl leading-[.8] font-bold text-blue-800 lg:text-8xl">
              Lo artesanal
              <br />
              es lo
              <br />
              <span className="text-blue-800">nuestro</span>
            </h1>

            <p className="font-outfit mx-auto mb-8 max-w-md text-lg text-blue-800 lg:mx-0">
              Desde 2014, creamos panes y pasteles con amor, tradición francesa
              y los mejores ingredientes artesanales.
            </p>

            <Button
              variant="primary"
              size="md"
              className="font-outfit bg-blue-800 px-8 text-lg font-semibold text-white hover:bg-blue-900"
            >
              Ver Productos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
