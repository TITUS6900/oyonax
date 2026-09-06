import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import VehiclesSection from "@/components/VehiclesSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import { BUSINESS } from "@/lib/constants";
import { getBreadcrumbSchema, getLocalBusinessSchema } from "@/lib/schema";
import type { Commune } from "@/lib/data/communes";

export default function CommuneTemplate({ commune }: { commune: Commune }) {
  const path = `/taxi-${commune.slug}`;

  return (
    <>
      <JsonLd
        data={[
          getLocalBusinessSchema({
            url: `${BUSINESS.domain}${path}`,
            areaServed: [commune.name],
          }),
          getBreadcrumbSchema([
            { name: "Accueil", path: "/" },
            { name: `Taxi ${commune.name}`, path },
          ]),
        ]}
      />

      <PageHero
        eyebrow={`Zone desservie · ${commune.area}`}
        h1={`Taxi ${commune.name} — Réservation avec Taxi Oyonnax`}
        subtitle={`${BUSINESS.name} dessert ${commune.name} (${commune.postalCode}), ${commune.areaDetail}, à environ ${commune.distanceKm} km d'Oyonnax (${commune.driveMin} min de route). Transport médical conventionné CPAM, gares et aéroports, Berline ou Van, disponible ${BUSINESS.openingHoursShort.toLowerCase()}.`}
        breadcrumbs={[
          { name: "Accueil", href: "/" },
          { name: `Taxi ${commune.name}`, href: path },
        ]}
      />

      <Section title={`Nos services de taxi à ${commune.name}`}>
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            {
              title: "Transport médical CPAM",
              text: "Taxi conventionné pour vos rendez-vous médicaux, dialyses, radiothérapies et sorties d'hospitalisation, sur prescription.",
              href: "/taxi-conventionne-oyonnax",
            },
            {
              title: "Gares & aéroports",
              text: "Transferts en Berline ou en Van vers les gares TGV, l'aéroport de Genève et l'aéroport Lyon-Saint Exupéry.",
              href: "/taxi-van-oyonnax",
            },
            {
              title: "Trajets du quotidien",
              text: "Déplacements professionnels, rendez-vous, sorties : réservation immédiate ou à l'avance.",
              href: "/reservation",
            },
          ].map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="rounded-2xl border border-border-subtle bg-surface p-5 transition hover:border-brand"
            >
              <h3 className="text-base font-bold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm text-foreground/70">{item.text}</p>
            </Link>
          ))}
        </div>
      </Section>

      <VehiclesSection />

      <Section title={`Pourquoi choisir Taxi Oyonnax à ${commune.name} ?`} muted>
        <ul className="grid gap-3 sm:grid-cols-2">
          {[
            `Basé à Oyonnax, à ${commune.distanceKm} km de ${commune.name} : prise en charge rapide.`,
            `Licence de taxi ${BUSINESS.license} (${BUSINESS.licenseAuthority}).`,
            "Conventionnement CPAM pour le transport de patients assis (VSL / taxi).",
            "Réservation simple par téléphone ou WhatsApp, confirmation immédiate.",
            "Berline ou Van selon le nombre de passagers et de bagages.",
            `Disponibilité ${BUSINESS.openingHoursShort.toLowerCase()}, y compris jours fériés.`,
          ].map((point) => (
            <li key={point} className="flex gap-3 rounded-xl bg-surface p-4 text-sm text-foreground/80">
              <span aria-hidden="true" className="text-brand">✓</span>
              {point}
            </li>
          ))}
        </ul>
      </Section>

      <FAQSection
        items={[
          {
            question: `Combien de temps pour qu'un taxi arrive à ${commune.name} ?`,
            answer: `Notre base se trouve à Oyonnax, à environ ${commune.distanceKm} km de ${commune.name} (${commune.driveMin} minutes de route). En général, le chauffeur peut être sur place rapidement après votre appel, selon le trafic et la disponibilité.`,
          },
          {
            question: `Le taxi est-il conventionné CPAM pour un trajet depuis ${commune.name} ?`,
            answer: "Oui. Taxi Oyonnax est conventionné avec l'Assurance Maladie pour le transport de patients assis (VSL) vers les hôpitaux et centres de soins, sur présentation d'une prescription médicale de transport.",
          },
          {
            question: "Peut-on réserver un trajet vers la gare ou l'aéroport à l'avance ?",
            answer: "Oui, nous recommandons de réserver votre transfert gare ou aéroport à l'avance par téléphone ou WhatsApp afin de garantir votre créneau, en particulier pour les vols et TGV matinaux.",
          },
        ]}
      />

      <CTASection
        title={`Un taxi à ${commune.name} en quelques minutes`}
        subtitle={`Appelez Taxi Oyonnax ou écrivez-nous sur WhatsApp pour une prise en charge rapide à ${commune.name} et dans tout le Haut-Bugey.`}
      />
    </>
  );
}
