//app/help/[category]/page.tsx

import Link from "next/link";
import { notFound } from "next/navigation";

import { helpCategories } from "@/data/help-content";

type Props = {
  params: {
    category: string;
  };
};

export default function HelpCategoryPage({ params }: Props) {
  const category = helpCategories.find(
    (c) => c.slug === params.category
  );

  if (!category) {
    notFound();
  }

  return (
    <main className="bg-gray-50 min-h-screen">

      {/* HERO */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">

          <Link
            href="/help"
            className="text-blue-100 hover:text-white"
          >
            ← Torna al Centro Assistenza
          </Link>

          <div className="mt-6 text-6xl">
            {category.emoji}
          </div>

          <h1 className="mt-4 text-4xl font-extrabold">
            {category.title}
          </h1>

          <p className="mt-4 text-blue-100 text-lg">
            Guide, tutorial, immagini e video relativi alla sezione{" "}
            <strong>{category.title}</strong>.
          </p>

        </div>
      </section>

      {/* CONTENUTO */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">

          <div className="bg-white rounded-3xl shadow p-10">

            <h2 className="text-2xl font-bold">
              Guide disponibili
            </h2>

            <p className="mt-4 text-gray-600">
              Nessuna guida disponibile al momento.
            </p>

            <p className="mt-2 text-gray-500">
              I contenuti verranno aggiunti progressivamente con:
            </p>

            <ul className="mt-6 space-y-2 text-gray-700">
              <li>🎥 Video tutorial</li>
              <li>🖼️ Screenshot passo passo</li>
              <li>📄 Guide dettagliate</li>
              <li>❓ FAQ</li>
            </ul>

          </div>

        </div>
      </section>

    </main>
  );
}