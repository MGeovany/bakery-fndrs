"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

interface Product {
  id: string;
  name: string;
  price: string;
  folder: string;
  images: string[];
}

const products: Product[] = [
  {
    id: "cheesecake",
    name: "Cheesecake Artesanal",
    price: "25.00 HNL",
    folder: "cheessecake",
    images: ["1.png", "2.png"],
  },
  {
    id: "croissant",
    name: "Croissant Francés",
    price: "8.50 HNL",
    folder: "croisant",
    images: ["1.png", "2.png"],
  },
  {
    id: "postre",
    name: "Postre del Día",
    price: "12.00 HNL",
    folder: "postre",
    images: ["1.png", "2.png", "3.png"],
  },
];

interface ProductCardProps {
  product: Product;
  onRef: (
    el: HTMLDivElement | null,
    setAnimated: (value: boolean) => void,
  ) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onRef }) => {
  const [isAnimated, setIsAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement | null>(null);

  const handleRef = (el: HTMLDivElement | null) => {
    elementRef.current = el;
    onRef(el, setIsAnimated);
    if (el) {
      // Configurar estado inicial
      gsap.set(el, {
        y: -100,
        opacity: 0,
        scale: 0.8,
        rotation: Math.random() * 20 - 10, // Rotación aleatoria entre -10 y 10 grados
      });
    }
  };

  // Verificar si el elemento ha sido animado y restaurar propiedades si es necesario
  useEffect(() => {
    if (isAnimated && elementRef.current) {
      // Asegurar que las propiedades finales se mantengan
      gsap.set(elementRef.current, {
        y: 0,
        opacity: 1,
        scale: 1,
        rotation: 0,
      });
    }
  }, [isAnimated]);

  return (
    <div
      ref={handleRef}
      className="group relative overflow-hidden rounded-xl bg-transparent"
      style={{
        // Asegurar que las propiedades de GSAP no sean sobrescritas
        willChange: "transform, opacity",
      }}
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden rounded-xl">
        <Image
          src={`/items/${product.folder}/${product.images[0]}`}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
      </div>

      {/* Product Info */}
      <div className="p-3 sm:p-4">
        <h3 className="font-outfit mb-1 text-base font-bold text-blue-800 sm:mb-2 sm:text-lg">
          {product.name}
        </h3>
        <p className="font-outfit mb-2 text-sm font-bold text-blue-900 sm:mb-3">
          {product.price}
        </p>
      </div>
    </div>
  );
};

export const BestSellersSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const setAnimatedFunctions = useRef<((value: boolean) => void)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animación del título
            if (titleRef.current) {
              gsap.fromTo(
                titleRef.current,
                {
                  y: 50,
                  opacity: 0,
                  scale: 0.9,
                },
                {
                  y: 0,
                  opacity: 1,
                  scale: 1,
                  duration: 0.8,
                  ease: "power3.out",
                },
              );
            }

            // Animación de la descripción
            if (descriptionRef.current) {
              gsap.fromTo(
                descriptionRef.current,
                {
                  y: 30,
                  opacity: 0,
                },
                {
                  y: 0,
                  opacity: 1,
                  duration: 0.6,
                  delay: 0.3,
                  ease: "power2.out",
                },
              );
            }

            // Animación de las tarjetas de productos
            cardRefs.current.forEach((cardElement, index) => {
              if (cardElement) {
                gsap.to(cardElement, {
                  y: 0,
                  opacity: 1,
                  scale: 1,
                  rotation: 0,
                  duration: 0.8,
                  delay: 0.8 + index * 0.2, // Delay después del título y descripción
                  ease: "bounce.out",
                  onComplete: () => {
                    // Marcar como animado cuando la animación termine
                    if (setAnimatedFunctions.current[index]) {
                      setAnimatedFunctions.current[index](true);
                    }
                  },
                });
              }
            });
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-gray-50 px-4 py-12 sm:px-6 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-8 text-center sm:mb-12">
          <h2
            ref={titleRef}
            className="font-gloock mb-3 text-4xl font-bold text-blue-800 sm:mb-4 sm:text-4xl lg:text-5xl"
          >
            Los Más Vendidos
          </h2>
          <p
            ref={descriptionRef}
            className="font-outfit mx-auto max-w-xl text-base text-blue-600 sm:text-lg"
          >
            Nuestros productos más populares, elaborados con amor y tradición
            francesa.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              onRef={(el, setAnimated) => {
                cardRefs.current[index] = el;
                setAnimatedFunctions.current[index] = setAnimated;
              }}
            />
          ))}
        </div>

        {/* Shop All Button */}
        <div className="mt-8 text-center sm:mt-12">
          <button className="group font-outfit inline-flex items-center gap-2 text-sm font-bold text-blue-800 transition-colors hover:text-blue-600 sm:text-base">
            Ver Todo
            <div className="flex h-4 w-4 items-center justify-center rounded-full border-2 border-blue-800 transition-colors group-hover:border-blue-600">
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};
