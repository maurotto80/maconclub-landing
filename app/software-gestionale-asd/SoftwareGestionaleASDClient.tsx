"use client";

import React from "react";
import DemoModal from "@/components/DemoModal";

export default function SoftwareGestionaleASDClient() {
  const [showDemoForm, setShowDemoForm] = React.useState(false);

  return (
    <>
      <main className="bg-white text-gray-900">

      {/* HERO SEO */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white text-center px-6">
        <div className="max-w-4xl mx-auto">

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
            Software gestionale per ASD sportive
          </h1>

          <p className="mt-6 text-lg text-gray-700">
            Se gestisci un’associazione sportiva dilettantistica e stai ancora
            usando Excel, fogli cartacei o software separati, stai perdendo tempo
            e controllo. MaconClub è il gestionale completo per ASD che unisce
            gestione sportiva e amministrativa in un’unica piattaforma.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
           <button
  onClick={() => setShowDemoForm(true)}
  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold"
>
  Richiedi una demo gratuita
</button>

            <a
              href="https://wa.me/393351004423"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-green-600 hover:bg-green-700 text-white font-semibold text-center"
            >
              Parla con noi su WhatsApp
            </a>
          </div>

        </div>
      </section>

      {/* PERCHÉ SCEGLIERE */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-bold text-center">
            Il gestionale completo per società sportive
          </h2>

          <div className="mt-12 grid md:grid-cols-2 gap-10">

            <div>
              <h3 className="text-xl font-bold text-blue-600">
                ⚽ Gestione sportiva professionale
              </h3>
              <ul className="mt-4 space-y-3 text-gray-700">
                <li>• Gestione atleti, gruppi e allenatori</li>
                <li>• Calendari allenamenti e partite</li>
                <li>• Convocazioni digitali</li>
                <li>• Presenze e notifiche push</li>
                <li>• Documenti atleta sempre disponibili</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-green-600">
                📊 Gestione amministrativa e fiscale integrata
              </h3>
              <ul className="mt-4 space-y-3 text-gray-700">
                <li>• Pagamenti rateizzati</li>
                <li>• Ricevute fiscali automatiche PDF</li>
                <li>• Libro soci digitale</li>
                <li>• Prima nota automatica</li>
                <li>• Bilancio stagionale e rendiconto annuale</li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* PROBLEMA VS SOLUZIONE */}
      <section className="py-20 bg-gray-50 px-6">
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-3xl font-bold">
            Basta software separati. Basta caos.
          </h2>

          <p className="mt-6 text-lg text-gray-700">
            Molte ASD utilizzano un programma per la gestione sportiva,
            un altro per la contabilità, Excel per i soci e WhatsApp
            per comunicare. Questo significa errori, dati duplicati
            e perdita di tempo.
          </p>

          <p className="mt-4 text-lg font-semibold text-blue-600">
            MaconClub unisce tutto in un unico ecosistema digitale.
          </p>

        </div>
      </section>

      {/* A CHI È RIVOLTO */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-3xl font-bold text-center">
            A chi è rivolto questo software gestionale per ASD?
          </h2>

          <ul className="mt-10 space-y-4 text-gray-700 text-lg">
            <li>✔ ASD di calcio</li>
            <li>✔ ASD di basket, volley, arti marziali</li>
            <li>✔ Scuole calcio e scuole sportive</li>
            <li>✔ Associazioni sportive dilettantistiche di ogni dimensione</li>
          </ul>

        </div>
      </section>

      {/* FAQ SEO */}
      <section className="py-20 bg-blue-50 px-6">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-3xl font-bold text-center">
            Domande frequenti sul software gestionale per ASD
          </h2>

          <div className="mt-10 space-y-8">

            <div>
              <h3 className="font-bold">
                Quanto costa un software gestionale per ASD?
              </h3>
              <p className="mt-2 text-gray-700">
                MaconClub parte da 19€/mese. Nessun costo nascosto.
              </p>
            </div>

            <div>
              <h3 className="font-bold">
                MaconClub gestisce anche la contabilità?
              </h3>
              <p className="mt-2 text-gray-700">
                Sì. Include prima nota, ricevute fiscali, libro soci e bilancio.
              </p>
            </div>

            <div>
              <h3 className="font-bold">
                È adatto anche a piccole associazioni sportive?
              </h3>
              <p className="mt-2 text-gray-700">
                Assolutamente sì. È progettato per ASD di qualsiasi dimensione.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA FINALE */}
      <section className="py-20 text-center px-6">
        <div className="max-w-3xl mx-auto">

          <h2 className="text-3xl font-extrabold">
            Porta la tua ASD nel futuro digitale
          </h2>

          <p className="mt-6 text-lg text-gray-700">
            Non perdere altro tempo con sistemi frammentati.
            Scegli un gestionale professionale per la tua associazione sportiva.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://app.maconclub.com"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-center"
            >
              Richiedi la demo gratuita
            </a>
          </div>

        </div>
      </section>
      {/* MODALE DEMO */}
      <DemoModal
        open={showDemoForm}
        onClose={() => setShowDemoForm(false)}
      />

    </main>
    </>
  );
}