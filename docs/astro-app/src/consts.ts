export const SITE = {
  title: "Raven-Docs",
  description: "description.",
  defaultLanguage: "en-us",
} as const;

export const OPEN_GRAPH = {
  image: {
    src: "https://github.com/daveshap/raven/blob/5ece91ec85fd3cedce727a00b3ef3ea8826938ff/docs/images/raven.jpg",
    alt: "raven logo",
  },
  twitter: "astrodotbuild",
};

export type KnownLanguageCode = keyof typeof KNOWN_LANGUAGES;
export const KNOWN_LANGUAGES = {
  English: "en",
  // Add more languages here
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const GITHUB_EDIT_URL = `https://github.com/withastro/astro/tree/main/examples/docs`;

export const COMMUNITY_INVITE_URL = `https://github.com/daveshap/raven/discussions`;

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
  indexName: "XXXXXXXXXX",
  appId: "XXXXXXXXXX",
  apiKey: "XXXXXXXXXX",
};

export type Sidebar = Record<
  (typeof KNOWN_LANGUAGE_CODES)[number],
  Record<string, { text: string; link: string }[]>
>;
export const SIDEBAR: Sidebar = {
  en: {
    "getting started": [{ text: "Introduction", link: "en/introduction" }],
    Contrubute: [{ text: "how-to", link: "en/contrubute" }],
  },
};
