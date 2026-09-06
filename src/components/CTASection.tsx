import { BUSINESS } from "@/lib/constants";

export default function CTASection({
  title = "Réservez votre taxi en un appel",
  subtitle = "Chauffeur licencié, véhicule confortable, prise en charge rapide à Oyonnax et dans tout le Haut-Bugey.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="bg-brand">
      <div className="mx-auto max-w-6xl px-4 py-12 text-center sm:px-6">
        <h2 className="text-2xl font-extrabold text-white sm:text-3xl">{title}</h2>
        <p className="mx-auto mt-3 max-w-xl text-white/90">{subtitle}</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a
            href={BUSINESS.phoneHref}
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-brand-dark shadow-sm transition hover:bg-white/90"
          >
            Appeler {BUSINESS.phoneDisplay}
          </a>
          <a
            href={BUSINESS.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:opacity-90"
          >
            Réserver sur WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
