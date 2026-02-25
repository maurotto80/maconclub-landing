import type { Metadata } from "next";
import SoftwareGestionaleASDClient from "./SoftwareGestionaleASDClient";

export const metadata: Metadata = {
  title: "Software gestionale per ASD sportive | Gestione atleti, pagamenti e contabilità | MaconClub",
  description:
    "Software gestionale per associazioni sportive dilettantistiche. Gestione atleti, pagamenti, ricevute fiscali, libro soci e prima nota in un’unica piattaforma. Scopri MaconClub.",
  keywords: [
    "software gestionale asd",
    "programma per asd",
    "gestionale società sportiva",
    "software associazione sportiva",
    "contabilità asd",
    "libro soci digitale",
  ],
  openGraph: {
    title: "Software gestionale per ASD sportive | MaconClub",
    description:
      "Il gestionale completo per ASD: sport + amministrazione integrati. Demo gratuita.",
    url: "https://maconclub.com/software-gestionale-asd",
    siteName: "MaconClub",
    type: "article",
  },
  alternates: {
    canonical: "https://maconclub.com/software-gestionale-asd",
  },
};

export const dynamic = "force-static";

export default function Page() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Quanto costa un software gestionale per ASD?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "MaconClub parte da 19€/mese senza costi nascosti.",
        },
      },
      {
        "@type": "Question",
        name: "Il software gestisce anche la contabilità?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sì, include prima nota, ricevute fiscali, libro soci e bilancio.",
        },
      },
    ],
  };

  return (
    <>
      <SoftwareGestionaleASDClient />

      {/* Schema FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
    </>
  );
}