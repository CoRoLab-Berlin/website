export const locales = ["en", "de"] as const;
export type Lang = (typeof locales)[number];
export const defaultLang: Lang = "en";

export function isLang(x: string): x is Lang {
  return (locales as readonly string[]).includes(x);
}
