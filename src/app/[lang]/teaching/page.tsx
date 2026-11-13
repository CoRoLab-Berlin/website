import { notFound } from "next/navigation";
import { Card } from "@/components/Card";
import { NotTranslated, PageHeading } from "@/components/PageHeading";
import { getCollection, getSection, getSite, sortByOrder } from "@/lib/content";
import { isLang } from "@/lib/i18n";

export default async function Teaching({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const site = getSite(lang);
  const section = getSection(lang, "teaching");
  const items = sortByOrder(getCollection("teaching", lang));
  return (
    <div>
      <PageHeading title={section?.data.title ?? site.nav.teaching} intro={section?.data.description} />
      {section?.fallback && <NotTranslated text={site.ui.notTranslated} />}
      <div className="mx-auto mt-12 max-w-2xl space-y-6">
        {items.map((t) => (
          <Card
            key={t.slug}
            title={t.data.title}
            meta={[t.data.semester, t.data.sws ? `${t.data.sws} SWS` : ""].filter(Boolean).join(" · ")}
            description={t.data.description}
            image={t.data.image}
            href={t.data.link}
            external
          />
        ))}
      </div>
    </div>
  );
}
