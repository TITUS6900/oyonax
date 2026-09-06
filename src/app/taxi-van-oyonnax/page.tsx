import Link from "next/link";
import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import VehiclesSection from "@/components/VehiclesSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import { buildMetadata } from "@/lib/seo";
import { BUSINESS } from "@/lib/constants";
import { getBreadcrumbSchema } from "@/lib/schema";
import { transportLinks } from "@/lib/data/transport";

export const metadata: Metadata = buildMetadata({
  title: "Taxi Van Oyonnax | Berline & Van VIP",
  description:
    "Taxi Oyonnax : Berline (1-4 pers.) ou Van VIP (1-8 pers.) pour gares, aéroports et longue distance. Devis rapide, réservez maintenant !",
  path: "/taxi-van-oyonnax",
});

export default function Page() {
  const path = "/taxi-van-oyonnax";

  return (
    <>
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Accueil", path: "/" },
          { name: "Van & Berline VIP", path },
        ])}
      />

      <PageHero
        eyebrow="Van & Berline VIP"
        h1="Taxi Van Oyonnax — Berline & Van VIP pour tous vos trajets"
        subtitle={`${BUSINESS.name} met à votre disposition une Berline Confort (1 à 4 personnes) et un Van VIP (1 à 8 personnes) pour vos transferts gares, aéroports, stations de ski et trajets longue distance, avec ou sans bagages volumineux.`}
        breadcrumbs={[
          { name: "Accueil", href: "/" },
          { name: "Van & Berline VIP", href: path },
        ]}
      />

      <VehiclesSection />

      <Section title="Quel véhicule choisir ?">
        <p className="mb-4 max-w-2xl text-sm text-foreground/70">
          Le choix entre la Berline et le Van dépend principalement du nombre de passagers et du
          volume de bagages à transporter. N&apos;hésitez pas à nous indiquer votre situation lors
          de la réservation : nous vous orientons vers le véhicule le plus adapté, sans surcoût
          caché.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-border-subtle bg-surface p-5">
            <h3 className="text-base font-bold text-foreground">Berline Confort · 1 à 4 pers.</h3>
            <p className="mt-2 text-sm text-foreground/70">
              Idéale pour un trajet individuel, professionnel ou médical CPAM : confort, discrétion
              et conduite en douceur, avec ou sans bagages standards. C&apos;est le véhicule que
              nous utilisons pour la grande majorité de nos transports conventionnés CPAM, où le
              patient voyage seul ou accompagné d&apos;une seule personne.
            </p>
          </div>
          <div className="rounded-2xl border border-border-subtle bg-surface p-5">
            <h3 className="text-base font-bold text-foreground">Van VIP · 1 à 8 pers.</h3>
            <p className="mt-2 text-sm text-foreground/70">
              Parfait pour les familles, les groupes et les bagages volumineux : transferts gares,
              aéroports et départs en station de ski en toute sérénité. Il permet également de
              répartir le coût d&apos;un trajet longue distance entre plusieurs passagers
              voyageant ensemble.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Tarifs et zones de trajet en Van & Berline">
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-border-subtle bg-surface p-5">
            <h3 className="text-base font-bold text-foreground">
              Trajets courts dans le Haut-Bugey
            </h3>
            <p className="mt-2 text-sm text-foreground/70">
              Pour un déplacement dans l&apos;agglomération d&apos;Oyonnax ou vers les communes
              voisines du Haut-Bugey, la Berline suffit dans la grande majorité des cas et permet
              un trajet rapide et économique. La tarification suit le compteur horokilométrique
              réglementaire : nous vous communiquons une estimation avant le départ pour toute
              course un peu plus longue.
            </p>
          </div>
          <div className="rounded-2xl border border-border-subtle bg-surface p-5">
            <h3 className="text-base font-bold text-foreground">
              Trajets longue distance et international
            </h3>
            <p className="mt-2 text-sm text-foreground/70">
              Pour les liaisons vers Lyon, Bourg-en-Bresse, Annecy ou l&apos;aéroport de Genève, le
              Van VIP devient particulièrement intéressant dès que plusieurs passagers voyagent
              ensemble, puisque le coût du trajet se répartit entre les occupants. Contactez-nous
              avant votre départ pour connaître le tarif applicable à votre destination précise.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Nos trajets Van & Berline les plus demandés" muted>
        <div className="grid gap-4 sm:grid-cols-2">
          {transportLinks.map((item) => (
            <Link
              key={item.slug}
              href={`/${item.slug}`}
              className="rounded-2xl border border-border-subtle bg-surface p-5 transition hover:border-brand"
            >
              <h3 className="text-base font-bold text-foreground">{item.label}</h3>
              <p className="mt-2 text-sm text-brand">Voir les détails du trajet →</p>
            </Link>
          ))}
        </div>
      </Section>

      <FAQSection
        items={[
          {
            question: "Comment savoir si je dois réserver la Berline ou le Van ?",
            answer:
              "Indiquez-nous le nombre de passagers et de bagages : nous vous proposons le véhicule le plus adapté, Berline pour 1 à 4 personnes ou Van pour 5 à 8 personnes.",
          },
          {
            question: "Le Van est-il adapté aux départs en station de ski ?",
            answer:
              "Oui, le Van VIP dispose d'un volume de coffre suffisant pour les sacs de ski et housses à skis, en complément des bagages classiques.",
          },
          {
            question: "Peut-on réserver un aller simple ou uniquement un aller-retour ?",
            answer:
              "Les deux formules sont possibles : indiquez-nous votre besoin lors de la réservation par téléphone ou WhatsApp.",
          },
          {
            question: "Le Van peut-il aussi servir pour un trajet médical CPAM ?",
            answer:
              "Oui, si votre situation le justifie (accompagnants, matériel médical), le Van peut être utilisé pour un transport conventionné : précisez votre besoin lors de la prise de rendez-vous.",
          },
        ]}
      />

      <CTASection
        title="Réservez votre Berline ou votre Van"
        subtitle="Appelez-nous ou écrivez sur WhatsApp en précisant votre trajet et le nombre de passagers : nous vous confirmons rapidement votre réservation."
      />
    </>
  );
}
