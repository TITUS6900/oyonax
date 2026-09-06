import Link from "next/link";
import { communes } from "@/lib/data/communes";
import { MapPinIcon } from "@/components/icons";

export default function ZoneGrid() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
      {communes.map((commune) => (
        <Link
          key={commune.slug}
          href={`/taxi-${commune.slug}`}
          className="flex items-start gap-2.5 rounded-xl border border-border-subtle bg-surface px-4 py-3 transition hover:border-brand"
        >
          <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-medical-light text-medical">
            <MapPinIcon className="h-4 w-4" />
          </span>
          <span>
            <span className="block text-sm font-medium text-foreground/80">{commune.name}</span>
            <span className="block text-xs font-normal text-foreground/50">
              ~{commune.distanceKm} km · {commune.driveMin} min
            </span>
          </span>
        </Link>
      ))}
    </div>
  );
}
