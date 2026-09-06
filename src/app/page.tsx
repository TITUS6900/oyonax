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
  title: "Taxi Oyonnax | Taxi conventionné CPAM, Van & Berline VIP",
  description:
    "Taxi conventionné CPAM à Oyonnax (01100) : VSL, Van & Berline pour gares, aéroports Genève/Lyon. Dispo 24h/24. Réservez par téléphone ou WhatsApp !",
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
            "Chauffeur professionnel expérimenté & véhicules récents",
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

      <Section id="communes-desservies" title="Communes desservies dans le Haut-Bugey">
        <p className="mb-6 max-w-3xl text-sm text-foreground/70">
          Basé à Oyonnax, {BUSINESS.name} intervient rapidement dans toutes les communes de
          l&apos;agglomération et du Haut-Bugey, avec un délai d&apos;intervention court quelle
          que soit votre commune de résidence.
        </p>
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <h3 className="text-lg font-bold text-foreground">Oyonnax &amp; proximité</h3>
            <p className="mt-2 text-sm text-foreground/70">
              Les communes limitrophes d&apos;Oyonnax —{" "}
              <Link href="/taxi-bellignat" className="text-brand hover:underline">
                Bellignat
              </Link>
              ,{" "}
              <Link href="/taxi-arbent" className="text-brand hover:underline">
                Arbent
              </Link>{" "}
              et{" "}
              <Link href="/taxi-groissiat" className="text-brand hover:underline">
                Groissiat
              </Link>{" "}
              — sont à quelques minutes seulement de notre base. Cette proximité nous permet
              d&apos;assurer une prise en charge quasi immédiate, que ce soit pour un aller-retour
              conventionné vers un centre de soins, une course de tous les jours ou un départ
              programmé vers une gare ou un aéroport. Ces communes forment le cœur de
              l&apos;agglomération oyonnaxienne, historiquement liée à l&apos;industrie de la
              plasturgie, et concentrent une part importante de nos trajets quotidiens.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-foreground">Bassin de Nantua</h3>
            <p className="mt-2 text-sm text-foreground/70">
              En direction du lac de Nantua, nous desservons également{" "}
              <Link href="/taxi-montreal-la-cluse" className="text-brand hover:underline">
                Montréal-la-Cluse
              </Link>{" "}
              et{" "}
              <Link href="/taxi-izernore" className="text-brand hover:underline">
                Izernore
              </Link>
              , un peu plus excentrées mais parfaitement intégrées à notre zone d&apos;intervention
              habituelle. Ce secteur, au pied du massif du Jura, concentre lui aussi des demandes
              régulières de transport médical assis ainsi que des trajets vers Nantua, Bourg-en-Bresse
              ou les gares environnantes. Notre tarification reste transparente quelle que soit la
              distance parcourue depuis Oyonnax.
            </p>
          </div>
        </div>
        <div className="mt-8">
          <ZoneGrid />
        </div>
      </Section>

      <Section title="Principales liaisons & gares TGV" muted>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-border-subtle bg-surface p-5">
            <h3 className="text-lg font-bold text-foreground">
              Transferts Aéroports (Genève, Lyon)
            </h3>
            <p className="mt-2 text-sm text-foreground/70">
              Pour vos départs ou arrivées de vol, nous assurons des liaisons directes depuis
              Oyonnax vers l&apos;
              <Link href="/taxi-oyonnax-aeroport-geneve" className="text-brand hover:underline">
                aéroport de Genève
              </Link>{" "}
              et vers l&apos;
              <Link
                href="/taxi-oyonnax-aeroport-lyon-st-exupery"
                className="text-brand hover:underline"
              >
                aéroport Lyon-Saint Exupéry
              </Link>
              . Le choix du véhicule (Berline ou Van) dépend du nombre de passagers et de
              bagages : nous vous conseillons au moment de la réservation. Sur ces trajets plus
              longs, nous suivons l&apos;horaire de votre vol afin d&apos;ajuster l&apos;heure de
              prise en charge en cas de retard, à l&apos;aller comme au retour.
            </p>
          </div>
          <div className="rounded-2xl border border-border-subtle bg-surface p-5">
            <h3 className="text-lg font-bold text-foreground">
              Liaisons Gares (Bellegarde TGV, Nurieux, Part-Dieu)
            </h3>
            <p className="mt-2 text-sm text-foreground/70">
              Que vous partiez de la{" "}
              <Link href="/taxi-oyonnax-gare-bellegarde-tgv" className="text-brand hover:underline">
                gare TGV de Bellegarde-sur-Valserine
              </Link>
              , de la petite gare TER de Nurieux-Volognat ou que vous rejoigniez directement Lyon
              Part-Dieu pour une correspondance grande ligne, nous organisons votre trajet en
              tenant compte de l&apos;horaire de votre train. Une marge de sécurité est calculée
              systématiquement pour les correspondances serrées, et nous assurons également votre
              retour à l&apos;arrivée si vous nous communiquez votre numéro de train.
            </p>
          </div>
        </div>
      </Section>

      <FAQSection
        title="Foire aux questions sur notre service de taxi"
        items={[
          {
            question: "Peut-on réserver un taxi à Oyonnax 24h/24 et 7j/7 ?",
            answer:
              "Oui, Taxi Oyonnax est disponible en permanence, y compris la nuit, le dimanche et les jours fériés. Pour une course immédiate, appelez-nous directement ; pour un transfert programmé (gare, aéroport, rendez-vous médical), nous recommandons de réserver la veille afin de garantir votre créneau.",
          },
          {
            question: "Peut-on payer directement à bord du taxi ?",
            answer:
              "Oui, nous acceptons le paiement à bord par carte bancaire ou en espèces pour vos courses classiques. Pour les trajets médicaux conventionnés CPAM, la facturation peut être adressée directement à l'Assurance Maladie en tiers payant, sur présentation de votre prescription médicale de transport.",
          },
          {
            question: "Comment fonctionne le transport CPAM avec Taxi Oyonnax ?",
            answer:
              "Sur prescription médicale de transport (PMT) établie par votre médecin, nous organisons votre trajet aller-retour vers l'hôpital ou le centre de soins concerné, avec une facturation conforme à la convention signée avec l'Assurance Maladie. Consultez notre page dédiée au taxi conventionné CPAM à Oyonnax pour le détail des démarches.",
          },
          {
            question: "Puis-je transporter des bagages volumineux ou du matériel médical ?",
            answer:
              "Oui, notre Van VIP (1 à 8 personnes) dispose d'un volume de coffre adapté aux bagages volumineux, sacs de ski ou équipements médicaux (fauteuil pliant, déambulateur). Précisez votre besoin lors de la réservation afin que nous vous proposions le véhicule le plus adapté, Berline ou Van.",
          },
        ]}
      />

      <CTASection />
    </>
  );
}
