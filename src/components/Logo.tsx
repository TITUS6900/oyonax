import Image from "next/image";

type LogoProps = {
  /** Classes Tailwind de taille, hauteur ET largeur égales pour un cercle net (ex: "h-11 w-11"). */
  className?: string;
};

/**
 * Logo officiel (public/logo.png), recadré en macaron circulaire : le
 * cercle lion + croix médicale et le wordmark "TAXI OYONNAX" sont déjà
 * centrés dans le fichier source, donc un simple object-cover centré suffit
 * à produire un badge rond net, sans fond ni bordure ajoutés.
 */
export default function Logo({ className = "h-11 w-11" }: LogoProps) {
  return (
    <span className={`relative inline-block shrink-0 overflow-hidden rounded-full ${className}`}>
      <Image src="/logo.png" alt="Logo Taxi Oyonnax" fill sizes="80px" className="object-cover" priority />
    </span>
  );
}
