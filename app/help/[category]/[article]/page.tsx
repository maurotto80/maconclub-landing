
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  helpCategories,
  helpArticles,
} from "@/data/help-content";

type Props = {
  params: Promise<{
    category: string;
    article: string;
  }>;
};

export default async function HelpArticlePage({
  params,
}: Props) {
  const { category, article } = await params;

  // Recupera la categoria
  const selectedCategory = helpCategories.find(
    (item) => item.slug === category
  );

  // Recupera il tutorial
  const selectedArticle = helpArticles.find(
    (item) =>
      item.category === category &&
      item.slug === article
  );

  if (!selectedCategory || !selectedArticle) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50">

      {/* HERO */}
      <section className="bg-blue-600 py-12 text-white">
        <div className="mx-auto max-w-5xl px-6">

          <Link
            href={`/help/${category}`}
            className="text-blue-100 hover:text-white"
          >
            ← Torna a {selectedCategory.title}
          </Link>

          <div className="mt-6 text-sm text-blue-100">
            {selectedCategory.emoji}{" "}
            {selectedCategory.title}
          </div>

          <h1 className="mt-3 text-3xl font-extrabold md:text-4xl">
            {selectedArticle.title}
          </h1>

          <p className="mt-4 text-lg text-blue-100">
            {selectedArticle.description}
          </p>

        </div>
      </section>

      {/* CONTENUTO */}
      <section className="py-12">
        <div className="mx-auto max-w-5xl px-6">

          <div className="overflow-hidden rounded-3xl bg-white shadow">

            {/* PLAYER VIDEO */}
            {selectedArticle.videoUrl && (
              <div className="aspect-video bg-black">
                <iframe
                  src={selectedArticle.videoUrl}
                  title={selectedArticle.title}
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            )}

            {/* DESCRIZIONE */}
            <div className="p-6 md:p-10">

              <h2 className="text-2xl font-bold text-gray-900">
                Informazioni sul tutorial
              </h2>

              <p className="mt-4 text-gray-600">
                {selectedArticle.description}
              </p>

              {/* FAQ */}
              {selectedArticle.faq &&
                selectedArticle.faq.length > 0 && (
                  <div className="mt-10">

                    <h2 className="text-2xl font-bold text-gray-900">
                      Domande frequenti
                    </h2>

                    <div className="mt-5 space-y-4">
                      {selectedArticle.faq.map((item, index) => (
                        <div
                          key={index}
                          className="rounded-xl border border-gray-200 p-5"
                        >
                          <h3 className="font-semibold text-gray-900">
                            {item.question}
                          </h3>

                          <p className="mt-2 text-gray-600">
                            {item.answer}
                          </p>
                        </div>
                      ))}
                    </div>

                  </div>
                )}

              <div className="mt-10 border-t border-gray-200 pt-6">
                <Link
                  href={`/help/${category}`}
                  className="font-semibold text-blue-600 hover:underline"
                >
                  ← Visualizza tutte le guide di {selectedCategory.title}
                </Link>
              </div>

            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
