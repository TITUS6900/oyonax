"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMenu } from "@/components/MenuProvider";
import { BUSINESS } from "@/lib/constants";
import { HomeIcon, MedicalCrossIcon, MenuIcon, PhoneIcon, TicketIcon } from "@/components/icons";

/**
 * Navigation inférieure fixe façon application mobile (5 onglets). Les deux
 * boutons d'action rapide requis par la charte "App Mobile" sont : le bouton
 * central surélevé "Appeler" (Bouton 1 : appel CPAM / VSL direct) et l'onglet
 * "Réserver" (Bouton 2 : réservation Berline / Van). L'onglet "Menu" ouvre le
 * même tiroir latéral que le bouton Burger du Header (état partagé via
 * MenuProvider).
 */
export default function BottomNav() {
  const pathname = usePathname();
  const { isOpen, open } = useMenu();

  const isHome = pathname === "/";
  const isCpam = pathname.startsWith("/taxi-conventionne");
  const isReservation = pathname === "/reservation";

  const tabClass = (active: boolean, activeColor: "brand" | "accent" = "brand") =>
    `flex flex-col items-center justify-center gap-1 py-2 text-[10.5px] font-semibold ${
      active ? (activeColor === "accent" ? "text-accent" : "text-brand") : "text-foreground/55"
    }`;

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-50 border-t border-border-subtle bg-surface/95 backdrop-blur safe-bottom md:hidden"
      aria-label="Navigation principale"
    >
      <div className="mx-auto grid max-w-md grid-cols-5 items-end px-1">
        <Link href="/" className={tabClass(isHome)}>
          <HomeIcon className="h-6 w-6" />
          Accueil
        </Link>

        <Link href="/taxi-conventionne-oyonnax" className={tabClass(isCpam)}>
          <MedicalCrossIcon className="h-6 w-6" />
          CPAM / VSL
        </Link>

        <div className="relative flex flex-col items-center justify-end">
          <a
            href={BUSINESS.phoneHref}
            className="absolute -top-7 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-brand to-brand-dark text-white shadow-lg ring-4 ring-surface transition active:scale-95"
            aria-label="Appel CPAM / VSL direct"
          >
            <PhoneIcon className="h-6 w-6" />
          </a>
          <span className="pt-9 text-[10.5px] font-semibold text-foreground/55">Appeler</span>
        </div>

        <Link href="/reservation" className={tabClass(isReservation, "accent")}>
          <TicketIcon className="h-6 w-6" />
          Réserver
        </Link>

        <button type="button" onClick={open} className={tabClass(isOpen)}>
          <MenuIcon className="h-6 w-6" />
          Menu
        </button>
      </div>
    </nav>
  );
}
