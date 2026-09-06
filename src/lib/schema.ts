import { BUSINESS } from "@/lib/constants";

type SchemaOrg = Record<string, unknown>;

const baseAddress = {
  "@type": "PostalAddress",
  addressLocality: BUSINESS.city,
  postalCode: BUSINESS.postalCode,
  addressRegion: BUSINESS.region,
  addressCountry: BUSINESS.country,
};

const baseGeo = {
  "@type": "GeoCoordinates",
  latitude: BUSINESS.lat,
  longitude: BUSINESS.lng,
};

const baseOpeningHours = {
  "@type": "OpeningHoursSpecification",
  dayOfWeek: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
  opens: "00:00",
  closes: "23:59",
};

/** Schéma principal de l'entreprise : service de taxi. */
export function getTaxiServiceSchema(opts?: { areaServed?: string[]; url?: string }): SchemaOrg {
  return {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    "@id": `${BUSINESS.domain}/#taxiservice`,
    name: BUSINESS.name,
    image: `${BUSINESS.domain}/logo.png`,
    url: opts?.url ?? BUSINESS.domain,
    telephone: BUSINESS.phoneHref.replace("tel:", ""),
    email: BUSINESS.email,
    priceRange: BUSINESS.priceRange,
    address: baseAddress,
    geo: baseGeo,
    areaServed:
      opts?.areaServed?.map((name) => ({ "@type": "City", name })) ?? [
        { "@type": "City", name: "Oyonnax" },
        { "@type": "AdministrativeArea", name: "Haut-Bugey" },
      ],
    openingHoursSpecification: baseOpeningHours,
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Licence de taxi (ADS)",
      identifier: BUSINESS.license,
      recognizedBy: {
        "@type": "Organization",
        name: BUSINESS.licenseAuthority,
      },
    },
  };
}

/**
 * Schéma complémentaire signalant l'activité de transport médical conventionné
 * (VSL / CPAM), affiché sur les pages dédiées au transport sanitaire.
 */
export function getMedicalBusinessSchema(opts?: { url?: string; description?: string }): SchemaOrg {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": `${BUSINESS.domain}/#medicaltransport`,
    name: `${BUSINESS.name} — Transport médical conventionné`,
    url: opts?.url ?? BUSINESS.domain,
    telephone: BUSINESS.phoneHref.replace("tel:", ""),
    address: baseAddress,
    geo: baseGeo,
    priceRange: BUSINESS.priceRange,
    description:
      opts?.description ??
      "Transport de patients assis conventionné CPAM (taxi conventionné) vers les hôpitaux et centres de soins depuis Oyonnax, sur prescription médicale.",
    medicalSpecialty: "Transport sanitaire assis (VSL / taxi conventionné)",
    isAcceptingNewPatients: true,
  };
}

/**
 * Signal de commerce local générique, utilisé sur les pages de zone
 * (communes desservies) en complément du schéma TaxiService global.
 */
export function getLocalBusinessSchema(opts?: { areaServed?: string[]; url?: string }): SchemaOrg {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${BUSINESS.domain}/#localbusiness`,
    name: BUSINESS.name,
    image: `${BUSINESS.domain}/logo.png`,
    url: opts?.url ?? BUSINESS.domain,
    telephone: BUSINESS.phoneHref.replace("tel:", ""),
    email: BUSINESS.email,
    priceRange: BUSINESS.priceRange,
    address: baseAddress,
    geo: baseGeo,
    areaServed: opts?.areaServed?.map((name) => ({ "@type": "City", name })) ?? [
      { "@type": "City", name: BUSINESS.city },
    ],
    openingHoursSpecification: baseOpeningHours,
  };
}

export function getBreadcrumbSchema(items: { name: string; path: string }[]): SchemaOrg {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${BUSINESS.domain}${item.path}`,
    })),
  };
}

export function getFaqSchema(items: { question: string; answer: string }[]): SchemaOrg {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
