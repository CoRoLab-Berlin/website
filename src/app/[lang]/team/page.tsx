import { notFound } from "next/navigation";
import { Img } from "@/components/Img";
import { Markdown } from "@/components/Markdown";
import { NotTranslated, PageHeading } from "@/components/PageHeading";
import { getSection, getSite, getTeamGroups } from "@/lib/content";
import { isLang } from "@/lib/i18n";

export default async function Team({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const site = getSite(lang);
  const section = getSection(lang, "team");
  const groups = getTeamGroups(lang);
  return (
    <div>
      <PageHeading title={section?.data.title ?? site.nav.team} intro={section?.data.description} />
      {section?.fallback && <NotTranslated text={site.ui.notTranslated} />}
      <div className="mx-auto mt-12 max-w-2xl space-y-14">
        {groups.map((g) => (
          <section key={g.role}>
            <h2 className="mb-6 text-sm font-semibold uppercase tracking-widest text-accent">{g.role}</h2>
            <ul className="space-y-5">
              {g.members.map((m) => (
                <li key={m.slug} className="flex gap-5 rounded-xl border border-ink-800 bg-ink-900/60 p-5">
                  <Img src={m.data.image} alt={m.data.name} className="h-24 w-24 shrink-0 rounded-full object-cover" />
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold text-strong">{m.data.name}</h3>
                    {m.data.description && <p className="mt-1 text-sm text-ink-300">{m.data.description}</p>}
                    {m.body && <Markdown className="mt-2 text-sm">{m.body}</Markdown>}
                    <p className="mt-3 flex flex-wrap gap-x-4 text-sm">
                      {m.data.scholar && <a className="text-accent hover:underline" href={m.data.scholar} target="_blank" rel="noopener noreferrer">Google Scholar</a>}
                      {m.data.website && <a className="text-accent hover:underline" href={m.data.website} target="_blank" rel="noopener noreferrer">Website</a>}
                      {m.data.email && <a className="text-accent hover:underline" href={`mailto:${m.data.email}`}>{m.data.email}</a>}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
