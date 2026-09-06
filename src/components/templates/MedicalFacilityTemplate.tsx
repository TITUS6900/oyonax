import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import FAQSection, { type FaqItem } from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import { BUSINESS } from "@/lib/constants";
import { getBreadcrumbSchema, getMedicalBusinessSchema } from "@/lib/schema";

export type MedicalFacility = {
  slug: string;
  facilityName: string;
  shortName: string;
  address: string;
  distanceKm: number;
  driveMin: number;
  intro: string;
  highlights: string[];
  faq: FaqItem[];
};

export default function MedicalFacilityTemplate({ facility }: { facility: MedicalFacility }) {
  const path = `/${facility.slug}`;

  return (
    <>
      <JsonLd
        data={[
          getMedicalBusinessSchema({
            url: `${BUSINESS.domain}${path}`,
            description: `Transport de patients assis conventionné CPAM (taxi/VSL) entre Oyonnax et ${facility.facilityName}, sur prescription médicale.`,
          }),
          getBreadcrumbSchema([
            { name: "Accueil", path: "/" },
            { name: "Taxi conventionné CPAM", path: "/taxi-conventionne-oyonnax" },
            { name: facility.shortName, path },
          ]),
        ]}
      />

      <PageHero
        eyebrow="Transport médical conventionné CPAM"
        h1={`Taxi conventionné pour ${facility.facilityName}`}
        subtitle={facility.intro}
        breadcrumbs={[
          { name: "Accueil", href: "/" },
          { name: "Taxi conventionné CPAM", href: "/taxi-conventionne-oyonnax" },
          { name: facility.shortName, href: path },
        ]}
      />

      <Section title="Votre trajet Oyonnax ↔ établissement de soins">
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-border-subtle bg-surface p-5">
            <h3 className="text-sm font-bold uppercase tracking-wide text-medical">Destination</h3>
            <p className="mt-2 text-base font-semibold text-foreground">{facility.facilityName}</p>
            <p className="text-sm text-foreground/70">{facility.address}</p>
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

      <Section title="Ce que couvre notre service" muted>
        <ul className="grid gap-3 sm:grid-cols-2">
          {facility.highlights.map((point) => (
            <li key={point} className="flex gap-3 rounded-xl bg-surface p-4 text-sm text-foreground/80">
              <span aria-hidden="true" className="text-medical">✓</span>
              {point}
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Comment se déroule le transport conventionné ?">
        <ol className="grid gap-4 sm:grid-cols-3">
          {[
            {
              step: "1. Prescription médicale",
              text: "Votre médecin établit une prescription médicale de transport (PMT) précisant le motif du trajet.",
            },
            {
              step: "2. Réservation",
              text: "Vous nous contactez par téléphone ou WhatsApp en précisant l'heure de rendez-vous et l'adresse de prise en charge.",
            },
            {
              step: "3. Trajet aller-retour",
              text: "Nous vous conduisons à votre rendez-vous et assurons, si besoin, le retour à votre domicile.",
            },
          ].map((item) => (
            <li key={item.step} className="rounded-2xl border border-border-subtle bg-surface p-5">
              <p className="text-sm font-bold text-brand">{item.step}</p>
              <p className="mt-2 text-sm text-foreground/70">{item.text}</p>
            </li>
          ))}
        </ol>
        <p className="mt-6 text-sm text-foreground/60">
          Besoin d&apos;informations générales sur le conventionnement CPAM ?{" "}
          <Link href="/taxi-conventionne-oyonnax" className="text-brand hover:underline">
            Consultez notre page dédiée au taxi conventionné à Oyonnax
          </Link>
          .
        </p>
      </Section>

      <FAQSection items={facility.faq} />

      <CTASection
        title={`Réservez votre taxi conventionné vers ${facility.shortName}`}
        subtitle="Munissez-vous de votre prescription médicale de transport et contactez-nous pour organiser votre trajet."
      />
    </>
  );
}
