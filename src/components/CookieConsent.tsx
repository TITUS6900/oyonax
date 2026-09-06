"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "taxi-oyonnax-cookie-consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Reads localStorage (unavailable during SSR/render) once on mount to
    // decide whether consent was already given — no render-time alternative.
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored !== "accepted" && stored !== "rejected") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setVisible(true);
    }
  }, []);

  function choose(value: "accepted" | "rejected") {
    window.localStorage.setItem(STORAGE_KEY, value);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      className="cookie-banner-offset fixed inset-x-0 z-40 border-t border-border-subtle bg-surface px-4 py-4 shadow-[0_-4px_16px_rgba(0,0,0,0.08)]"
      role="region"
      aria-label="Consentement aux cookies"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
        <p className="text-sm text-foreground/80">
          Ce site utilise des cookies pour améliorer votre expérience et mesurer l&apos;audience.
        </p>
        <div className="flex shrink-0 gap-2.5">
          <button
            type="button"
            onClick={() => choose("rejected")}
            className="flex-1 rounded-xl border border-border-subtle bg-surface px-4 py-2.5 text-sm font-semibold text-foreground/80 transition hover:border-brand sm:flex-none"
          >
            Tout refuser
          </button>
          <button
            type="button"
            onClick={() => choose("accepted")}
            className="flex-1 rounded-xl bg-brand px-4 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-brand-dark sm:flex-none"
          >
            Tout accepter
          </button>
        </div>
      </div>
    </div>
  );
}
