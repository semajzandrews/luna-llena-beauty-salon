import { SITE } from "../lib/site";

export default function Footer() {
  return (
    <footer className="relative pt-20 pb-10" style={{ background: "var(--cocoa)", borderTop: "1px solid var(--rule)" }}>
      <div className="mx-auto max-w-[1140px] px-5 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-[1.2fr_1fr_1fr]">
          {/* brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span
                className="inline-block h-6 w-6 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle at 38% 34%, #FFF3DC 0%, #F2CE86 28%, var(--gold-2) 56%, var(--gold) 82%, var(--gold-deep) 100%)",
                  boxShadow: "inset -4px -5px 12px rgba(60,30,12,0.5), inset 3px 3px 10px rgba(255,244,220,0.45)",
                }}
              />
              <span className="text-[1.12rem]" style={{ fontFamily: "var(--font-display)", fontWeight: 500, color: "var(--cream)" }}>
                Luna Llena
              </span>
            </div>
            <p className="text-[0.92rem] leading-relaxed max-w-[290px]" style={{ color: "var(--cream-2)" }}>
              Salón de belleza unisex en Main Street, City of Orange. Te ves preciosa
              bajo esta luz.
            </p>
          </div>

          {/* contact */}
          <div>
            <div className="text-[0.72rem] tracking-[0.24em] uppercase mb-4" style={{ color: "var(--gold-2)" }}>
              Contacto
            </div>
            <address className="not-italic text-[0.95rem] leading-relaxed" style={{ color: "var(--cream-2)" }}>
              {SITE.address}
              <br />
              {SITE.city}, {SITE.state} {SITE.zip}
              <br />
              <a href={`tel:${SITE.phoneRaw}`} className="transition-colors" style={{ color: "var(--cream)" }}>
                {SITE.phone}
              </a>
            </address>
          </div>

          {/* hours / cta */}
          <div>
            <div className="text-[0.72rem] tracking-[0.24em] uppercase mb-4" style={{ color: "var(--gold-2)" }}>
              Horario
            </div>
            <p className="text-[0.92rem] leading-relaxed mb-5" style={{ color: "var(--cream-2)" }}>
              Walk-ins welcome.
              <br />
              Call for today&rsquo;s hours.
            </p>
            <a href={`tel:${SITE.phoneRaw}`} className="btn-gold text-[0.9rem] py-[11px] px-[20px]">
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
            style={{ color: "var(--cream-2)" }}
          >
            <span
              className="inline-block h-[7px] w-[7px] rounded-full"
              style={{ background: "var(--gold-2)", boxShadow: "0 0 8px rgba(228,169,75,0.7)" }}
            />
            built by{" "}
            <span className="transition-colors" style={{ fontFamily: "var(--font-display)", fontWeight: 500, color: "var(--cream)" }}>
              bysemaj.com
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
