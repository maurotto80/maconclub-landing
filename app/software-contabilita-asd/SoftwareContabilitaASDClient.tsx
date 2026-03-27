//SoftwareContabilitaASDClient.tsx
"use client";

import React from "react";
import DemoModal from "@/components/DemoModal";

export default function SoftwareContabilitaASDClient() {
  const [showDemoForm, setShowDemoForm] = React.useState(false);

  return (
    <main className="bg-white text-gray-900">

      {/* HERO */}
      <section className="py-20 text-center px-6 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-4xl mx-auto">

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold">
  Software per la contabilità delle ASD e associazioni sportive
</h1>

          <p className="mt-6 text-lg text-gray-700">
La <strong>contabilità delle ASD</strong> richiede attenzione e precisione.
Ricevute fiscali, libro soci, prima nota e bilanci devono essere
gestiti correttamente per rispettare la normativa delle associazioni
sportive dilettantistiche. Con MaconClub puoi gestire tutta la
<strong>contabilità della tua associazione sportiva</strong> in un unico
software professionale.
</p>

          <div className="mt-8">
            <button
              onClick={() => setShowDemoForm(true)}
              className="px-6 py-3 rounded-xl bg-green-600 hover:bg-green-700 text-white font-semibold"
            >
              Richiedi una demo gratuita
            </button>
          </div>

        </div>
      </section>

      {/* FUNZIONALITÀ CONTABILI */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-bold text-center">
            Tutta la contabilità della tua ASD in un unico software
          </h2>

          <div className="mt-12 grid md:grid-cols-2 gap-10 text-gray-700">

            <div>
              <h3 className="font-bold text-green-600 text-xl">
                📒 Prima nota automatica
              </h3>
              <p className="mt-4">
                Ogni pagamento registrato aggiorna automaticamente
                la prima nota della tua associazione.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-green-600 text-xl">
                🧾 Ricevute fiscali digitali
              </h3>
              <p className="mt-4">
                Genera ricevute PDF professionali in pochi secondi.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-green-600 text-xl">
                📘 Libro soci digitale
              </h3>
              <p className="mt-4">
                Gestione iscrizione, dimissioni e archivio storico soci.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-green-600 text-xl">
                📊 Bilancio stagionale e annuale
              </h3>
              <p className="mt-4">
                Controllo completo delle entrate e uscite della tua ASD.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CONTABILITÀ ASD */}
<section className="py-20 bg-white px-6">
  <div className="max-w-4xl mx-auto">

    <h2 className="text-3xl font-bold text-center">
      Come funziona la contabilità di una ASD
    </h2>

    <p className="mt-6 text-lg text-gray-700">
      Le associazioni sportive dilettantistiche devono gestire
      correttamente entrate e uscite economiche.
      Quote associative, contributi, sponsorizzazioni e
      pagamenti degli atleti devono essere registrati
      nella contabilità dell'associazione.
    </p>

    <p className="mt-4 text-gray-700">
      Utilizzare un software per la contabilità delle ASD
      permette di tenere sotto controllo prima nota,
      ricevute fiscali e bilanci in modo semplice,
      evitando errori e perdite di dati.
    </p>

  </div>
</section>

      {/* CTA */}
      <section className="py-20 bg-gray-50 text-center px-6">
        <div className="max-w-3xl mx-auto">

          <h2 className="text-3xl font-bold">
            Semplifica la contabilità della tua ASD
          </h2>

          <p className="mt-6 text-lg text-gray-700">
            Con MaconClub elimini errori manuali e sistemi separati.
            Centralizza tutto in un unico software gestionale.
          </p>

          <div className="mt-8">
            <button
              onClick={() => setShowDemoForm(true)}
              className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold"
            >
              Prova MaconClub
            </button>
          </div>

        </div>
      </section>
      {/* APPROFONDIMENTI SEO */}
<section className="py-20 bg-gray-50 px-6">
  <div className="max-w-5xl mx-auto text-center">

    <h2 className="text-3xl font-bold">
      Approfondisci le funzionalità specifiche
    </h2>

    <p className="mt-6 text-lg text-gray-700">
      MaconClub è un software gestionale completo per associazioni sportive.
      Scopri nel dettaglio le aree dedicate alla gestione delle società sportive
      e alla contabilità delle ASD.
    </p>

    <div className="mt-10 grid md:grid-cols-2 gap-8 text-left">

      <div className="bg-white p-8 rounded-2xl shadow">
        <h3 className="text-xl font-bold text-blue-600">
          Gestionale per società sportiva
        </h3>
        <p className="mt-4 text-gray-700">
          Approfondisci le funzionalità dedicate alla gestione di atleti,
          allenamenti, presenze e comunicazioni digitali.
        </p>

        <a
          href="/gestionale-societa-sportiva"
          className="inline-block mt-6 text-blue-600 font-semibold underline hover:text-blue-800"
        >
          Scopri il gestionale per società sportive →
        </a>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow">
        <h3 className="text-xl font-bold text-green-600">
          Software contabilità ASD
        </h3>
        <p className="mt-4 text-gray-700">
          Prima nota, ricevute fiscali, libro soci e bilancio
          integrati in un unico sistema professionale.
        </p>

        <a
          href="/software-contabilita-asd"
          className="inline-block mt-6 text-green-600 font-semibold underline hover:text-green-800"
        >
          Scopri il software contabilità ASD →
        </a>
      </div>

    </div>
  </div>
</section>

      <DemoModal
        open={showDemoForm}
        onClose={() => setShowDemoForm(false)}
      />

    </main>
  );
}