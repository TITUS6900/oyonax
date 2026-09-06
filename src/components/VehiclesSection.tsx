import Image from "next/image";
import Section from "@/components/Section";

type Vehicle = {
  title: string;
  src: string;
  alt: string;
  capacity: string;
  description: string;
};

const VEHICLES: Vehicle[] = [
  {
    title: "Berline Confort",
    src: "/images/berline.avif",
    alt: "Berline noire Taxi Oyonnax pour transport médicalisé CPAM et courses",
    capacity: "1 à 4 personnes",
    description:
      "Idéale pour le transport médicalisé CPAM et les courses individuelles : confort, discrétion et conduite en douceur.",
  },
  {
    title: "Van VIP",
    src: "/images/van.avif",
    alt: "Van Taxi Oyonnax pour groupes, familles et transferts gares/aéroports avec bagages",
    capacity: "1 à 8 personnes",
    description:
      "Parfait pour les groupes, familles et bagages volumineux : transferts gares, aéroports et stations de ski en toute sérénité.",
  },
];

export default function VehiclesSection({ muted = false }: { muted?: boolean }) {
  return (
    <Section title="Nos véhicules : Berline & Van" muted={muted}>
      <div className="grid gap-6 sm:grid-cols-2">
        {VEHICLES.map((vehicle, index) => (
          <div
            key={vehicle.title}
            className="overflow-hidden rounded-2xl border border-border-subtle bg-surface"
          >
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={vehicle.src}
                alt={vehicle.alt}
                fill
                sizes="(min-width: 1024px) 500px, (min-width: 640px) 45vw, 90vw"
                className="object-cover"
                priority={index === 0}
              />
            </div>
            <div className="p-5">
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-base font-bold text-foreground">{vehicle.title}</h3>
                <span
                  className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-bold ${
                    index === 0
                      ? "bg-medical-light text-medical"
                      : "bg-accent-light text-accent"
                  }`}
                >
                  {vehicle.capacity}
                </span>
              </div>
              <p className="mt-2 text-sm text-foreground/70">{vehicle.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
