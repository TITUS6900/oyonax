import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import TransportFacilityTemplate, {
  type TransportFacility,
} from "@/components/templates/TransportFacilityTemplate";

const facility: TransportFacility = {
  slug: "taxi-van-station-ski-jura",
  destinationName: "les stations de ski du Jura",
  shortName: "Stations de ski du Jura",
  location: "Monts Jura, Lélex-Crozet, Les Rousses, Métabief",
  distanceKm: 30,
  driveMin: 35,
  intro:
    "Taxi Oyonnax assure vos transferts en Van vers les stations de ski du Jura, idéal pour transporter votre famille ou votre groupe avec skis, snowboards et bagages volumineux.",
  highlights: [
    "Van VIP (1-8 pers.) avec volume de coffre adapté aux skis et housses",
    "Trajet direct depuis Oyonnax vers les principales stations du Jura",
    "Départ tôt le matin pour profiter d'une journée complète sur les pistes",
    "Retour organisé en fin de journée, sans souci de conduite sur route enneigée",
    "Berline disponible pour les trajets à 1-4 personnes sans matériel volumineux",
    "Réservation à l'avance recommandée en période de vacances scolaires",
  ],
  faq: [
    {
      question: "Le Van peut-il transporter nos skis et snowboards ?",
      answer:
        "Oui, le Van VIP dispose d'un volume de coffre suffisant pour les sacs de ski, snowboards et bagages volumineux, en complément des passagers.",
    },
    {
      question: "Desservez-vous toutes les stations du Jura ?",
      answer:
        "Nous desservons les principales stations du massif du Jura (Monts Jura, Lélex-Crozet, Les Rousses, Métabief) : indiquez-nous votre destination précise lors de la réservation.",
    },
    {
      question: "Peut-on réserver un transfert seulement à l'aller ou à l'aller-retour ?",
      answer:
        "Les deux formules sont possibles : contactez-nous pour organiser votre départ le matin et, si besoin, votre retour en fin de journée.",
    },
    {
      question: "Le tarif change-t-il selon la station de ski choisie ?",
      answer:
        "Oui, le tarif dépend de la distance jusqu'à la station : indiquez-nous votre destination précise pour une estimation avant réservation.",
    },
  ],
};

export const metadata: Metadata = buildMetadata({
  title: "Taxi Van Stations de Ski Jura | Oyonnax",
  description:
    "Transfert en Van vers les stations de ski du Jura depuis Oyonnax : skis, groupes, bagages volumineux. Taxi Oyonnax, réservez votre trajet.",
  path: "/taxi-van-station-ski-jura",
});

export default function Page() {
  return <TransportFacilityTemplate facility={facility} />;
}
