import Link from "next/link";
import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import VehiclesSection from "@/components/VehiclesSection";
import ZoneGrid from "@/components/ZoneGrid";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import { buildMetadata } from "@/lib/seo";
import { BUSINESS } from "@/lib/constants";
import { getLocalBusinessSchema, getMedicalBusinessSchema } from "@/lib/schema";
import { medicalLinks } from "@/lib/data/medical";
import { transportLinks } from "@/lib/data/transport";

export const metadata: Metadata = buildMetadata({
  title: "Taxi Oyonnax | Taxi conventionné CPAM & Van/Berline",
  description:
    "Taxi conventionné CPAM à Oyonnax (01100) : VSL médical, Van & Berline pour gares, aéroports Genève/Lyon. Dispo 24h/24. Appelez !",
  path: "/",
});

export default function Home() {
  return (
    <>
      <JsonLd data={[getMedicalBusinessSchema(), getLocalBusinessSchema()]} />

      <PageHero
        eyebrow="Oyonnax (01100) · Haut-Bugey"
        h1="Taxi Oyonnax — Taxi conventionné CPAM, Van & Berline VIP"
        subtitle="Chauffeur de taxi basé à Oyonnax, spécialisé dans le transport médical assis conventionné CPAM (VSL) et les transferts en Berline ou en Van vers les gares et les aéroports de Genève et Lyon-Saint Exupéry. Disponible 24h/24 et 7j/7."
        breadcrumbs={[{ name: "Accueil", href: "/" }]}
      />

      <Section id="destinations" title="Nos deux spécialités">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border-subtle bg-surface p-6">
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-medical-light text-medical">
              +
            </div>
            <h3 className="text-lg font-bold text-foreground">
              Transport médical conventionné CPAM &amp; VSL
            </h3>
            <p className="mt-2 text-sm text-foreground/70">
              Sur prescription médicale, nous assurons vos trajets vers les centres hospitaliers du
              Haut-Bugey, de Lyon, Bourg-en-Bresse et Annecy, ainsi que les séances de dialyse et de
              radiothérapie. Prise en charge CPAM du transport de patients assis.
            </p>
            <ul className="mt-4 space-y-1 text-sm text-foreground/70">
              {medicalLinks.map((item) => (
                <li key={item.slug}>
                  <Link href={`/${item.slug}`} className="text-brand hover:underline">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-border-subtle bg-surface p-6">
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-light/20 text-brand">
              ✈
            </div>
            <h3 className="text-lg font-bold text-foreground">
              Van &amp; Berline VIP — Gares &amp; Aéroports
            </h3>
            <p className="mt-2 text-sm text-foreground/70">
              Départ ou arrivée à l&apos;aéroport de Genève, l&apos;aéroport Lyon-Saint Exupéry, la
              gare TGV de Bellegarde ou la gare de Bourg-en-Bresse : réservez votre trajet à
              l&apos;heure, en Berline (1-4 pers.) ou en Van (1-8 pers.).
            </p>
            <ul className="mt-4 space-y-1 text-sm text-foreground/70">
              <li>
                <Link href="/taxi-van-oyonnax" className="text-brand hover:underline">
                  Van &amp; Berline VIP
                </Link>
              </li>
              {transportLinks.map((item) => (
                <li key={item.slug}>
                  <Link href={`/${item.slug}`} className="text-brand hover:underline">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <VehiclesSection />

      <Section title="Pourquoi choisir Taxi Oyonnax ?" muted>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            `Licence de taxi ${BUSINESS.license} — ${BUSINESS.licenseAuthority}`,
            "Conventionné CPAM pour le transport de patients assis (VSL)",
            "Disponible 24h/24, 7j/7, y compris jours fériés",
            "Réservation immédiate par téléphone ou WhatsApp",
            "Berline ou Van selon vos besoins (passagers, bagages)",
            "Connaissance fine du Haut-Bugey et des trajets longue distance",
          ].map((point) => (
            <li key={point} className="flex gap-3 rounded-xl bg-surface p-4 text-sm text-foreground/80">
              <span aria-hidden="true" className="text-brand">✓</span>
              {point}
            </li>
          ))}
        </ul>
      </Section>

      <Section id="communes-desservies" title="Zones desservies dans le Haut-Bugey">
        <p className="mb-6 max-w-2xl text-sm text-foreground/70">
          Basé à Oyonnax, {BUSINESS.name} intervient rapidement dans toutes les communes de
          l&apos;agglomération et du Haut-Bugey.
        </p>
        <ZoneGrid />
      </Section>

      <FAQSection
        items={[
          {
            question: "Comment réserver un taxi conventionné CPAM à Oyonnax ?",
            answer:
              "Appelez-nous directement ou écrivez sur WhatsApp avec votre prescription médicale de transport. Nous organisons votre trajet aller-retour vers l'hôpital ou le centre de soins concerné.",
          },
          {
            question: "Taxi Oyonnax dessert-il l'aéroport de Genève et l'aéroport Lyon-Saint Exupéry ?",
            answer:
              "Oui, nous assurons des transferts en Berline ou en Van vers l'aéroport de Genève et l'aéroport Lyon-Saint Exupéry depuis Oyonnax et tout le Haut-Bugey, avec une réservation à l'avance recommandée.",
          },
          {
            question: "Quelle est la différence entre la Berline et le Van ?",
            answer:
              "La Berline accueille jusqu'à 4 personnes, idéale pour les trajets individuels et le transport médical. Le Van accueille jusqu'à 8 personnes et convient aux familles, groupes et bagages volumineux.",
          },
          {
            question: "Quels moyens de paiement acceptez-vous ?",
            answer:
              "Nous acceptons les principaux moyens de paiement ainsi que la prise en charge directe de l'Assurance Maladie pour les transports médicaux conventionnés, sous réserve d'éligibilité.",
          },
        ]}
      />

      <CTASection />
    </>
  );
}
