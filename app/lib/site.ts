// Luna Llena Unisex Beauty Salon — verified facts + image manifest.
// Recon: NO existing website (premise holds). Hours not published anywhere
// reliable, so we present "call to confirm today's hours" — never invented.

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
};

const px = (id: number, w = 1100) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

// Each ID looked at and assigned to the label it actually depicts.
// None of these collide with the same-city same-category neighbor
// (orange-nails-fever-spa: 17010955,5871831,3997386,3997359,3997377,8809259,5870539).
export const GALLERY = [
  { id: 6487882, label: "El corte · The cut", src: px(6487882) },        // Latina client, precision cut — community-true, leads
  { id: 3993467, label: "Brushing · The blowout", src: px(3993467) },    // round-brush blowout, dramatic
  { id: 3065170, label: "El recogido · The updo", src: px(3065170) },    // updo styling
  { id: 7440125, label: "Las ondas · The waves", src: px(7440125) },     // curling wand, light & airy
  { id: 3331486, label: "El acabado · The finish", src: px(3331486) },   // bob finish
  { id: 7755216, label: "Liso · Smooth & straight", src: px(7755216) },  // flat-iron straightening
  { id: 3065209, label: "Los rizos · The curls", src: px(3065209) },     // warm curls finish
  { id: 14615063, label: "En la silla · At the chair", src: px(14615063) }, // blow-dry at station/mirror
  { id: 10318043, label: "El color · The color", src: px(10318043) },    // curling iron, color tones
  { id: 3993466, label: "Precisión · Precision", src: px(3993466) },     // scissor-over-comb detail
  { id: 3992874, label: "Las herramientas · The tools", src: px(3992874) }, // shears flatlay
];

export const ROOM_STILL = { id: 4202325, src: px(4202325, 900) }; // coastal-clean product still life

export const SERVICES = [
  { es: "Corte y peinado", en: "Cut & style", note: "Para él y para ella" },
  { es: "Color y mechas", en: "Color & highlights", note: "Tono completo, balayage, raíz" },
  { es: "Blowout y planchado", en: "Blowout & flat-iron", note: "Liso, ondas, con cuerpo" },
  { es: "Recogidos y eventos", en: "Updos & events", note: "Bodas, quinces, ocasiones" },
  { es: "Tratamientos", en: "Treatments", note: "Hidratación y brillo" },
  { es: "Barba y caballero", en: "Beard & men's grooming", note: "Unisex de verdad" },
];
