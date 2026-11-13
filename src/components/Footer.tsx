import Link from "next/link";
import { asset } from "@/lib/assets";
import type { Lang } from "@/lib/i18n";
import type { Site } from "@/lib/schemas";

export function Footer({ lang, site }: { lang: Lang; site: Site }) {
  return (
    <footer className="mt-24 border-t border-ink-800">
      <div className="mx-auto flex max-w-6xl justify-center px-6 pt-10">
        {/* eslint-disable @next/next/no-img-element */}
        <img src={asset("images/corolab_logo_clean.svg")} alt={site.siteName} className="logo-light h-24 w-auto" />
        <img src={asset("images/corolab_logo_clean_on_dark.svg")} alt={site.siteName} className="logo-dark h-24 w-auto" />
        {/* eslint-enable @next/next/no-img-element */}
      </div>
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
