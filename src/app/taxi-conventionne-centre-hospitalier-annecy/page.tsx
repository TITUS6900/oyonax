import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import MedicalFacilityTemplate, {
  type MedicalFacility,
} from "@/components/templates/MedicalFacilityTemplate";

const facility: MedicalFacility = {
  slug: "taxi-conventionne-centre-hospitalier-annecy",
  facilityName: "le Centre Hospitalier Annecy Genevois",
  shortName: "Centre Hospitalier Annecy Genevois",
  address: "1 Avenue de l'Hôpital, 74370 Metz-Tessy (Centre Hospitalier Annecy Genevois)",
  distanceKm: 65,
  driveMin: 55,
  intro:
    "Taxi Oyonnax assure vos trajets conventionnés CPAM entre Oyonnax et le Centre Hospitalier Annecy Genevois, pour vos consultations, hospitalisations ou soins de suite, sur prescription médicale.",
  highlights: [
    "Trajet direct depuis Oyonnax, à travers le Haut-Bugey et l'Albanais",
    "Adapté aux consultations spécialisées et hospitalisations programmées",
    "Retour organisé après consultation, examen ou sortie d'hospitalisation",
    "Facturation conforme à la convention CPAM pour le transport assis",
    "Chauffeur habitué aux accès et zones de dépose de l'établissement",
    "Réservation à l'avance recommandée pour les rendez-vous matinaux",
  ],
  faq: [
    {
      question: "Le trajet Oyonnax-Annecy est-il pris en charge par la CPAM ?",
      answer:
        "Sur présentation d'une prescription médicale de transport, le trajet vers le Centre Hospitalier Annecy Genevois peut être pris en charge selon votre situation médicale.",
    },
    {
      question: "Combien de temps dure le trajet vers Annecy ?",
      answer:
        "Comptez environ 55 minutes de route entre Oyonnax et Metz-Tessy, selon le trafic.",
    },
    {
      question: "Peut-on réserver un aller-retour le même jour ?",
      answer:
        "Oui, indiquez-nous l'heure approximative de fin de votre rendez-vous : nous organisons votre retour vers Oyonnax ou toute autre commune du Haut-Bugey.",
    },
    {
      question: "Un accompagnant peut-il monter à bord avec le patient ?",
      answer:
        "Oui, un accompagnant peut voyager avec vous dans la limite des places disponibles du véhicule, en Berline comme en Van pour les trajets familiaux.",
    },
  ],
};

export const metadata: Metadata = buildMetadata({
  title: "Taxi Centre Hospitalier Annecy | VSL CPAM",
  description:
    "Taxi conventionné CPAM entre Oyonnax et le Centre Hospitalier Annecy Genevois. Transport médical assis sur prescription. Réservez maintenant.",
  path: "/taxi-conventionne-centre-hospitalier-annecy",
});

export default function Page() {
  return <MedicalFacilityTemplate facility={facility} />;
}
