import React, { useEffect, useRef, useState } from "react";
import { Button } from "../ui/Button";
import Image from "next/image";

interface HeroContent {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
}

const heroContents: HeroContent[] = [
  {
    image: "/best-option.png",
    title: "Lo artesanal",
    subtitle: "es lo nuestro",
    description:
      "Desde 2014, creamos panes y pasteles con amor, tradición francesa y los mejores ingredientes artesanales.",
    buttonText: "Ver Productos",
  },
  {
    image: "/cafe.png",
    title: "Café premium",
    subtitle: "cada mañana",
    description:
      "Granos seleccionados y tostados artesanalmente para acompañar nuestros productos horneados.",
    buttonText: "Descubrir Café",
  },
  {
    image: "/cheesecake.png",
    title: "Postres únicos",
    subtitle: "tradición francesa",
    description:
      "Cheesecakes, éclairs y postres elaborados con técnicas tradicionales francesas y sabores innovadores.",
    buttonText: "Ver Postres",
  },
];

export const HeroSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const scrollProgress = Math.max(0, -rect.top / window.innerHeight);

      let newIndex = 0;
      if (scrollProgress < 2) {
        newIndex = 0;
      } else if (scrollProgress < 4) {
        newIndex = 1;
      } else if (scrollProgress < 6) {
        newIndex = 2;
      }

      if (newIndex !== currentIndex) {
        setIsTransitioning(true);

        const transitionDuration = 800;

        setTimeout(() => {
          setCurrentIndex(newIndex);
          setTimeout(() => setIsTransitioning(false), 100);
        }, transitionDuration);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentIndex]);

  const currentContent = heroContents[currentIndex] ?? heroContents[0];

  return (
    <section ref={sectionRef} className="relative min-h-[600vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="bg-cream-200 absolute inset-0 flex items-center justify-center py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="grid grid-cols-1 items-center justify-items-center gap-8 sm:gap-12 lg:grid-cols-2">
              {/* Image Container */}
              <div className="relative order-1 flex h-[35rem] w-full max-w-lg justify-center overflow-hidden lg:order-none">
                <div
                  className={`flex items-center justify-center transition-all duration-[1200ms] ease-in-out ${
                    isTransitioning
                      ? "-translate-y-full scale-90 transform opacity-0"
                      : "translate-y-0 scale-100 transform opacity-100"
                  }`}
                >
                  <Image
                    src={currentContent.image}
                    className="w-full max-w-sm rounded-xl border border-blue-600 object-cover sm:max-w-md md:h-[35rem] lg:max-w-lg"
                    alt={`${currentContent.title} - L'art du Pain`}
                    width={500}
                    height={500}
                    priority
                  />
                </div>
              </div>

              {/* Text Content Container */}
              <div className="relative order-2 flex h-[35rem] items-center text-center lg:order-none lg:text-left">
                <div
                  className={`flex flex-col justify-center space-y-6 py-8 transition-all duration-[1200ms] ease-in-out ${
                    isTransitioning
                      ? "translate-y-full transform opacity-0"
                      : "translate-y-0 transform opacity-100"
                  }`}
                >
                  <h1 className="font-gloock mb-4 text-6xl leading-[1.1] font-bold text-blue-800 sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl">
                    {currentContent.title}
                    <br />
                    <span className="font-gloock text-blue-800">
                      {currentContent.subtitle}
                    </span>
                  </h1>

                  <p className="font-outfit mx-auto max-w-md text-base text-blue-800 sm:text-lg lg:mx-0">
                    {currentContent.description}
                  </p>

                  <div className="mt-6 sm:mt-8">
                    <Button
                      variant="primary"
                      size="md"
                      className="font-outfit bg-blue-800 px-6 py-3 text-base font-semibold text-white hover:bg-blue-900 sm:px-8 sm:text-lg"
                    >
                      {currentContent.buttonText}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
