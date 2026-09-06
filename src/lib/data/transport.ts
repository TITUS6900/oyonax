export type TransportLink = {
  slug: string;
  label: string;
};

/** Pages de destination Gares/Aéroports/Stations (hors page pilier Van/Berline). */
export const transportLinks: TransportLink[] = [
  { slug: "taxi-oyonnax-aeroport-geneve", label: "Aéroport de Genève" },
  { slug: "taxi-oyonnax-aeroport-lyon-st-exupery", label: "Aéroport Lyon-Saint Exupéry" },
  { slug: "taxi-oyonnax-gare-bellegarde-tgv", label: "Gare TGV de Bellegarde-sur-Valserine" },
  { slug: "taxi-oyonnax-gare-bourg-en-bresse", label: "Gare de Bourg-en-Bresse" },
  { slug: "taxi-van-station-ski-jura", label: "Stations de ski du Jura" },
];
