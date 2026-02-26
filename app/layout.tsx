import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";
import Script from "next/script";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Software gestionale per ASD sportive | MaconClub",

  description:
    "Software gestionale per ASD sportive: gestione atleti, allenamenti, convocazioni, pagamenti, ricevute fiscali, libro soci e prima nota. Scopri MaconClub. Da 19€/mese.",

  keywords: [
    "software gestionale asd",
    "gestionale società sportiva",
    "programma gestionale asd",
    "gestione associazione sportiva",
    "gestione atleti",
    "ricevute fiscali asd",
    "libro soci digitale",
    "prima nota asd",
    "MaconClub",
  ],

  authors: [{ name: "MaconService" }],

  openGraph: {
    title: "Software gestionale per ASD sportive | MaconClub",
    description:
      "Gestione sportiva e amministrativa in un’unica piattaforma: atleti, pagamenti, ricevute fiscali, libro soci e prima nota. Demo gratuita.",
    url: "https://maconclub.com",
    siteName: "MaconClub",
    images: [
      {
        url: "https://maconclub.com/logo.png",
        width: 1200,
        height: 630,
        alt: "MaconClub – Software gestionale per ASD",
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
    title: "Software gestionale per ASD sportive | MaconClub",
    description:
      "Gestisci la tua ASD con un unico sistema: sport + amministrazione.",
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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>

        {/* ✅ Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-LG7NZFJ879"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LG7NZFJ879');
          `}
        </Script>

        <Navbar />
        {children}
      </body>
    </html>
  );
}
