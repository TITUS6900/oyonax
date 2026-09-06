import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import TransportFacilityTemplate, {
  type TransportFacility,
} from "@/components/templates/TransportFacilityTemplate";

const facility: TransportFacility = {
  slug: "taxi-oyonnax-aeroport-geneve",
  destinationName: "l'Aéroport de Genève",
  shortName: "Aéroport de Genève",
  location: "Aéroport International de Genève, 1215 Genève 15, Suisse",
  distanceKm: 65,
  driveMin: 60,
  intro:
    "Taxi Oyonnax assure vos transferts vers l'Aéroport de Genève, en Berline ou en Van, pour un départ ou un retour de vol sans stress, passage frontalier inclus.",
  highlights: [
    "Trajet direct depuis Oyonnax, passage de la frontière franco-suisse compris",
    "Suivi de votre numéro de vol pour ajuster l'heure de prise en charge",
    "Berline (1-4 pers.) ou Van (1-8 pers.) selon vos bagages et le nombre de passagers",
    "Prise en charge à l'arrivée des vols, avec attente incluse",
    "Réservation à l'avance recommandée pour les vols matinaux",
    "Chauffeur habitué aux formalités de passage en Suisse",
  ],
  faq: [
    {
      question: "Combien de temps avant mon vol dois-je partir d'Oyonnax ?",
      answer:
        "Le trajet dure environ 60 minutes depuis Oyonnax. Pour un vol international, prévoyez un départ 2h30 à 3h avant l'heure de décollage.",
    },
    {
      question: "Ai-je besoin d'une pièce d'identité pour passer la frontière ?",
      answer:
        "Oui, munissez-vous d'une pièce d'identité valide (carte d'identité ou passeport) pour le passage de la frontière franco-suisse.",
    },
    {
      question: "Le taxi peut-il transporter plusieurs bagages ou une famille ?",
      answer:
        "Contactez-nous en précisant le nombre de passagers et de bagages afin que nous puissions vous proposer la Berline ou le Van le plus adapté.",
    },
  ],
};

export const metadata: Metadata = buildMetadata({
  title: "Taxi Oyonnax Aéroport Genève | Van & Berline",
  description:
    "Transfert taxi entre Oyonnax et l'aéroport de Genève : Berline ou Van, suivi de vol, passage frontalier. Taxi Oyonnax, réservez maintenant.",
  path: "/taxi-oyonnax-aeroport-geneve",
});

export default function Page() {
  return <TransportFacilityTemplate facility={facility} />;
}
