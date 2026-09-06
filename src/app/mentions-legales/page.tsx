import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import { buildMetadata } from "@/lib/seo";
import { BUSINESS, LEGAL_ENTITY } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "Mentions légales | Taxi Oyonnax",
  description:
    "Mentions légales du site Taxi Oyonnax : éditeur, hébergement, propriété intellectuelle et protection des données personnelles.",
  path: "/mentions-legales",
});

export default function Page() {
  return (
    <>
      <PageHero
        h1="Mentions légales"
        subtitle="Informations légales relatives à l'édition et à l'hébergement du site taxioyonnax.fr."
        breadcrumbs={[
          { name: "Accueil", href: "/" },
          { name: "Mentions légales", href: "/mentions-legales" },
        ]}
        showActions={false}
      />

      <Section>
        <div className="max-w-3xl space-y-8 text-sm leading-relaxed text-foreground/80">
          <div>
            <h2 className="mb-2 text-lg font-bold text-foreground">1. Éditeur du site</h2>
            <p>
              Le site taxioyonnax.fr est édité par la société {LEGAL_ENTITY.companyName},
              entreprise de transport public de personnes par taxi.
            </p>
            <ul className="mt-3 space-y-1">
              <li>Forme juridique : {LEGAL_ENTITY.legalForm}</li>
              <li>Siège social : {LEGAL_ENTITY.registeredAddress}</li>
              <li>SIREN : {LEGAL_ENTITY.siren}</li>
              <li>SIRET : {LEGAL_ENTITY.siret}</li>
              <li>Immatriculation : {LEGAL_ENTITY.rcs}</li>
              <li>N° TVA intracommunautaire : {LEGAL_ENTITY.vat}</li>
              <li>Code NAF/APE : {LEGAL_ENTITY.nafCode} (Transports de voyageurs par taxis)</li>
              <li>Directeur de la publication : {LEGAL_ENTITY.director}</li>
              <li>Téléphone : {BUSINESS.phoneDisplay}</li>
              <li>E-mail : contact via le site / {BUSINESS.email}</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-bold text-foreground">2. Hébergement du site</h2>
            <p>
              Le Site est hébergé par {LEGAL_ENTITY.hostName}, dont le siège est situé au{" "}
              {LEGAL_ENTITY.hostAddress}.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-bold text-foreground">
              3. Activité réglementée
            </h2>
            <p>
              L&apos;activité de transport par taxi est une profession réglementée soumise aux
              dispositions du Code des transports. La société {LEGAL_ENTITY.companyName} exerce
              son activité conformément à la réglementation en vigueur applicable aux entreprises
              de transport public de personnes et aux taxis conventionnés.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-bold text-foreground">4. Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble des contenus présents sur le Site (textes, logo, illustrations,
              structure, arborescence) est protégé au titre du droit d&apos;auteur et reste la
              propriété exclusive de {LEGAL_ENTITY.companyName}, sauf mention contraire. Toute
              reproduction, représentation, modification ou diffusion, totale ou partielle, de ces
              éléments, par quelque procédé que ce soit, sans autorisation écrite préalable, est
              interdite et constitutive de contrefaçon.
            </p>
            <p className="mt-2">
              Le Site peut contenir des liens hypertextes vers des sites tiers (réseaux sociaux,
              partenaires, services de cartographie). {LEGAL_ENTITY.companyName} n&apos;exerce
              aucun contrôle sur le contenu de ces sites et décline toute responsabilité quant à
              leur contenu, leur disponibilité ou leurs pratiques en matière de données
              personnelles.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-bold text-foreground">
              5. Données personnelles et RGPD
            </h2>
            <p>
              Les informations transmises via le téléphone, WhatsApp, e-mail ou tout formulaire de
              contact (nom, coordonnées, adresse de prise en charge, informations relatives à un
              transport médical prescrit) sont collectées par {LEGAL_ENTITY.companyName} et
              utilisées exclusivement pour la gestion de votre réservation et, le cas échéant, la
              facturation à l&apos;Assurance Maladie dans le cadre d&apos;un transport
              conventionné. Ces données ne sont ni vendues, ni cédées à des tiers à des fins
              commerciales et sont conservées pour la durée nécessaire à la gestion de la relation
              commerciale et aux obligations légales et comptables applicables.
            </p>
            <p className="mt-2">
              Conformément au Règlement Général sur la Protection des Données (RGPD — Règlement
              (UE) 2016/679) et à la loi « Informatique et Libertés » du 6 janvier 1978 modifiée,
              vous disposez d&apos;un droit d&apos;accès, de rectification, de suppression, de
              limitation et d&apos;opposition au traitement de vos données personnelles. Vous
              pouvez exercer ces droits en contactant {LEGAL_ENTITY.companyName} à l&apos;adresse{" "}
              {BUSINESS.email} ou par téléphone au {BUSINESS.phoneDisplay}. Vous disposez également
              du droit d&apos;introduire une réclamation auprès de la Commission Nationale de
              l&apos;Informatique et des Libertés (CNIL).
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-bold text-foreground">6. Cookies</h2>
            <p>
              Le Site peut utiliser des cookies techniques strictement nécessaires à son bon
              fonctionnement (navigation, mémorisation de préférences d&apos;affichage). Aucun
              cookie publicitaire, de mesure d&apos;audience tierce ou de traçage à des fins
              commerciales n&apos;est déposé sans votre consentement préalable, conformément à la
              réglementation applicable.
            </p>
            <p className="mt-2">
              Vous pouvez à tout moment configurer votre navigateur pour refuser l&apos;ensemble
              des cookies ou être averti avant leur dépôt, en modifiant les paramètres de
              confidentialité de votre navigateur internet. Ce réglage peut toutefois affecter
              certaines fonctionnalités d&apos;affichage du Site.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-bold text-foreground">
              7. Limitation de responsabilité
            </h2>
            <p>
              Les informations diffusées sur le Site (tarifs indicatifs, zones desservies, délais
              de trajet, distances) sont données à titre indicatif et peuvent être modifiées sans
              préavis. Elles ne sauraient engager la responsabilité de {LEGAL_ENTITY.companyName}{" "}
              en cas d&apos;erreur, d&apos;omission, ou de conditions de circulation
              exceptionnelles affectant un trajet.
            </p>
            <p className="mt-2">
              De même, la disponibilité du service de taxi peut être affectée par des
              circonstances exceptionnelles indépendantes de la volonté de{" "}
              {LEGAL_ENTITY.companyName} (conditions météorologiques, incidents de circulation,
              cas de force majeure), sans que sa responsabilité puisse être engagée à ce titre.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-bold text-foreground">8. Droit applicable</h2>
            <p>
              Le présent Site et les présentes mentions légales sont soumis au droit français.
              Tout litige relatif à leur interprétation ou à leur exécution relève des
              juridictions françaises compétentes, sauf disposition légale impérative contraire
              applicable aux consommateurs.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
