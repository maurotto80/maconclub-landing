//app/help/page.tsx

import Link from "next/link";

const categories = [
  { emoji: "🏠", title: "Dashboard", slug: "dashboard" },
  { emoji: "📝", title: "Iscrizione Online", slug: "iscrizione-online" },
  { emoji: "📣", title: "Convocazioni", slug: "convocazioni" },
  { emoji: "📢", title: "Bacheca", slug: "bacheca" },
  { emoji: "📸", title: "Galleria Foto", slug: "galleria-foto" },
  { emoji: "👦", title: "Atleti", slug: "atleti" },
  { emoji: "👨‍🏫", title: "Allenatori", slug: "allenatori" },
  { emoji: "👥", title: "Gruppi", slug: "gruppi" },
  { emoji: "👨‍👩‍👧", title: "Genitori", slug: "genitori" },
  { emoji: "📅", title: "Calendario Allenamenti", slug: "calendario-allenamenti" },
  { emoji: "✅", title: "Presenze Allenamenti", slug: "presenze-allenamenti" },
  { emoji: "📚", title: "Sessioni Allenamenti", slug: "sessioni-allenamenti" },
  { emoji: "💳", title: "Gestione Quote", slug: "gestione-quote" },
  { emoji: "📒", title: "Contabilità", slug: "contabilita" },
  { emoji: "📋", title: "Soci", slug: "soci" },
  { emoji: "👷", title: "Collaboratori", slug: "collaboratori" },
  { emoji: "⚙️", title: "Account", slug: "account" },
];

export default function HelpPage() {
  return (
    <main className="bg-gray-50 min-h-screen">

      {/* HERO */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h1 className="text-4xl md:text-5xl font-extrabold">
            Centro Assistenza MaconClub
          </h1>

          <p className="mt-6 text-lg max-w-3xl mx-auto text-blue-100">
            Guide, tutorial, video e documentazione per utilizzare
            tutte le funzionalità di MaconClub.
          </p>

          {/* Ricerca (step successivo) */}
          <div className="mt-10 max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="🔎 Cerca una funzionalità..."
              disabled
              className="w-full px-5 py-4 rounded-2xl text-gray-700 bg-white"
            />
          </div>

        </div>
      </section>

      {/* CATEGORIE */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {categories.map((item) => (
              <Link
                key={item.slug}
                href={`/help/${item.slug}`}
                className="bg-white rounded-2xl shadow hover:shadow-lg transition p-6"
              >
                <div className="text-4xl">
                  {item.emoji}
                </div>

                <h2 className="mt-4 text-xl font-bold text-gray-900">
                  {item.title}
                </h2>

                <p className="mt-2 text-gray-500">
                  Guide e tutorial dedicati.
                </p>
              </Link>
            ))}

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

  <p className="mt-2">
    <a
      href="/privacy"
      className="underline text-gray-300 hover:text-white"
    >
      Privacy Policy
    </a>
  </p>
</footer>

    </main>
  );
}