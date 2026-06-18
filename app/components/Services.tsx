import Reveal from "./Reveal";
import { SERVICES } from "../lib/site";

export default function Services() {
  return (
    <section id="servicios" className="relative py-24 sm:py-32" style={{ background: "var(--cocoa)" }}>
      <div className="mx-auto max-w-[1100px] px-5 sm:px-8">
        <Reveal>
          <div className="kicker mb-5">
            Lo que hacemos <span className="en">· What we do</span>
          </div>
          <h2
            className="text-[2.2rem] sm:text-[3.2rem] leading-[1.02] max-w-[700px]"
            style={{ fontFamily: "var(--font-display)", fontWeight: 500, letterSpacing: "-0.015em", color: "var(--cream)" }}
          >
            Un salón para todos.{" "}
            <span className="font-serif-i" style={{ color: "var(--gold-2)" }}>
              Para él y para ella.
            </span>
          </h2>
          <p className="mt-5 max-w-[540px] text-[1.04rem] leading-relaxed" style={{ color: "var(--cream-2)" }}>
            Unisex de verdad. Whatever the chair, the work is careful and the finish
            is yours. Prices vary by length and service, so call and we will tell you
            exactly.
          </p>
        </Reveal>

        <div className="mt-12">
          {SERVICES.map((s, i) => (
            <Reveal key={s.en} delay={i * 55} className="svc-row">
              <div>
                <div
                  className="svc-es text-[1.22rem] sm:text-[1.45rem]"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 500, color: "var(--cream)" }}
                >
                  {s.es}
                </div>
                <div className="mt-1 text-[0.86rem] tracking-[0.02em]" style={{ color: "var(--sand)" }}>
                  {s.en} · {s.note}
                </div>
              </div>
              <div
                className="text-[0.78rem] tracking-[0.22em] uppercase self-center"
                style={{ color: "var(--gold-2)", fontWeight: 600 }}
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
