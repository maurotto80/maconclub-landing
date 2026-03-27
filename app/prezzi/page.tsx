import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prezzi MaconClub | Software gestionale per ASD e società sportive",
  description:
  "Prezzi MaconClub: software gestionale per ASD e società sportive con gestione atleti, allenamenti, pagamenti, ricevute fiscali, libro soci e contabilità integrata.",
};

export default function PricingPage() {
  return (
    <main className="bg-white text-gray-900">

      {/* HERO */}
      <section className="bg-blue-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl font-extrabold">
          Prezzi MaconClub
        </h1>

        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Scegli il piano più adatto alla tua associazione sportiva.
          Tutte le funzionalità in un’unica piattaforma.
        </p>
      </section>

      {/* PRICING CARDS */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6">

          {/* BASE */}
          <div className="bg-white p-8 rounded-2xl shadow">
            <h3 className="text-xl font-bold text-blue-600">
              BASE
            </h3>

            <p className="mt-2 text-gray-600">
              Gestione sportiva essenziale
            </p>

            <p className="text-3xl font-extrabold mt-6">
              19€
              <span className="text-sm font-normal text-gray-500">
                /mese
              </span>
            </p>

            <ul className="mt-6 space-y-2 text-gray-700 text-sm">
              <li>✔ Atleti e gruppi</li>
              <li>✔ Allenatori</li>
              <li>✔ Genitori</li>
              <li>✔ Calendario eventi</li>
              <li>✔ Account utenti</li>
              <li>✔ Iscrizioni</li>
            </ul>
          </div>

          {/* PLUS */}
          <div className="bg-white p-8 rounded-2xl shadow border-2 border-blue-600">
            <h3 className="text-xl font-bold text-blue-600">
              PLUS
            </h3>

            <p className="mt-2 text-gray-600">
              Gestione sportiva avanzata
            </p>

            <p className="text-3xl font-extrabold mt-6">
              24€
              <span className="text-sm font-normal text-gray-500">
                /mese
              </span>
            </p>

            <ul className="mt-6 space-y-2 text-gray-700 text-sm">
              <li>✔ Tutto BASE</li>
              <li>✔ Presenze allenamenti</li>
              <li>✔ Sessioni allenamento</li>
              <li>✔ Pagamenti rateizzati</li>
              <li>✔ Ricevute PDF</li>
            </ul>
          </div>

          {/* PRO */}
          <div className="bg-white p-8 rounded-2xl shadow">
            <h3 className="text-xl font-bold text-blue-600">
              PRO
            </h3>

            <p className="mt-2 text-gray-600">
              Comunicazione e media
            </p>

            <p className="text-3xl font-extrabold mt-6">
              29€
              <span className="text-sm font-normal text-gray-500">
                /mese
              </span>
            </p>

            <ul className="mt-6 space-y-2 text-gray-700 text-sm">
              <li>✔ Tutto PLUS</li>
              <li>✔ Album foto</li>
              <li>✔ Comunicazioni interne</li>
              <li>✔ Convocazioni partite</li>
              <li>✔ Notifiche push</li>
            </ul>
          </div>

          {/* ENTERPRISE */}
          <div className="bg-white p-8 rounded-2xl shadow">
            <h3 className="text-xl font-bold text-green-600">
              ENTERPRISE
            </h3>

            <p className="mt-2 text-gray-600">
              Gestione amministrativa completa
            </p>

            <p className="text-3xl font-extrabold mt-6">
              49€
              <span className="text-sm font-normal text-gray-500">
                /mese
              </span>
            </p>

            <ul className="mt-6 space-y-2 text-gray-700 text-sm">
              <li>✔ Tutto PRO</li>
              <li>✔ Prima nota contabile</li>
              <li>✔ Libro soci</li>
              <li>✔ Collaboratori</li>
              <li>✔ Gestione compensi</li>
            </ul>
          </div>

        </div>
      </section>

      {/* PREZZI SOFTWARE GESTIONALE ASD */}
<section className="py-20 bg-white px-6">
  <div className="max-w-4xl mx-auto">

    <h2 className="text-3xl font-bold text-center">
      Quanto costa un software gestionale per ASD
    </h2>

    <p className="mt-6 text-lg text-gray-700 text-center">
      Il costo di un gestionale per associazioni sportive
      dipende dalle funzionalità offerte.
      MaconClub propone diversi piani pensati per
      società sportive di ogni dimensione.
    </p>

    <p className="mt-4 text-gray-700 text-center">
      Dalla gestione di atleti e allenamenti fino
      alla contabilità completa con ricevute fiscali,
      libro soci e prima nota, puoi scegliere il piano
      più adatto alla tua associazione sportiva.
    </p>

  </div>
</section>

      {/* CTA */}
      <section className="py-20 text-center px-6">
        <h2 className="text-3xl font-bold">
          Vuoi vedere MaconClub in azione?
        </h2>

        <p className="mt-4 text-gray-600">
          Richiedi una demo gratuita della piattaforma.
        </p>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <a
            href="mailto:info@maconclub.com"
            className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700"
          >
            Richiedi Demo
          </a>

          <a
  href="https://wa.me/393351004423"
  target="_blank"
  rel="noopener noreferrer"
  className="px-6 py-3 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700"
>
  WhatsApp
</a>
        </div>
      </section>

    </main>
  );
}