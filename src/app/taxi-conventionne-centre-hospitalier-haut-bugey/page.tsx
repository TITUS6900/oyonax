import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import MedicalFacilityTemplate, {
  type MedicalFacility,
} from "@/components/templates/MedicalFacilityTemplate";

const facility: MedicalFacility = {
  slug: "taxi-conventionne-centre-hospitalier-haut-bugey",
  facilityName: "le Centre Hospitalier Haut-Bugey",
  shortName: "Centre Hospitalier Haut-Bugey",
  address: "1 Rue du Docteur Gabriel Debacker, 01100 Oyonnax",
  distanceKm: 2,
  driveMin: 5,
  intro:
    "Taxi Oyonnax assure vos trajets conventionnés CPAM vers le Centre Hospitalier Haut-Bugey, pour vos consultations, hospitalisations ou soins de suite, sur prescription médicale.",
  highlights: [
    "Prise en charge à domicile ou en établissement, à l'heure convenue",
    "Trajet direct vers le Centre Hospitalier Haut-Bugey, situé à Oyonnax",
    "Retour organisé après consultation, examen ou sortie d'hospitalisation",
    "Facturation conforme à la convention CPAM pour le transport assis",
    "Chauffeur habitué aux accès et zones de dépose de l'établissement",
    "Disponibilité 24h/24 pour les rendez-vous matinaux ou urgents",
  ],
  faq: [
    {
      question: "Le taxi peut-il déposer directement devant le Centre Hospitalier Haut-Bugey ?",
      answer:
        "Oui, nous connaissons les accès et zones de dépose de l'hôpital et vous déposons au plus près de l'entrée de votre service.",
    },
    {
      question: "Quel document dois-je préparer pour un trajet conventionné ?",
      answer:
        "Munissez-vous de votre prescription médicale de transport (PMT) délivrée par votre médecin, ainsi que de votre carte Vitale et votre pièce d'identité.",
    },
    {
      question: "Peut-on réserver un aller-retour le même jour ?",
      answer:
        "Oui, indiquez-nous l'heure approximative de fin de votre rendez-vous : nous organisons votre retour vers Oyonnax ou toute autre commune du secteur.",
    },
  ],
};

export const metadata: Metadata = buildMetadata({
  title: "Taxi Centre Hospitalier Haut-Bugey | VSL CPAM",
  description:
    "Taxi conventionné CPAM vers le Centre Hospitalier Haut-Bugey à Oyonnax. Transport médical assis sur prescription, dispo 24h/24. Réservez maintenant.",
  path: "/taxi-conventionne-centre-hospitalier-haut-bugey",
});

export default function Page() {
  return <MedicalFacilityTemplate facility={facility} />;
}
