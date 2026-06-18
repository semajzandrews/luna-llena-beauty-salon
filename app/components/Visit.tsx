import Reveal from "./Reveal";
import { SITE } from "../lib/site";

const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(SITE.mapsQuery)}&output=embed`;

export default function Visit() {
  return (
    <section id="visitanos" className="relative py-24 sm:py-32" style={{ background: "linear-gradient(180deg,#0E262A,#0B1F22)" }}>
      <div className="mx-auto max-w-[1140px] px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 items-stretch">
          <Reveal>
            <div className="kicker mb-5">
              Visítanos <span className="en">· Find us</span>
            </div>
            <h2
              className="text-[2.1rem] sm:text-[3rem] leading-[1.02]"
              style={{ fontFamily: "var(--font-display)", fontWeight: 700, letterSpacing: "-0.015em", color: "var(--moon)" }}
            >
              On Main Street,
              <br />
              City of Orange.
            </h2>

            <div className="mt-9 space-y-7">
              <div>
                <div className="text-[0.72rem] tracking-[0.24em] uppercase mb-2" style={{ color: "var(--teal-2)" }}>
                  Dirección · Address
                </div>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE.mapsQuery)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[1.1rem] leading-snug hover:opacity-80 transition-opacity"
                  style={{ fontFamily: "var(--font-display)", color: "var(--moon)" }}
                >
                  {SITE.address}
                  <br />
                  {SITE.city}, {SITE.state} {SITE.zip}
                </a>
              </div>

              <div>
                <div className="text-[0.72rem] tracking-[0.24em] uppercase mb-2" style={{ color: "var(--teal-2)" }}>
                  Teléfono · Phone
                </div>
                <a
                  href={`tel:${SITE.phoneRaw}`}
                  className="text-[1.5rem] hover:opacity-80 transition-opacity"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--moon)" }}
                >
                  {SITE.phone}
                </a>
              </div>

              <div>
                <div className="text-[0.72rem] tracking-[0.24em] uppercase mb-2" style={{ color: "var(--teal-2)" }}>
                  Horario · Hours
                </div>
                <p className="text-[1rem] leading-relaxed" style={{ color: "var(--moon-2)" }}>
                  Walk-ins welcome and appointments honored. Call ahead for today&rsquo;s
                  hours and to book a chair.
                </p>
                <p className="mt-1 text-[0.86rem]" style={{ color: "var(--sand)" }}>
                  Llámanos para el horario de hoy y para tu cita.
                </p>
              </div>

              <a href={`tel:${SITE.phoneRaw}`} className="btn-teal mt-1">
                Llamar al salón
              </a>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div
              className="h-[320px] sm:h-full min-h-[360px] w-full overflow-hidden rounded-[18px]"
              style={{ border: "1px solid var(--rule)" }}
            >
              <iframe
                title="Luna Llena on the map"
                src={mapSrc}
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(0.2) contrast(1.05)" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
