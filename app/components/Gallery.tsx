"use client";

import { useEffect, useRef } from "react";
import { GALLERY } from "../lib/site";

export default function Gallery() {
  const wrapRef = useRef<HTMLDivElement>(null);

  // Each tile reveals (warm bloom + rise) as it enters view — mobile-native delight,
  // no hover dependency. Hover adds an extra zoom on pointer devices via CSS.
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const items = Array.from(el.querySelectorAll<HTMLElement>(".exhibit-item"));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -6% 0px" }
    );
    items.forEach((it) => io.observe(it));
    return () => io.disconnect();
  }, []);

  return (
    <section id="galeria" className="relative py-24 sm:py-32" style={{ background: "linear-gradient(180deg,#1C1411,#251A15)" }}>
      <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-12">
          <div>
            <div className="kicker mb-5">
              El trabajo <span className="en">· The work</span>
            </div>
            <h2
              className="text-[2.2rem] sm:text-[3.2rem] leading-[1.02] max-w-[640px]"
              style={{ fontFamily: "var(--font-display)", fontWeight: 500, letterSpacing: "-0.015em", color: "var(--cream)" }}
            >
              La belleza, como{" "}
              <span className="font-serif-i" style={{ color: "var(--gold-2)" }}>una galería.</span>
            </h2>
          </div>
          <p className="max-w-[320px] text-[0.95rem] leading-relaxed sm:text-right" style={{ color: "var(--cream-2)" }}>
            Cuts, color, braids and styling done in the chairs on Main Street. Stock
            shown for now, swapped for the salon&rsquo;s own photos soon.
          </p>
        </div>

        <div ref={wrapRef} className="exhibit">
          {GALLERY.map((g) => (
            <figure key={g.id} className="exhibit-item">
              <div className="exhibit-frame">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={g.src} alt={`${g.label}, ${g.en}`} loading="lazy" />
              </div>
              <figcaption className="exhibit-cap">
                <span className="es">{g.label}</span>
                <span className="en">{g.en}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
