export type MedicalLink = {
  slug: string;
  label: string;
};

export const medicalLinks: MedicalLink[] = [
  { slug: "taxi-conventionne-oyonnax", label: "Taxi conventionné à Oyonnax" },
  { slug: "taxi-tpmr-oyonnax", label: "Transport PMR (fauteuil roulant)" },
  { slug: "taxi-conventionne-centre-hospitalier-haut-bugey", label: "Centre Hospitalier Haut-Bugey" },
  { slug: "taxi-conventionne-hopitaux-lyon", label: "Hôpitaux de Lyon" },
  { slug: "taxi-conventionne-bourg-en-bresse", label: "Centre Hospitalier de Bourg-en-Bresse" },
  { slug: "taxi-conventionne-centre-hospitalier-annecy", label: "Centre Hospitalier Annecy Genevois" },
  { slug: "taxi-conventionne-dialyse-radiotherapie", label: "Dialyse & Radiothérapie" },
];
