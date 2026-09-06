export type Commune = {
  slug: string;
  name: string;
  postalCode: string;
  distanceKm: number;
  driveMin: number;
  area: "Agglomération d'Oyonnax" | "Haut-Bugey";
  areaDetail: string;
  metaTitle: string;
  metaDescription: string;
};

const area = {
  agglo: "Agglomération d'Oyonnax" as const,
  hautBugey: "Haut-Bugey" as const,
};

export const communes: Commune[] = [
  {
    slug: "arbent",
    name: "Arbent",
    postalCode: "01100",
    distanceKm: 2,
    driveMin: 5,
    area: area.agglo,
    areaDetail: "commune limitrophe d'Oyonnax",
    metaTitle: "Taxi Arbent (01100) | Taxi Oyonnax",
    metaDescription:
      "Taxi conventionné CPAM à Arbent : VSL, gares et aéroports. Chauffeur licencié, réservation rapide 7j/7. Appelez Taxi Oyonnax.",
  },
  {
    slug: "bellignat",
    name: "Bellignat",
    postalCode: "01100",
    distanceKm: 2,
    driveMin: 5,
    area: area.agglo,
    areaDetail: "commune limitrophe d'Oyonnax",
    metaTitle: "Taxi Bellignat (01100) | Taxi Oyonnax",
    metaDescription:
      "Besoin d'un taxi à Bellignat ? Taxi Oyonnax assure vos trajets CPAM, gares et aéroports avec un chauffeur licencié, 7j/7.",
  },
  {
    slug: "geovreisset",
    name: "Géovreisset",
    postalCode: "01100",
    distanceKm: 3,
    driveMin: 6,
    area: area.agglo,
    areaDetail: "sur les hauteurs d'Oyonnax",
    metaTitle: "Taxi Géovreisset (01100) | Taxi Oyonnax",
    metaDescription:
      "Taxi Oyonnax dessert Géovreisset : transferts gares, aéroport Genève/Lyon et transport médical conventionné CPAM. Réservez.",
  },
  {
    slug: "groissiat",
    name: "Groissiat",
    postalCode: "01100",
    distanceKm: 4,
    driveMin: 7,
    area: area.agglo,
    areaDetail: "au sud d'Oyonnax, vallée de la Bienne",
    metaTitle: "Taxi Groissiat (01100) | Taxi Oyonnax",
    metaDescription:
      "Taxi conventionné à Groissiat pour vos rendez-vous médicaux, gares et aéroports. Chauffeur local expérimenté, disponible 24h/24.",
  },
  {
    slug: "martignat",
    name: "Martignat",
    postalCode: "01100",
    distanceKm: 3,
    driveMin: 6,
    area: area.agglo,
    areaDetail: "commune limitrophe d'Oyonnax",
    metaTitle: "Taxi Martignat (01100) | Taxi Oyonnax",
    metaDescription:
      "Taxi Oyonnax à Martignat : transport médical conventionné CPAM, navettes gares et aéroports. Réservation immédiate 7j/7.",
  },
  {
    slug: "montreal-la-cluse",
    name: "Montréal-la-Cluse",
    postalCode: "01460",
    distanceKm: 6,
    driveMin: 10,
    area: area.hautBugey,
    areaDetail: "sur le plateau du Haut-Bugey",
    metaTitle: "Taxi Montréal-la-Cluse | Taxi Oyonnax",
    metaDescription:
      "Taxi conventionné CPAM à Montréal-la-Cluse : transport médical, gares et aéroports. Taxi Oyonnax, réservation rapide 7j/7.",
  },
  {
    slug: "izernore",
    name: "Izernore",
    postalCode: "01580",
    distanceKm: 8,
    driveMin: 12,
    area: area.hautBugey,
    areaDetail: "dans le Haut-Bugey, au pied du Jura",
    metaTitle: "Taxi Izernore (01580) | Taxi Oyonnax",
    metaDescription:
      "Taxi Oyonnax dessert Izernore : rendez-vous médicaux CPAM, gares et aéroports. Chauffeur licencié, disponible jour et nuit.",
  },
  {
    slug: "dortan",
    name: "Dortan",
    postalCode: "01590",
    distanceKm: 10,
    driveMin: 15,
    area: area.hautBugey,
    areaDetail: "aux confins du Haut-Bugey et du Jura",
    metaTitle: "Taxi Dortan (01590) | Taxi Oyonnax",
    metaDescription:
      "Taxi conventionné à Dortan : transport médical CPAM, transferts gares et aéroports. Taxi Oyonnax, chauffeur pro, disponible 7j/7.",
  },
];
