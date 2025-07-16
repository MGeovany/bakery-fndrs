"use client";

import React, { useState, useEffect, useRef } from "react";
import { User, ShoppingCart } from "lucide-react";

export const Header: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const navItems = [
    {
      label: "PANES & PASTELES",
      href: "/productos",
      dropdown: {
        title: "NUESTROS PRODUCTOS",
        sections: [
          {
            title: "PANES ARTESANALES",
            items: [
              { label: "Baguette Tradicional", href: "/productos/baguette" },
              { label: "Pan de Campo", href: "/productos/campo" },
              { label: "Pan Integral", href: "/productos/integral" },
              { label: "Pan de Centeno", href: "/productos/centeno" },
              { label: "Brioche", href: "/productos/brioche" },
            ],
          },
          {
            title: "REPOSTERÍA",
            items: [
              { label: "Croissants", href: "/productos/croissants" },
              { label: "Pain au Chocolat", href: "/productos/pain-chocolat" },
              { label: "Macarons", href: "/productos/macarons" },
              { label: "Éclairs", href: "/productos/eclairs" },
              { label: "Tartas", href: "/productos/tartas" },
            ],
          },
          {
            title: "DULCES",
            items: [
              { label: "Galletas Artesanales", href: "/productos/galletas" },
              { label: "Madeleines", href: "/productos/madeleines" },
              { label: "Financiers", href: "/productos/financiers" },
              { label: "Cannelés", href: "/productos/canneles" },
            ],
          },
        ],
      },
    },
    {
      label: "PEDIDOS",
      href: "/pedidos",
      dropdown: {
        title: "REALIZA TU PEDIDO",
        sections: [
          {
            title: "PEDIDOS ONLINE",
            items: [
              { label: "Pedido Regular", href: "/pedidos/regular" },
              { label: "Pedido Express", href: "/pedidos/express" },
              { label: "Suscripción Semanal", href: "/pedidos/suscripcion" },
            ],
          },
          {
            title: "EVENTOS ESPECIALES",
            items: [
              { label: "Catering Corporativo", href: "/pedidos/catering" },
              { label: "Bodas", href: "/pedidos/bodas" },
              { label: "Cumpleaños", href: "/pedidos/cumpleanos" },
              { label: "Eventos Sociales", href: "/pedidos/eventos" },
            ],
          },
          {
            title: "SERVICIOS",
            items: [
              { label: "Entrega a Domicilio", href: "/pedidos/entrega" },
              { label: "Recolección en Tienda", href: "/pedidos/recoleccion" },
            ],
          },
        ],
      },
    },
    {
      label: "SUCURSALES",
      href: "/sucursales",
      dropdown: {
        title: "NUESTRAS PANADERÍAS",
        sections: [
          {
            title: "CIUDAD DE MÉXICO",
            items: [
              {
                label: "Centro Histórico",
                href: "/sucursales/centro",
                badge: "EST. 2014",
              },
              { label: "Polanco", href: "/sucursales/polanco" },
              { label: "Roma Norte", href: "/sucursales/roma" },
              { label: "Condesa", href: "/sucursales/condesa" },
            ],
          },
          {
            title: "PRÓXIMAMENTE",
            items: [
              {
                label: "Santa Fe",
                href: "/sucursales/santa-fe",
                badge: "COMING SOON",
              },
              {
                label: "Coyoacán",
                href: "/sucursales/coyoacan",
                badge: "COMING SOON",
              },
            ],
          },
          {
            title: "INFORMACIÓN",
            items: [
              { label: "Todas las Sucursales", href: "/sucursales" },
              { label: "Horarios", href: "/sucursales/horarios" },
            ],
          },
        ],
      },
    },
    {
      label: "NOSOTROS",
      href: "/nosotros",
      dropdown: {
        title: "CONOCE L'ART DU PAIN",
        sections: [
          {
            title: "NUESTRA HISTORIA",
            items: [
              { label: "Desde 2014", href: "/nosotros/historia" },
              { label: "Filosofía Francesa", href: "/nosotros/filosofia" },
              { label: "Nuestros Valores", href: "/nosotros/valores" },
            ],
          },
          {
            title: "NUESTRO EQUIPO",
            items: [
              { label: "Maestros Panaderos", href: "/nosotros/panaderos" },
              { label: "Únete al Equipo", href: "/nosotros/trabajo" },
            ],
          },
          {
            title: "CONTACTO",
            items: [
              { label: "Contáctanos", href: "/nosotros/contacto" },
              { label: "Preguntas Frecuentes", href: "/nosotros/faq" },
            ],
          },
        ],
      },
    },
  ];

  const handleMouseEnter = (label: string) => {
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  // Cerrar menú al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    if (activeDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activeDropdown]);

  return (
    <>
      <div ref={menuRef} onMouseLeave={handleMouseLeave} className="relative">
        <header className="bg-cream-200 relative z-50 px-6 py-4">
          <div className="mx-auto flex max-w-7xl items-center justify-between">
            {/* Navigation Menu */}
            <nav className="flex space-x-8">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(item.label)}
                >
                  <a
                    href={item.href}
                    className="font-outfit text-sm font-medium text-blue-700 transition-colors hover:text-blue-900"
                  >
                    {item.label}
                  </a>
                </div>
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
              <button className="text-blue-700 transition-colors hover:text-blue-900">
                <User className="h-6 w-6" />
              </button>
              <button className="text-blue-700 transition-colors hover:text-blue-900">
                <ShoppingCart className="h-6 w-6" />
              </button>
            </div>
          </div>
        </header>

        {/* Mega Menu Overlay */}
        {activeDropdown && (
          <div className="absolute top-full right-0 left-0 z-40">
            {/* Mega Menu Content */}
            <div className="bg-cream-200 relative rounded-b-[20px] border-blue-800 shadow-2xl">
              <div className="mx-auto max-w-7xl px-6 py-12">
                {navItems
                  .filter((item) => item.label === activeDropdown)
                  .map((item) => (
                    <div key={item.label}>
                      {/* Menu Title */}
                      <h2 className="font-outfit mt-4 mb-8 text-2xl font-bold text-blue-800">
                        {item.dropdown.title}
                      </h2>

                      {/* Menu Sections */}
                      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {item.dropdown.sections.map((section) => (
                          <div key={section.title} className="space-y-4">
                            <h3 className="font-outfit text-sm font-bold tracking-wide text-blue-800 uppercase">
                              {section.title}
                            </h3>
                            <ul className="space-y-3">
                              {section.items.map((menuItem) => (
                                <li key={menuItem.label}>
                                  <a
                                    href={menuItem.href}
                                    className="font-outfit group flex items-center justify-between text-blue-700 transition-colors hover:text-blue-900"
                                  >
                                    <span className="text-lg">
                                      {menuItem.label}
                                    </span>
                                    {menuItem.badge && (
                                      <span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-600">
                                        {menuItem.badge}
                                      </span>
                                    )}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Dark Overlay Background - Separado para permitir clics */}
      {activeDropdown && (
        <div
          className="fixed inset-0 z-30 bg-black/20"
          onClick={() => setActiveDropdown(null)}
        />
      )}
    </>
  );
};
