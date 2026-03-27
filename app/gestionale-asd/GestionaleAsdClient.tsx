"use client";

import React from "react";
import DemoModal from "@/components/DemoModal";

export default function GestionaleAsdClient() {
  const [showDemoForm, setShowDemoForm] = React.useState(false);

  return (
    <main className="bg-white text-gray-900">

      {/* HERO */}
      <section className="py-20 text-center px-6 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto">

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold">
            Gestionale per ASD
          </h1>

          <p className="mt-6 text-lg text-gray-700">
            MaconClub è il gestionale per ASD progettato per
            semplificare la gestione sportiva e amministrativa
            delle associazioni sportive dilettantistiche.
            Un’unica piattaforma per atleti, allenamenti,
            pagamenti, ricevute fiscali e contabilità.
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
            Gestione completa degli atleti
          </h2>

          <p className="mt-6 text-lg text-gray-700">
            Gestisci anagrafiche atleti, categorie, squadre
            e stato documentazione direttamente dal gestionale.
            Certificati medici, presenze agli allenamenti
            e convocazioni sempre sotto controllo.
          </p>

        </div>
      </section>


      {/* PAGAMENTI */}
      <section className="py-20 bg-gray-50 px-6">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-3xl font-bold text-center">
            Pagamenti e ricevute per ASD
          </h2>

          <p className="mt-6 text-lg text-gray-700">
            Gestisci quote associative, rate e ricevute fiscali
            direttamente dal gestionale.
            Ogni pagamento viene registrato automaticamente
            nella contabilità della tua associazione sportiva.
          </p>

        </div>
      </section>


      {/* ALLENAMENTI */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-3xl font-bold text-center">
            Allenamenti, convocazioni e presenze
          </h2>

          <p className="mt-6 text-lg text-gray-700">
            Organizza allenamenti, partite e convocazioni
            con calendari digitali.
            Allenatori e genitori ricevono notifiche
            direttamente dall’app.
          </p>

        </div>
      </section>


      {/* AMMINISTRAZIONE */}
      <section className="py-20 bg-gray-50 px-6">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-3xl font-bold text-center">
            Gestione amministrativa e contabile
          </h2>

          <p className="mt-6 text-lg text-gray-700">
            Oltre alla gestione sportiva,
            MaconClub include strumenti amministrativi
            per la gestione di libro soci,
            ricevute fiscali e prima nota.
          </p>

        </div>
      </section>


      {/* VANTAGGI */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-3xl font-bold text-center">
            I vantaggi di un gestionale per ASD
          </h2>

          <ul className="mt-8 space-y-3 text-lg text-gray-700">
            <li>• Gestione centralizzata della società sportiva</li>
            <li>• Riduzione degli errori manuali</li>
            <li>• Comunicazioni più veloci con atleti e genitori</li>
            <li>• Controllo completo delle attività sportive</li>
          </ul>

        </div>
      </section>


      {/* CTA */}
      <section className="py-20 text-center px-6">
        <div className="max-w-3xl mx-auto">

          <h2 className="text-3xl font-extrabold">
            Scopri il gestionale per ASD MaconClub
          </h2>

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


      {/* LINKING SEO */}
      <section className="py-20 bg-gray-50 px-6">
        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-3xl font-bold">
            Scopri anche
          </h2>

          <div className="mt-10 grid md:grid-cols-2 gap-8 text-left">

            <div className="bg-white p-8 rounded-2xl shadow">
              <h3 className="text-xl font-bold text-blue-600">
                Gestionale società sportiva
              </h3>
              <a
                href="/gestionale-societa-sportiva"
                className="inline-block mt-6 text-blue-600 font-semibold underline"
              >
                Scopri di più →
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
                Vai alla contabilità →
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