"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "../ui/Button";
import { ShoppingCart } from "lucide-react";

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
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isHovered && product.images.length > 1) {
      // Delay before starting image rotation to let scale animation complete
      const startDelay = setTimeout(() => {
        const id = setInterval(() => {
          setIsTransitioning(true);

          // After fade out, change the image and fade in
          setTimeout(() => {
            setCurrentImageIndex(
              (prevIndex) => (prevIndex + 1) % product.images.length,
            );
            setIsTransitioning(false);
          }, 200); // Half of transition duration
        }, 1500); // Cambia imagen cada 1.5 segundos
        setIntervalId(id);
      }, 400); // Wait 400ms for scale animation

      return () => {
        clearTimeout(startDelay);
        if (intervalId) {
          clearInterval(intervalId);
        }
      };
    } else {
      if (intervalId) {
        clearInterval(intervalId);
        setIntervalId(null);
      }
      // Volver a la primera imagen cuando no hay hover
      if (!isHovered) {
        setCurrentImageIndex(0);
        setIsTransitioning(false);
      }
    }
  }, [isHovered, product.images.length, intervalId]);

  return (
    <div
      className="group relative overflow-hidden rounded-xl bg-transparent transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden rounded-xl">
        <Image
          src={`/items/${product.folder}/${product.images[currentImageIndex]}`}
          alt={product.name}
          fill
          className={`object-cover transition-all duration-400 ease-out group-hover:scale-105 ${
            isTransitioning ? "opacity-0" : "opacity-100"
          }`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="font-outfit text-lg font-bold text-blue-800">
          {product.name}
        </h3>
        <p className="font-outfit text-md text-blue-800">{product.price}</p>
      </div>
    </div>
  );
};

export const BestSellersSection: React.FC = () => {
  return (
    <section className="bg-gray-50 px-6 py-20">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="font-gloock mb-4 text-4xl font-bold text-blue-800 lg:text-5xl">
            Los Más Vendidos
          </h2>
          <p className="font-outfit mx-auto max-w-xl text-lg text-blue-600">
            Nuestros productos más populares, elaborados con amor y tradición
            francesa.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Shop All Button */}
        <div className="mt-12 text-center">
          <button className="group font-outfit text-md inline-flex items-center gap-2 font-bold text-blue-800 transition-colors hover:text-blue-600">
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
