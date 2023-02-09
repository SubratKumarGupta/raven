import { KNOWN_LANGUAGES, KNOWN_LANGUAGE_CODES } from "./consts";
import type { KnownLanguageCode } from "./consts";

export { KNOWN_LANGUAGES, KNOWN_LANGUAGE_CODES };

export const langPathRegex = /\/([a-z]{2}-?[A-Z]{0,2})\//;

export function getLanguageFromURL(pathname: string) {
  const langCodeMatch = pathname.match(langPathRegex);
  const langCode = langCodeMatch ? langCodeMatch[1] : "en";
  return langCode as (typeof KNOWN_LANGUAGE_CODES)[number];
}

// all RTL languages according to: https://lingohub.com/academy/best-practices/rtl-language-list
const rtlLanguages = [
  "ar",
  "arc",
  "dv",
  "fa",
  "ha",
  "he",
  "khw",
  "ks",
  "ku",
  "ps",
  "ur",
  "yi",
];

export function getIsRtlFromUrl(pathname: string) {
  const language = getLanguageFromURL(pathname);
  switch (language) {
    case "en":
      return getIsRtlFromLangCode("English");
  }
}

export function getIsRtlFromLangCode(language: KnownLanguageCode) {
  if (rtlLanguages.indexOf(language) !== -1) {
    return true;
  }
  return false;
}
