import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import TransportFacilityTemplate, {
  type TransportFacility,
} from "@/components/templates/TransportFacilityTemplate";

const facility: TransportFacility = {
  slug: "taxi-oyonnax-gare-bourg-en-bresse",
  destinationName: "la Gare de Bourg-en-Bresse",
  shortName: "Gare de Bourg-en-Bresse",
  location: "Gare SNCF de Bourg-en-Bresse, 01000 Bourg-en-Bresse",
  distanceKm: 45,
  driveMin: 45,
  intro:
    "Taxi Oyonnax assure vos transferts vers la Gare de Bourg-en-Bresse, en Berline ou en Van, pour vos correspondances TGV et TER vers Lyon, Paris ou la Bourgogne.",
  highlights: [
    "Trajet direct depuis Oyonnax, sans changement",
    "Prise en charge à domicile ou sur votre lieu de rendez-vous",
    "Marge de sécurité calculée selon l'heure de départ de votre train",
    "Dépose au plus près des accès voyageurs de la gare",
    "Berline (1-4 pers.) ou Van (1-8 pers.) selon vos bagages",
    "Disponible tôt le matin et tard le soir, 7j/7",
  ],
  faq: [
    {
      question: "Combien de temps avant mon train dois-je réserver mon taxi ?",
      answer:
        "Comptez environ 45 minutes de trajet depuis Oyonnax. Nous recommandons de prévoir une marge supplémentaire de 20 à 30 minutes avant le départ de votre train.",
    },
    {
      question: "Pouvez-vous venir me chercher à la Gare de Bourg-en-Bresse à mon arrivée ?",
      answer:
        "Oui, indiquez-nous votre heure d'arrivée et le numéro de votre train : nous organisons votre prise en charge à la sortie de la gare.",
    },
    {
      question: "Le tarif est-il fixe pour ce trajet ?",
      answer:
        "Le tarif dépend de la distance parcourue et de l'heure du trajet, conformément à la réglementation applicable aux taxis. Contactez-nous pour une estimation avant réservation.",
    },
    {
      question: "Peut-on réserver un aller-retour dans la même journée ?",
      answer:
        "Oui, indiquez-nous l'heure de votre train retour : nous organisons votre prise en charge à la Gare de Bourg-en-Bresse dès votre arrivée.",
    },
  ],
};

export const metadata: Metadata = buildMetadata({
  title: "Taxi Oyonnax Gare Bourg-en-Bresse | Transfert",
  description:
    "Transfert taxi entre Oyonnax et la Gare de Bourg-en-Bresse : trajet direct, Berline ou Van, dispo 7j/7. Taxi Oyonnax, réservez maintenant.",
  path: "/taxi-oyonnax-gare-bourg-en-bresse",
});

export default function Page() {
  return <TransportFacilityTemplate facility={facility} />;
}
