import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { z } from "zod";
import { defaultLang, type Lang } from "./i18n";
import * as S from "./schemas";

export const CONTENT_DIR = path.join(process.cwd(), "content");

export type Entry<T> = {
  slug: string;
  data: T;
  body: string;
  /** true if there is no translation yet and the English text is shown */
  fallback: boolean;
};

function readFile(lang: Lang, rel: string) {
  const file = path.join(CONTENT_DIR, lang, rel);
  if (!fs.existsSync(file)) return null;
  return matter(fs.readFileSync(file, "utf8"));
}

/** Parse + validate; throws an error that names the file and field. */
export function parse<T extends z.ZodTypeAny>(
  schema: T,
  lang: string,
  rel: string,
  raw: Record<string, unknown>,
): z.infer<T> {
  const r = schema.safeParse(raw);
  if (!r.success) {
    const msgs = r.error.issues
      .map((i) => `  - field "${i.path.join(".") || "(top)"}": ${i.message}`)
      .join("\n");
    throw new Error(`Content error in content/${lang}/${rel}\n${msgs}`);
  }
  return r.data;
}

function load<T extends z.ZodTypeAny>(schema: T, lang: Lang, rel: string) {
  let fm = readFile(lang, rel);
  let fallback = false;
  if (!fm && lang !== defaultLang) {
    fm = readFile(defaultLang, rel);
    fallback = true;
  }
  if (!fm) return null;
  const usedLang = fallback ? defaultLang : lang;
  return {
    data: parse(schema, usedLang, rel, fm.data) as z.infer<T>,
    body: fm.content.trim(),
    fallback,
  };
}

/** All slugs that exist in any language (so a page never disappears). */
function slugs(dir: string): string[] {
  const set = new Set<string>();
  for (const l of fs.readdirSync(CONTENT_DIR)) {
    const d = path.join(CONTENT_DIR, l, dir);
    if (!fs.existsSync(d)) continue;
    for (const f of fs.readdirSync(d))
      if (f.endsWith(".md") && !f.startsWith("_")) set.add(f.replace(/\.md$/, ""));
  }
  return [...set].sort();
}

export function getSite(lang: Lang): S.Site {
  const r = load(S.site, lang, "site.md");
  if (!r) throw new Error(`content/${lang}/site.md is missing`);
  return r.data;
}

export function getSection(lang: Lang, name: string) {
  return load(S.section, lang, `${name}/_index.md`);
}

export function getPage<T extends z.ZodTypeAny>(schema: T, lang: Lang, rel: string) {
  return load(schema, lang, rel);
}

export function getCollection<N extends S.CollectionName>(
  name: N,
  lang: Lang,
): Entry<z.infer<(typeof S.collections)[N]>>[] {
  const schema = S.collections[name];
  const out: Entry<z.infer<(typeof S.collections)[N]>>[] = [];
  for (const slug of slugs(name)) {
    const r = load(schema, lang, `${name}/${slug}.md`);
    if (r) out.push({ slug, ...r } as Entry<z.infer<(typeof S.collections)[N]>>);
  }
  return out;
}

export function getEntry<N extends S.CollectionName>(name: N, lang: Lang, slug: string) {
  return getCollection(name, lang).find((e) => e.slug === slug) ?? null;
}

export function allSlugs(name: S.CollectionName) {
  return slugs(name);
}

type WithOrder = { order?: number };
const byOrder = <T extends { data: WithOrder; slug: string }>(a: T, b: T) =>
  (a.data.order ?? 1e6) - (b.data.order ?? 1e6) || a.slug.localeCompare(b.slug);

export function sortByOrder<T extends { data: WithOrder; slug: string }>(list: T[]) {
  return [...list].sort(byOrder);
}

/** Team: grouped by role (order from team/_index.md), then by surname. */
export function getTeamGroups(lang: Lang) {
  const members = getCollection("team", lang);
  const roles = getSection(lang, "team")?.data.roles ?? [];
  const surname = (n: string) => n.trim().split(/\s+/).slice(-1)[0];
  const rank = (r: string) => {
    const i = roles.indexOf(r);
    return i === -1 ? roles.length : i;
  };
  const sorted = [...members].sort(
    (a, b) =>
      rank(a.data.role) - rank(b.data.role) ||
      (a.data.order ?? 1e6) - (b.data.order ?? 1e6) ||
      surname(a.data.name).localeCompare(surname(b.data.name)),
  );
  const groups: { role: string; members: typeof members }[] = [];
  for (const m of sorted) {
    const g = groups.find((x) => x.role === m.data.role);
    if (g) g.members.push(m);
    else groups.push({ role: m.data.role, members: [m] });
  }
  return groups;
}
