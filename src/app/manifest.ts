import type { MetadataRoute } from "next";
import { BUSINESS } from "@/lib/constants";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${BUSINESS.name} — Taxi conventionné CPAM`,
    short_name: BUSINESS.name,
    description:
      "Réservez votre taxi conventionné CPAM à Oyonnax : transport médical, Van & Berline pour gares et aéroports.",
    start_url: "/",
    display: "standalone",
    background_color: "#fafaf9",
    theme_color: "#0284c7",
    lang: "fr",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
