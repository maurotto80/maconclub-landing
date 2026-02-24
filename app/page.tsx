"use client";

import React from "react";


export default function Home() {
  const [showDemoForm, setShowDemoForm] = React.useState(false);

const [formData, setFormData] = React.useState({
  nome: "",
  cognome: "",
  email: "",
  organizzazione: "",
  indirizzo: "",
  citta: "",
  cap: "",
  telefono: "",
});

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!formData.nome || !formData.cognome || !formData.email) {
    alert("Compila tutti i campi obbligatori.");
    return;
  }

  try {
    const res = await fetch("/api/demo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
      console.error("❌ /api/demo error:", data);
      alert(data?.error || "Errore durante l'invio. Riprova.");
      return;
    }

    alert("✅ Richiesta inviata! Ti contatteremo a breve.");
    setShowDemoForm(false);

    setFormData({
      nome: "",
      cognome: "",
      email: "",
      organizzazione: "",
      indirizzo: "",
      citta: "",
      cap: "",
      telefono: "",
    });
  } catch (err) {
    console.error("❌ fetch /api/demo failed:", err);
    alert("Errore di rete durante l'invio. Riprova.");
  }
};
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
  L’unica piattaforma in Italia<br />
  che unisce <span className="text-blue-400">gestione sportiva</span> e
  <span className="text-green-400"> gestione amministrativa</span>
</h1>

<p className="mt-6 text-lg max-w-2xl">
  Allenamenti, convocazioni, presenze, pagamenti, ricevute fiscali,
  libro soci, prima nota, bilanci e gestione collaboratori.
  Tutto in un unico sistema professionale.
</p>

    <div className="mt-8 flex gap-4 flex-wrap">
      <button
  onClick={() => setShowDemoForm(true)}
  className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 font-semibold"
>
  Richiedi una demo gratuita
</button>

      <a
        href="https://wa.me/393351004423"
        className="px-6 py-3 rounded-xl bg-white text-black font-semibold hover:bg-gray-200"
      >
        WhatsApp: +39 335 100 4423
      </a>
    </div>
  </div>
</section>

<section className="py-20 bg-gray-50">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-4xl font-bold">
      Non è solo un gestionale sportivo.
    </h2>

    <p className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto">
      MaconClub 2.0 integra la gestione tecnica della tua ASD con
      la parte amministrativa e fiscale: ricevute, prima nota,
      libro soci, verbali, collaboratori e bilanci stagionali.
      Nessun altro software in Italia offre tutto questo in un’unica piattaforma.
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
  Tutta la tua ASD a partire da <span className="text-blue-600">19€/mese</span>
</h2>

<p className="mt-4 text-lg text-gray-700">
  Nessun software separato. Nessun costo nascosto.
  Un’unica piattaforma completa.
</p>

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
  className="max-w-6xl mx-auto px-6 py-20 text-center"
>
  <h2 className="text-3xl md:text-4xl font-bold">
    MaconService: Tecnologia affidabile per lo sport italiano
  </h2>

  <p className="mt-6 text-gray-700 leading-relaxed max-w-3xl mx-auto">
    MaconClub è una soluzione creata da MaconService per aiutare le società sportive
    a digitalizzare la gestione quotidiana: atleti, genitori, allenamenti,
    pagamenti e comunicazioni in modo semplice e moderno.
  </p>
</section>

      {showDemoForm && (
  <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4">
    <div className="bg-white rounded-2xl p-8 w-full max-w-xl relative">

      <button
        onClick={() => setShowDemoForm(false)}
        className="absolute top-4 right-4 text-gray-500 hover:text-black"
      >
        ✕
      </button>

      <h2 className="text-2xl font-bold mb-6 text-center">
        Richiedi una Demo Gratuita
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          name="nome"
          placeholder="Nome *"
          value={formData.nome}
          onChange={handleChange}
          className="w-full border rounded-lg p-3"
          required
        />

        <input
          name="cognome"
          placeholder="Cognome *"
          value={formData.cognome}
          onChange={handleChange}
          className="w-full border rounded-lg p-3"
          required
        />

        <input
          name="email"
          type="email"
          placeholder="Email *"
          value={formData.email}
          onChange={handleChange}
          className="w-full border rounded-lg p-3"
          required
        />

        <input
          name="organizzazione"
          placeholder="Nome Organizzazione ASD"
          value={formData.organizzazione}
          onChange={handleChange}
          className="w-full border rounded-lg p-3"
        />

        <input
          name="indirizzo"
          placeholder="Indirizzo sede"
          value={formData.indirizzo}
          onChange={handleChange}
          className="w-full border rounded-lg p-3"
        />

        <div className="grid grid-cols-2 gap-4">
          <input
            name="citta"
            placeholder="Città"
            value={formData.citta}
            onChange={handleChange}
            className="border rounded-lg p-3"
          />
          <input
            name="cap"
            placeholder="CAP"
            value={formData.cap}
            onChange={handleChange}
            className="border rounded-lg p-3"
          />
        </div>

        <input
          name="telefono"
          placeholder="Telefono"
          value={formData.telefono}
          onChange={handleChange}
          className="w-full border rounded-lg p-3"
        />

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-xl"
        >
          Invia richiesta
        </button>

      </form>
    </div>
  </div>
)}

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
