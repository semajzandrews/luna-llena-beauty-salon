import Reveal from "./Reveal";
import { ROOM_IMG, ROOM_IMG_2 } from "../lib/site";

export default function Room() {
  return (
    <section id="lacasa" className="relative py-24 sm:py-32" style={{ background: "var(--cocoa)" }}>
      <div className="mx-auto max-w-[1100px] px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <Reveal className="order-2 lg:order-1">
            <div className="kicker mb-5">
              La casa <span className="en">· The room</span>
            </div>
            <h2
              className="text-[2.2rem] sm:text-[3rem] leading-[1.04]"
              style={{ fontFamily: "var(--font-display)", fontWeight: 500, letterSpacing: "-0.015em", color: "var(--cream)" }}
            >
              Cálida, cuidada,{" "}
              <span className="font-serif-i" style={{ color: "var(--gold-2)" }}>y tuya por la hora.</span>
            </h2>
            <p className="mt-6 text-[1.05rem] leading-relaxed" style={{ color: "var(--cream-2)" }}>
              Luna Llena keeps it warm and simple. A good chair, careful hands, and
              the time to get it right. Sit down, tell us what you want, and leave
              looking like yourself on your best night.
            </p>

            <div className="mt-9 grid grid-cols-3 gap-4">
              {[
                { es: "Unisex", en: "Everyone" },
                { es: "Sin cita", en: "Walk-ins" },
                { es: "Efectivo y tarjeta", en: "Cash & card" },
              ].map((f) => (
                <div key={f.en} className="rounded-[12px] p-4" style={{ background: "var(--cocoa-2)", border: "1px solid var(--rule)" }}>
                  <div className="text-[0.95rem]" style={{ fontFamily: "var(--font-display)", fontWeight: 500, color: "var(--gold-2)" }}>
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
            <div className="grid grid-cols-5 gap-4">
              <div
                className="col-span-3 relative overflow-hidden rounded-[16px]"
                style={{ border: "1px solid var(--rule)" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={ROOM_IMG.src}
                  alt="The warm, open floor of the salon with cognac seating"
                  className="w-full h-full object-cover block"
                  loading="lazy"
                />
                <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(180deg, transparent 55%, rgba(28,20,17,0.32)), rgba(200,134,47,0.06)" }} />
              </div>
              <div
                className="col-span-2 relative overflow-hidden rounded-[16px]"
                style={{ border: "1px solid var(--rule)" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={ROOM_IMG_2.src}
                  alt="A warm corner of the salon under soft chandelier light"
                  className="w-full h-full object-cover block"
                  loading="lazy"
                />
                <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(180deg, transparent 50%, rgba(28,20,17,0.4)), rgba(200,134,47,0.06)" }} />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
