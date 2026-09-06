import type { Metadata } from "next";
import { BUSINESS } from "@/lib/constants";

export function buildMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = `${BUSINESS.domain}${path}`;
  const ogImageUrl = `${BUSINESS.domain}/og-image.png`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: BUSINESS.name,
      locale: "fr_FR",
      type: "website",
      images: [{ url: ogImageUrl, width: 2816, height: 1536, alt: BUSINESS.name }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImageUrl],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
