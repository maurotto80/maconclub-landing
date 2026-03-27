"use client";

import React from "react";
import DemoModal from "@/components/DemoModal";

export default function ProgrammaGestioneAssociazioneSportivaClient() {
  const [showDemoForm, setShowDemoForm] = React.useState(false);

  return (
    <main className="bg-white text-gray-900">

      {/* HERO */}
      <section className="py-20 text-center px-6 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto">

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold">
Programma per gestione associazione sportiva: organizza atleti, pagamenti e attività
</h1>

          <p className="mt-6 text-lg text-gray-700">
Gestire una associazione sportiva richiede il controllo di molte attività:
iscrizioni, quote associative, presenze agli allenamenti,
comunicazioni con genitori e documentazione degli atleti.

Un <strong>programma per la gestione di una associazione sportiva</strong>
permette di centralizzare tutte queste operazioni in un unico sistema,
riducendo errori e migliorando l’organizzazione della società.
</p>

          <div className="mt-8">
            <button
              onClick={() => setShowDemoForm(true)}
              className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold"
            >
              Richiedi una demo gratuita
            </button>
          </div>

        </div>
      </section>

      {/* PROBLEMI COMUNI */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-3xl font-bold text-center">
Problemi comuni nella gestione di una associazione sportiva
</h2>

          <p className="mt-6 text-lg text-gray-700">
Molte associazioni sportive dilettantistiche utilizzano
Excel, documenti cartacei o diversi software separati.
Questo spesso porta a:
</p>

          <ul className="mt-8 space-y-3 text-gray-700 text-lg">
            <li>• dati degli atleti sparsi su più file</li>
            <li>• difficoltà nel controllare pagamenti e quote</li>
            <li>• comunicazioni disorganizzate con genitori e staff</li>
            <li>• documenti non aggiornati</li>
            <li>• perdita di tempo nelle attività amministrative</li>
          </ul>

        </div>
      </section>

      {/* COSA FA UN PROGRAMMA */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-3xl font-bold text-center">
Cosa deve fare un programma per associazioni sportive
</h2>

          <p className="mt-6 text-lg text-gray-700">
Un buon software per la gestione delle associazioni sportive
deve permettere di organizzare sia le attività sportive
che quelle amministrative.
</p>

          <ul className="mt-8 space-y-3 text-gray-700 text-lg">
            <li>• gestione anagrafiche atleti</li>
            <li>• organizzazione squadre e categorie</li>
            <li>• calendario allenamenti e partite</li>
            <li>• gestione presenze e convocazioni</li>
            <li>• gestione quote associative e pagamenti</li>
            <li>• emissione ricevute fiscali</li>
            <li>• comunicazioni con genitori e staff</li>
          </ul>

        </div>
      </section>

      {/* GESTIONE QUOTE */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-3xl font-bold text-center">
Gestione quote associative e pagamenti
</h2>

          <p className="mt-6 text-lg text-gray-700">
Uno degli aspetti più complessi nella gestione
di una associazione sportiva è il controllo delle quote.

Un programma gestionale permette di registrare pagamenti,
monitorare le rate e generare ricevute fiscali
senza errori manuali.
</p>

        </div>
      </section>

      {/* COMUNICAZIONI */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-3xl font-bold text-center">
Comunicazioni con atleti e genitori
</h2>

          <p className="mt-6 text-lg text-gray-700">
Un software per associazioni sportive
permette di inviare comunicazioni,
convocazioni e aggiornamenti direttamente
a genitori e atleti tramite notifiche
o messaggi centralizzati.
</p>

        </div>
      </section>

      {/* VANTAGGI */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-3xl font-bold text-center">
Vantaggi di utilizzare un programma gestionale
</h2>

          <ul className="mt-8 space-y-3 text-gray-700 text-lg">
            <li>• maggiore organizzazione della società sportiva</li>
            <li>• riduzione del lavoro amministrativo</li>
            <li>• controllo completo di atleti e pagamenti</li>
            <li>• comunicazioni più semplici con le famiglie</li>
            <li>• gestione professionale della associazione</li>
          </ul>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center px-6">
        <div className="max-w-3xl mx-auto">

          <h2 className="text-3xl font-extrabold">
Semplifica la gestione della tua associazione sportiva
</h2>

          <p className="mt-6 text-lg text-gray-700">
MaconClub è il programma completo per la gestione
delle associazioni sportive dilettantistiche.
</p>

          <div className="mt-8">
            <button
              onClick={() => setShowDemoForm(true)}
              className="px-6 py-3 rounded-xl bg-green-600 hover:bg-green-700 text-white font-semibold"
            >
              Richiedi una demo
            </button>
          </div>

        </div>
      </section>

      {/* SEO LINKS */}
      <section className="py-20 bg-gray-50 px-6">
        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-3xl font-bold">
Approfondisci
</h2>

          <div className="mt-10 grid md:grid-cols-2 gap-8 text-left">

            <div className="bg-white p-8 rounded-2xl shadow">
              <h3 className="text-xl font-bold text-blue-600">
Gestionale per ASD
</h3>
              <a
                href="/gestionale-asd"
                className="inline-block mt-6 text-blue-600 font-semibold underline"
              >
Scopri il gestionale →
              </a>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow">
              <h3 className="text-xl font-bold text-green-600">
Software gestionale ASD
</h3>
              <a
                href="/software-gestionale-asd"
                className="inline-block mt-6 text-green-600 font-semibold underline"
              >
Vai al software →
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