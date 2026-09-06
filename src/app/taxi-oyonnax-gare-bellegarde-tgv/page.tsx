import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import TransportFacilityTemplate, {
  type TransportFacility,
} from "@/components/templates/TransportFacilityTemplate";

const facility: TransportFacility = {
  slug: "taxi-oyonnax-gare-bellegarde-tgv",
  destinationName: "la Gare TGV de Bellegarde-sur-Valserine",
  shortName: "Gare TGV Bellegarde",
  location: "Gare de Bellegarde-sur-Valserine, 01200 Bellegarde-sur-Valserine",
  distanceKm: 35,
  driveMin: 35,
  intro:
    "Taxi Oyonnax assure vos transferts vers la Gare TGV de Bellegarde-sur-Valserine, en Berline ou en Van, pour ne jamais manquer votre train à grande vitesse vers Paris ou Genève.",
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
        "Comptez environ 35 minutes de trajet depuis Oyonnax. Nous recommandons de prévoir une marge supplémentaire de 20 à 30 minutes avant le départ de votre train.",
    },
    {
      question: "Pouvez-vous venir me chercher à la Gare de Bellegarde à mon arrivée ?",
      answer:
        "Oui, indiquez-nous votre heure d'arrivée et le numéro de votre train : nous organisons votre prise en charge à la sortie de la gare.",
    },
    {
      question: "Le tarif est-il fixe pour ce trajet ?",
      answer:
        "Le tarif dépend de la distance parcourue et de l'heure du trajet, conformément à la réglementation applicable aux taxis. Contactez-nous pour une estimation avant réservation.",
    },
  ],
};

export const metadata: Metadata = buildMetadata({
  title: "Taxi Oyonnax Gare TGV Bellegarde | Transfert",
  description:
    "Transfert taxi entre Oyonnax et la Gare TGV de Bellegarde-sur-Valserine : trajet direct, Berline ou Van, dispo 7j/7. Taxi Oyonnax, réservez.",
  path: "/taxi-oyonnax-gare-bellegarde-tgv",
});

export default function Page() {
  return <TransportFacilityTemplate facility={facility} />;
}
