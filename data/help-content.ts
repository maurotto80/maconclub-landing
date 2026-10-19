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
    // =====================================================
  // 📝 ISCRIZIONE ONLINE - COMPILAZIONE MODULO
  // =====================================================
  {
    category: "iscrizione-online",
    slug: "compilazione-iscrizione-online",

    title: "Come compilare l'Iscrizione Online",

    description:
      "Scopri come compilare il modulo di iscrizione online " +
      "di MaconClub e inviare correttamente la richiesta " +
      "alla tua associazione sportiva.",

    keywords: [
      "iscrizione online",
      "compilazione iscrizione",
      "modulo iscrizione",
      "iscrizione atleta",
      "genitore",
      "tutore",
      "richiesta iscrizione",
      "registrazione atleta",
    ],

    videoUrl: "https://www.youtube.com/embed/OBpYNe7mP80",

    thumbnailUrl:
      "/help/thumbnails/compilazione-iscrizione-online.png",
  },
  // =====================================================
// 📝 ISCRIZIONE ONLINE - APPROVAZIONE ADMIN
// =====================================================
{
  category: "iscrizione-online",
  slug: "approvazione-iscrizione-online",

  title: "Come approvare un'Iscrizione Online",

  description:
    "Scopri come visualizzare, verificare e approvare " +
    "le richieste di iscrizione online ricevute dalla tua " +
    "ASD attraverso il pannello amministrativo MaconClub.",

  keywords: [
    "approvazione iscrizione",
    "iscrizione online",
    "admin",
    "amministratore ASD",
    "iscrizioni in attesa",
    "verifica iscrizione",
    "approva atleta",
    "gestione iscrizioni",
  ],

  videoUrl:
    "https://www.youtube.com/embed/kFgB8k8mLPI",

  thumbnailUrl:
    "/help/thumbnails/approvazione-iscrizione-online.png",
},
// =====================================================
// 👥 GRUPPI - CREAZIONE NUOVO GRUPPO
// =====================================================
{
  category: "gruppi",
  slug: "creazione-nuovo-gruppo",

  title: "Come creare un nuovo Gruppo",

  description:
    "Scopri come creare un nuovo gruppo sportivo " +
    "all'interno di MaconClub, compilare le informazioni " +
    "richieste e organizzare le attività della tua ASD.",

  keywords: [
    "gruppi",
    "nuovo gruppo",
    "creazione gruppo",
    "gestione gruppi",
    "amministratore ASD",
    "organizzazione atleti",
    "gruppi sportivi",
  ],

  videoUrl:
    "https://www.youtube.com/embed/VA0wQOEf8qc",

  thumbnailUrl:
    "/help/thumbnails/creazione-nuovo-gruppo.png",
},
// =====================================================
// 👨‍🏫 GRUPPI - ASSEGNAZIONE ALLENATORI
// =====================================================
{
  category: "gruppi",
  slug: "assegnazione-allenatori",

  title: "Come assegnare gli Allenatori a un Gruppo",

  description:
    "Scopri come assegnare uno o più allenatori " +
    "a un gruppo sportivo della tua ASD attraverso " +
    "la piattaforma MaconClub.",

  keywords: [
    "assegnazione allenatori",
    "allenatori gruppo",
    "gestione gruppi",
    "associa allenatore",
    "assegnare allenatori",
    "amministratore ASD",
    "staff tecnico",
  ],

  videoUrl:
    "https://www.youtube.com/embed/OVorPvZKupA",

  thumbnailUrl:
    "/help/thumbnails/assegnazione-allenatori.png",
},
// =====================================================
// 👦 GRUPPI - ASSEGNAZIONE ATLETI
// =====================================================
{
  category: "gruppi",
  slug: "assegnazione-atleti",

  title: "Come assegnare gli Atleti a un Gruppo",

  description:
    "Scopri come assegnare gli atleti già presenti " +
    "in MaconClub a un gruppo sportivo della tua ASD, " +
    "organizzando correttamente le attività sportive.",

  keywords: [
    "assegnazione atleti",
    "atleti gruppo",
    "gestione gruppi",
    "associa atleta",
    "assegnare atleti",
    "amministratore ASD",
    "organizzazione atleti",
  ],

  videoUrl:
    "https://www.youtube.com/embed/9zrsWfnantg",

  thumbnailUrl:
    "/help/thumbnails/assegnazione-atleti.png",
},
];
