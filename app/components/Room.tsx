import Reveal from "./Reveal";
import { ROOM_STILL } from "../lib/site";

export default function Room() {
  return (
    <section id="salon" className="relative py-24 sm:py-32" style={{ background: "var(--night)" }}>
      <div className="mx-auto max-w-[1100px] px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <Reveal className="order-2 lg:order-1">
            <div className="kicker mb-5">
              El salón <span className="en">· The room</span>
            </div>
            <h2
              className="text-[2.1rem] sm:text-[3rem] leading-[1.04]"
              style={{ fontFamily: "var(--font-display)", fontWeight: 700, letterSpacing: "-0.015em", color: "var(--moon)" }}
            >
              Calm, clean, and yours
              <br />
              for the hour.
            </h2>
            <p className="mt-6 text-[1.04rem] leading-relaxed" style={{ color: "var(--moon-2)" }}>
              Luna Llena keeps it simple. A clean chair, careful hands, and the time
              to get it right. Sit down, tell us what you want, and leave looking like
              yourself on a good night.
            </p>

            <div className="mt-9 grid grid-cols-3 gap-4">
              {[
                { es: "Unisex", en: "Everyone" },
                { es: "Sin cita", en: "Walk-ins" },
                { es: "Efectivo y tarjeta", en: "Cash & card" },
              ].map((f) => (
                <div key={f.en} className="rounded-[12px] p-4" style={{ background: "var(--night-2)", border: "1px solid var(--rule)" }}>
                  <div className="text-[0.95rem]" style={{ fontFamily: "var(--font-display)", fontWeight: 600, color: "var(--teal-2)" }}>
                    {f.es}
                  </div>
                  <div className="mt-1 text-[0.74rem] tracking-[0.04em]" style={{ color: "var(--sand)" }}>
                    {f.en}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120} className="order-1 lg:order-2">
            <div
              className="relative overflow-hidden rounded-[18px]"
              style={{ border: "1px solid var(--rule)" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={ROOM_STILL.src}
                alt="The clean, coastal-calm detail of the salon"
                className="w-full h-auto block"
                loading="lazy"
                style={{ filter: "saturate(0.95)" }}
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: "linear-gradient(180deg, transparent 55%, rgba(11,31,34,0.35))" }}
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
