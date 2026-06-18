"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { SITE, GALLERY } from "../lib/site";

// Hero masonry uses the first 6 work tiles as a moonlit tide-wall behind the moon.
const HERO_TILES = GALLERY.slice(0, 6);

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // The moon drifts + glow rakes as you scroll (signature).
  const moonY = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const moonX = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const glowY = useTransform(scrollYProgress, [0, 1], ["0%", "55%"]);
  const wallY = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const moonScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative min-h-[100svh] overflow-hidden"
      style={{ background: "linear-gradient(180deg,#0B1F22 0%,#0E262A 60%,#0B1F22 100%)" }}
    >
      {/* tide-wall of work behind the moon */}
      <motion.div
        aria-hidden
        className="absolute inset-0 opacity-[0.34]"
        style={{ y: mounted ? wallY : 0 }}
      >
        <div className="masonry h-full px-2 pt-24 [column-count:3] sm:[column-count:4] lg:[column-count:6]">
          {[...HERO_TILES, ...HERO_TILES].map((t, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={`${t.id}-${i}`}
              src={t.src}
              alt=""
              className="mb-3 w-full rounded-[12px]"
              style={{ filter: "saturate(0.78) brightness(0.7) hue-rotate(-6deg)" }}
              loading={i < 6 ? "eager" : "lazy"}
            />
          ))}
        </div>
        {/* teal-night veil so type stays legible */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(11,31,34,0.58) 0%, rgba(11,31,34,0.74) 38%, rgba(11,31,34,0.93) 72%, rgba(11,31,34,0.97) 100%)",
          }}
        />
      </motion.div>

      {/* the moonlight wash that rakes across the wall on scroll */}
      <motion.div
        aria-hidden
        className="absolute left-1/2 -translate-x-1/2 w-[140%] h-[70%] pointer-events-none"
        style={{
          top: mounted ? glowY : "0%",
          background:
            "radial-gradient(45% 55% at 50% 0%, rgba(31,167,173,0.22), rgba(20,134,140,0.07) 48%, transparent 72%)",
        }}
      />

      {/* THE MOON — signature light source */}
      <motion.div
        aria-hidden
        className="absolute right-[6%] top-[14%] sm:right-[10%] sm:top-[16%] z-[2]"
        style={{ y: mounted ? moonY : 0, x: mounted ? moonX : 0, scale: mounted ? moonScale : 1 }}
      >
        <div className="moon-orb moon-breathe h-[180px] w-[180px] sm:h-[260px] sm:w-[260px] lg:h-[340px] lg:w-[340px]" />
      </motion.div>

      {/* focused scrim behind the copy so the headline always reads */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 z-[2] h-[62%] pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, rgba(8,24,26,0.45) 38%, rgba(8,24,26,0.86) 100%)",
        }}
      />

      {/* hero copy */}
      <div className="relative z-[3] mx-auto max-w-[1200px] px-5 sm:px-8 min-h-[100svh] flex flex-col justify-end pb-20 sm:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="max-w-[760px]"
        >
          <div className="kicker mb-6">
            Salón de belleza unisex <span className="en">· Main St, City of Orange</span>
          </div>
          <h1
            className="text-[2.7rem] leading-[0.98] sm:text-[4.4rem] lg:text-[5.6rem]"
            style={{ fontFamily: "var(--font-display)", fontWeight: 800, letterSpacing: "-0.02em", color: "var(--moon)" }}
          >
            Te ves bien bajo
            <br />
            <span style={{ color: "var(--teal-2)" }}>cualquier luz.</span>
          </h1>
          <p
            className="mt-6 text-[1.05rem] sm:text-[1.18rem] max-w-[540px] leading-relaxed"
            style={{ color: "var(--moon-2)" }}
          >
            Luna Llena is a unisex beauty salon on Main Street in the City of Orange.
            Cuts, color, blowouts and styling for everyone. You look good under any
            light, and we make sure of it.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href={`tel:${SITE.phoneRaw}`} className="btn-teal">
              Llamar para cita · {SITE.phone}
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
        <span className="text-[0.62rem] tracking-[0.3em] uppercase" style={{ color: "var(--moon-2)" }}>
          Scroll
        </span>
        <span className="block h-7 w-[1px]" style={{ background: "linear-gradient(var(--teal-2), transparent)" }} />
      </div>
    </section>
  );
}
