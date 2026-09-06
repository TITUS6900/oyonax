import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import TransportFacilityTemplate, {
  type TransportFacility,
} from "@/components/templates/TransportFacilityTemplate";

const facility: TransportFacility = {
  slug: "taxi-oyonnax-aeroport-lyon-st-exupery",
  destinationName: "l'Aéroport Lyon-Saint Exupéry",
  shortName: "Aéroport Lyon-Saint Exupéry",
  location: "Aéroport Lyon-Saint Exupéry, 69125 Colombier-Saugnieu",
  distanceKm: 100,
  driveMin: 80,
  intro:
    "Taxi Oyonnax assure vos transferts longue distance vers l'Aéroport Lyon-Saint Exupéry, en Berline ou en Van, pour un départ ou un retour de vol sans stress.",
  highlights: [
    "Trajet direct depuis Oyonnax, sans correspondance",
    "Suivi de votre numéro de vol pour ajuster l'heure de prise en charge",
    "Berline (1-4 pers.) ou Van (1-8 pers.) selon vos bagages et le nombre de passagers",
    "Prise en charge à l'arrivée des vols, avec attente incluse",
    "Réservation à l'avance recommandée pour les vols matinaux",
    "Véhicule adapté aux bagages standards, cabine et housses à ski",
  ],
  faq: [
    {
      question: "Combien de temps avant mon vol dois-je partir d'Oyonnax ?",
      answer:
        "Le trajet dure environ 1h20 depuis Oyonnax. Pour un vol international, prévoyez un départ 3h avant l'heure de décollage ; pour un vol national, 2h30 suffit généralement.",
    },
    {
      question: "Suivez-vous les horaires de vol en cas de retard ?",
      answer:
        "Oui, pour une prise en charge à l'aéroport, nous suivons l'état de votre vol et ajustons l'heure d'arrivée du chauffeur en conséquence.",
    },
    {
      question: "Le Van peut-il transporter une famille avec des bagages volumineux ?",
      answer:
        "Oui, le Van VIP accueille jusqu'à 8 personnes et dispose d'un volume de coffre adapté aux bagages volumineux et housses à ski.",
    },
  ],
};

export const metadata: Metadata = buildMetadata({
  title: "Taxi Oyonnax Aéroport Lyon St-Exupéry | Van",
  description:
    "Transfert taxi entre Oyonnax et l'aéroport Lyon-Saint Exupéry : Berline ou Van, suivi de vol, trajet direct. Taxi Oyonnax, réservez maintenant.",
  path: "/taxi-oyonnax-aeroport-lyon-st-exupery",
});

export default function Page() {
  return <TransportFacilityTemplate facility={facility} />;
}
