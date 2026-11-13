import { notFound } from "next/navigation";
import { PageHeading } from "@/components/PageHeading";
import { Publications } from "@/components/Publications";
import { getCollection, getSection, getSite, sortByOrder } from "@/lib/content";
import { isLang } from "@/lib/i18n";

export default async function Pubs({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const site = getSite(lang);
  const section = getSection(lang, "publications");
  const groups = sortByOrder(getCollection("publications", lang)).map((g) => ({
    id: g.slug,
    title: g.data.title,
    body: g.body,
  }));
  return (
    <div>
      <PageHeading title={section?.data.title ?? site.nav.publications} intro={section?.data.description} />
      <Publications groups={groups} allLabel={site.ui.all} />
    </div>
  );
}
