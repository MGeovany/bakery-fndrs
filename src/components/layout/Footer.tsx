"use client";

import React, { useEffect, useRef } from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { gsap } from "gsap";

export const Footer: React.FC = () => {
  const footerRef = useRef<HTMLElement>(null);
  const mainContentRef = useRef<HTMLDivElement>(null);
  const cookieRef = useRef<HTMLDivElement>(null);
  const leftColumnRef = useRef<HTMLDivElement>(null);
  const centerColumnRef = useRef<HTMLDivElement>(null);
  const rightColumnRef = useRef<HTMLDivElement>(null);
  const socialIconsRef = useRef<HTMLDivElement>(null);
  const bottomFooterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animación principal del footer
            if (entry.target === footerRef.current) {
              gsap.fromTo(
                mainContentRef.current,
                {
                  y: 100,
                  opacity: 0,
                  scale: 0.95,
                },
                {
                  y: 0,
                  opacity: 1,
                  scale: 1,
                  duration: 1,
                  ease: "power3.out",
                },
              );

              // Animación de las columnas con stagger
              gsap.fromTo(
                [
                  leftColumnRef.current,
                  centerColumnRef.current,
                  rightColumnRef.current,
                ],
                {
                  y: 50,
                  opacity: 0,
                },
                {
                  y: 0,
                  opacity: 1,
                  duration: 0.8,
                  stagger: 0.2,
                  ease: "power2.out",
                  delay: 0.2,
                },
              );

              // Animación especial para el ícono de cookie
              gsap.fromTo(
                cookieRef.current,
                {
                  scale: 0,
                  rotation: -180,
                },
                {
                  scale: 1,
                  rotation: 0,
                  duration: 0.8,
                  ease: "back.out(1.7)",
                  delay: 0.4,
                },
              );

              // Animación de los iconos sociales
              gsap.fromTo(
                socialIconsRef.current?.children ?? [],
                {
                  scale: 0,
                  y: 30,
                },
                {
                  scale: 1,
                  y: 0,
                  duration: 0.5,
                  stagger: 0.1,
                  ease: "back.out(1.7)",
                  delay: 0.6,
                },
              );

              // Animación del footer inferior
              gsap.fromTo(
                bottomFooterRef.current,
                {
                  y: 30,
                  opacity: 0,
                },
                {
                  y: 0,
                  opacity: 1,
                  duration: 0.6,
                  ease: "power2.out",
                  delay: 0.8,
                },
              );
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      },
    );

    // Observar el footer
    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    // Animación continua del ícono de cookie (breathing effect)
    const cookieAnimation = gsap.to(cookieRef.current, {
      scale: 1.1,
      duration: 2,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1,
    });

    return () => {
      observer.disconnect();
      cookieAnimation.kill();
    };
  }, []);

  return (
    <footer
      ref={footerRef}
      className="bg-[#f5f1eb] px-4 py-12 sm:px-6 sm:py-16"
    >
      <div className="mx-auto max-w-7xl">
        {/* Main Footer Content */}
        <div
          ref={mainContentRef}
          className="rounded-2xl bg-[#1e1e96] px-6 py-8 text-white sm:px-8 sm:py-12"
        >
          <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-3">
            {/* Left Column - Navigation */}
            <div
              ref={leftColumnRef}
              className="space-y-4 text-center sm:space-y-6"
            >
              <nav className="space-y-3 sm:space-y-4">
                <a
                  href="/productos"
                  className="font-outfit block text-base font-medium text-white transition-all duration-300 hover:translate-x-2 hover:text-blue-200 sm:text-lg"
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
                  Panes & Pasteles
                </a>
                <a
                  href="/nosotros"
                  className="font-outfit block text-base font-medium text-white transition-colors hover:text-blue-200 sm:text-lg"
                >
                  Nuestra Historia
                </a>
                <a
                  href="/sucursales"
                  className="font-outfit block text-base font-medium text-white transition-colors hover:text-blue-200 sm:text-lg"
                >
                  Nuestras Panaderías
                </a>
                <a
                  href="/equipo"
                  className="font-outfit block text-base font-medium text-white transition-colors hover:text-blue-200 sm:text-lg"
                >
                  Únete a Nuestro Equipo
                </a>
              </nav>
            </div>

            {/* Center Column - Newsletter */}
            <div ref={centerColumnRef} className="text-center">
              {/* Cookie Icon */}
              <div className="mb-4 flex justify-center sm:mb-6">
                <div
                  ref={cookieRef}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-white sm:h-16 sm:w-16"
                >
                  <div className="relative h-6 w-6 rounded-full bg-amber-600 sm:h-8 sm:w-8">
                    {/* Cookie dots */}
                    <div className="absolute top-1 left-1 h-1 w-1 rounded-full bg-amber-800 sm:left-2"></div>
                    <div className="absolute top-2 right-1 h-1 w-1 rounded-full bg-amber-800 sm:top-3"></div>
                    <div className="absolute bottom-1 left-1 h-1 w-1 rounded-full bg-amber-800 sm:bottom-2"></div>
                    <div className="absolute right-1 bottom-1 h-1 w-1 rounded-full bg-amber-800 sm:right-2"></div>
                  </div>
                </div>
              </div>

              <h3 className="font-outfit mb-3 text-lg font-bold text-white sm:mb-4 sm:text-xl lg:text-2xl">
                Regístrate y endulza tu bandeja de entrada.
              </h3>

              <p className="font-outfit mb-4 text-sm text-white/90 sm:mb-6 sm:text-base">
                Sé el primero en conocer sobre nuevos lanzamientos de productos,
                promociones especiales y sorpresas exclusivas que hemos horneado
                solo para ti.
              </p>

              {/* Email Signup */}
              <div className="relative mx-auto max-w-xs sm:max-w-sm">
                <input
                  type="email"
                  placeholder="Email"
                  className="font-outfit w-full rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-sm text-white placeholder-white/70 backdrop-blur-sm focus:border-white/40 focus:ring-2 focus:ring-white/20 focus:outline-none sm:px-4 sm:py-3 sm:text-base"
                />
                <button
                  className="absolute top-1/2 right-2 -translate-y-1/2 rounded-md bg-white/20 p-2 text-white transition-all duration-300 hover:bg-white/30"
                  onMouseEnter={(e) => {
                    gsap.to(e.currentTarget, {
                      scale: 1.1,
                      x: 3,
                      duration: 0.3,
                      ease: "back.out(1.7)",
                    });
                  }}
                  onMouseLeave={(e) => {
                    gsap.to(e.currentTarget, {
                      scale: 1,
                      x: 0,
                      duration: 0.3,
                      ease: "power2.out",
                    });
                  }}
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Right Column - Contact & Links */}
            <div
              ref={rightColumnRef}
              className="space-y-4 text-center sm:space-y-6"
            >
              <nav className="space-y-3 sm:space-y-4">
                <a
                  href="/contacto"
                  className="font-outfit block text-base font-medium text-white transition-colors hover:text-blue-200 sm:text-lg"
                >
                  Contáctanos
                </a>
                <a
                  href="/faq"
                  className="font-outfit block text-base font-medium text-white transition-colors hover:text-blue-200 sm:text-lg"
                >
                  FAQ
                </a>
                <a
                  href="/envios"
                  className="font-outfit block text-base font-medium text-white transition-colors hover:text-blue-200 sm:text-lg"
                >
                  Envíos
                </a>
              </nav>
            </div>
          </div>

          {/* Social Media Icons */}
          <div
            ref={socialIconsRef}
            className="mt-12 flex justify-center space-x-6"
          >
            <a
              href="https://www.instagram.com/the.fndrs"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white/10 p-3 text-white transition-all duration-300 hover:scale-110 hover:bg-white/20"
              aria-label="Síguenos en Instagram"
              onMouseEnter={(e) => {
                gsap.to(e.currentTarget, {
                  scale: 1.2,
                  rotation: -10,
                  duration: 0.3,
                  ease: "back.out(1.7)",
                });
              }}
              onMouseLeave={(e) => {
                gsap.to(e.currentTarget, {
                  scale: 1,
                  rotation: 0,
                  duration: 0.3,
                  ease: "power2.out",
                });
              }}
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/company/the-fndrs/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white/10 p-3 text-white transition-all duration-300 hover:scale-110 hover:bg-white/20"
              aria-label="Síguenos en LinkedIn"
              onMouseEnter={(e) => {
                gsap.to(e.currentTarget, {
                  scale: 1.2,
                  rotation: 10,
                  duration: 0.3,
                  ease: "back.out(1.7)",
                });
              }}
              onMouseLeave={(e) => {
                gsap.to(e.currentTarget, {
                  scale: 1,
                  rotation: 0,
                  duration: 0.3,
                  ease: "power2.out",
                });
              }}
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://www.instagram.com/the.fndrs"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white/10 p-3 text-white transition-all duration-300 hover:scale-110 hover:bg-white/20"
              aria-label="Síguenos en Facebook"
              onMouseEnter={(e) => {
                gsap.to(e.currentTarget, {
                  scale: 1.2,
                  rotation: 10,
                  duration: 0.3,
                  ease: "back.out(1.7)",
                });
              }}
              onMouseLeave={(e) => {
                gsap.to(e.currentTarget, {
                  scale: 1,
                  rotation: 0,
                  duration: 0.3,
                  ease: "power2.out",
                });
              }}
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="https://www.instagram.com/the.fndrs"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white/10 p-3 text-white transition-all duration-300 hover:scale-110 hover:bg-white/20"
              aria-label="Síguenos en Twitter"
              onMouseEnter={(e) => {
                gsap.to(e.currentTarget, {
                  scale: 1.2,
                  rotation: 10,
                  duration: 0.3,
                  ease: "back.out(1.7)",
                });
              }}
              onMouseLeave={(e) => {
                gsap.to(e.currentTarget, {
                  scale: 1,
                  rotation: 0,
                  duration: 0.3,
                  ease: "power2.out",
                });
              }}
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="/sucursales"
              className="rounded-full bg-white/10 p-3 text-white transition-all duration-300 hover:scale-110 hover:bg-white/20"
              aria-label="Encuentra nuestras sucursales"
              onMouseEnter={(e) => {
                gsap.to(e.currentTarget, {
                  scale: 1.2,
                  y: -5,
                  duration: 0.3,
                  ease: "back.out(1.7)",
                });
              }}
              onMouseLeave={(e) => {
                gsap.to(e.currentTarget, {
                  scale: 1,
                  y: 0,
                  duration: 0.3,
                  ease: "power2.out",
                });
              }}
            >
              <MapPin className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Bottom Footer */}
        <div
          ref={bottomFooterRef}
          className="mt-8 flex flex-col items-center justify-between space-y-4 text-sm text-blue-800 lg:flex-row lg:space-y-0"
        >
          <p className="font-outfit">© L&apos;art du Pain 2025</p>
          <div className="flex space-x-6">
            <a
              href="/terminos"
              className="font-outfit transition-colors hover:text-blue-600"
            >
              Términos de Uso
            </a>
            <a
              href="/privacidad"
              className="font-outfit transition-colors hover:text-blue-600"
            >
              Privacidad
            </a>
            <a
              href="/ccpa"
              className="font-outfit transition-colors hover:text-blue-600"
            >
              Sobre nosotros
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
