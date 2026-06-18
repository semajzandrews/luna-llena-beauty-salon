import Reveal from "./Reveal";
import { SERVICES } from "../lib/site";

export default function Services() {
  return (
    <section id="servicios" className="relative py-24 sm:py-32" style={{ background: "var(--night)" }}>
      <div className="mx-auto max-w-[1100px] px-5 sm:px-8">
        <Reveal>
          <div className="kicker mb-5">
            Lo que hacemos <span className="en">· What we do</span>
          </div>
          <h2
            className="text-[2.1rem] sm:text-[3.1rem] leading-[1.02] max-w-[680px]"
            style={{ fontFamily: "var(--font-display)", fontWeight: 700, letterSpacing: "-0.015em", color: "var(--moon)" }}
          >
            Un salón para todos.{" "}
            <span className="font-serif-i" style={{ color: "var(--teal-2)", fontWeight: 400 }}>
              Para él y para ella.
            </span>
          </h2>
          <p className="mt-5 max-w-[520px] text-[1.02rem] leading-relaxed" style={{ color: "var(--moon-2)" }}>
            Unisex de verdad. Whatever the chair, the work is careful and the finish
            is yours. Prices vary by length and service, so call and we will tell you
            exactly.
          </p>
        </Reveal>

        <div className="mt-12">
          {SERVICES.map((s, i) => (
            <Reveal key={s.en} delay={i * 60} className="svc-row">
              <div>
                <div
                  className="text-[1.18rem] sm:text-[1.4rem]"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 600, color: "var(--moon)" }}
                >
                  {s.es}
                </div>
                <div className="mt-1 text-[0.86rem] tracking-[0.02em]" style={{ color: "var(--sand)" }}>
                  {s.en} · {s.note}
                </div>
              </div>
              <div
                className="text-[0.78rem] tracking-[0.22em] uppercase self-center"
                style={{ color: "var(--teal-2)", fontFamily: "var(--font-display)", fontWeight: 500 }}
              >
                0{i + 1}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
