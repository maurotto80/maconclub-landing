//SoftwareGestionaleASDClient.tsx
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

      {/* CONFRONTO CON EXCEL */}
<section className="py-20 px-6 bg-white">
  <div className="max-w-4xl mx-auto">

    <h2 className="text-3xl font-bold text-center">
      Perché Excel non è più sufficiente per gestire una ASD
    </h2>

    <p className="mt-6 text-lg text-gray-700">
      Molte associazioni sportive dilettantistiche utilizzano ancora Excel
      per gestire quote, soci e pagamenti. Tuttavia, un foglio di calcolo
      non è progettato per gestire convocazioni, presenze, ricevute fiscali
      e bilanci in modo integrato.
    </p>

    <p className="mt-4 text-gray-700">
      Con un software gestionale per ASD come MaconClub,
      tutti i dati sono collegati tra loro: quando registri un pagamento,
      puoi generare automaticamente la ricevuta fiscale e aggiornare
      la prima nota senza inserimenti manuali.
    </p>

  </div>
</section>

{/* COME SCEGLIERE UN SOFTWARE PER ASD */}
<section className="py-20 bg-gray-50 px-6">
  <div className="max-w-4xl mx-auto">

    <h2 className="text-3xl font-bold text-center">
      Come scegliere il miglior software gestionale per ASD
    </h2>

    <p className="mt-6 text-lg text-gray-700">
      Quando scegli un programma gestionale per associazione sportiva,
      verifica che includa:
    </p>

    <ul className="mt-6 space-y-3 text-gray-700 text-lg">
      <li>• Gestione completa degli atleti</li>
      <li>• Calendari e convocazioni digitali</li>
      <li>• Pagamenti rateizzati</li>
      <li>• Ricevute fiscali in PDF</li>
      <li>• Libro soci digitale</li>
      <li>• Prima nota integrata</li>
    </ul>

    <p className="mt-6 text-gray-700">
      Un vero software gestionale per ASD deve unire
      gestione sportiva e amministrativa. Separare i sistemi
      significa aumentare errori e perdita di tempo.
    </p>

  </div>
</section>

{/* ERRORI COMUNI NELLA GESTIONE ASD */}
<section className="py-20 px-6 bg-white">
  <div className="max-w-4xl mx-auto">

    <h2 className="text-3xl font-bold text-center">
      Errori comuni nella gestione delle associazioni sportive
    </h2>

    <p className="mt-6 text-lg text-gray-700">
      Molte ASD commettono errori organizzativi che possono
      compromettere la gestione amministrativa:
    </p>

    <ul className="mt-6 space-y-3 text-gray-700 text-lg">
      <li>• Ricevute non collegate ai pagamenti</li>
      <li>• Libro soci non aggiornato</li>
      <li>• Prima nota incompleta</li>
      <li>• Dati sparsi su più software</li>
      <li>• Comunicazioni non tracciate</li>
    </ul>

    <p className="mt-6 text-gray-700">
      Utilizzare un software gestionale per ASD professionale
      permette di centralizzare tutto e ridurre drasticamente
      questi problemi.
    </p>

  </div>
</section>
{/* NORMATIVA E OBBLIGHI FISCALI */}
<section className="py-20 bg-gray-50 px-6">
  <div className="max-w-4xl mx-auto">

    <h2 className="text-3xl font-bold text-center">
      Normativa e obblighi fiscali per le ASD
    </h2>

    <p className="mt-6 text-lg text-gray-700">
      Le associazioni sportive dilettantistiche devono rispettare
      obblighi amministrativi e fiscali precisi. Tra questi:
    </p>

    <ul className="mt-6 space-y-3 text-gray-700 text-lg">
      <li>• Tenuta aggiornata del libro soci</li>
      <li>• Tracciabilità delle entrate e uscite</li>
      <li>• Emissione corretta delle ricevute fiscali</li>
      <li>• Rendiconto annuale e bilancio stagionale</li>
      <li>• Corretta archiviazione dei documenti</li>
    </ul>

    <p className="mt-6 text-gray-700">
      Un software gestionale per ASD come MaconClub
      facilita il rispetto di questi obblighi,
      riducendo il rischio di errori amministrativi
      e migliorando la trasparenza della gestione.
    </p>

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
            <button
  onClick={() => setShowDemoForm(true)}
  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold"
>
  Richiedi una demo gratuita
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
      {/* MODALE DEMO */}
      <DemoModal
        open={showDemoForm}
        onClose={() => setShowDemoForm(false)}
      />

    </main>
    </>
  );
}