import { SITE } from "./lib/site";

export default function NotFound() {
  return (
    <main
      className="min-h-[100svh] flex items-center justify-center px-6"
      style={{ background: "radial-gradient(60% 60% at 70% 18%, rgba(228,169,75,0.16), transparent 60%), var(--cocoa)" }}
    >
      <div className="max-w-[520px] text-center">
        <div
          className="mx-auto mb-8 h-16 w-16 rounded-full"
          style={{
            background:
              "radial-gradient(circle at 38% 34%, #FFF3DC 0%, #F2CE86 28%, var(--gold-2) 56%, var(--gold) 82%, var(--gold-deep) 100%)",
            boxShadow: "0 0 30px rgba(228,169,75,0.4), inset -6px -8px 18px rgba(60,30,12,0.5), inset 5px 5px 14px rgba(255,244,220,0.45)",
          }}
        />
        <h1
          className="text-[2.4rem] sm:text-[3rem] leading-[1.05]"
          style={{ fontFamily: "var(--font-display)", fontWeight: 500, color: "var(--cream)" }}
        >
          Esa silla está vacía.
        </h1>
        <p className="mt-4 text-[1.02rem] leading-relaxed" style={{ color: "var(--cream-2)" }}>
          That page took a different chair. Let us get you back to the light.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <a href="/" className="btn-gold">
            Volver al inicio
          </a>
          <a href={`tel:${SITE.phoneRaw}`} className="btn-ghost">
            Llamar · {SITE.phone}
          </a>
        </div>
      </div>
    </main>
  );
}
