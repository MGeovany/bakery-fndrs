"use client";

import React from "react";
import { User, ShoppingCart } from "lucide-react";

export const Header: React.FC = () => {
  const navItems = [
    { label: "PANES & PASTELES", href: "/productos" },
    { label: "PEDIDOS", href: "/pedidos" },
    { label: "SUCURSALES", href: "/sucursales" },
    { label: "NOSOTROS", href: "/nosotros" },
  ];

  return (
    <header className="px-6 py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Navigation Menu */}
        <nav className="flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-blue-700 transition-colors hover:text-blue-900"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Logo */}
        <div className="absolute left-1/2 -translate-x-1/2 transform">
          <h1 className="font-serif text-2xl text-blue-700 italic">
            L'art du Pain
          </h1>
          <p className="text-center text-xs text-blue-600">
            PANADERÍA FRANCESA
          </p>
        </div>

        {/* User Actions */}
        <div className="flex items-center space-x-4">
          <button className="text-blue-700 hover:text-blue-900">
            <User className="h-6 w-6" />
          </button>
          <button className="text-blue-700 hover:text-blue-900">
            <ShoppingCart className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
};
