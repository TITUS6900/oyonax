import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Le domaine secondaire taxiconventionneoyonnax.fr (et son www) doit rediriger
 * en 301 vers le domaine principal taxioyonnax.fr, chemin et query préservés,
 * pour consolider le référencement sur un seul nom de domaine.
 */
const SECONDARY_HOSTS = ["taxiconventionneoyonnax.fr", "www.taxiconventionneoyonnax.fr"];
const PRIMARY_HOST = "taxioyonnax.fr";

export function proxy(request: NextRequest) {
  const host = request.headers.get("host") ?? "";

  if (SECONDARY_HOSTS.includes(host)) {
    const url = new URL(request.url);
    url.protocol = "https:";
    url.host = PRIMARY_HOST;
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
