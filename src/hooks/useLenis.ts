import { useEffect } from "react";
import Lenis from "lenis";

export const useLenis = () => {
  useEffect(() => {
    // Initialize Lenis with optimized settings
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
      normalizeWheel: true,
      wheelMultiplier: 1,
    });

    // Hide native scrollbar
    document.documentElement.style.scrollbarWidth = "none";
    document.documentElement.style.msOverflowStyle = "none";
    document.body.style.scrollbarWidth = "none";
    document.body.style.msOverflowStyle = "none";

    // Animation frame function
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup
    return () => {
      lenis.destroy();
      // Restore scrollbar if needed
      document.documentElement.style.scrollbarWidth = "";
      document.documentElement.style.msOverflowStyle = "";
      document.body.style.scrollbarWidth = "";
      document.body.style.msOverflowStyle = "";
    };
  }, []);
};
