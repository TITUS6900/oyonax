import Link from "next/link";
import Logo from "@/components/Logo";
import { BUSINESS, COPYRIGHT_NOTICE } from "@/lib/constants";
import { communes } from "@/lib/data/communes";
import { medicalLinks } from "@/lib/data/medical";
import { transportLinks } from "@/lib/data/transport";
import { EmailIcon } from "@/components/icons";

export default function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-surface-muted pb-quickbar">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <Logo className="h-16 w-16" />
            <p className="mt-4 text-sm text-foreground/70">
              Taxi conventionné CPAM, Van &amp; Berline pour vos déplacements à Oyonnax, dans le
              Haut-Bugey et toutes distances vers Lyon et Genève.
            </p>
            <p className="mt-3 text-sm font-semibold">{BUSINESS.phoneDisplay}</p>
            <a
              href={BUSINESS.emailHref}
              className="mt-1 inline-flex items-center gap-1.5 text-sm text-foreground/70 hover:text-brand"
            >
              <EmailIcon className="h-4 w-4" />
              Envoyer un e-mail
            </a>
            <p className="mt-1 text-sm text-foreground/70">{BUSINESS.openingHoursShort}</p>
          </div>

          <nav aria-label="Transport médical">
            <p className="text-sm font-bold uppercase tracking-wide text-brand">
              Transport médical CPAM
            </p>
            <ul className="mt-3 space-y-2 text-sm text-foreground/70">
              {medicalLinks.map((item) => (
                <li key={item.slug}>
                  <Link href={`/${item.slug}`} className="hover:text-brand">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Gares, aéroports et Van">
            <p className="text-sm font-bold uppercase tracking-wide text-brand">
              Van, Gares &amp; Aéroports
            </p>
            <ul className="mt-3 space-y-2 text-sm text-foreground/70">
              <li>
                <Link href="/taxi-van-oyonnax" className="hover:text-brand">
                  Van &amp; Berline VIP
                </Link>
              </li>
              {transportLinks.map((item) => (
                <li key={item.slug}>
                  <Link href={`/${item.slug}`} className="hover:text-brand">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm font-bold uppercase tracking-wide text-brand">Infos</p>
            <ul className="mt-3 space-y-2 text-sm text-foreground/70">
              <li>
                <Link href="/reservation" className="hover:text-brand">
                  Réservation
                </Link>
              </li>
              <li>
                <Link href="/mentions-legales" className="hover:text-brand">
                  Mentions légales
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="Communes desservies">
            <p className="text-sm font-bold uppercase tracking-wide text-brand">Haut-Bugey</p>
            <ul className="mt-3 grid grid-cols-1 gap-x-4 gap-y-2 text-sm text-foreground/70 xs:grid-cols-2">
              {communes.map((commune) => (
                <li key={commune.slug}>
                  <Link href={`/taxi-${commune.slug}`} className="hover:text-brand">
                    {commune.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 border-t border-border-subtle pt-6 text-xs text-foreground/60">
          <p>{COPYRIGHT_NOTICE}</p>
        </div>
      </div>
    </footer>
  );
}
