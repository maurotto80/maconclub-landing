"use client";

import React from "react";
import DemoModal from "@/components/DemoModal";

export default function HomeClient() {

  const [showDemoForm, setShowDemoForm] = React.useState(false);

  return (
    <main className="bg-white text-gray-900">

      {/* HERO */}
      <section className="relative bg-[url('/hero.jpg')] bg-cover bg-center min-h-[90vh]">

        <div className="absolute inset-0 bg-black/60 z-0" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 lg:py-28 text-white">

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
            Software gestionale per <strong>ASD e società sportive</strong>
          </h1>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">

            <button
              onClick={() => setShowDemoForm(true)}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 font-semibold"
            >
              Richiedi una demo gratuita
            </button>

            <a
              href="https://wa.me/393351004423"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white text-black font-semibold hover:bg-gray-200 text-center"
            >
              WhatsApp: +39 335 100 4423
            </a>

          </div>

        </div>
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
  MaconClub è un software gestionale per ASD e società sportive
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
      Powered by <a
  href="https://www.maconservice.com"
  target="_blank"
  rel="noopener noreferrer"
>MaconService.com</a>
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

      <DemoModal
        open={showDemoForm}
        onClose={() => setShowDemoForm(false)}
      />

    </main>
  );
}