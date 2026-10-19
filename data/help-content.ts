//app/data/help-content.ts

export type HelpArticle = {
  category: string;
  slug: string;

  title: string;
  description: string;

  keywords: string[];

  videoUrl?: string;
  thumbnailUrl?: string;

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

export const helpArticles: HelpArticle[] = [
  {
    category: "atleti",
    slug: "creazione-manuale-atleta",

    title: "Come creare manualmente un nuovo atleta",

    description:
      "Scopri come inserire manualmente un nuovo atleta " +
      "nella tua associazione sportiva attraverso MaconClub.",

    keywords: [
      "atleta",
      "nuovo atleta",
      "creazione atleta",
      "inserimento manuale",
      "anagrafica",
      "registrazione atleta",
    ],

    // Inseriremo qui il link del video
        videoUrl: "https://www.youtube.com/embed/X8Jnrejaswo",
    thumbnailUrl: "/help/thumbnails/creazione-manuale-atleta.png",
  },

  // =====================================================
  // ⚙️ ACCOUNT - RAPPRESENTANTE LEGALE
  // =====================================================
  {
    category: "account",
    slug: "rappresentante-legale",

    title: "Come compilare i dati del Rappresentante Legale",

    description:
      "Scopri come inserire correttamente i dati del " +
      "Rappresentante Legale della tua ASD, necessari per " +
      "la successiva firma del contratto MaconClub.",

    keywords: [
      "rappresentante legale",
      "dati rappresentante legale",
      "contratto MaconClub",
      "firma contratto",
      "contratto SaaS",
      "dati societari",
      "account",
    ],

    // Da completare dopo la pubblicazione su YouTube
    videoUrl: "https://www.youtube.com/embed/VdXItCqmn-w",

    thumbnailUrl:
      "/help/thumbnails/rappresentante-legale.png",
  },
];