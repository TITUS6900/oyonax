import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import MedicalFacilityTemplate, {
  type MedicalFacility,
} from "@/components/templates/MedicalFacilityTemplate";

const facility: MedicalFacility = {
  slug: "taxi-conventionne-dialyse-radiotherapie",
  facilityName: "vos séances de dialyse et de radiothérapie",
  shortName: "Dialyse & Radiothérapie",
  address: "Unité de dialyse du Centre Hospitalier Haut-Bugey (Oyonnax) et centres de radiothérapie de Bourg-en-Bresse / Lyon",
  distanceKm: 2,
  driveMin: 5,
  intro:
    "Taxi Oyonnax assure le transport conventionné CPAM de vos séances régulières de dialyse et de radiothérapie, avec un chauffeur attitré qui connaît vos habitudes et vos horaires.",
  highlights: [
    "Trajets réguliers organisés à jours et horaires fixes",
    "Prise en charge de la dialyse à l'unité du Centre Hospitalier Haut-Bugey à Oyonnax",
    "Trajets vers les centres de radiothérapie de Bourg-en-Bresse ou de Lyon",
    "Attente sur place ou aller-retour selon la durée de votre séance",
    "Facturation conforme à la convention CPAM pour le transport assis",
    "Chauffeur habitué au rythme et aux contraintes des traitements longs",
  ],
  faq: [
    {
      question: "Prenez-vous en charge les trajets réguliers de dialyse ?",
      answer:
        "Oui, nous organisons des trajets récurrents à jours et horaires fixes vers l'unité de dialyse, avec si possible le même chauffeur pour votre confort.",
    },
    {
      question: "Attendez-vous sur place pendant ma séance ?",
      answer:
        "Selon la durée de votre séance, nous pouvons attendre sur place ou organiser un aller-retour séparé : indiquez-nous vos horaires habituels.",
    },
    {
      question: "Le transport vers un centre de radiothérapie à Lyon est-il conventionné ?",
      answer:
        "Oui, sur prescription médicale de transport, ces trajets peuvent être pris en charge par l'Assurance Maladie, selon votre situation et l'éloignement du centre de soins.",
    },
    {
      question: "Le véhicule est-il adapté à un fauteuil roulant pliant ?",
      answer:
        "Oui, notre Berline comme notre Van peuvent accueillir un fauteuil roulant pliant ou un déambulateur dans le coffre : signalez-le simplement lors de la réservation.",
    },
  ],
};

export const metadata: Metadata = buildMetadata({
  title: "Taxi Dialyse & Radiothérapie Oyonnax | CPAM",
  description:
    "Transport conventionné CPAM pour vos séances de dialyse et radiothérapie depuis Oyonnax. Trajets réguliers, chauffeur attitré. Appelez Taxi Oyonnax.",
  path: "/taxi-conventionne-dialyse-radiotherapie",
});

export default function Page() {
  return <MedicalFacilityTemplate facility={facility} />;
}
