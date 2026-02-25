import type { Metadata } from "next";
import SoftwareContabilitaASDClient from "./SoftwareContabilitaASDClient";

export const metadata: Metadata = {
  title: "Software contabilità ASD | Prima nota, ricevute e libro soci",
  description:
    "Software per la contabilità di associazioni sportive dilettantistiche. Prima nota, ricevute fiscali, libro soci e bilancio integrati in un’unica piattaforma.",
  alternates: {
    canonical: "https://maconclub.com/software-contabilita-asd",
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
        name: "Un software contabilità ASD deve includere la prima nota?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sì, la prima nota è fondamentale per tenere traccia delle entrate e uscite e avere un quadro chiaro della gestione.",
        },
      },
      {
        "@type": "Question",
        name: "MaconClub genera ricevute fiscali in PDF?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sì. Puoi generare ricevute fiscali PDF in modo rapido e professionale, collegate ai pagamenti.",
        },
      },
      {
        "@type": "Question",
        name: "Posso gestire anche il libro soci e i bilanci?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sì. MaconClub include libro soci digitale e strumenti di reportistica per bilancio stagionale e rendiconto annuale.",
        },
      },
    ],
  };

  return (
    <>
      <SoftwareContabilitaASDClient />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}