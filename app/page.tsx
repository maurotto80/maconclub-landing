export default function Home() {
  return (
    <main className="bg-white text-gray-900">

      {/* HERO */}
<section className="relative bg-[url('/hero.jpg')] bg-cover bg-center min-h-[90vh]">

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/60" />

  {/* NAVBAR */}
  <header className="relative z-10 max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">

    {/* Logo */}
    <div className="flex items-center gap-3">
      <img
        src="/logo.png"
        alt="MaconClub"
        className="w-18 h-18"
      />
      <span className="text-white font-bold text-xl">
        MaconClub
      </span>
    </div>

    {/* Menu */}
    <nav className="hidden md:flex gap-8 text-white font-medium">
      <a href="#funzioni" className="hover:text-blue-300">
        Funzionalità
      </a>
      <a href="#prezzi" className="hover:text-blue-300">
        Prezzi
      </a>
      <a href="#chi-siamo" className="hover:text-blue-300">
        Chi siamo
      </a>
    </nav>

    {/* CTA */}
    <a
      href="https://app.maconclub.com"
      className="px-5 py-2 rounded-xl bg-green-600 hover:bg-green-700 text-white font-semibold"
    >
      Demo
    </a>
  </header>

  {/* HERO CONTENT */}
  <div className="relative z-10 max-w-6xl mx-auto px-6 py-28 text-white">
    <h1 className="text-5xl font-extrabold leading-tight">
      La piattaforma completa <br />
      per gestire la tua ASD
    </h1>

    <p className="mt-6 text-lg max-w-xl">
      Atleti, presenze, pagamenti, comunicazioni e documenti.
      Tutto in un’unica app.
    </p>

    <div className="mt-8 flex gap-4 flex-wrap">
      <a
        href="#demo"
        className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 font-semibold"
      >
        Richiedi una demo gratuita
      </a>

      <a
        href="https://wa.me/393351004423"
        className="px-6 py-3 rounded-xl bg-white text-black font-semibold hover:bg-gray-200"
      >
        WhatsApp: +39 335 100 4423
      </a>
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
<div className="mt-12 bg-blue-50 rounded-3xl p-10 shadow-inner">

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
              title: "Gestione completa ASD",
              desc: "Un unico sistema per società sportive moderne.",
            },
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
  <div className="bg-blue-600/90 p-8 rounded-3xl shadow-2xl">
    <img
      src="/app-preview.png"
      alt="Anteprima MaconClub"
      className="rounded-2xl max-w-4xl w-full"
    />
  </div>
</div>

        </div>

  {/* Background blu sotto */}
  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-b from-white to-blue-100 -z-10" />
</section>

      {/* PRICING */}
      <section id="prezzi"
        className="bg-blue-50 py-20 text-center px-6"
      >
        <h2 className="text-4xl font-extrabold">
          Da <span className="text-blue-600">19€/mese</span>
        </h2>

        <p className="mt-4 text-lg text-gray-700">
          Richiedi una demo gratuita e scopri tutte le funzionalità.
        </p>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <a
            href="mailto:info@maconclub.com"
            className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold"
          >
            Scrivici: info@maconclub.com
          </a>

          <a
            href="https://wa.me/393351004423"
            className="px-6 py-3 rounded-xl bg-green-600 hover:bg-green-700 text-white font-semibold"
          >
            WhatsApp Demo
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section
  id="chi-siamo"
  className="max-w-6xl mx-auto px-6 py-20"
>

        <h2 className="text-3xl font-bold">
          MaconService: Tecnologia affidabile per lo sport italiano
        </h2>

        <p className="mt-6 text-gray-700 leading-relaxed max-w-3xl">
          MaconClub è una soluzione creata da MaconService per aiutare le società sportive
          a digitalizzare la gestione quotidiana: atleti, genitori, allenamenti, pagamenti
          e comunicazioni in modo semplice e moderno.
        </p>
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
