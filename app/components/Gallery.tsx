"use client";

import { useEffect, useRef, useState } from "react";
import { GALLERY } from "../lib/site";

export default function Gallery() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.05 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id="galeria" className="relative py-24 sm:py-32" style={{ background: "linear-gradient(180deg,#0B1F22,#0E262A)" }}>
      {/* tide glow at the top, echoing the moonlight from the hero */}
      <div className="tide-glow" />
      <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-10">
          <div>
            <div className="kicker mb-5">
              El trabajo <span className="en">· The work</span>
            </div>
            <h2
              className="text-[2.1rem] sm:text-[3.1rem] leading-[1.02] max-w-[620px]"
              style={{ fontFamily: "var(--font-display)", fontWeight: 700, letterSpacing: "-0.015em", color: "var(--moon)" }}
            >
              Una marea de buen pelo.
            </h2>
          </div>
          <p className="max-w-[300px] text-[0.95rem] leading-relaxed sm:text-right" style={{ color: "var(--moon-2)" }}>
            Cuts, color and styling done in the chairs on Main Street. Stock shown
            for now, swapped for the salon&rsquo;s own photos soon.
          </p>
        </div>

        <div ref={wrapRef} className="masonry">
          {GALLERY.map((g, i) => (
            <figure
              key={g.id}
              className="masonry-item reveal"
              style={{
                opacity: shown ? 1 : 0,
                transform: shown ? "none" : "translateY(26px)",
                transition: "opacity .8s cubic-bezier(.16,1,.3,1), transform .8s cubic-bezier(.16,1,.3,1)",
                transitionDelay: `${(i % 8) * 70}ms`,
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={g.src}
                alt={g.label}
                loading="lazy"
                style={{ filter: "saturate(0.92) contrast(1.02)" }}
              />
              <figcaption className="cap">{g.label}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
