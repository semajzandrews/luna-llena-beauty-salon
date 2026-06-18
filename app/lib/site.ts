// Luna Llena Unisex Beauty Salon — verified facts + image manifest.
// Recon: NO existing website (premise holds). Hours not published anywhere
// reliable, so we present "call to confirm today's hours" — never invented.
// REBUILD: warm golden beauty-house direction. The work is the star.

export const SITE = {
  name: "Luna Llena",
  full: "Luna Llena Unisex Beauty Salon",
  meaning: "Full Moon",
  address: "351 Main St",
  city: "City of Orange",
  state: "NJ",
  zip: "07050",
  phone: "(862) 252-6047",
  phoneRaw: "8622526047",
  mapsQuery: "Luna Llena Unisex Beauty Salon, 351 Main St, City of Orange, NJ 07050",
  hoursNote: "Call to confirm today's hours", // hours not published reliably
};

const px = (id: number, w = 1100) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

// HERO — the most aspirational, stunning shot on the page.
// Editorial Black woman, sculptural natural-hair art, warm golden-brown light.
// Community-true, gorgeous, treats the work as art. (visually verified)
export const HERO_IMG = { id: 16089262, src: px(16089262, 1400) };

// Exhibition gallery — each ID visually inspected, community-true, one warm grade,
// gorgeous and aspirational. None collide with any City of Orange neighbor.
// (orange-nails-fever-spa blocked IDs verified clear.)
export const GALLERY = [
  { id: 36441633, label: "Las trenzas", en: "The braids", src: px(36441633), span: "tall" },   // African braiding, warm vibrant salon
  { id: 7446913,  label: "El glow",     en: "The glow",   src: px(7446913) },                   // Black client, vanity-bulb mirror, smiling
  { id: 3886314,  label: "Bajo la luz", en: "Under the light", src: px(3886314), span: "tall" }, // afro at lit vanity mirror, warm bulbs
  { id: 7389074,  label: "El color",    en: "The color",  src: px(7389074) },                   // color application on curls, close detail
  { id: 8307357,  label: "El recogido", en: "The updo",   src: px(8307357) },                   // elegant curly updo, deep wine ground
  { id: 7446906,  label: "El acabado",  en: "The finish", src: px(7446906) },                   // braided client, finishing touch
  { id: 10593045, label: "Las largas",  en: "The lengths", src: px(10593045), span: "tall" },   // dramatic braided ponytail, editorial
  { id: 7389092,  label: "Para el",     en: "For him",    src: px(7389092) },                   // men's blowout, unisex truth
  { id: 7755458,  label: "El estilo",   en: "The style",  src: px(7755458) },                   // joyful woman in warm product salon
];

// "La Casa" — the room, warm and inviting.
export const ROOM_IMG = { id: 7750120, src: px(7750120, 1200) };  // bright open salon, warm cognac seating
export const ROOM_IMG_2 = { id: 7823407, src: px(7823407, 900) }; // chandelier salon, warm cream elegance

export const SERVICES = [
  { es: "Corte y peinado",        en: "Cut & style",            note: "Para él y para ella" },
  { es: "Color y mechas",         en: "Color & highlights",     note: "Tono completo, balayage, raíz" },
  { es: "Blowout y planchado",    en: "Blowout & flat-iron",    note: "Liso, ondas, con cuerpo" },
  { es: "Trenzas y protectores",  en: "Braids & protective",    note: "Box braids, twists, cornrows" },
  { es: "Recogidos y eventos",    en: "Updos & events",         note: "Bodas, quinces, ocasiones" },
  { es: "Tratamientos",           en: "Treatments",             note: "Hidratación y brillo" },
  { es: "Barba y caballero",      en: "Beard & men's grooming", note: "Unisex de verdad" },
];
