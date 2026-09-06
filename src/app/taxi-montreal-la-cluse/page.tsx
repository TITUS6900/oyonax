import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { communes } from "@/lib/data/communes";
import CommuneTemplate from "@/components/templates/CommuneTemplate";

const commune = communes.find((c) => c.slug === "montreal-la-cluse")!;

export const metadata: Metadata = buildMetadata({
  title: commune.metaTitle,
  description: commune.metaDescription,
  path: "/taxi-montreal-la-cluse",
});

export default function Page() {
  return <CommuneTemplate commune={commune} />;
}
