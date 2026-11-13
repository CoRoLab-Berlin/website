import Link from "next/link";
import { Img } from "@/components/Img";
import { Markdown } from "@/components/Markdown";
import { getPage, getSite } from "@/lib/content";
import { isLang } from "@/lib/i18n";
import * as S from "@/lib/schemas";

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: l } = await params;
  if (!isLang(l)) return null;
  const lang = l;
  const home = getPage(S.home, lang, "pages/home.md");
  const site = getSite(lang);
  if (!home) return null;
  const { data, body } = home;

  return (
    <div className="-mt-16">
      <section className="relative isolate overflow-hidden">
        <Img src={data.heroImage} className="absolute inset-0 -z-10 h-full w-full object-cover object-top opacity-50" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink-950 via-ink-950/40 to-transparent" />
        <div className="mx-auto flex min-h-[72vh] max-w-6xl flex-col justify-end pb-16 pt-32">
          <span className="mb-5 h-1 w-16 rounded bg-yellow-500" />
          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl">{data.heroTitle}</h1>
          {data.heroSubtitle && <p className="mt-4 max-w-2xl text-xl text-yellow-500">{data.heroSubtitle}</p>}
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={`/${lang}/projects/`}
              className="rounded-lg bg-yellow-500 px-5 py-2.5 font-semibold text-ink-950 hover:bg-yellow-400"
            >
              {site.nav.projects}
            </Link>
            <Link
              href={`/${lang}/contact/`}
              className="rounded-lg border border-ink-600 px-5 py-2.5 font-semibold text-white hover:border-yellow-500"
            >
              {site.nav.contact}
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-3xl">
        <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">{data.title}</h2>
        <Markdown className="text-lg">{body}</Markdown>
      </section>

      {data.images && data.images.length > 0 && (
        <section className="mx-auto mt-20 max-w-6xl">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {data.images.map((src) => (
              <Img key={src} src={src} className="aspect-[4/3] w-full rounded-lg object-cover" />
            ))}
          </div>
        </section>
      )}

      {data.logos && data.logos.length > 0 && (
        <section className="mx-auto mt-20 max-w-6xl">
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 rounded-xl bg-white/95 px-8 py-8">
            {data.logos.map((src) => (
              <Img key={src} src={src} className="h-12 w-auto object-contain" />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
