/**
 * Validates every file in /content. Run by `npm run build` and by the GitHub
 * check on every change, so a typo can never break the live site.
 */
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { CONTENT_DIR, parse } from "../src/lib/content";
import * as S from "../src/lib/schemas";

const errors: string[] = [];
const warnings: string[] = [];

function check(schema: any, lang: string, rel: string) {
  try {
    const fm = matter(fs.readFileSync(path.join(CONTENT_DIR, lang, rel), "utf8"));
    parse(schema, lang, rel, fm.data);
    return fm;
  } catch (e) {
    errors.push((e as Error).message);
  }
}

const langs = fs.readdirSync(CONTENT_DIR).filter((l) => fs.statSync(path.join(CONTENT_DIR, l)).isDirectory());
const files: Record<string, Set<string>> = {};

for (const lang of langs) {
  files[lang] = new Set();
  const walk = (dir: string) => {
    for (const f of fs.readdirSync(path.join(CONTENT_DIR, lang, dir))) {
      const rel = path.join(dir, f);
      if (fs.statSync(path.join(CONTENT_DIR, lang, rel)).isDirectory()) walk(rel);
      else if (f.endsWith(".md")) files[lang].add(rel);
      else errors.push(`content/${lang}/${rel}: only .md files are allowed in content/`);
    }
  };
  walk("");

  for (const rel of files[lang]) {
    const [first, name] = rel.split(path.sep);
    if (rel === "site.md") check(S.site, lang, rel);
    else if (rel === "pages/home.md") check(S.home, lang, rel);
    else if (first === "pages") check(S.page, lang, rel);
    else if (name === "_index.md") check(S.section, lang, rel);
    else if (first in S.collections) check((S.collections as any)[first], lang, rel);
    else errors.push(`content/${lang}/${rel}: unknown location (folder "${first}")`);
  }
}

// Translation coverage (info only – English is shown if a translation is missing)
for (const rel of files.en ?? []) {
  for (const lang of langs.filter((l) => l !== "en"))
    if (!files[lang].has(rel)) warnings.push(`content/${lang}/${rel} not translated yet (English will be shown)`);
}

// Referenced images exist?
const publicDir = path.join(process.cwd(), "public");
for (const lang of langs)
  for (const rel of files[lang]) {
    const fm = matter(fs.readFileSync(path.join(CONTENT_DIR, lang, rel), "utf8"));
    const refs: string[] = [];
    const visit = (v: unknown) => {
      if (typeof v === "string" && /\.(jpe?g|png|svg|webp|gif|pdf)$/i.test(v) && !/^https?:/.test(v)) refs.push(v);
      else if (Array.isArray(v)) v.forEach(visit);
      else if (v && typeof v === "object") Object.values(v).forEach(visit);
    };
    visit(fm.data);
    for (const m of fm.content.matchAll(/!?\[[^\]]*\]\(([^)\s]+)\)/g))
      if (/\.(jpe?g|png|svg|webp|gif|pdf)$/i.test(m[1]) && !/^https?:/.test(m[1])) refs.push(m[1]);
    for (const r of refs)
    {
      const full = path.join(publicDir, r.replace(/^\/+/, ""));
      const dir = path.dirname(full);
      // exact-case check: works on a Mac but breaks on the (case-sensitive) server otherwise
      const exact = fs.existsSync(dir) && fs.readdirSync(dir).includes(path.basename(full));
      if (!exact) warnings.push(`content/${lang}/${rel}: file "${r}" not found in /public (check upper/lower case)`);
    }
  }

warnings.forEach((w) => console.warn("⚠ ", w));
if (errors.length) {
  console.error("\n✖ Content problems found:\n");
  errors.forEach((e) => console.error(e + "\n"));
  process.exit(1);
}
console.log(`✔ Content OK (${langs.join(", ")})`);
