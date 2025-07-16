"use client";

import React, { useEffect, useState } from "react";
import { gsap } from "gsap";

export const ScrollProgress: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    const handleScroll = () => {
      requestAnimationFrame(updateScrollProgress);
    };

    window.addEventListener("scroll", handleScroll);
    updateScrollProgress(); // Initial call

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    gsap.to(".scroll-progress-bar", {
      width: `${scrollProgress}%`,
      duration: 0.1,
      ease: "none",
    });
  }, [scrollProgress]);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-transparent">
      <div
        className="scroll-progress-bar h-full bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg"
        style={{ width: "0%" }}
      />
    </div>
  );
};
