"use client";

import Link from "next/link";
import Logo from "@/components/Logo";
import { useMenu } from "@/components/MenuProvider";
import { MenuIcon } from "@/components/icons";

export default function Header() {
  const { toggle } = useMenu();

  return (
    <header className="sticky top-0 z-40 border-b border-border-subtle bg-surface/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2.5 sm:px-6">
        <Link href="/" className="shrink-0">
          <Logo className="h-12 w-12" />
        </Link>

        <button
          type="button"
          onClick={toggle}
          aria-label="Ouvrir le menu"
          className="inline-flex shrink-0 items-center justify-center rounded-full border border-border-subtle p-2.5 text-foreground/80 transition hover:border-brand hover:text-brand"
        >
          <MenuIcon className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
}
