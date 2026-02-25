import type { Metadata } from "next";
import GestionaleSocietaSportivaClient from "./GestionaleSocietaSportivaClient";

export const metadata: Metadata = {
  title: "Gestionale per società sportiva | MaconClub",
  description:
    "Gestionale completo per società sportive: atleti, pagamenti, ricevute fiscali, libro soci e prima nota in un’unica piattaforma. Scopri MaconClub.",
  alternates: {
    canonical: "https://maconclub.com/gestionale-societa-sportiva",
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
        name: "Cos’è un gestionale per società sportiva?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "È un software che centralizza gestione atleti, gruppi, allenamenti, presenze e comunicazioni, con pagamenti e amministrazione integrati.",
        },
      },
      {
        "@type": "Question",
        name: "MaconClub è adatto anche a piccole società sportive?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sì. È pensato per società sportive di qualsiasi dimensione: dalla scuola calcio alla polisportiva.",
        },
      },
      {
        "@type": "Question",
        name: "Posso gestire anche pagamenti e ricevute?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sì. Puoi gestire pagamenti, rate e ricevute fiscali PDF in modo semplice e centralizzato.",
        },
      },
    ],
  };

  return (
    <>
      <GestionaleSocietaSportivaClient />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}