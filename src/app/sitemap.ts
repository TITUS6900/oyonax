import type { MetadataRoute } from "next";
import { BUSINESS } from "@/lib/constants";
import { communes } from "@/lib/data/communes";
import { medicalLinks } from "@/lib/data/medical";
import { transportLinks } from "@/lib/data/transport";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPaths = [
    "/",
    "/taxi-van-oyonnax",
    "/reservation",
    "/mentions-legales",
  ];
  const medicalPaths = medicalLinks.map((item) => `/${item.slug}`);
  const transportPaths = transportLinks.map((item) => `/${item.slug}`);
  const communePaths = communes.map((commune) => `/taxi-${commune.slug}`);

  const allPaths = [...staticPaths, ...medicalPaths, ...transportPaths, ...communePaths];

  return allPaths.map((path) => ({
    url: `${BUSINESS.domain}${path}`,
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.startsWith("/taxi-conventionne") ? 0.9 : 0.7,
  }));
}
