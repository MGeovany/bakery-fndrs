"use client";

import React from "react";

interface BadgeProps {
  text: string;
  className?: string;
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
}

export const Badge: React.FC<BadgeProps> = ({
  text,
  className = "",
  position = "top-right",
}) => {
  const positionClasses = {
    "top-left": "top-[-20px] left-[-20px]",
    "top-right": "top-[-20px] right-[-20px]",
    "bottom-left": "bottom-[-20px] left-[-20px]",
    "bottom-right": "bottom-[-20px] right-[-20px]",
  };

  return (
    <div
      className={`pdp-badge relative flex h-[120px] w-[120px] items-center justify-center ${positionClasses[position]} z-10 ${className}`}
    >
      {/* Rotating background badge */}
      <div
        className="animate-spin-slow absolute top-0 left-0 h-full w-full bg-contain bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/large-badge.svg)",
        }}
      />

      {/* Static text content */}
      <div className="pdp-badge__text font-outfit relative z-10 max-w-[80px] text-center text-sm leading-tight font-bold text-blue-800">
        {text}
      </div>
    </div>
  );
};
