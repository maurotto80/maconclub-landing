import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MaconClub | Gestione completa per ASD sportive",
  description:
    "MaconClub è la piattaforma completa per gestire la tua ASD: atleti, presenze, pagamenti, comunicazioni e documenti. Da 19€/mese. Richiedi una demo gratuita.",

  keywords: [
    "gestione ASD",
    "software società sportiva",
    "gestione atleti",
    "pagamenti quote associative",
    "app club sportivo",
    "MaconClub",
  ],

  authors: [{ name: "MaconService" }],

  openGraph: {
  title: "MaconClub | Gestionale completo per ASD",
  description:
    "Sport + Amministrazione in un’unica piattaforma. Atleti, presenze, pagamenti, ricevute fiscali e libro soci da 19€/mese.",
  url: "https://maconclub.com",
  siteName: "MaconClub",
  images: [
    {
      url: "https://maconclub.com/logo.png", // ✅ URL assoluto
      width: 1200,
      height: 630,
      alt: "MaconClub – Gestionale completo per ASD",
    },
  ],
  locale: "it_IT",
  type: "website",
},

  icons: {
    icon: "/favicon.ico",
  },
  twitter: {
  card: "summary_large_image",
  title: "MaconClub | Gestionale completo per ASD",
  description:
    "Gestione sportiva e amministrativa in un’unica piattaforma professionale.",
  images: ["https://maconclub.com/logo.png"],
},
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
