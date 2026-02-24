"use client";

import React from "react";
import DemoModal from "@/components/DemoModal";

export default function GestionaleSocietaSportivaClient() {
  const [showDemoForm, setShowDemoForm] = React.useState(false);

  return (
    <main className="bg-white text-gray-900">

      <section className="py-20 text-center px-6 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto">

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold">
            Gestionale per società sportiva
          </h1>

          <p className="mt-6 text-lg text-gray-700">
            Se gestisci una società sportiva e vuoi smettere di usare Excel,
            fogli sparsi e software separati, è il momento di passare a un
            gestionale professionale. MaconClub unisce gestione tecnica
            e amministrativa in un unico sistema digitale.
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

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-bold text-center">
            Tutto quello che serve a una società sportiva moderna
          </h2>

          <div className="mt-12 grid md:grid-cols-2 gap-10 text-gray-700">

            <div>
              <h3 className="font-bold text-blue-600 text-xl">
                ⚽ Gestione sportiva
              </h3>
              <p className="mt-4">
                Gestione atleti, gruppi, allenatori, presenze,
                convocazioni e comunicazioni digitali.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-green-600 text-xl">
                📊 Gestione amministrativa
              </h3>
              <p className="mt-4">
                Pagamenti, ricevute fiscali, libro soci,
                prima nota e bilancio integrati.
              </p>
            </div>

          </div>

        </div>
      </section>

      <section className="py-20 bg-gray-50 text-center px-6">
        <div className="max-w-3xl mx-auto">

          <h2 className="text-3xl font-bold">
            Porta la tua società sportiva a un livello superiore
          </h2>

          <p className="mt-6 text-lg text-gray-700">
            Con MaconClub elimini la gestione frammentata e
            centralizzi tutto in un unico gestionale.
          </p>

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

      <DemoModal
        open={showDemoForm}
        onClose={() => setShowDemoForm(false)}
      />

    </main>
  );
}