# Luna Llena Unisex Beauty Salon — SIGNATURE (rebuild)

## Direction change (why this is a full rebuild, not an edit)
The prior build went quiet, cold, moonlit-coastal minimal (blue full moon, masonry,
near-monochrome, type stays quiet). Owner feedback: too understated and cold. These are
beautiful women getting their hair done. The site must be GORGEOUS, WARM, and
ASPIRATIONAL, so someone lands and instantly thinks "I want to go THERE." Premium and
tasteful, but the goal is DESIRE and BOOKING, not minimalist restraint. The beautiful
real results and the clientele are the star.

## Brand truth
"Luna Llena" is Spanish for Full Moon. The salon sits at 351 Main St, City of Orange NJ,
on a Spanish-speaking block serving a Black + Caribbean + Latino community. Unisex,
walk-ins and appointments, cash and card. Modest public footprint, no website, no
published hours, weak directory rating, so we do NOT lead with reviews or invented
hours. We lead with the NAME and the feeling: the full moon is the warm golden light you
look your absolute best under, and the best light is in that chair.

## The ONE concept (brand-truth x technique)
**The Golden Moon.** Not a cold blue moon, a WARM HARVEST MOON: deep cocoa night, warm
cream, amber-gold glow, glowing skin. A salon named for the full moon, art-directed as a
warm golden beauty house where the work is shown like gallery art (the ALICE framing) on
an interior-extracted warm palette (the Serenity lesson). Gorgeous, aspirational,
desire-driving. The deliberate anti-cliche: no pink-floral, no Edwardian-script, no
discount-shop, no cold spa-grey.

## Craft-verb derivation (S1)
- VERB HARVEST (>=3, evidence = SERVICES in lib/site.ts): **style/finish** (blowout,
  curls, the reveal moment), **color** (balayage, root, the tone), **braid** (protective
  styles, the community's signature work), **smooth** (flat-iron, liso).
- Chosen verb: **finish / reveal the look** — the moment the chair turns and the light
  catches the finished hair. State change: ordinary light to the most flattering light;
  unseen to seen-at-your-best. That visible state change IS the promise.
- FINGER MAPPING: pointer-move (the warm moonglow follows the cursor) on desktop;
  scroll-scrub + scroll-into-view warm reveal on touch (hover does not exist on touch).
  The visitor's finger BECOMES the light source raking over the work.
- signature_arc: **reveal** (warm light reveals the work).
- signature_position: **cover** (the glow lives over the hero portrait, the first thing seen).
- cta_shape: **present-from-start** (justified: a booking-driven salon must never hide
  the Book/Call action; desire converts the instant it spikes, per the warm-editorial
  reference). Single primary CTA in the hero, not a solid+ghost ladder pair.

## Signature moment (the screenshot)
The **Golden Moon glow**: a warm amber radial light that idles with a slow breathe and
drifts toward the cursor, washing warm light across the hero portrait and, on scroll,
raking down the exhibition gallery so each gorgeous result lights up as if the most
flattering light in the room just found it. ONE confident move: warm light revealing the
work. Pure CSS/transform + Motion, no WebGL, fast and graceful.

- idle_behavior: **breathing** (the glow visibly pulses warm within ~4s, no input needed).
- touch equivalent (mobile-fit, mandatory): the glow eases toward scroll position and
  each gallery tile does a warm scroll-into-view reveal (brighten + rise); no hover dependency.
- fallback_chain: full (cursor-coupled glow) -> mid (scroll-coupled glow) -> static
  (a fixed warm golden glow over the hero, gallery fully visible).
- reduced_motion_composition: static warm golden glow, all work visible, no drift, no
  breathe; still gorgeous and warm, never blank.
- sound_moments: none. haptic_device: none.

## Video decision (BUILD_RULES §7 — considered, mandatory to consider)
CONSIDERED. Beauty is a category where video shines (hair in motion, a blowout, light
moving through a finish). Decision: a tasteful, compressed, muted, autoplay, poster-framed
hero accent video was strongly considered. For THIS build the signature is the WARM LIGHT
moving over the work, which is itself the "alive" motion and is GPU-cheap and reduced-motion
safe; a stunning editorial still portrait under that moving golden light reads more
aspirational and loads faster than a stock loop that would not be the real salon's footage.
So the hero is a graded still under live golden light, a conscious choice after considering
video, not an unconsidered default. A real on-site blowout clip is the clean upgrade once
the owner provides footage.

## Lane (fresh)
- Accent **#C8862F** (warm amber-gold, the golden-moon glow + CTAs + key headline word).
  Deep cocoa ground **#1C1411**, warm cream **#F4ECDD**, terracotta warmth **#B05E3B**.
- Display **Boska** (Fontshare, high-contrast fashion serif) for headlines; body/UI
  **Switzer** (Fontshare, clean grotesque). Editorial contrast, warm and premium.
  Label voice: tracked small-caps. (Replaces the prior Supreme voice entirely.)
- Layout: warm hero + exhibition gallery (matted, captioned-as-artworks, one warm grade).
- Mood: warm golden beauty-house. Cocoa night, cream, amber glow, glowing skin.

## Furniture (bespoke-styled)
Real top nav (golden moon glyph wordmark + Servicios / Galeria / La Casa / Visitanos +
amber Book/Call CTA), warm hero, services as a warm ledger, exhibition gallery, "La Casa"
room section, visit + keyless Google map (warm-tinted), footer with name + address +
phone + hours-by-call (12-hour AM/PM) + persistent call CTA + bysemaj.com credit.
Bilingual ES/EN kickers honor the real clientele; <html lang="es">.

## Distance / Novelty
- vs orange-nails-fever-spa (same-category Orange neighbor): warm golden beauty-house +
  amber + Boska/Switzer + golden-moonglow-over-exhibition-gallery, NOT a nail-spa
  template; ZERO shared image IDs (verified against all City of Orange builds).
- vs the prior cold moonlit build: total inversion (warm vs cold, gold vs teal, glowing
  vs quiet, exhibition gallery vs masonry, Boska vs Supreme). A genuine rebuild.

## Verified facts (recon, unchanged)
- Name: Luna Llena Unisex Beauty Salon
- Address: 351 Main St, City of Orange, NJ 07050
- Phone: (862) 252-6047  -> PIN 526047
- Unisex full-service salon; walk-ins welcome and appointments; cash and card.
- NO existing website (premise holds). Hours NOT published reliably -> "Call to confirm
  today's hours," never invent times.
- Rating weak -> do not lead with reviews.
- Upsell intel: no booking platform, no website, no verified IG. Online booking
  (Booksy/Vagaro), AI phone receptionist, and a verified IG gallery are clean upsells.
</content>
