import Link from "next/link";
import { BUSINESS } from "@/lib/constants";
import { ClockIcon, CreditCardIcon, PhoneIcon, ShieldCheckIcon, UsersIcon, WhatsAppIcon } from "@/components/icons";

type Breadcrumb = { name: string; href: string };

const REASSURANCE = [
  { label: "24/7 Disponible", Icon: ClockIcon },
  { label: "8 Places max", Icon: UsersIcon },
  { label: "Tarif garanti", Icon: ShieldCheckIcon },
  { label: "CB Acceptée", Icon: CreditCardIcon },
];

export default function PageHero({
  eyebrow,
  h1,
  subtitle,
  breadcrumbs,
  showActions = true,
}: {
  eyebrow?: string;
  h1: string;
  subtitle: string;
  breadcrumbs: Breadcrumb[];
  showActions?: boolean;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-dark via-brand to-brand-light">
      <div className="relative mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-14">
        <nav aria-label="Fil d'Ariane" className="mb-4 flex flex-wrap gap-x-1 text-xs text-white/70">
          {breadcrumbs.map((crumb, index) => (
            <span key={crumb.href} className="flex items-center gap-1">
              {index > 0 && <span aria-hidden="true">/</span>}
              {index === breadcrumbs.length - 1 ? (
                <span aria-current="page" className="font-medium text-white">
                  {crumb.name}
                </span>
              ) : (
                <Link href={crumb.href} className="hover:text-white">
                  {crumb.name}
                </Link>
              )}
            </span>
          ))}
        </nav>

        {eyebrow ? (
          <p className="mb-2 inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
            {eyebrow}
          </p>
        ) : null}

        <h1 className="max-w-3xl text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
          {h1}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-white/85">{subtitle}</p>

        {showActions ? (
          <>
            <div className="mt-7 flex gap-3">
              <a
                href={BUSINESS.phoneHref}
                className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-brand-dark px-4 py-4 text-base font-bold text-white shadow-lg ring-1 ring-white/25 transition hover:brightness-110 sm:flex-none sm:px-8"
              >
                <PhoneIcon className="h-5 w-5" />
                Appeler
              </a>
              <a
                href={BUSINESS.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-4 py-4 text-base font-bold text-white shadow-lg transition hover:brightness-110 sm:flex-none sm:px-8"
              >
                <WhatsAppIcon className="h-5 w-5" />
                WhatsApp
              </a>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-4 sm:gap-3">
              {REASSURANCE.map(({ label, Icon }) => (
                <div
                  key={label}
                  className="flex flex-col items-center gap-1.5 rounded-xl border border-white/20 bg-white/10 px-2 py-3 text-center backdrop-blur-sm"
                >
                  <Icon className="h-5 w-5 text-white" />
                  <span className="text-xs font-semibold text-white">{label}</span>
                </div>
              ))}
            </div>
          </>
        ) : null}
      </div>
    </section>
  );
}
