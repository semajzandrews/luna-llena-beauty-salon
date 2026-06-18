"use client";

import { useEffect, useState } from "react";
import { SITE } from "../lib/site";

const LINKS = [
  { href: "#servicios", label: "Servicios" },
  { href: "#galeria", label: "Galería" },
  { href: "#salon", label: "El Salón" },
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
        background: scrolled ? "rgba(11,31,34,0.82)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid var(--rule)" : "1px solid transparent",
      }}
    >
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 h-[68px] flex items-center justify-between">
        {/* wordmark with moon glyph */}
        <a href="#top" className="flex items-center gap-3 group" aria-label="Luna Llena home">
          <span
            className="relative inline-block h-7 w-7 rounded-full shrink-0"
            style={{
              background:
                "radial-gradient(circle at 38% 34%, #FBFAF4 0%, #EFEADB 32%, #CFE3E2 58%, var(--teal-2) 84%, var(--teal-deep) 100%)",
              boxShadow:
                "inset -5px -6px 14px rgba(8,40,42,0.5), inset 4px 4px 12px rgba(255,255,255,0.45), 0 0 14px rgba(31,167,173,0.4)",
            }}
          />
          <span className="leading-none">
            <span
              className="block text-[1.02rem] tracking-[0.02em]"
              style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--moon)" }}
            >
              Luna Llena
            </span>
            <span
              className="block text-[0.6rem] tracking-[0.28em] uppercase mt-[2px]"
              style={{ color: "var(--teal-2)", fontWeight: 500 }}
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
          <a href={`tel:${SITE.phoneRaw}`} className="btn-teal text-[0.9rem] py-[10px] px-[20px]">
            Llamar · {SITE.phone}
          </a>
        </nav>

        {/* mobile toggle */}
        <button
          className="md:hidden inline-flex flex-col items-center justify-center gap-[5px] h-11 w-11 -mr-2"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block h-[2px] w-6 rounded-full" style={{ background: "var(--moon)" }} />
          <span className="block h-[2px] w-6 rounded-full" style={{ background: "var(--moon)" }} />
          <span className="block h-[2px] w-4 rounded-full self-end" style={{ background: "var(--teal-2)" }} />
        </button>
      </div>

      {/* mobile sheet */}
      {open && (
        <div
          className="md:hidden px-5 pb-6 pt-1"
          style={{ background: "rgba(11,31,34,0.96)", borderBottom: "1px solid var(--rule)" }}
        >
          <div className="flex flex-col gap-1">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-[1.05rem]"
                style={{ fontFamily: "var(--font-display)", color: "var(--moon-2)", borderBottom: "1px solid var(--rule)" }}
              >
                {l.label}
              </a>
            ))}
            <a href={`tel:${SITE.phoneRaw}`} className="btn-teal mt-4 justify-center">
              Llamar · {SITE.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
