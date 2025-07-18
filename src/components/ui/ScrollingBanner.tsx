"use client";

import React from "react";
import {
  Wheat,
  Clock,
  Heart,
  Coffee,
  Cookie,
  PersonStanding,
  TowerControl,
} from "lucide-react";

export const ScrollingBanner: React.FC = () => {
  const bannerItems = [
    {
      icon: Wheat,
      text: "Pan Fresco Todos los Días",
    },
    {
      icon: Heart,
      text: "Creamos Memorias Deliciosas",
    },
    {
      icon: PersonStanding,
      text: "Lo Artesanal es lo Nuestro",
    },
    {
      icon: TowerControl,
      text: "Panadería Francesa desde 2014",
    },
    {
      icon: Coffee,
      text: "Cafés Como a Ti Te Gusta",
    },
    {
      icon: Cookie,
      text: "Repostería para Compartir",
    },
    {
      icon: Heart,
      text: "Atención al Cliente Personalizada",
    },
    {
      icon: Clock,
      text: "Horario Flexible",
    },
  ];

  // Triplicamos los items para crear un scroll más suave sin saltos
  const triplicatedItems = [...bannerItems, ...bannerItems, ...bannerItems];

  return (
    <div className="bg-cream-100 overflow-hidden border-y border-blue-200 py-3 sm:py-4">
      <div
        className="animate-scroll-seamless flex whitespace-nowrap"
        style={{ width: "300%" }}
      >
        {triplicatedItems.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <div
              key={index}
              className="flex flex-shrink-0 items-center space-x-2 px-3 text-blue-700 sm:space-x-3 sm:px-4"
            >
              <IconComponent className="h-4 w-4 flex-shrink-0 text-blue-600 sm:h-5 sm:w-5" />
              <span className="font-outfit text-xs font-medium tracking-wide sm:text-sm">
                {item.text}
              </span>
              {/* Separador visual */}
              <div className="ml-6 h-1 w-1 rounded-full bg-blue-300 sm:ml-8"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
