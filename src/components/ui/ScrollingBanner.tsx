"use client";

import React from "react";
import { Wheat, Clock, Heart, MapPin, Coffee, Cookie } from "lucide-react";

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
      icon: Clock,
      text: "Lo Artesanal es lo Nuestro",
    },
    {
      icon: MapPin,
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

  // Duplicamos los items para crear el efecto de scroll infinito
  const duplicatedItems = [...bannerItems, ...bannerItems];

  return (
    <div className="bg-cream-100 overflow-hidden border-y border-blue-200 py-4">
      <div className="animate-scroll flex whitespace-nowrap">
        {duplicatedItems.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <div
              key={index}
              className="flex items-center space-x-3 px-12 text-blue-700"
            >
              <IconComponent className="h-5 w-5 flex-shrink-0 text-blue-600" />
              <span className="font-outfit text-sm font-medium tracking-wide">
                {item.text}
              </span>
              {/* Separador visual */}
              <div className="ml-8 h-1 w-1 rounded-full bg-blue-300"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
