import Link from "next/link";
import type { Lang } from "@/lib/i18n";
import type { Site } from "@/lib/schemas";

export function Footer({ lang, site }: { lang: Lang; site: Site }) {
  return (
    <footer className="mt-24 border-t border-ink-800">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm text-ink-400 sm:flex-row">
        <p>
          © {new Date().getFullYear()} {site.siteName}
          {site.footer.note ? ` · ${site.footer.note}` : ""}
        </p>
        <div className="flex gap-6">
          <Link href={`/${lang}/contact/`} className="hover:text-accent">
            {site.footer.contact}
          </Link>
          <Link href={`/${lang}/disclaimer/`} className="hover:text-accent">
            {site.footer.disclaimer}
          </Link>
        </div>
      </div>
    </footer>
  );
}
