"use client";

import React from "react";
import DemoModal from "@/components/DemoModal";

export default function GestionaleSocietaSportivaClient() {
  const [showDemoForm, setShowDemoForm] = React.useState(false);

  return (
    <main className="bg-white text-gray-900">

      {/* HERO */}
      <section className="py-20 text-center px-6 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto">

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold">
            Gestionale per società sportiva
          </h1>

          <p className="mt-6 text-lg text-gray-700">
            Un gestionale professionale per società sportive
            che vogliono organizzare atleti, staff tecnico,
            allenamenti, presenze e comunicazioni in modo digitale.
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

      {/* GESTIONE ATLETI */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-3xl font-bold text-center">
            Gestione completa di atleti e categorie
          </h2>

          <p className="mt-6 text-lg text-gray-700">
            Organizza atleti per categoria, squadra o gruppo.
            Monitora stato documenti, certificati medici,
            presenze agli allenamenti e partecipazione alle gare.
          </p>

        </div>
      </section>

      {/* ISCRIZIONI */}
      <section className="py-20 bg-gray-50 px-6">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-3xl font-bold text-center">
            Gestione iscrizioni e tesseramenti digitali
          </h2>

          <p className="mt-6 text-lg text-gray-700">
            Centralizza iscrizioni, documentazione e stato tesseramento.
            Riduci errori manuali e tieni tutto aggiornato in tempo reale.
          </p>

        </div>
      </section>

      {/* STAFF */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-3xl font-bold text-center">
            Gestione allenatori e staff tecnico
          </h2>

          <p className="mt-6 text-lg text-gray-700">
            Assegna ruoli e permessi, monitora attività e
            coordina allenatori, preparatori e collaboratori
            all’interno di un unico sistema.
          </p>

        </div>
      </section>

      {/* CALENDARIO */}
      <section className="py-20 bg-gray-50 px-6">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-3xl font-bold text-center">
            Calendari allenamenti e partite
          </h2>

          <p className="mt-6 text-lg text-gray-700">
            Gestisci calendario allenamenti, partite,
            convocazioni e presenze in modo semplice.
            Tutti i membri ricevono notifiche in tempo reale.
          </p>

        </div>
      </section>

      {/* AREA GENITORI */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-3xl font-bold text-center">
            Area genitori e comunicazioni integrate
          </h2>

          <p className="mt-6 text-lg text-gray-700">
            Comunica con genitori e atleti tramite notifiche push,
            convocazioni digitali e messaggi centralizzati.
            Niente più gruppi WhatsApp disordinati.
          </p>

        </div>
      </section>

      {/* VANTAGGI */}
      <section className="py-20 bg-gray-50 px-6">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-3xl font-bold text-center">
            Perché scegliere un gestionale per società sportiva
          </h2>

          <ul className="mt-8 space-y-3 text-lg text-gray-700">
            <li>• Organizzazione centralizzata</li>
            <li>• Riduzione errori manuali</li>
            <li>• Maggiore trasparenza gestionale</li>
            <li>• Comunicazioni più rapide</li>
            <li>• Gestione professionale del club</li>
          </ul>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center px-6">
        <div className="max-w-3xl mx-auto">

          <h2 className="text-3xl font-extrabold">
            Porta la tua società sportiva a un livello superiore
          </h2>

          <div className="mt-8">
            <button
              onClick={() => setShowDemoForm(true)}
              className="px-6 py-3 rounded-xl bg-green-600 hover:bg-green-700 text-white font-semibold"
            >
              Prova MaconClub
            </button>
          </div>

        </div>
      </section>

      {/* LINKING SEO */}
      <section className="py-20 bg-gray-50 px-6">
        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-3xl font-bold">
            Scopri anche le altre funzionalità
          </h2>

          <div className="mt-10 grid md:grid-cols-2 gap-8 text-left">

            <div className="bg-white p-8 rounded-2xl shadow">
              <h3 className="text-xl font-bold text-blue-600">
                Software gestionale per ASD
              </h3>
              <a
                href="/software-gestionale-asd"
                className="inline-block mt-6 text-blue-600 font-semibold underline"
              >
                Vai al gestionale completo →
              </a>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow">
              <h3 className="text-xl font-bold text-green-600">
                Software contabilità ASD
              </h3>
              <a
                href="/software-contabilita-asd"
                className="inline-block mt-6 text-green-600 font-semibold underline"
              >
                Vai al software contabilità →
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