/**
 * Informations officielles de l'entreprise.
 * BUSINESS = identité commerciale utilisée sur tout le site (marque, zone de
 * service, SEO local). LEGAL_ENTITY = identité de la société exploitante,
 * utilisée uniquement sur la page mentions légales.
 */
export const BUSINESS = {
  name: "TAXI OYONNAX",
  tagline: "Votre taxi conventionné à Oyonnax et dans le Haut-Bugey",
  phoneDisplay: "07 71 17 06 71",
  phoneHref: "tel:+33771170671",
  whatsappNumber: "33771170671",
  get whatsappHref() {
    return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(
      "Bonjour, je souhaite réserver un taxi à Oyonnax."
    )}`;
  },
  email: "kamalyazid2@gmail.com",
  emailHref: "mailto:kamalyazid2@gmail.com",
  domain: "https://www.taxioyonnax.fr",
  city: "Oyonnax",
  postalCode: "01100",
  addressLine: "Oyonnax",
  department: "Ain",
  region: "Auvergne-Rhône-Alpes",
  country: "FR",
  lat: 46.2569,
  lng: 5.6547,
  openingHours: "Lu-Di 00:00-23:59",
  openingHoursShort: "7j/7 — 24h/24",
  priceRange: "€€",
} as const;

/** Identité légale de la société exploitante (page /mentions-legales). */
export const LEGAL_ENTITY = {
  companyName: "TAXI-Y",
  legalForm: "SAS",
  registeredAddress: "93 Allée des Jonquilles, 69200 Vénissieux, France",
  siren: "832 294 359",
  siret: "832 294 359 00019",
  rcs: "RCS Lyon",
  vat: "FR75 832 294 359",
  nafCode: "49.32Z",
  director: "Kamal YAZID",
  hostName: "Vercel Inc.",
  hostAddress: "440 N Barranca Ave #4133, Covina, CA 91723, USA",
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/taxi-conventionne-oyonnax", label: "Taxi conventionné CPAM" },
  { href: "/taxi-van-oyonnax", label: "Van & Berline VIP" },
  { href: "/reservation", label: "Réservation" },
] as const;

/** Ligne de copyright affichée en pied de page (texte figé, volontairement générique). */
export const COPYRIGHT_NOTICE = "© 2026 Service de Taxi — exploité par TAXI-Y. Tous droits réservés.";
