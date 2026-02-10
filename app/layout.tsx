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
    title: "MaconClub | Gestione completa per ASD sportive",
    description:
      "Organizza allenamenti, gestisci pagamenti e comunica con i genitori. Tutto in un’unica app.",
    url: "https://maconclub.com",
    siteName: "MaconClub",
    images: [
  {
    url: "/og-image.png",
    width: 1200,
    height: 630,
    alt: "MaconClub | Gestione completa per ASD sportive",
  },
    ],
    locale: "it_IT",
    type: "website",
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
