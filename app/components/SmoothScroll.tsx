"use client";

import { useEffect } from "react";
import { ReactLenis } from "lenis/react";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  // Arm reveal animations only when JS runs, so no-JS renders a finished page (P10).
  useEffect(() => {
    document.documentElement.classList.add("reveal-armed");
  }, []);

  return (
    <ReactLenis root options={{ lerp: 0.09, duration: 1.2, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}
