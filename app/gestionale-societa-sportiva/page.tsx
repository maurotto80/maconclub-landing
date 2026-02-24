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

export default function Page() {
  return <GestionaleSocietaSportivaClient />;
}