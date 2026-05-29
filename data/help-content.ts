//app/data/help-content.ts

export type HelpArticle = {
  category: string;
  slug: string;

  title: string;
  description: string;

  keywords: string[];

  videoUrl?: string;

  images?: string[];

  faq?: {
    question: string;
    answer: string;
  }[];
};

export const helpCategories = [
  {
    slug: "dashboard",
    title: "Dashboard",
    emoji: "🏠",
  },
  {
    slug: "iscrizione-online",
    title: "Iscrizione Online",
    emoji: "📝",
  },
  {
    slug: "convocazioni",
    title: "Convocazioni",
    emoji: "📣",
  },
  {
    slug: "bacheca",
    title: "Bacheca",
    emoji: "📢",
  },
  {
    slug: "galleria-foto",
    title: "Galleria Foto",
    emoji: "📸",
  },
  {
    slug: "atleti",
    title: "Atleti",
    emoji: "👦",
  },
  {
    slug: "allenatori",
    title: "Allenatori",
    emoji: "👨‍🏫",
  },
  {
    slug: "gruppi",
    title: "Gruppi",
    emoji: "👥",
  },
  {
    slug: "genitori",
    title: "Genitori",
    emoji: "👨‍👩‍👧",
  },
  {
    slug: "calendario-allenamenti",
    title: "Calendario Allenamenti",
    emoji: "📅",
  },
  {
    slug: "presenze-allenamenti",
    title: "Presenze Allenamenti",
    emoji: "✅",
  },
  {
    slug: "sessioni-allenamenti",
    title: "Sessioni Allenamenti",
    emoji: "📚",
  },
  {
    slug: "gestione-quote",
    title: "Gestione Quote",
    emoji: "💳",
  },
  {
    slug: "contabilita",
    title: "Contabilità",
    emoji: "📒",
  },
  {
    slug: "soci",
    title: "Soci",
    emoji: "📋",
  },
  {
    slug: "collaboratori",
    title: "Collaboratori",
    emoji: "👷",
  },
  {
    slug: "account",
    title: "Account",
    emoji: "⚙️",
  },
];

export const helpArticles: HelpArticle[] = [];