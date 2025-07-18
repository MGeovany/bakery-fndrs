"use client";

import React, { useState, useEffect, useRef } from "react";
import { User, ShoppingCart, Menu, X } from "lucide-react";
import { gsap } from "gsap";

export const Header: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const megaMenuRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const menuContentRef = useRef<HTMLDivElement>(null);
  const menuItemsRef = useRef<HTMLDivElement[]>([]);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

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
            title: "SAN PEDRO SULA",
            items: [
              {
                label: "Centro Histórico",
                href: "/sucursales/centro",
                badge: "EST. 2014",
              },
              { label: "Multiplaza", href: "/sucursales/multiplaza" },
              { label: "City Mall", href: "/sucursales/citymall" },
              { label: "Zona Viva", href: "/sucursales/zonaviva" },
            ],
          },
          {
            title: "PRÓXIMAMENTE",
            items: [
              {
                label: "Tegucigalpa",
                href: "/sucursales/tegucigalpa",
                badge: "COMING SOON",
              },
              {
                label: "La Ceiba",
                href: "/sucursales/laceiba",
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
    if (activeDropdown !== label) {
      setActiveDropdown(label);
    }
  };

  const handleMouseLeave = () => {
    // Animación de salida
    if (megaMenuRef.current && overlayRef.current) {
      const tl = gsap.timeline({
        onComplete: () => setActiveDropdown(null),
      });

      tl.to(menuItemsRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.2,
        stagger: 0.05,
        ease: "power2.in",
      })
        .to(
          menuContentRef.current,
          {
            y: -20,
            opacity: 0,
            duration: 0.3,
            ease: "power2.in",
          },
          "-=0.1",
        )
        .to(
          overlayRef.current,
          {
            opacity: 0,
            duration: 0.2,
            ease: "power2.in",
          },
          "-=0.2",
        );
    } else {
      setActiveDropdown(null);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveDropdown(null);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeMobileMenu();
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  // Animaciones de entrada del menú
  useEffect(() => {
    if (
      activeDropdown &&
      megaMenuRef.current &&
      overlayRef.current &&
      menuContentRef.current
    ) {
      // Reset inicial
      gsap.set([overlayRef.current, menuContentRef.current], { opacity: 0 });
      gsap.set(menuContentRef.current, { y: -30 });
      gsap.set(menuItemsRef.current, { y: 30, opacity: 0 });

      // Timeline de entrada
      const tl = gsap.timeline();

      tl.to(overlayRef.current, {
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      })
        .to(
          menuContentRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: "power3.out",
          },
          "-=0.2",
        )
        .to(
          menuItemsRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.3,
            stagger: 0.08,
            ease: "power2.out",
          },
          "-=0.2",
        );
    }
  }, [activeDropdown]);

  // Cerrar menú al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        handleMouseLeave();
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
        <header className="bg-cream-200 relative z-50 px-4 py-4 sm:px-6">
          <div className="mx-auto flex max-w-7xl items-center justify-between">
            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="text-blue-700 transition-colors hover:text-blue-900 md:hidden"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>

            {/* Desktop Navigation Menu */}
            <nav className="hidden space-x-2 md:flex lg:space-x-8">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(item.label)}
                >
                  <a
                    href={item.href}
                    className={`font-outfit relative text-sm font-medium transition-colors lg:text-sm ${
                      activeDropdown === item.label
                        ? "text-blue-900"
                        : "text-blue-700 hover:text-blue-900"
                    }`}
                  >
                    {item.label}
                    {activeDropdown === item.label && (
                      <div
                        className="absolute -bottom-2 left-1/2 -translate-x-1/2 transform"
                        ref={(el) => {
                          if (el) {
                            gsap.fromTo(
                              el,
                              { opacity: 0, scale: 0 },
                              {
                                opacity: 1,
                                scale: 1,
                                duration: 0.3,
                                ease: "back.out(1.7)",
                              },
                            );
                          }
                        }}
                      >
                        <div className="h-2 w-2 rounded-full bg-blue-800"></div>
                      </div>
                    )}
                  </a>
                </div>
              ))}
            </nav>

            {/* Logo - Always centered */}
            <div className="absolute left-1/2 -translate-x-1/2 transform">
              <h1 className="text-center font-serif text-lg text-blue-700 italic sm:text-xl lg:text-2xl">
                L&apos;art du Pain
              </h1>
              <p className="text-center text-xs text-blue-600 sm:text-sm">
                PANADERÍA FRANCESA
              </p>
            </div>

            {/* User Actions */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              <button className="text-blue-700 transition-colors hover:text-blue-900">
                <User className="hidden h-5 w-5 sm:h-6 sm:w-6 md:block" />
              </button>
              <button className="text-blue-700 transition-colors hover:text-blue-900">
                <ShoppingCart className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>
            </div>
          </div>
        </header>

        {/* Desktop Mega Menu Overlay */}
        {activeDropdown && !isMobileMenuOpen && (
          <div
            ref={megaMenuRef}
            className="absolute top-full right-0 left-0 z-40 hidden md:block"
          >
            {/* Mega Menu Content */}
            <div
              ref={menuContentRef}
              className="bg-cream-200 relative transform-gpu rounded-b-[20px] border-blue-800 shadow-2xl"
              onMouseEnter={() => {
                if (menuContentRef.current) {
                  gsap.to(menuContentRef.current, {
                    scale: 1.02,
                    duration: 0.3,
                    ease: "power2.out",
                  });
                }
              }}
              onMouseLeave={() => {
                if (menuContentRef.current) {
                  gsap.to(menuContentRef.current, {
                    scale: 1,
                    duration: 0.3,
                    ease: "power2.out",
                  });
                }
              }}
            >
              <div className="mx-auto max-w-7xl px-6 py-12">
                {navItems
                  .filter((item) => item.label === activeDropdown)
                  .map((item) => (
                    <div key={item.label}>
                      {/* Menu Title */}
                      <h2
                        ref={(el) => {
                          if (el && activeDropdown) {
                            gsap.fromTo(
                              el,
                              { opacity: 0, y: -20 },
                              {
                                opacity: 1,
                                y: 0,
                                duration: 0.5,
                                ease: "power3.out",
                                delay: 0.1,
                              },
                            );
                          }
                        }}
                        className="font-outfit mt-4 mb-8 text-2xl font-bold text-blue-800"
                      >
                        {item.dropdown.title}
                      </h2>

                      {/* Menu Sections */}
                      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {item.dropdown.sections.map((section, index) => (
                          <div
                            key={section.title}
                            ref={(el) => {
                              if (el) menuItemsRef.current[index] = el;
                            }}
                            className="space-y-4"
                          >
                            <h3 className="font-outfit text-sm font-bold tracking-wide text-blue-800 uppercase">
                              {section.title}
                            </h3>
                            <ul className="space-y-3">
                              {section.items.map((menuItem) => (
                                <li key={menuItem.label}>
                                  <a
                                    href={menuItem.href}
                                    className="font-outfit group flex items-center justify-between text-blue-700 transition-all duration-300 hover:translate-x-2 hover:text-blue-900"
                                    onMouseEnter={(e) => {
                                      gsap.to(e.currentTarget, {
                                        x: 8,
                                        duration: 0.3,
                                        ease: "power2.out",
                                      });
                                    }}
                                    onMouseLeave={(e) => {
                                      gsap.to(e.currentTarget, {
                                        x: 0,
                                        duration: 0.3,
                                        ease: "power2.out",
                                      });
                                    }}
                                  >
                                    <span className="text-lg">
                                      {menuItem.label}
                                    </span>
                                    {menuItem.badge && (
                                      <span
                                        className="rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-600 transition-all duration-300 group-hover:scale-105 group-hover:bg-blue-200"
                                        onMouseEnter={(e) => {
                                          gsap.to(e.currentTarget, {
                                            scale: 1.1,
                                            rotation: 5,
                                            duration: 0.2,
                                            ease: "back.out(1.7)",
                                          });
                                        }}
                                        onMouseLeave={(e) => {
                                          gsap.to(e.currentTarget, {
                                            scale: 1,
                                            rotation: 0,
                                            duration: 0.2,
                                            ease: "power2.out",
                                          });
                                        }}
                                      >
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

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            ref={mobileMenuRef}
            className="absolute top-full right-0 left-0 z-40 md:hidden"
          >
            <div className="bg-cream-200 border-t border-blue-200 shadow-lg">
              <div className="px-4 py-6">
                {navItems.map((item, index) => (
                  <div key={item.label} className="mb-6">
                    <a
                      href={item.href}
                      className="font-outfit mb-3 block text-lg font-semibold text-blue-800"
                      onClick={closeMobileMenu}
                    >
                      {item.label}
                    </a>
                    {item.dropdown && (
                      <div className="ml-4 space-y-4">
                        {item.dropdown.sections.map((section) => (
                          <div key={section.title}>
                            <h4 className="font-outfit mb-2 text-sm font-bold tracking-wide text-blue-700 uppercase">
                              {section.title}
                            </h4>
                            <ul className="space-y-2">
                              {section.items.map((menuItem) => (
                                <li key={menuItem.label}>
                                  <a
                                    href={menuItem.href}
                                    className="font-outfit block text-blue-600 transition-colors hover:text-blue-800"
                                    onClick={closeMobileMenu}
                                  >
                                    {menuItem.label}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Dark Overlay Background - Separado para permitir clics */}
      {activeDropdown && !isMobileMenuOpen && (
        <div
          ref={overlayRef}
          className="menu-backdrop fixed inset-0 z-30 bg-black/20"
          onClick={handleMouseLeave}
        />
      )}

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/20 md:hidden"
          onClick={closeMobileMenu}
        />
      )}
    </>
  );
};
