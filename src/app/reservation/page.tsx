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
import { CalendarIcon, EmailIcon, PhoneIcon, WhatsAppIcon } from "@/components/icons";

export const metadata: Metadata = buildMetadata({
  title: "Réservation Taxi Oyonnax | Berline & Van",
  description:
    "Réservez votre taxi à Oyonnax en un appel ou sur WhatsApp : Berline ou Van, transport CPAM, gares et aéroports. Confirmation rapide 7j/7.",
  path: "/reservation",
});

export default function Page() {
  const path = "/reservation";

  return (
    <>
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Accueil", path: "/" },
          { name: "Réservation", path },
        ])}
      />

      <PageHero
        eyebrow="Réservation"
        h1="Réservation d'un taxi à Oyonnax"
        subtitle={`${BUSINESS.name} ne dispose pas de réservation en ligne automatisée : chaque course est confirmée directement par notre chauffeur, par téléphone ou WhatsApp, pour garantir un service personnalisé et fiable.`}
        breadcrumbs={[
          { name: "Accueil", href: "/" },
          { name: "Réservation", href: path },
        ]}
      />

      <Section title="Comment réserver votre taxi ?">
        <p className="mb-4 max-w-2xl text-sm text-foreground/70">
          Réserver un taxi à Oyonnax tient en trois étapes simples, que votre trajet soit une
          course immédiate, un transfert programmé vers une gare ou un aéroport, ou un transport
          médical conventionné CPAM nécessitant une prescription médicale de transport.
        </p>
        <ol className="grid gap-4 sm:grid-cols-3">
          {[
            {
              step: "1. Contactez-nous",
              text: "Appelez-nous ou écrivez sur WhatsApp : c'est le moyen le plus rapide d'obtenir une confirmation.",
            },
            {
              step: "2. Précisez votre trajet",
              text: "Adresse de prise en charge, destination, heure souhaitée, nombre de passagers et bagages, Berline ou Van.",
            },
            {
              step: "3. Confirmation immédiate",
              text: "Nous confirmons votre réservation et l'heure de passage du chauffeur, avec un rappel si nécessaire.",
            },
          ].map((item) => (
            <li key={item.step} className="rounded-2xl border border-border-subtle bg-surface p-5">
              <p className="text-sm font-bold text-brand">{item.step}</p>
              <p className="mt-2 text-sm text-foreground/70">{item.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section title="Contactez-nous directement" muted>
        <p className="mb-4 max-w-2xl text-sm text-foreground/70">
          Trois moyens de contact rapides sont à votre disposition : privilégiez l&apos;appel
          téléphonique pour une prise en charge immédiate, WhatsApp pour un échange écrit
          pratique, ou l&apos;e-mail pour une demande d&apos;information sans urgence.
        </p>
        <div className="grid gap-4 sm:grid-cols-3">
          <a
            href={BUSINESS.phoneHref}
            className="flex flex-col items-center gap-2 rounded-2xl bg-brand p-6 text-center text-white shadow-sm transition hover:brightness-110"
          >
            <PhoneIcon className="h-7 w-7" />
            <span className="text-base font-bold">Appeler</span>
            <span className="text-sm text-white/85">{BUSINESS.phoneDisplay}</span>
          </a>
          <a
            href={BUSINESS.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 rounded-2xl bg-[#25D366] p-6 text-center text-white shadow-sm transition hover:brightness-110"
          >
            <WhatsAppIcon className="h-7 w-7" />
            <span className="text-base font-bold">WhatsApp</span>
            <span className="text-sm text-white/85">Réponse rapide</span>
          </a>
          <a
            href={BUSINESS.emailHref}
            className="flex flex-col items-center gap-2 rounded-2xl border border-border-subtle bg-surface p-6 text-center text-foreground/80 shadow-sm transition hover:border-brand"
          >
            <EmailIcon className="h-7 w-7" />
            <span className="text-base font-bold">Envoyer un e-mail</span>
            <span className="text-sm text-foreground/60">Réponse sous 24h</span>
          </a>
        </div>
      </Section>

      <Section title="Informations à préparer avant d'appeler">
        <p className="mb-4 max-w-2xl text-sm text-foreground/70">
          Avoir ces quelques informations sous la main au moment de votre appel nous permet de
          vous répondre plus rapidement et de vous proposer d&apos;emblée le véhicule et le
          créneau les mieux adaptés à votre situation.
        </p>
        <ul className="grid gap-3 sm:grid-cols-2">
          {[
            "Adresse exacte de prise en charge et destination",
            "Date et heure souhaitées (ou immédiat)",
            "Nombre de passagers et de bagages (pour choisir Berline ou Van)",
            "Prescription médicale de transport, si trajet CPAM/VSL",
            "Numéro de vol ou de train, pour un transfert gare/aéroport",
            "Aller simple ou aller-retour",
          ].map((point) => (
            <li key={point} className="flex gap-3 rounded-xl bg-surface p-4 text-sm text-foreground/80">
              <CalendarIcon className="h-5 w-5 shrink-0 text-brand" />
              {point}
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Zones et délais d'intervention">
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-border-subtle bg-surface p-5">
            <h3 className="text-base font-bold text-foreground">
              Dans l&apos;agglomération d&apos;Oyonnax
            </h3>
            <p className="mt-2 text-sm text-foreground/70">
              Pour une course dans Oyonnax et les communes limitrophes (Bellignat, Arbent,
              Groissiat, Martignat, Géovreisset), le délai d&apos;intervention est généralement
              très court après votre appel, sous réserve de disponibilité du véhicule. Un appel
              direct reste le moyen le plus rapide d&apos;obtenir une prise en charge immédiate.
            </p>
          </div>
          <div className="rounded-2xl border border-border-subtle bg-surface p-5">
            <h3 className="text-base font-bold text-foreground">
              Trajets longue distance et programmés
            </h3>
            <p className="mt-2 text-sm text-foreground/70">
              Pour un transfert vers une gare, un aéroport ou un rendez-vous médical conventionné,
              nous recommandons de réserver la veille afin de garantir la disponibilité du
              véhicule le plus adapté (Berline ou Van) et d&apos;organiser précisément l&apos;heure
              de prise en charge en fonction de votre horaire de train, de vol ou de consultation.
            </p>
          </div>
        </div>
      </Section>

      <VehiclesSection muted />

      <FAQSection
        items={[
          {
            question: "Puis-je réserver un taxi en ligne sur ce site ?",
            answer:
              "Non, la réservation se fait exclusivement par téléphone ou WhatsApp afin de garantir une confirmation personnalisée et immédiate avec notre chauffeur.",
          },
          {
            question: "Combien de temps à l'avance dois-je réserver ?",
            answer:
              "Pour un trajet immédiat, appelez-nous directement. Pour un transfert gare, aéroport ou un transport médical programmé, nous recommandons de réserver la veille ou plusieurs jours à l'avance.",
          },
          {
            question: "Puis-je annuler ou modifier ma réservation ?",
            answer:
              "Oui, contactez-nous par téléphone ou WhatsApp dès que possible pour annuler ou modifier l'heure ou le véhicule de votre réservation.",
          },
          {
            question: "Faut-il réserver différemment pour un trajet médical CPAM ?",
            answer:
              "Précisez simplement que le trajet est conventionné et munissez-vous de votre prescription médicale de transport : nous organisons la prise en charge et la facturation en tiers payant de la même façon qu'une réservation classique.",
          },
        ]}
      />

      <CTASection
        title="Prêt à réserver votre taxi ?"
        subtitle="Appelez-nous ou écrivez sur WhatsApp : nous confirmons votre trajet en Berline ou en Van en quelques minutes."
      />
    </>
  );
}
