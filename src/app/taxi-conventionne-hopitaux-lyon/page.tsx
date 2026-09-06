import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import MedicalFacilityTemplate, {
  type MedicalFacility,
} from "@/components/templates/MedicalFacilityTemplate";

const facility: MedicalFacility = {
  slug: "taxi-conventionne-hopitaux-lyon",
  facilityName: "les hôpitaux de Lyon (Hospices Civils de Lyon)",
  shortName: "Hôpitaux de Lyon",
  address: "Hospices Civils de Lyon — Croix-Rousse, Édouard Herriot, Lyon Sud",
  distanceKm: 90,
  driveMin: 75,
  intro:
    "Taxi Oyonnax assure vos trajets conventionnés CPAM longue distance entre Oyonnax et les hôpitaux de Lyon, pour vos consultations spécialisées, hospitalisations ou soins de suite, sur prescription médicale.",
  highlights: [
    "Trajet longue distance direct Oyonnax ↔ Lyon, sans correspondance",
    "Adapté aux consultations spécialisées et centres de référence lyonnais",
    "Retour organisé après consultation, examen ou sortie d'hospitalisation",
    "Facturation conforme à la convention CPAM pour le transport assis",
    "Réservation à l'avance recommandée pour les rendez-vous matinaux",
    "Véhicule confortable pour un trajet d'environ 1h15",
  ],
  faq: [
    {
      question: "Le trajet Oyonnax-Lyon est-il pris en charge par la CPAM ?",
      answer:
        "Sur présentation d'une prescription médicale de transport, le trajet vers un établissement lyonnais peut être pris en charge selon votre situation (ALD, éloignement du centre de soins le plus proche, avis du médecin-conseil si nécessaire).",
    },
    {
      question: "Combien de temps dure le trajet vers Lyon ?",
      answer:
        "Comptez environ 1h15 de route entre Oyonnax et le centre de Lyon, selon le trafic et l'établissement précis.",
    },
    {
      question: "Peut-on réserver un aller-retour le même jour ?",
      answer:
        "Oui, indiquez-nous l'heure approximative de fin de votre rendez-vous : nous organisons votre retour vers Oyonnax ou toute autre commune du Haut-Bugey.",
    },
    {
      question: "Desservez-vous tous les sites des Hospices Civils de Lyon ?",
      answer:
        "Oui, nous assurons les trajets vers l'ensemble des sites HCL (Croix-Rousse, Édouard Herriot, Lyon Sud, etc.) ainsi que vers les cliniques privées lyonnaises, selon l'adresse indiquée sur votre prescription.",
    },
  ],
};

export const metadata: Metadata = buildMetadata({
  title: "Taxi Oyonnax Hôpitaux de Lyon | VSL CPAM",
  description:
    "Taxi conventionné CPAM entre Oyonnax et les hôpitaux de Lyon (HCL). Transport médical assis longue distance sur prescription. Réservez maintenant.",
  path: "/taxi-conventionne-hopitaux-lyon",
});

export default function Page() {
  return <MedicalFacilityTemplate facility={facility} />;
}
