import type { Metadata } from "next";
import SoftwareGestionaleASDClient from "./SoftwareGestionaleASDClient";

export const metadata: Metadata = {
  title: "Software gestionale per ASD sportive | MaconClub",
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

export default function Page() {
  return <SoftwareGestionaleASDClient />;
}