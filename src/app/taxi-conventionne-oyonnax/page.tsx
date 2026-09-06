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
  title: "Taxi conventionné CPAM à Oyonnax | VSL Médical",
  description:
    "Taxi Oyonnax, taxi conventionné CPAM (VSL) : transport médical assis vers les hôpitaux sur prescription. Disponible 24h/24. Appelez maintenant.",
  path: "/taxi-conventionne-oyonnax",
});

export default function Page() {
  const path = "/taxi-conventionne-oyonnax";

  return (
    <>
      <JsonLd
        data={[
          getMedicalBusinessSchema({ url: `${BUSINESS.domain}${path}` }),
          getBreadcrumbSchema([
            { name: "Accueil", path: "/" },
            { name: "Taxi conventionné CPAM", path },
          ]),
        ]}
      />

      <PageHero
        eyebrow="Transport médical conventionné CPAM"
        h1="Taxi conventionné CPAM à Oyonnax — Transport médical VSL"
        subtitle={`${BUSINESS.name} assure le transport de patients assis conventionné avec l'Assurance Maladie vers les hôpitaux et centres de soins depuis Oyonnax, sur prescription médicale.`}
        breadcrumbs={[
          { name: "Accueil", href: "/" },
          { name: "Taxi conventionné CPAM", href: path },
        ]}
      />

      <Section title="Qu'est-ce qu'un taxi conventionné CPAM ?">
        <div className="max-w-3xl space-y-4 text-sm leading-relaxed text-foreground/80">
          <p>
            Un taxi conventionné est un véhicule dont le chauffeur a signé une convention avec
            l&apos;Assurance Maladie, l&apos;autorisant à transporter des patients dans le cadre
            d&apos;un transport sanitaire assis (VSL). Ce type de trajet peut être pris en charge,
            en totalité ou en partie, par la CPAM, sur présentation d&apos;une prescription
            médicale de transport (PMT) établie par votre médecin.
          </p>
          <p>
            {BUSINESS.name} est un chauffeur professionnel expérimenté qui intervient pour les
            rendez-vous médicaux, sorties d&apos;hospitalisation, séances de traitement (dialyse,
            radiothérapie) et consultations spécialisées, à Oyonnax et dans tout le Haut-Bugey.
          </p>
        </div>
      </Section>

      <Section title="Nos destinations hospitalières" muted>
        <div className="grid gap-4 sm:grid-cols-2">
          {medicalLinks
            .filter((item) => item.slug !== "taxi-conventionne-oyonnax")
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

      <Section title="Qui peut bénéficier du transport assis conventionné ?">
        <ul className="grid gap-3 sm:grid-cols-2">
          {[
            "Patients en affection longue durée (ALD) sur prescription médicale",
            "Patients à mobilité réduite ne pouvant utiliser les transports en commun",
            "Sorties d'hospitalisation nécessitant un accompagnement",
            "Séances régulières : dialyse, radiothérapie, rééducation",
            "Consultations spécialisées avec prescription de transport",
            "Transport vers un établissement hors du Haut-Bugey si prescrit",
          ].map((point) => (
            <li key={point} className="flex gap-3 rounded-xl bg-surface-muted p-4 text-sm text-foreground/80">
              <span aria-hidden="true" className="text-medical">✓</span>
              {point}
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Modalités de prise en charge CPAM à Oyonnax" muted>
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <h3 className="text-lg font-bold text-foreground">
              Documents obligatoires (PMT &amp; Attestation)
            </h3>
            <p className="mt-2 text-sm text-foreground/70">
              Avant votre trajet, votre médecin doit établir une prescription médicale de transport
              (PMT) précisant le motif et le mode de transport prescrit, sauf situation
              d&apos;urgence. Le jour même, munissez-vous de cette prescription, de votre carte
              Vitale à jour ou de votre attestation de droits, ainsi que d&apos;une pièce
              d&apos;identité. Ces documents nous permettent d&apos;établir la facturation
              directement auprès de l&apos;Assurance Maladie, sans avance de frais de votre part
              dans la majorité des situations.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-foreground">
              Tiers payant et prise en charge à 100&nbsp;%
            </h3>
            <p className="mt-2 text-sm text-foreground/70">
              Grâce au tiers payant, {BUSINESS.name} facture directement votre trajet à
              l&apos;Assurance Maladie : vous n&apos;avancez pas les frais de transport. Le taux de
              remboursement dépend de votre situation personnelle : les patients en affection
              longue durée (ALD) ou hospitalisés bénéficient généralement d&apos;une prise en
              charge à 100&nbsp;%, tandis qu&apos;un ticket modérateur peut rester à votre charge
              dans d&apos;autres cas, précisé sur votre prescription médicale de transport.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Centres médicaux et hôpitaux desservis">
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-border-subtle bg-surface p-5">
            <h3 className="text-base font-bold text-foreground">
              Établissements locaux (CH Haut-Bugey, Clinique du Val d&apos;Ain)
            </h3>
            <p className="mt-2 text-sm text-foreground/70">
              Pour vos rendez-vous de proximité, nous assurons les trajets vers le Centre
              Hospitalier Haut-Bugey à Oyonnax et vers la Clinique du Val d&apos;Ain, ainsi que vers
              les cabinets de spécialistes et laboratoires du secteur. Ces trajets courts
              représentent une part importante de nos transports conventionnés au quotidien.
            </p>
          </div>
          <div className="rounded-2xl border border-border-subtle bg-surface p-5">
            <h3 className="text-base font-bold text-foreground">
              Centres de référence régionaux (HCL Lyon, CH Bourg-en-Bresse)
            </h3>
            <p className="mt-2 text-sm text-foreground/70">
              Pour les consultations spécialisées ou les hospitalisations nécessitant un plateau
              technique plus important, nous assurons également les trajets longue distance vers
              les Hospices Civils de Lyon (HCL), le Centre Hospitalier de Bourg-en-Bresse (Fleyriat)
              et le Centre Hospitalier Annecy Genevois, avec une organisation adaptée au temps de
              trajet et à l&apos;horaire de votre rendez-vous.
            </p>
          </div>
        </div>
      </Section>

      <FAQSection
        title="Questions fréquentes sur le transport médical VSL"
        items={[
          {
            question: "Comment obtenir la prise en charge de mon transport par la CPAM ?",
            answer:
              "Votre médecin doit établir une prescription médicale de transport (PMT) avant le trajet, sauf urgence. Présentez cette prescription, votre carte Vitale et votre pièce d'identité lors de la prise en charge.",
          },
          {
            question: "Le transport conventionné est-il gratuit pour le patient ?",
            answer:
              "La prise en charge dépend de votre situation (ALD, taux de remboursement, éventuel ticket modérateur). Ces conditions figurent sur votre prescription médicale de transport.",
          },
          {
            question: "Quels établissements desservez-vous depuis Oyonnax ?",
            answer:
              "Nous assurons notamment les trajets vers le Centre Hospitalier Haut-Bugey, les hôpitaux de Lyon, le Centre Hospitalier de Bourg-en-Bresse, le Centre Hospitalier Annecy Genevois, ainsi que les séances de dialyse et de radiothérapie.",
          },
          {
            question: "Peut-on réserver un transport médical en urgence ?",
            answer:
              "Nous faisons notre possible pour répondre rapidement à toute demande, y compris non planifiée. Appelez-nous directement pour connaître notre disponibilité immédiate.",
          },
        ]}
      />

      <CTASection
        title="Organisons votre transport médical"
        subtitle="Munissez-vous de votre prescription médicale de transport et contactez Taxi Oyonnax pour planifier votre trajet conventionné CPAM."
      />
    </>
  );
}
