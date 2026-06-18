import Reveal from "./Reveal";
import { SITE } from "../lib/site";

const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(SITE.mapsQuery)}&z=15&output=embed`;

export default function Visit() {
  return (
    <section id="visitanos" className="relative py-24 sm:py-32" style={{ background: "linear-gradient(180deg,#251A15,#1C1411)" }}>
      <div className="mx-auto max-w-[1140px] px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 items-stretch">
          <Reveal>
            <div className="kicker mb-5">
              Visítanos <span className="en">· Find us</span>
            </div>
            <h2
              className="text-[2.2rem] sm:text-[3rem] leading-[1.02]"
              style={{ fontFamily: "var(--font-display)", fontWeight: 500, letterSpacing: "-0.015em", color: "var(--cream)" }}
            >
              On Main Street,{" "}
              <span className="font-serif-i" style={{ color: "var(--gold-2)" }}>City of Orange.</span>
            </h2>

            <div className="mt-9 space-y-7">
              <div>
                <div className="text-[0.72rem] tracking-[0.24em] uppercase mb-2" style={{ color: "var(--gold-2)" }}>
                  Dirección · Address
                </div>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE.mapsQuery)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[1.12rem] leading-snug hover:opacity-80 transition-opacity"
                  style={{ fontFamily: "var(--font-display)", color: "var(--cream)" }}
                >
                  {SITE.address}
                  <br />
                  {SITE.city}, {SITE.state} {SITE.zip}
                </a>
              </div>

              <div>
                <div className="text-[0.72rem] tracking-[0.24em] uppercase mb-2" style={{ color: "var(--gold-2)" }}>
                  Teléfono · Phone
                </div>
                <a
                  href={`tel:${SITE.phoneRaw}`}
                  className="text-[1.5rem] hover:opacity-80 transition-opacity"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 500, color: "var(--cream)" }}
                >
                  {SITE.phone}
                </a>
              </div>

              <div>
                <div className="text-[0.72rem] tracking-[0.24em] uppercase mb-2" style={{ color: "var(--gold-2)" }}>
                  Horario · Hours
                </div>
                <p className="text-[1rem] leading-relaxed" style={{ color: "var(--cream-2)" }}>
                  Walk-ins welcome and appointments honored. Call ahead for today&rsquo;s
                  hours and to book a chair.
                </p>
                <p className="mt-1 text-[0.86rem]" style={{ color: "var(--sand)" }}>
                  Llámanos para el horario de hoy y para tu cita.
                </p>
              </div>

              <a href={`tel:${SITE.phoneRaw}`} className="btn-gold mt-1">
                Llamar al salón
              </a>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="map-frame h-[340px] sm:h-full min-h-[380px] w-full">
              <iframe
                title={`Luna Llena Unisex Beauty Salon, ${SITE.address}, ${SITE.city}, ${SITE.state} ${SITE.zip}`}
                src={mapSrc}
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
