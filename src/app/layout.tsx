import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import NavDrawer from "@/components/NavDrawer";
import CookieConsent from "@/components/CookieConsent";
import { MenuProvider } from "@/components/MenuProvider";
import JsonLd from "@/components/JsonLd";
import { BUSINESS, LEGAL_ENTITY } from "@/lib/constants";
import { getTaxiServiceSchema } from "@/lib/schema";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(BUSINESS.domain),
  title: {
    default: `${BUSINESS.name} — Taxi conventionné CPAM, VSL & Van/Berline VIP`,
    template: `%s`,
  },
  description:
    "Taxi Oyonnax, taxi conventionné CPAM et VSL dans le Haut-Bugey : transport médical assis, Berline & Van pour gares et aéroports. Disponible 24h/24.",
  applicationName: BUSINESS.name,
  manifest: "/manifest.webmanifest",
  keywords: [
    "taxi Oyonnax",
    "taxi conventionné CPAM",
    "VSL Oyonnax",
    "taxi van Oyonnax",
    "taxi aéroport Genève",
    "taxi aéroport Lyon Saint-Exupéry",
    "taxi Haut-Bugey",
  ],
  authors: [{ name: LEGAL_ENTITY.companyName }],
  formatDetection: {
    telephone: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0284c7",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <JsonLd data={getTaxiServiceSchema()} />
        <MenuProvider>
          <Header />
          <main className="flex-1 pb-quickbar">{children}</main>
          <Footer />
          <BottomNav />
          <NavDrawer />
        </MenuProvider>
        <CookieConsent />
      </body>
    </html>
  );
}
