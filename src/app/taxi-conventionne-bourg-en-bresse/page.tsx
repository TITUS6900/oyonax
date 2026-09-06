import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import MedicalFacilityTemplate, {
  type MedicalFacility,
} from "@/components/templates/MedicalFacilityTemplate";

const facility: MedicalFacility = {
  slug: "taxi-conventionne-bourg-en-bresse",
  facilityName: "le Centre Hospitalier de Bourg-en-Bresse (Fleyriat)",
  shortName: "Centre Hospitalier Bourg-en-Bresse",
  address: "900 Route de Paris, 01440 Viriat (Centre Hospitalier de Fleyriat)",
  distanceKm: 45,
  driveMin: 45,
  intro:
    "Taxi Oyonnax assure vos trajets conventionnés CPAM entre Oyonnax et le Centre Hospitalier de Fleyriat à Bourg-en-Bresse, pour vos consultations, hospitalisations ou soins de suite, sur prescription médicale.",
  highlights: [
    "Trajet direct depuis Oyonnax, sans correspondance",
    "Adapté aux urgences, consultations et hospitalisations programmées",
    "Retour organisé après consultation, examen ou sortie d'hospitalisation",
    "Facturation conforme à la convention CPAM pour le transport assis",
    "Chauffeur habitué aux accès et zones de dépose de l'établissement",
    "Disponibilité 24h/24 pour les rendez-vous matinaux ou urgents",
  ],
  faq: [
    {
      question: "Le taxi peut-il déposer directement devant le Centre Hospitalier de Fleyriat ?",
      answer:
        "Oui, nous connaissons les accès et zones de dépose de l'hôpital et vous déposons au plus près de l'entrée de votre service.",
    },
    {
      question: "Quel document dois-je préparer pour un trajet conventionné ?",
      answer:
        "Munissez-vous de votre prescription médicale de transport (PMT) délivrée par votre médecin, ainsi que de votre carte Vitale et votre pièce d'identité.",
    },
    {
      question: "Combien de temps dure le trajet depuis Oyonnax ?",
      answer:
        "Comptez environ 45 minutes de route entre Oyonnax et Bourg-en-Bresse, selon le trafic.",
    },
    {
      question: "Intervenez-vous pour un transport non programmé vers les urgences ?",
      answer:
        "Nous faisons notre possible pour répondre rapidement à toute demande non planifiée : appelez-nous directement pour connaître notre disponibilité immédiate vers le Centre Hospitalier de Fleyriat.",
    },
  ],
};

export const metadata: Metadata = buildMetadata({
  title: "Taxi Bourg-en-Bresse (Fleyriat) | VSL CPAM",
  description:
    "Taxi conventionné CPAM entre Oyonnax et le Centre Hospitalier de Fleyriat à Bourg-en-Bresse. Transport médical assis sur prescription. Réservez.",
  path: "/taxi-conventionne-bourg-en-bresse",
});

export default function Page() {
  return <MedicalFacilityTemplate facility={facility} />;
}
