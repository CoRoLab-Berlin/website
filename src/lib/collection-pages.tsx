import Link from "next/link";
import { notFound } from "next/navigation";
import { Card, CardGrid } from "@/components/Card";
import { Img } from "@/components/Img";
import { Markdown } from "@/components/Markdown";
import { NotTranslated, PageHeading } from "@/components/PageHeading";
import { allSlugs, getCollection, getEntry, getSection, getSite, sortByOrder } from "@/lib/content";
import { isLang, locales, type Lang } from "@/lib/i18n";

type Name = "projects" | "hardware" | "work";

export function listPage(name: Name) {
  return async function Page({ params }: { params: Promise<{ lang: string }> }) {
    const { lang: l } = await params;
    if (!isLang(l)) notFound();
    const lang: Lang = l;
    const site = getSite(lang);
    const section = getSection(lang, name);
    const entries = sortByOrder(getCollection(name, lang) as any[]);
    // newest projects first when there is no explicit order
    if (name === "projects")
      entries.sort(
        (a, b) =>
          (a.data.order ?? 1e6) - (b.data.order ?? 1e6) ||
          (b.data.timespan ?? "").localeCompare(a.data.timespan ?? ""),
      );
    return (
      <div>
        <PageHeading title={section?.data.title ?? site.nav[name]} intro={section?.data.description} />
        {section?.fallback && <NotTranslated text={site.ui.notTranslated} />}
        <CardGrid>
          {entries.map((e) => {
            const hasPage = !!e.body || name === "projects";
            const external = !hasPage && e.data.link;
            return (
              <Card
                key={e.slug}
                title={e.data.title}
                description={e.data.description}
                image={e.data.image ?? e.data.images?.[0]}
                meta={e.data.timespan}
                badge={e.data.status}
                href={hasPage ? `/${lang}/${name}/${e.slug}/` : external ? e.data.link : undefined}
                external={!!external}
              />
            );
          })}
        </CardGrid>
      </div>
    );
  };
}

export function detailPage(name: Name) {
  return {
    generateStaticParams() {
      return locales.flatMap((lang) => allSlugs(name).map((slug) => ({ lang, slug })));
    },
    async generateMetadata({ params }: { params: Promise<{ lang: string; slug: string }> }) {
      const { lang, slug } = await params;
      const e = isLang(lang) ? getEntry(name, lang, slug) : null;
      return { title: e?.data.title };
    },
    async Page({ params }: { params: Promise<{ lang: string; slug: string }> }) {
      const { lang: l, slug } = await params;
      if (!isLang(l)) notFound();
      const lang: Lang = l;
      const e: any = getEntry(name, lang, slug);
      if (!e) notFound();
      const site = getSite(lang);
      const images: string[] = e.data.images ?? (e.data.image ? [e.data.image] : []);
      return (
        <article className="mx-auto max-w-3xl">
          <Link href={`/${lang}/${name}/`} className="text-sm text-accent hover:underline">
            ← {site.nav[name]}
          </Link>
          <h1 className="mt-4 text-4xl font-bold text-strong">{e.data.title}</h1>
          {(e.data.timespan || e.data.status) && (
            <p className="mt-2 text-accent">{[e.data.timespan, e.data.status].filter(Boolean).join(" · ")}</p>
          )}
          {e.fallback && <NotTranslated text={site.ui.notTranslated} />}
          {e.data.description && <p className="mt-6 text-xl text-ink-200">{e.data.description}</p>}
          {images.length > 0 && (
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {images.map((src) => (
                <Img key={src} src={src} className="w-full rounded-lg object-cover" />
              ))}
            </div>
          )}
          <Markdown className="mt-8">{e.body}</Markdown>
          {e.data.link && (
            <a
              href={e.data.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-lg bg-yellow-500 px-5 py-2.5 font-semibold text-on-accent hover:bg-yellow-400"
            >
              {site.ui.readMore} →
            </a>
          )}
        </article>
      );
    },
  };
}
