//app/help/[category]/page.tsx

import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

import {
  helpCategories,
  helpArticles,
} from "@/data/help-content";

type Props = {
  params: Promise<{
    category: string;
  }>;
};

export default async function HelpCategoryPage({
  params,
}: Props) {
  const { category: categorySlug } = await params;

  const category = helpCategories.find(
    (c) => c.slug === categorySlug
  );

  if (!category) {
    notFound();
  }

  // Recupera tutte le guide della categoria selezionata
const articles = helpArticles.filter(
  (article) => article.category === categorySlug
);

  return (
    <main className="bg-gray-50 min-h-screen">

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

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">

          <div className="bg-white rounded-3xl shadow p-10">

            <h2 className="text-2xl font-bold">
              Guide disponibili
            </h2>

            {articles.length === 0 ? (
  <p className="mt-4 text-gray-600">
    Nessuna guida disponibile al momento.
  </p>
) : (
  <div className="mt-8 grid gap-6 md:grid-cols-2">
    {articles.map((article) => (
      <Link
  key={article.slug}
  href={`/help/${categorySlug}/${article.slug}`}
  className="block overflow-hidden rounded-2xl border border-gray-200
             bg-white transition hover:border-blue-400 hover:shadow-lg"
>
  {article.thumbnailUrl ? (
    <div className="relative h-56 w-full bg-gray-100">
      <Image
        src={article.thumbnailUrl}
        alt={article.title}
        fill
        className="object-cover"
      />
    </div>
  ) : (
    <div className="flex h-56 items-center justify-center bg-gray-100 text-5xl">
      🎥
    </div>
  )}

  <div className="p-6">
    <h3 className="text-xl font-bold text-gray-900">
      {article.title}
    </h3>

    <p className="mt-3 text-gray-600">
      {article.description}
    </p>

    <div className="mt-5 font-semibold text-blue-600">
      Guarda il tutorial →
    </div>
  </div>
</Link>
    ))}
  </div>
)}

          </div>

        </div>
      </section>

    </main>
  );
}