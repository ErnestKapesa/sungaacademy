"use client";

import Lenis from "lenis";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

/** Inertial smooth scrolling (Lenis). Disabled for users who prefer reduced motion. */
export function SmoothScroll() {
  const lenis = useRef<Lenis | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const instance = new Lenis({ lerp: 0.1, anchors: { offset: -80 } });
    lenis.current = instance;
    let frame = requestAnimationFrame(function raf(time) {
      instance.raf(time);
      frame = requestAnimationFrame(raf);
    });
    return () => {
      cancelAnimationFrame(frame);
      instance.destroy();
      lenis.current = null;
    };
  }, []);

  useEffect(() => {
    if (window.location.hash) return;
    lenis.current?.scrollTo(0, { immediate: true });
  }, [pathname]);

  return null;
}
