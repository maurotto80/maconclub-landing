//app/page.tsx

import DemoForm from "@/components/DemoForm";

export default function Home() {
  return (
  <main className="bg-white text-gray-900">

  

      {/* HERO */}
<section className="relative bg-[url('/hero.jpg')] bg-cover bg-center min-h-[90vh]">

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/60" />

  
  {/* HERO CONTENT */}
  <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 lg:py-28 text-white">
  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
  Software gestionale per ASD sportive:<br />
  <span className="text-blue-400">gestione sportiva</span> e
  <span className="text-green-400"> amministrativa</span> in un’unica piattaforma
</h1>

<p className="mt-6 text-base sm:text-lg max-w-2xl">
  Il gestionale completo per associazioni sportive dilettantistiche.
  Allenamenti, convocazioni, presenze, pagamenti, ricevute fiscali,
  libro soci, prima nota, bilanci e gestione collaboratori.
  Tutto in un unico sistema professionale.
</p>

    <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
      <DemoForm />

      <a
        href="https://wa.me/393351004423"
        className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white text-black font-semibold hover:bg-gray-200 text-center"
      >
        WhatsApp: +39 335 100 4423
      </a>
    </div>
  </div>
</section>

<section className="py-20 bg-gray-50">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
      Non è solo un gestionale sportivo.
    </h2>

    <p className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto">
  MaconClub 2.0 integra la gestione tecnica della tua ASD con
  la parte amministrativa e fiscale: ricevute, prima nota,
  libro soci, verbali, collaboratori e bilanci stagionali.
  Nessun altro software in Italia offre tutto questo in un’unica piattaforma.

  <br /><br />

  Approfondisci il nostro{" "}
  <a
    href="/software-gestionale-asd"
    className="text-blue-600 font-semibold underline hover:text-blue-800"
  >
    software gestionale per ASD sportive
  </a>{" "}
  oppure scopri il gestionale completo per{" "}
  <a
    href="/gestionale-societa-sportiva"
    className="text-blue-600 font-semibold underline hover:text-blue-800"
  >
    società sportive
  </a>.
</p>

    <div className="mt-12 grid md:grid-cols-2 gap-8 text-left">
      <div className="bg-white p-8 rounded-2xl shadow">
        <h3 className="text-xl font-bold text-blue-600">
          ⚽ Gestione Sportiva
        </h3>
        <ul className="mt-4 space-y-2 text-gray-700">
          <li>• Atleti, gruppi e allenatori</li>
          <li>• Calendari e convocazioni</li>
          <li>• Presenze e comunicazioni</li>
          <li>• Pagamenti rateizzati e voucher</li>
        </ul>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow">
        <h3 className="text-xl font-bold text-green-600">
          📊 Gestione Amministrativa & Fiscale
        </h3>
        <ul className="mt-4 space-y-2 text-gray-700">
          <li>• Prima nota automatica</li>
          <li>• Libro soci e verbali CDA</li>
          <li>• Ricevute fiscali con PDF</li>
          <li>• Bilancio stagionale e annuale</li>
        </ul>
      </div>
    </div>
  </div>
</section>


      {/* FEATURES */}
     <section
  id="funzioni"
  className="relative py-20"
>
  <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center">
          Cosa puoi fare con <span className="text-blue-600">MaconClub</span>
        </h2>

        {/* Cards Container Background */}
<div className="mt-12 bg-blue-50 rounded-3xl p-5 sm:p-8 lg:p-10 shadow-inner">

  <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Organizzare allenamenti e partite",
              desc: "Calendario completo per eventi e convocazioni.",
            },
            {
              title: "Gestire pagamenti e ricevute",
              desc: "Quote associative, rate e ricevute automatiche.",
            },
            {
              title: "Comunicare con i genitori",
              desc: "Area dedicata e notifiche push immediate.",
            },
            {
              title: "Inviare messaggi rapidi",
              desc: "Chat e comunicazioni interne per tutto il club.",
            },
            {
              title: "Archiviare documenti atleta",
              desc: "Certificati, visite mediche e file sempre disponibili.",
            },
           {
              title: "Sport + Contabilità integrati",
              desc: "Tecnico e amministrativo nello stesso ecosistema digitale."
            }
          ].map((f, i) => (
            <div
              key={i}
              className="rounded-2xl shadow-lg border p-6 hover:scale-[1.02] transition"
            >
              <h3 className="font-bold text-xl">{f.title}</h3>
              <p className="mt-3 text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
          </div>

        {/* APP PREVIEW IMAGE */}
<div className="mt-16 flex justify-center">
  <div className="bg-blue-600/90 p-4 sm:p-6 lg:p-8 rounded-3xl shadow-2xl w-full max-w-5xl">
    <img
      src="/app-preview.png"
      alt="Anteprima MaconClub"
      className="rounded-2xl w-full h-auto"
    />
  </div>
</div>

        </div>

  {/* Background blu sotto */}
  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-b from-white to-blue-100 -z-10" />
</section>

      {/* PRICING */}
<section
 id="prezzi"
 className="bg-blue-50 py-20 text-center px-6"
>

<h2 className="text-3xl sm:text-4xl font-extrabold">
  Tutta la tua ASD da <span className="text-blue-600">19€/mese</span>
</h2>

<p className="mt-4 text-lg text-gray-700">
  Un'unica piattaforma per gestione sportiva e amministrativa.
</p>

<a
 href="/prezzi"
 className="inline-block mt-8 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg"
>
 Scopri i piani e prezzi
</a>
<p className="mt-4 text-sm text-gray-500">
  Piani a partire da 19€/mese • Nessun costo di installazione
</p>

<p className="mt-4 text-lg text-gray-700">
  MaconClub è il software gestionale per ASD sportive
  con prezzi accessibili: gestione atleti, allenamenti,
  pagamenti, ricevute fiscali e contabilità in un unico sistema.
</p>

        <p className="mt-4 text-lg text-gray-700">
          Richiedi una demo gratuita e scopri tutte le funzionalità.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
          <a
            href="mailto:info@maconclub.com"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold"
          >
            Scrivici: info@maconclub.com
          </a>

          <a
            href="https://wa.me/393351004423"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-green-600 hover:bg-green-700 text-white font-semibold"
          >
            WhatsApp Demo
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section
  id="chi-siamo"
  className="py-24 bg-gradient-to-b from-white to-blue-50"
>
  <div className="max-w-4xl mx-auto px-6 text-center">

    <div className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm mb-6">
      Powered by <a href="https://www.maconservice.com" target="_blank">MaconService.com</a>
    </div>

    <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
      Tecnologia affidabile per lo sport italiano
    </h2>

    <p className="mt-8 text-lg text-gray-700 leading-relaxed">
      MaconClub è la piattaforma sviluppata da <strong> MaconService </strong> per portare le società sportive nel futuro digitale.
      Un ecosistema completo che unisce gestione tecnica,
      amministrativa e fiscale in un unico sistema professionale.
    </p>

    <p className="mt-6 text-gray-600">
      Il nostro obiettivo è semplice: eliminare fogli Excel,
      software separati e gestione frammentata.
      Con MaconClub hai tutto sotto controllo, in un’unica piattaforma.
    </p>

  </div>
</section>

     

{/* DOWNLOAD APP */}
<section className="bg-gray-100 py-16 px-6">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
      Scarica l’App MaconClub
    </h2>

    <p className="mt-3 text-gray-600">
      Disponibile su iPhone e Android
    </p>

    <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
      
      {/* Apple App Store */}
      <a
        href="https://apps.apple.com/it/app/maconclub/id6757656386"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full sm:w-auto"
      >
        <img
          src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
          alt="Scarica su App Store"
          className="h-14 w-auto mx-auto hover:scale-105 transition"
        />
      </a>

      {/* Google Play */}
      <a
        href="https://play.google.com/store/apps/details?id=com.maconclub.maconclub&pcampaignid=web_share"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full sm:w-auto"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
          alt="Disponibile su Google Play"
          className="h-14 w-auto mx-auto hover:scale-105 transition"
        />
      </a>

    </div>
  </div>
</section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-10 text-center">
        <p className="font-semibold">MaconClub © {new Date().getFullYear()}</p>
        <p className="mt-2">
          Contatti:{" "}
          <a className="underline" href="mailto:info@maconclub.com">
            info@maconclub.com
          </a>
        </p>
      </footer>
    </main>
  );
}
