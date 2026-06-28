import type { Metadata } from "next";
import { Archivo, Space_Mono } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-archivo",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://moresunelectric.com"),
  title: {
    default: "MoreSun Electric — Wired for the energy era",
    template: "%s · MoreSun Electric",
  },
  description:
    "Licensed electrical contractor specializing in EV charging, solar, Tesla Powerwall, and bidirectional vehicle-to-home (V2H) charging. ESA Licence #7018909.",
  openGraph: {
    title: "MoreSun Electric — Wired for the energy era",
    description:
      "EV charging, solar, Powerwall, and one of the only local installers offering bidirectional V2H charging.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${archivo.variable} ${spaceMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
