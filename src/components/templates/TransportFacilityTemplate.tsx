import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import VehiclesSection from "@/components/VehiclesSection";
import FAQSection, { type FaqItem } from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import { getBreadcrumbSchema } from "@/lib/schema";

export type TransportFacility = {
  slug: string;
  destinationName: string;
  shortName: string;
  location: string;
  distanceKm: number;
  driveMin: number;
  intro: string;
  highlights: string[];
  faq: FaqItem[];
};

/**
 * Gabarit des pages Gares / Aéroports / Stations de ski. La règle "médias
 * payants" impose l'affichage des DEUX véhicules (Berline 1-4 / Van 1-8) sur
 * ces pages : VehiclesSection est donc toujours rendu, sans variante.
 */
export default function TransportFacilityTemplate({ facility }: { facility: TransportFacility }) {
  const path = `/${facility.slug}`;

  return (
    <>
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Accueil", path: "/" },
          { name: "Van & Berline VIP", path: "/taxi-van-oyonnax" },
          { name: facility.shortName, path },
        ])}
      />

      <PageHero
        eyebrow="Transferts Van & Berline"
        h1={`Taxi Oyonnax ↔ ${facility.destinationName}`}
        subtitle={facility.intro}
        breadcrumbs={[
          { name: "Accueil", href: "/" },
          { name: "Van & Berline VIP", href: "/taxi-van-oyonnax" },
          { name: facility.shortName, href: path },
        ]}
      />

      <Section title="Votre trajet en un coup d'œil">
        <p className="mb-4 max-w-2xl text-sm text-foreground/70">
          Avant de réserver, voici les informations essentielles de votre trajet entre Oyonnax et{" "}
          {facility.destinationName} : destination précise, distance approximative et temps de
          route indicatif, afin d&apos;organiser votre départ en toute sérénité.
        </p>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-border-subtle bg-surface p-5">
            <h3 className="text-sm font-bold uppercase tracking-wide text-medical">Destination</h3>
            <p className="mt-2 text-base font-semibold text-foreground">{facility.destinationName}</p>
            <p className="text-sm text-foreground/70">{facility.location}</p>
          </div>
          <div className="rounded-2xl border border-border-subtle bg-surface p-5">
            <h3 className="text-sm font-bold uppercase tracking-wide text-medical">
              Distance depuis Oyonnax
            </h3>
            <p className="mt-2 text-base font-semibold text-foreground">
              Environ {facility.distanceKm} km
            </p>
            <p className="text-sm text-foreground/70">Soit environ {facility.driveMin} minutes de route</p>
          </div>
        </div>
      </Section>

      <VehiclesSection />

      <Section title="Bagages, confort et options de trajet">
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-border-subtle bg-surface p-5">
            <h3 className="text-base font-bold text-foreground">
              Bagages et équipements volumineux
            </h3>
            <p className="mt-2 text-sm text-foreground/70">
              Pour un aller simple avec une valise standard, notre Berline suffit généralement.
              Dès que le trajet vers {facility.destinationName} implique plusieurs bagages,
              une famille ou du matériel encombrant (sacs de ski, poussette, fauteuil pliant),
              nous vous orientons vers notre Van VIP, dont le volume de coffre est adapté à ce
              type de départ. Précisez simplement le nombre de bagages lors de la réservation
              afin que nous vous proposions le véhicule le plus adapté, quel que soit le nombre
              de personnes qui voyagent avec vous.
            </p>
          </div>
          <div className="rounded-2xl border border-border-subtle bg-surface p-5">
            <h3 className="text-base font-bold text-foreground">
              Confort et options pour votre trajet
            </h3>
            <p className="mt-2 text-sm text-foreground/70">
              Nos véhicules sont entretenus régulièrement pour garantir un trajet confortable
              jusqu&apos;à {facility.destinationName}, quelle que soit la durée du parcours.
              Indiquez-nous à la réservation toute préférence particulière (climatisation,
              itinéraire, arrêt intermédiaire) : nous nous adaptons dans la mesure du possible
              pour que votre déplacement se déroule dans les meilleures conditions, à l&apos;aller
              comme au retour.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Pourquoi réserver votre transfert avec nous ?" muted>
        <p className="mb-4 max-w-2xl text-sm text-foreground/70">
          Au-delà du simple transfert, nous mettons un point d&apos;honneur à vous garantir un
          service fiable et ponctuel pour votre trajet vers {facility.destinationName}, que vous
          soyez pressé par un horaire serré ou que vous souhaitiez simplement voyager en toute
          tranquillité.
        </p>
        <ul className="grid gap-3 sm:grid-cols-2">
          {facility.highlights.map((point) => (
            <li key={point} className="flex gap-3 rounded-xl bg-surface p-4 text-sm text-foreground/80">
              <span aria-hidden="true" className="text-brand">✓</span>
              {point}
            </li>
          ))}
        </ul>
      </Section>

      <FAQSection items={facility.faq} />

      <CTASection
        title={`Réservez votre taxi vers ${facility.shortName}`}
        subtitle="Indiquez-nous votre heure de vol ou de train : nous calculons l'heure de prise en charge idéale."
      />
    </>
  );
}
