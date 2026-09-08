import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import { buildMetadata } from "@/lib/seo";
import { BUSINESS } from "@/lib/constants";
import { getBreadcrumbSchema, getMedicalBusinessSchema } from "@/lib/schema";
import { medicalLinks } from "@/lib/data/medical";

export const metadata: Metadata = buildMetadata({
  title: "Taxi TPMR Oyonnax | Transport Fauteuil Roulant",
  description:
    "Taxi Oyonnax, transport PMR en fauteuil roulant : véhicule adapté, chauffeur formé, aide à l'embarquement. Disponible 24h/24, réservez maintenant.",
  path: "/taxi-tpmr-oyonnax",
});

export default function Page() {
  const path = "/taxi-tpmr-oyonnax";

  return (
    <>
      <JsonLd
        data={[
          getMedicalBusinessSchema({
            url: `${BUSINESS.domain}${path}`,
            description:
              "Transport de personnes à mobilité réduite (TPMR) en véhicule adapté, avec aide à l'embarquement, depuis Oyonnax et le Haut-Bugey.",
          }),
          getBreadcrumbSchema([
            { name: "Accueil", path: "/" },
            { name: "Transport PMR", path },
          ]),
        ]}
      />

      <PageHero
        eyebrow="Transport adapté PMR"
        h1="Taxi TPMR à Oyonnax — Transport de Personnes à Mobilité Réduite"
        subtitle={`${BUSINESS.name} propose un service de transport adapté aux personnes à mobilité réduite : prise en charge en fauteuil roulant, aide à l'embarquement et chauffeur formé à l'accompagnement, à Oyonnax et dans tout le Haut-Bugey.`}
        breadcrumbs={[
          { name: "Accueil", href: "/" },
          { name: "Transport PMR", href: path },
        ]}
      />

      <Section title="Notre véhicule adapté TPMR">
        <div className="overflow-hidden rounded-2xl border border-border-subtle bg-surface">
          <div className="relative aspect-[16/9] w-full">
            <Image
              src="/images/taxi-tpmr.avif"
              alt="Véhicule Taxi Oyonnax adapté au transport de personnes à mobilité réduite (TPMR) en fauteuil roulant"
              fill
              sizes="(min-width: 1024px) 1000px, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </Section>

      <Section title="Qu'est-ce que le transport PMR ?" muted>
        <div className="max-w-3xl space-y-4 text-sm leading-relaxed text-foreground/80">
          <p>
            Le transport de personnes à mobilité réduite (TPMR) désigne un service de taxi équipé
            pour prendre en charge les passagers qui ne peuvent pas monter seuls à bord d&apos;un
            véhicule standard : personnes en fauteuil roulant, avec déambulateur, ou présentant des
            difficultés motrices importantes.
          </p>
          <p>
            {BUSINESS.name} met à disposition un véhicule aménagé et un chauffeur formé à
            l&apos;accompagnement, pour un trajet en toute sécurité vers un rendez-vous médical, une
            sortie d&apos;hospitalisation ou tout autre déplacement du quotidien à Oyonnax et dans le
            Haut-Bugey.
          </p>
        </div>
      </Section>

      <Section title="Qui peut bénéficier de ce service ?">
        <ul className="grid gap-3 sm:grid-cols-2">
          {[
            "Personnes se déplaçant en fauteuil roulant, manuel ou électrique",
            "Personnes utilisant un déambulateur ou des cannes anglaises",
            "Personnes âgées à mobilité réduite",
            "Patients en sortie d'hospitalisation nécessitant une aide au transfert",
            "Personnes en situation de handicap moteur temporaire ou permanent",
            "Accompagnement pour rendez-vous médicaux, démarches ou trajets personnels",
          ].map((point) => (
            <li key={point} className="flex gap-3 rounded-xl bg-surface-muted p-4 text-sm text-foreground/80">
              <span aria-hidden="true" className="text-medical">✓</span>
              {point}
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Notre véhicule et nos équipements" muted>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-border-subtle bg-surface p-5">
            <h3 className="text-base font-bold text-foreground">
              Accès et arrimage sécurisés
            </h3>
            <p className="mt-2 text-sm text-foreground/70">
              Notre véhicule est équipé pour accueillir un fauteuil roulant en toute sécurité,
              avec un système d&apos;arrimage adapté et une aide systématique du chauffeur lors de
              l&apos;embarquement et du débarquement.
            </p>
          </div>
          <div className="rounded-2xl border border-border-subtle bg-surface p-5">
            <h3 className="text-base font-bold text-foreground">
              Chauffeur formé à l&apos;accompagnement
            </h3>
            <p className="mt-2 text-sm text-foreground/70">
              Habitué à l&apos;accompagnement de passagers à mobilité réduite, notre chauffeur
              adapte son rythme de conduite et reste disponible pour vous assister à chaque étape
              du trajet, de la prise en charge à la dépose.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Nos autres services médicaux">
        <div className="grid gap-4 sm:grid-cols-2">
          {medicalLinks
            .filter((item) => item.slug !== "taxi-tpmr-oyonnax")
            .map((item) => (
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
        title="Questions fréquentes sur le transport PMR"
        items={[
          {
            question: "Le transport PMR peut-il être pris en charge par la CPAM ?",
            answer:
              "Sur prescription médicale de transport (PMT) établie par votre médecin, votre trajet PMR peut être pris en charge par l'Assurance Maladie, dans les mêmes conditions qu'un transport conventionné classique. Consultez notre page dédiée au taxi conventionné CPAM pour le détail des démarches.",
          },
          {
            question: "Votre véhicule accepte-t-il tous les types de fauteuils roulants ?",
            answer:
              "Notre véhicule est adapté aux fauteuils roulants manuels et électriques standards. Pour un fauteuil de grande taille ou un équipement particulier, précisez-le lors de la réservation afin que nous confirmions la faisabilité du trajet.",
          },
          {
            question: "Le chauffeur aide-t-il à l'embarquement et au débarquement ?",
            answer:
              "Oui, notre chauffeur assiste systématiquement le passager lors de la montée et de la descente du véhicule, ainsi que pour l'arrimage sécurisé du fauteuil roulant.",
          },
          {
            question: "Peut-on réserver un trajet PMR en urgence ?",
            answer:
              "Nous faisons notre possible pour répondre rapidement à toute demande, y compris non planifiée. Appelez-nous directement pour connaître notre disponibilité immédiate.",
          },
        ]}
      />

      <CTASection
        title="Réservez votre transport PMR"
        subtitle="Appelez-nous ou écrivez sur WhatsApp en précisant votre besoin : nous organisons votre trajet en véhicule adapté à Oyonnax et dans le Haut-Bugey."
      />
    </>
  );
}
