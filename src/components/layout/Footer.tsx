import React from "react";
import { Facebook, Instagram, Twitter, MapPin, ArrowRight } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#f5f1eb] px-6 py-16">
      <div className="mx-auto max-w-7xl">
        {/* Main Footer Content */}
        <div className="rounded-2xl bg-[#1e1e96] px-8 py-12 text-white">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Left Column - Navigation */}
            <div className="space-y-6 text-center">
              <nav className="space-y-4">
                <a
                  href="/productos"
                  className="font-outfit block text-lg font-medium text-white transition-colors hover:text-blue-200"
                >
                  Panes & Pasteles
                </a>
                <a
                  href="/nosotros"
                  className="font-outfit block text-lg font-medium text-white transition-colors hover:text-blue-200"
                >
                  Nuestra Historia
                </a>
                <a
                  href="/sucursales"
                  className="font-outfit block text-lg font-medium text-white transition-colors hover:text-blue-200"
                >
                  Nuestras Panaderías
                </a>
                <a
                  href="/equipo"
                  className="font-outfit block text-lg font-medium text-white transition-colors hover:text-blue-200"
                >
                  Únete a Nuestro Equipo
                </a>
              </nav>
            </div>

            {/* Center Column - Newsletter */}
            <div className="text-center">
              {/* Cookie Icon */}
              <div className="mb-6 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white">
                  <div className="relative h-8 w-8 rounded-full bg-amber-600">
                    {/* Cookie dots */}
                    <div className="absolute top-1 left-2 h-1 w-1 rounded-full bg-amber-800"></div>
                    <div className="absolute top-3 right-1 h-1 w-1 rounded-full bg-amber-800"></div>
                    <div className="absolute bottom-2 left-1 h-1 w-1 rounded-full bg-amber-800"></div>
                    <div className="absolute right-2 bottom-1 h-1 w-1 rounded-full bg-amber-800"></div>
                  </div>
                </div>
              </div>

              <h3 className="font-outfit mb-4 text-2xl font-bold text-white">
                Regístrate y endulza tu bandeja de entrada.
              </h3>

              <p className="font-outfit mb-6 text-white/90">
                Sé el primero en conocer sobre nuevos lanzamientos de productos,
                promociones especiales y sorpresas exclusivas que hemos horneado
                solo para ti.
              </p>

              {/* Email Signup */}
              <div className="relative mx-auto max-w-sm">
                <input
                  type="email"
                  placeholder="Email"
                  className="font-outfit w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/70 backdrop-blur-sm focus:border-white/40 focus:ring-2 focus:ring-white/20 focus:outline-none"
                />
                <button className="absolute top-1/2 right-2 -translate-y-1/2 rounded-md bg-white/20 p-2 text-white transition-colors hover:bg-white/30">
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Right Column - Contact & Links */}
            <div className="space-y-6 text-center">
              <nav className="space-y-4">
                <a
                  href="/contacto"
                  className="font-outfit block text-lg font-medium text-white transition-colors hover:text-blue-200"
                >
                  Contáctanos
                </a>
                <a
                  href="/faq"
                  className="font-outfit block text-lg font-medium text-white transition-colors hover:text-blue-200"
                >
                  FAQ
                </a>
                <a
                  href="/envios"
                  className="font-outfit block text-lg font-medium text-white transition-colors hover:text-blue-200"
                >
                  Envíos
                </a>
              </nav>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="mt-12 flex justify-center space-x-6">
            <a
              href="https://facebook.com/lartdupain"
              className="rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
              aria-label="Síguenos en Facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="https://instagram.com/lartdupain"
              className="rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
              aria-label="Síguenos en Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://twitter.com/lartdupain"
              className="rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
              aria-label="Síguenos en Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="/sucursales"
              className="rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
              aria-label="Encuentra nuestras sucursales"
            >
              <MapPin className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-8 flex flex-col items-center justify-between space-y-4 text-sm text-blue-800 lg:flex-row lg:space-y-0">
          <p className="font-outfit">© L'art du Pain 2025</p>
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
