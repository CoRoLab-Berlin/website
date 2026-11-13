import { notFound } from "next/navigation";
import { Img } from "@/components/Img";
import { Markdown } from "@/components/Markdown";
import { NotTranslated, PageHeading } from "@/components/PageHeading";
import { getPage, getSite } from "@/lib/content";
import { isLang } from "@/lib/i18n";
import * as S from "@/lib/schemas";

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const site = getSite(lang);
  const p = getPage(S.page, lang, "pages/disclaimer.md");
  if (!p) notFound();
  return (
    <div>
      <PageHeading title={p.data.title} />
      {p.fallback && <NotTranslated text={site.ui.notTranslated} />}
      <div className="mx-auto mt-10 max-w-3xl">
        <Markdown>{p.body}</Markdown>
        {p.data.mapImage && <Img src={p.data.mapImage} className="mt-8 w-full rounded-lg" />}
      </div>
    </div>
  );
}
