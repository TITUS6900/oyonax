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

      <Section title={`Trajets fréquents depuis ${commune.name}`}>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-border-subtle bg-surface p-5">
            <h3 className="text-base font-bold text-foreground">
              Vers les hôpitaux et centres de soins
            </h3>
            <p className="mt-2 text-sm text-foreground/70">
              Depuis {commune.name}, nous organisons vos trajets conventionnés CPAM vers le Centre
              Hospitalier Haut-Bugey à Oyonnax ainsi que vers les centres de référence régionaux
              (Hospices Civils de Lyon, Centre Hospitalier de Bourg-en-Bresse, Centre Hospitalier
              Annecy Genevois), sur présentation de votre prescription médicale de transport. Le
              trajet jusqu&apos;à notre base d&apos;Oyonnax ne rallonge que très peu votre parcours,
              puisque nous venons vous chercher directement à votre adresse.
            </p>
          </div>
          <div className="rounded-2xl border border-border-subtle bg-surface p-5">
            <h3 className="text-base font-bold text-foreground">Vers les gares et aéroports</h3>
            <p className="mt-2 text-sm text-foreground/70">
              Pour vos départs en train ou en avion, nous assurons également les transferts depuis{" "}
              {commune.name} vers la gare TGV de Bellegarde-sur-Valserine, la gare de
              Bourg-en-Bresse, ainsi que les aéroports de Genève et de Lyon-Saint Exupéry, en
              Berline ou en Van selon le nombre de passagers et de bagages. Une réservation à
              l&apos;avance est recommandée pour ces trajets plus longs.
            </p>
          </div>
        </div>
      </Section>

      <Section title={`Pourquoi choisir Taxi Oyonnax à ${commune.name} ?`} muted>
        <p className="mb-4 max-w-2xl text-sm text-foreground/70">
          Habitants de {commune.name}, vous bénéficiez d&apos;un service de taxi de proximité,
          réactif et transparent sur ses tarifs, aussi bien pour un déplacement du quotidien que
          pour un trajet médical conventionné ou un départ vers une gare ou un aéroport.
        </p>
        <ul className="grid gap-3 sm:grid-cols-2">
          {[
            `Basé à Oyonnax, à ${commune.distanceKm} km de ${commune.name} : prise en charge rapide.`,
            "Chauffeur professionnel expérimenté & véhicules récents",
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
          {
            question: `Faut-il réserver longtemps à l'avance pour un trajet depuis ${commune.name} ?`,
            answer: "Pour une course immédiate, un simple appel suffit généralement. Pour un rendez-vous médical, une gare ou un aéroport, nous conseillons de réserver la veille afin de garantir la disponibilité du véhicule le plus adapté (Berline ou Van).",
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
