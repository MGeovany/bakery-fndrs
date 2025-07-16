import React, { useEffect, useRef } from "react";
import Image from "next/image";

export const FreshBakerySection: React.FC = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const cranberriesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const scrolled = window.pageYOffset;
        const parallax = scrolled * 0.1;
        imageRef.current.style.transform = `translateY(${parallax}px)`;
      }

      // Animate cranberries
      cranberriesRef.current.forEach((cranberry, index) => {
        if (cranberry) {
          const scrolled = window.pageYOffset;
          const speed = 0.05 + index * 0.02;
          const yPos = scrolled * speed;
          cranberry.style.transform = `translateY(${yPos}px) rotate(${scrolled * 0.1}deg)`;
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative bg-[#f5f1eb] px-6 py-24">
      <div className="relative mx-auto max-w-7xl">
        {/* Top Section with Menu, About, Location */}
        <div className="mb-16 grid grid-cols-1 items-start gap-8 lg:grid-cols-3">
          {/* Left Column - Description */}
          <div className="space-y-6">
            <p className="font-outfit text-lg leading-relaxed text-blue-800">
              Where every cup of coffee is brewed with passion and every bite of
              our artisanal foods is crafted with precision.
            </p>

            <p className="font-outfit text-lg leading-relaxed text-blue-800">
              Our café is designed with a rustic charm, featuring reclaimed wood
              furnishings, soft, ambient lighting, and an open kitchen where
              guests can watch our artisans at work. The walls are adorned with
              local art, fostering a connection with the community and inspiring
              creativity.
            </p>

            <div className="mt-8">
              <button className="font-outfit border-2 border-blue-800 bg-transparent px-8 py-3 text-lg font-semibold text-blue-800 transition-colors hover:bg-blue-800 hover:text-white">
                See more
              </button>
            </div>

            <div className="mt-8">
              <p className="font-outfit text-sm tracking-wider text-blue-800 uppercase">
                COSINESS:
              </p>
              <p className="font-outfit text-lg font-bold text-blue-800">
                10/10
              </p>
            </div>
          </div>

          {/* Center Column - Menu */}
          <div className="text-center">
            <h2 className="font-gloock text-6xl text-blue-800 italic lg:text-8xl">
              Menu
            </h2>
          </div>

          {/* Right Column - About & Location */}
          <div className="space-y-8 text-right">
            <div>
              <h2 className="font-gloock text-6xl text-blue-800 italic lg:text-8xl">
                About
              </h2>
            </div>
            <div>
              <h2 className="font-gloock text-6xl text-blue-800 italic lg:text-8xl">
                Location
              </h2>
            </div>

            {/* "and fresh pastries" text */}
            <div className="mt-16">
              <h3 className="font-outfit text-5xl leading-tight font-bold text-blue-800 lg:text-7xl">
                and fresh
                <br />
                <span className="font-gloock italic">pastries.</span>
              </h3>
            </div>
          </div>
        </div>

        {/* Center Pastry Image */}
        <div className="relative mb-16 flex justify-center">
          <div ref={imageRef} className="relative">
            <Image
              src="/cheesecake.png"
              className="rounded-full shadow-2xl"
              alt="Delicioso cheesecake artesanal - L'art du Pain"
              width={400}
              height={400}
              style={{ objectFit: "cover" }}
            />

            {/* Floating cranberries */}
            <div
              ref={(el) => el && (cranberriesRef.current[0] = el)}
              className="absolute -top-8 -left-12"
            >
              <div className="h-6 w-6 rounded-full bg-red-600 shadow-lg transition-transform duration-300 hover:scale-110"></div>
            </div>
            <div
              ref={(el) => el && (cranberriesRef.current[1] = el)}
              className="absolute top-4 -right-16"
            >
              <div className="h-4 w-4 rounded-full bg-red-600 shadow-lg transition-transform duration-300 hover:scale-110"></div>
            </div>
            <div
              ref={(el) => el && (cranberriesRef.current[2] = el)}
              className="absolute -bottom-12 -left-8"
            >
              <div className="h-5 w-5 rounded-full bg-red-600 shadow-lg transition-transform duration-300 hover:scale-110"></div>
            </div>
            <div
              ref={(el) => el && (cranberriesRef.current[3] = el)}
              className="absolute -right-12 bottom-8"
            >
              <div className="h-6 w-6 rounded-full bg-red-600 shadow-lg transition-transform duration-300 hover:scale-110"></div>
            </div>
            <div
              ref={(el) => el && (cranberriesRef.current[4] = el)}
              className="absolute right-20 -bottom-4"
            >
              <div className="h-4 w-4 rounded-full bg-red-600 shadow-lg transition-transform duration-300 hover:scale-110"></div>
            </div>
          </div>
        </div>

        {/* Bottom Question */}
        <div className="text-center">
          <h2 className="font-outfit text-5xl leading-tight font-bold text-blue-800 lg:text-7xl">
            Need some fresh bakery?
          </h2>
        </div>
      </div>
    </section>
  );
};
