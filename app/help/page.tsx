//app/help/page.tsx

import Link from "next/link";

import {
  helpCategories,
  helpArticles,
} from "@/data/help-content";


// =====================================================
// 🎥 CONTATORE VIDEO PER CATEGORIA
// =====================================================

const videoCountByCategory = helpArticles.reduce<
  Record<string, number>
>((counts, article) => {

  if (article.videoUrl) {
    counts[article.category] =
      (counts[article.category] || 0) + 1;
  }

  return counts;

}, {});

// =====================================================
// 📚 CATEGORIE CON VIDEO PRIMA DELLE ALTRE
// =====================================================

const sortedCategories = [...helpCategories].sort((a, b) => {
  const countA = videoCountByCategory[a.slug] || 0;
  const countB = videoCountByCategory[b.slug] || 0;

  return Number(countB > 0) - Number(countA > 0);
});

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

            {sortedCategories.map((item) => {

  const videoCount =
    videoCountByCategory[item.slug] || 0;

  return (
    <Link
      key={item.slug}
      href={`/help/${item.slug}`}
      className="bg-white rounded-2xl shadow
                 hover:shadow-lg transition p-6"
    >

      <div className="flex items-center justify-between gap-3">

        <div className="text-4xl">
          {item.emoji}
        </div>

        {videoCount > 0 && (
          <span
            className="bg-blue-100 text-blue-700
                       text-xs font-bold px-3 py-1
                       rounded-full whitespace-nowrap"
          >
            🎥 {videoCount} {videoCount === 1 ? "video" : "video"}
          </span>
        )}

      </div>

      <h2 className="mt-4 text-xl font-bold text-gray-900">
        {item.title}
      </h2>

      {videoCount > 0 ? (
        <p className="mt-2 text-gray-600">
          {videoCount}{" "}
          {videoCount === 1
            ? "tutorial disponibile"
            : "tutorial disponibili"}
        </p>
      ) : (
        <p className="mt-2 text-gray-400">
          Tutorial in preparazione
        </p>
      )}

    </Link>
  );

})}

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

 <div className="mt-2 flex justify-center gap-4">
  <a
    href="/privacy"
    className="underline text-gray-300 hover:text-white"
  >
    Privacy Policy
  </a>

  <a
    href="/terms"
    className="underline text-gray-300 hover:text-white"
  >
    Termini e Condizioni
  </a>
</div>
</footer>

    </main>
  );
}