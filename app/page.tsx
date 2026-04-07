// app/page.tsx

import HomeClient from "./HomeClient";

export const metadata = {
  title: "Software gestionale per ASD e società sportive | MaconClub",
  description:
    "Gestionale per ASD e società sportive: gestione atleti, allenamenti, pagamenti, ricevute fiscali e contabilità in un unico software.",
};

export default function Home() {
  return <HomeClient />;
}