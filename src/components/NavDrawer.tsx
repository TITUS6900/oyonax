"use client";

import Link from "next/link";
import type { ComponentType } from "react";
import Logo from "@/components/Logo";
import { useMenu } from "@/components/MenuProvider";
import { BUSINESS } from "@/lib/constants";
import { medicalLinks } from "@/lib/data/medical";
import { transportLinks } from "@/lib/data/transport";
import { communes } from "@/lib/data/communes";
import {
  CloseIcon,
  DocumentIcon,
  EmailIcon,
  MapPinIcon,
  MedicalCrossIcon,
  PhoneIcon,
  PlaneIcon,
  WhatsAppIcon,
} from "@/components/icons";

type MenuItem = { label: string; href: string };

/**
 * Menu latéral (Drawer) unique, partagé par le bouton Burger du Header et
 * l'onglet "Menu" de la Bottom Nav — même tiroir, même état.
 */
export default function NavDrawer() {
  const { isOpen, close } = useMenu();

  return (
    <>
      <div
        className={`fixed inset-0 z-[60] bg-black/40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={close}
        aria-hidden="true"
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-hidden={!isOpen}
        aria-label="Menu de navigation"
        inert={!isOpen}
        className={`fixed inset-y-0 right-0 z-[70] flex w-[85%] max-w-sm flex-col bg-background shadow-2xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-border-subtle px-4 py-3">
          <Logo className="h-10 w-10" />
          <button
            type="button"
            onClick={close}
            aria-label="Fermer le menu"
            className="rounded-full p-2 text-foreground/70 hover:bg-surface-muted"
          >
            <CloseIcon className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-5">
          <div className="grid grid-cols-3 gap-2.5">
            <a
              href={BUSINESS.phoneHref}
              className="flex flex-col items-center gap-1.5 rounded-xl bg-brand py-3 text-xs font-bold text-white"
            >
              <PhoneIcon className="h-5 w-5" /> Appeler
            </a>
            <a
              href={BUSINESS.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-1.5 rounded-xl bg-[#25D366] py-3 text-xs font-bold text-white"
            >
              <WhatsAppIcon className="h-5 w-5" /> WhatsApp
            </a>
            <a
              href={BUSINESS.emailHref}
              className="flex flex-col items-center gap-1.5 rounded-xl border border-border-subtle bg-surface py-3 text-xs font-bold text-foreground/80"
            >
              <EmailIcon className="h-5 w-5" /> E-mail
            </a>
          </div>

          <DrawerSection
            title="Transport médical CPAM"
            icon={MedicalCrossIcon}
            items={medicalLinks.map((l) => ({ label: l.label, href: `/${l.slug}` }))}
            onNavigate={close}
          />
          <DrawerSection
            title="Van, Gares & Aéroports"
            icon={PlaneIcon}
            items={[
              { label: "Van & Berline VIP", href: "/taxi-van-oyonnax" },
              ...transportLinks.map((l) => ({ label: l.label, href: `/${l.slug}` })),
            ]}
            onNavigate={close}
          />
          <DrawerSection
            title="Communes du Haut-Bugey"
            icon={MapPinIcon}
            items={communes.map((c) => ({ label: c.name, href: `/taxi-${c.slug}` }))}
            onNavigate={close}
            pillGrid
          />
          <DrawerSection
            title="Infos"
            icon={DocumentIcon}
            items={[
              { label: "Réservation", href: "/reservation" },
              { label: "Mentions légales", href: "/mentions-legales" },
            ]}
            onNavigate={close}
          />
        </div>
      </div>
    </>
  );
}

function DrawerSection({
  title,
  icon: Icon,
  items,
  onNavigate,
  pillGrid = false,
}: {
  title: string;
  icon: ComponentType<{ className?: string }>;
  items: MenuItem[];
  onNavigate: () => void;
  pillGrid?: boolean;
}) {
  return (
    <div className="mt-6">
      <div className="mb-2.5 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-brand">
        <Icon className="h-4 w-4" />
        {title}
      </div>

      {pillGrid ? (
        <div className="grid grid-cols-2 gap-2">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onNavigate}
              className="flex items-center gap-2 rounded-full border border-border-subtle bg-surface px-3 py-2 text-xs font-semibold text-foreground/80"
            >
              <MapPinIcon className="h-3.5 w-3.5 shrink-0 text-brand" />
              <span className="truncate">{item.label}</span>
            </Link>
          ))}
        </div>
      ) : (
        <div className="divide-y divide-border-subtle overflow-hidden rounded-xl border border-border-subtle bg-surface">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onNavigate}
              className="flex items-center justify-between gap-2 px-4 py-3 text-sm font-medium text-foreground/85 hover:bg-surface-muted"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
