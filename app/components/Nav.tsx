"use client";

import { useEffect, useState } from "react";
import { SITE } from "../lib/site";

const LINKS = [
  { href: "#servicios", label: "Servicios" },
  { href: "#galeria", label: "Galería" },
  { href: "#lacasa", label: "La Casa" },
  { href: "#visitanos", label: "Visítanos" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(28,20,17,0.84)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid var(--rule)" : "1px solid transparent",
      }}
    >
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 h-[68px] flex items-center justify-between">
        {/* wordmark with golden-moon glyph */}
        <a href="#top" className="flex items-center gap-3 group" aria-label="Luna Llena home">
          <span
            className="relative inline-block h-7 w-7 rounded-full shrink-0"
            style={{
              background:
                "radial-gradient(circle at 38% 34%, #FFF3DC 0%, #F2CE86 28%, var(--gold-2) 56%, var(--gold) 82%, var(--gold-deep) 100%)",
              boxShadow:
                "inset -5px -6px 14px rgba(60,30,12,0.5), inset 4px 4px 12px rgba(255,244,220,0.45), 0 0 14px rgba(228,169,75,0.45)",
            }}
          />
          <span className="leading-none">
            <span
              className="block text-[1.05rem] tracking-[0.01em]"
              style={{ fontFamily: "var(--font-display)", fontWeight: 600, color: "var(--cream)" }}
            >
              Luna Llena
            </span>
            <span
              className="block text-[0.6rem] tracking-[0.28em] uppercase mt-[2px]"
              style={{ color: "var(--gold-2)", fontWeight: 600 }}
            >
              Unisex · Orange NJ
            </span>
          </span>
        </a>

        {/* desktop links */}
        <nav className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">
              {l.label}
            </a>
          ))}
          <a href={`tel:${SITE.phoneRaw}`} className="btn-gold text-[0.9rem] py-[10px] px-[20px]">
            Reservar · {SITE.phone}
          </a>
        </nav>

        {/* mobile toggle */}
        <button
          className="md:hidden inline-flex flex-col items-center justify-center gap-[5px] h-11 w-11 -mr-2"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block h-[2px] w-6 rounded-full" style={{ background: "var(--cream)" }} />
          <span className="block h-[2px] w-6 rounded-full" style={{ background: "var(--cream)" }} />
          <span className="block h-[2px] w-4 rounded-full self-end" style={{ background: "var(--gold-2)" }} />
        </button>
      </div>

      {/* mobile sheet */}
      {open && (
        <div
          className="md:hidden px-5 pb-6 pt-1"
          style={{ background: "rgba(28,20,17,0.97)", borderBottom: "1px solid var(--rule)" }}
        >
          <div className="flex flex-col gap-1">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-[1.1rem]"
                style={{ fontFamily: "var(--font-display)", color: "var(--cream-2)", borderBottom: "1px solid var(--rule)" }}
              >
                {l.label}
              </a>
            ))}
            <a href={`tel:${SITE.phoneRaw}`} className="btn-gold mt-4 justify-center">
              Reservar · {SITE.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
