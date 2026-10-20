//app/layout.tsx

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";
import Script from "next/script";
import { FaWhatsapp } from "react-icons/fa";



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
    "Software gestionale per ASD sportive: gestione atleti, allenamenti, convocazioni, pagamenti, ricevute fiscali, libro soci, collaboratori e prima nota. Scopri MaconClub. Da 19€/mese.",

  keywords: [
    "software gestionale asd",
    "gestionale società sportiva",
    "programma gestionale asd",
    "gestione associazione sportiva",
    "gestionale sportivo",
    "gestione atleti",
    "ricevute fiscali asd",
    "libro soci digitale",
    "prima nota asd",
    "software associazioni sportive",
    "MaconClub",
  ],

  authors: [{ name: "MaconService" }],

  alternates: {
    canonical: "https://maconclub.com",
  },

  openGraph: {
    title: "Software gestionale per ASD sportive | MaconClub",
    description:
      "Gestione sportiva e amministrativa in un’unica piattaforma: atleti, pagamenti, ricevute fiscali, libro soci e prima nota. Demo gratuita.",
    url: "https://maconclub.com",
    siteName: "MaconClub",
      images: [
  {
    url: "https://maconclub.com/og-maconclub.jpg",
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
        {/* SEO Schema.org */}
<Script
  id="schema-software"
  type="application/ld+json"
  strategy="afterInteractive"
>
  {JSON.stringify({
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "MaconClub",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, iOS, Android",
    description:
      "Software gestionale per ASD sportive che integra gestione sportiva e amministrativa: atleti, allenamenti, presenze, pagamenti, ricevute fiscali, libro soci e prima nota.",
    offers: {
      "@type": "Offer",
      price: "19",
      priceCurrency: "EUR",
    },
    url: "https://maconclub.com",
    publisher: {
      "@type": "Organization",
      name: "MaconService",
      url: "https://www.maconservice.com",
    },
  })}
</Script>

                <Navbar />
        {children}

        {/* ==========================================
            WHATSAPP BUSINESS — PULSANTE FLOTTANTE
        ========================================== */}
        <a
          href="https://wa.me/393273213234?text=Ciao%2C%20vorrei%20ricevere%20informazioni%20su%20MaconClub"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contatta MaconClub su WhatsApp Business"
          title="Scrivici su WhatsApp"
          className="
            fixed
            bottom-5
            right-5
            sm:bottom-7
            sm:right-7
            z-50
            flex
            h-14
            w-14
            sm:h-16
            sm:w-16
            items-center
            justify-center
            rounded-full
            bg-[#25D366]
            text-white
            shadow-xl
            transition-all
            duration-300
            hover:bg-[#1ebe5d]
            hover:scale-110
            focus-visible:outline
            focus-visible:outline-2
            focus-visible:outline-offset-4
            focus-visible:outline-green-600
          "
        >
          <FaWhatsapp className="text-3xl sm:text-4xl" />
        </a>

      </body>
    </html>
  );
}
