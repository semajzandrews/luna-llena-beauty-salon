"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { SITE, HERO_IMG } from "../lib/site";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const washRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const reduce = useReducedMotion();
  useEffect(() => setMounted(true), []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // The golden moon drifts on scroll (signature motion that also works on touch).
  const moonY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const moonScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  // Desktop: warm glow follows the cursor (the most flattering light finding you).
  // Touch: glow eases toward scroll position (handled by scroll-coupled fallback).
  useEffect(() => {
    if (reduce) return;
    const el = ref.current;
    const wash = washRef.current;
    if (!el || !wash) return;
    let raf = 0;
    let tx = 60, ty = 30, cx = 60, cy = 30;
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect(); // cached per event, not in rAF
      tx = ((e.clientX - r.left) / r.width) * 100;
      ty = ((e.clientY - r.top) / r.height) * 100;
    };
    const tick = () => {
      cx += (tx - cx) * 0.08;
      cy += (ty - cy) * 0.08;
      wash.style.setProperty("--gx", `${cx.toFixed(1)}%`);
      wash.style.setProperty("--gy", `${cy.toFixed(1)}%`);
      raf = requestAnimationFrame(tick);
    };
    el.addEventListener("pointermove", onMove, { passive: true });
    raf = requestAnimationFrame(tick);
    return () => {
      el.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, [reduce]);

  // Touch fallback: couple the glow Y to scroll so it still moves with the finger.
  const washGy = useTransform(scrollYProgress, [0, 1], ["28%", "70%"]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative min-h-[100svh] overflow-hidden"
      style={{ background: "linear-gradient(180deg,#1C1411 0%,#251A15 55%,#1C1411 100%)" }}
    >
      {/* the stunning editorial portrait — the most aspirational shot on the page */}
      <motion.div
        aria-hidden
        className="absolute inset-0 z-[1]"
        style={{ y: mounted && !reduce ? portraitY : 0 }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={HERO_IMG.src}
          alt="A client at Luna Llena with a sculptural natural-hair style, lit in warm golden light"
          className="h-[112%] w-full object-cover object-[60%_28%] sm:object-[68%_30%]"
          style={{ filter: "saturate(1.06) contrast(1.03) brightness(1.0)" }}
          fetchPriority="high"
        />
        {/* warm cocoa veil so the headline always reads over the bright portrait */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(28,20,17,0.42) 0%, rgba(28,20,17,0.38) 24%, rgba(28,20,17,0.74) 58%, rgba(28,20,17,0.96) 100%), linear-gradient(90deg, rgba(28,20,17,0.92) 0%, rgba(28,20,17,0.62) 38%, rgba(28,20,17,0.10) 72%, transparent 90%)",
          }}
        />
        {/* focused lower-left pool so the cream headline always has contrast */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 90% at 8% 92%, rgba(20,13,10,0.82), rgba(20,13,10,0.30) 42%, transparent 66%)",
          }}
        />
      </motion.div>

      {/* THE GOLDEN MOON — signature warm light source */}
      <motion.div
        aria-hidden
        className="absolute right-[7%] top-[13%] sm:right-[11%] sm:top-[15%] z-[2]"
        style={{ y: mounted && !reduce ? moonY : 0, scale: mounted && !reduce ? moonScale : 1 }}
      >
        <div className="moon-orb moon-breathe h-[150px] w-[150px] sm:h-[230px] sm:w-[230px] lg:h-[300px] lg:w-[300px]" />
      </motion.div>

      {/* warm glow wash — cursor-coupled (desktop) / scroll-coupled (touch) */}
      <motion.div
        ref={washRef}
        aria-hidden
        className="luna-wash z-[2]"
        style={reduce ? { ["--gx" as string]: "62%", ["--gy" as string]: "26%" } : { ["--gy" as string]: mounted ? washGy : "30%" }}
      />

      {/* hero copy */}
      <div className="relative z-[3] mx-auto max-w-[1200px] px-5 sm:px-8 min-h-[100svh] flex flex-col justify-end pb-20 sm:pb-28">
        <motion.div
          initial={false}
          animate={reduce ? { opacity: 1, y: 0 } : { opacity: [0, 1], y: [22, 0] }}
          transition={reduce ? { duration: 0 } : { duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="max-w-[820px]"
        >
          <div className="kicker mb-6">
            Salón de belleza unisex <span className="en">· Main St, City of Orange</span>
          </div>
          <h1
            className="text-[2.8rem] leading-[0.96] sm:text-[4.6rem] lg:text-[6rem]"
            style={{ fontFamily: "var(--font-display)", fontWeight: 600, letterSpacing: "-0.015em", color: "var(--cream)" }}
          >
            Te ves preciosa
            <br />
            <span className="font-serif-i" style={{ color: "var(--gold-2)" }}>bajo esta luz.</span>
          </h1>
          <p
            className="mt-6 text-[1.06rem] sm:text-[1.2rem] max-w-[560px] leading-relaxed"
            style={{ color: "var(--cream-2)" }}
          >
            A warm beauty house on Main Street in the City of Orange. Cuts, color,
            braids and blowouts for everyone. The full moon is the light you look
            your best under, and the best light is in this chair.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href={`tel:${SITE.phoneRaw}`} className="btn-gold">
              Reservar la silla · {SITE.phone}
            </a>
            <a href="#galeria" className="btn-ghost">
              Ver el trabajo
            </a>
          </div>

          <p className="mt-7 text-[0.82rem] tracking-[0.04em]" style={{ color: "var(--sand)" }}>
            Walk-ins welcome · Citas disponibles · Para él y para ella
          </p>
        </motion.div>
      </div>

      {/* scroll cue */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-[3] flex flex-col items-center gap-2 opacity-70">
        <span className="text-[0.62rem] tracking-[0.3em] uppercase" style={{ color: "var(--cream-2)" }}>
          Scroll
        </span>
        <span className="block h-7 w-[1px]" style={{ background: "linear-gradient(var(--gold-2), transparent)" }} />
      </div>
    </section>
  );
}
