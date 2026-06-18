import { SITE } from "../lib/site";

export default function Footer() {
  return (
    <footer className="relative pt-20 pb-10" style={{ background: "var(--night)", borderTop: "1px solid var(--rule)" }}>
      <div className="mx-auto max-w-[1140px] px-5 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-[1.2fr_1fr_1fr]">
          {/* brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span
                className="inline-block h-6 w-6 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle at 38% 34%, #FBFAF4 0%, #EFEADB 32%, #CFE3E2 58%, var(--teal-2) 84%, var(--teal-deep) 100%)",
                  boxShadow: "inset -4px -5px 12px rgba(8,40,42,0.5), inset 3px 3px 10px rgba(255,255,255,0.45)",
                }}
              />
              <span className="text-[1.1rem]" style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--moon)" }}>
                Luna Llena
              </span>
            </div>
            <p className="text-[0.92rem] leading-relaxed max-w-[280px]" style={{ color: "var(--moon-2)" }}>
              Salón de belleza unisex en Main Street, City of Orange. Te ves bien bajo
              cualquier luz.
            </p>
          </div>

          {/* contact */}
          <div>
            <div className="text-[0.72rem] tracking-[0.24em] uppercase mb-4" style={{ color: "var(--teal-2)" }}>
              Contacto
            </div>
            <address className="not-italic text-[0.95rem] leading-relaxed" style={{ color: "var(--moon-2)" }}>
              {SITE.address}
              <br />
              {SITE.city}, {SITE.state} {SITE.zip}
              <br />
              <a href={`tel:${SITE.phoneRaw}`} className="hover:text-[var(--moon)] transition-colors" style={{ color: "var(--moon)" }}>
                {SITE.phone}
              </a>
            </address>
          </div>

          {/* hours / cta */}
          <div>
            <div className="text-[0.72rem] tracking-[0.24em] uppercase mb-4" style={{ color: "var(--teal-2)" }}>
              Horario
            </div>
            <p className="text-[0.92rem] leading-relaxed mb-5" style={{ color: "var(--moon-2)" }}>
              Walk-ins welcome.
              <br />
              Call for today&rsquo;s hours.
            </p>
            <a href={`tel:${SITE.phoneRaw}`} className="btn-teal text-[0.9rem] py-[11px] px-[20px]">
              Llamar ahora
            </a>
          </div>
        </div>

        <div className="rule-line my-10" />

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-[0.78rem]" style={{ color: "var(--sand)" }}>
            © {new Date().getFullYear()} Luna Llena Unisex Beauty Salon · City of Orange, NJ
          </p>
          <a
            href="https://bysemaj.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-[0.78rem] tracking-[0.04em] transition-colors"
            style={{ color: "var(--moon-2)" }}
          >
            <span
              className="inline-block h-[7px] w-[7px] rounded-full"
              style={{ background: "var(--teal-2)", boxShadow: "0 0 8px rgba(31,167,173,0.7)" }}
            />
            built by{" "}
            <span className="group-hover:text-[var(--teal-2)] transition-colors" style={{ fontFamily: "var(--font-display)", fontWeight: 600, color: "var(--moon)" }}>
              bysemaj.com
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
