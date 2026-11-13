"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { asset } from "@/lib/assets";
import { locales, type Lang } from "@/lib/i18n";
import type { Site } from "@/lib/schemas";

const items = ["projects", "hardware", "work", "team", "teaching", "publications"] as const;

export function Header({ lang, site }: { lang: Lang; site: Site }) {
  const path = usePathname() ?? "";
  const [open, setOpen] = useState(false);
  const rest = path.replace(/^\/(en|de)/, "") || "/";
  const links = items.map((k) => ({ k, href: `/${lang}/${k}/`, label: site.nav[k] }));

  return (
    <header className="sticky top-0 z-40 border-b border-ink-800 bg-ink-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link href={`/${lang}/`} className="flex items-center gap-3" onClick={() => setOpen(false)}>
          {/* eslint-disable @next/next/no-img-element */}
          <img src={asset("images/corolab_logo_compact.svg")} alt={site.siteName} className="logo-light h-12 w-auto" />
          <img src={asset("images/corolab_logo_compact_on_dark.svg")} alt={site.siteName} className="logo-dark h-12 w-auto" />
          {/* eslint-enable @next/next/no-img-element */}
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Main">
          {links.map((l) => (
            <Link
              key={l.k}
              href={l.href}
              className={`text-sm font-medium transition hover:text-accent ${
                path.startsWith(l.href.replace(/\/$/, "")) ? "text-accent" : "text-ink-100"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <LangSwitch lang={lang} rest={rest} label={site.ui.language} />
          <ThemeToggle />
        </nav>

        <button
          className="rounded p-2 text-ink-100 md:hidden"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span className="block h-0.5 w-6 bg-current" />
          <span className="mt-1.5 block h-0.5 w-6 bg-current" />
          <span className="mt-1.5 block h-0.5 w-6 bg-current" />
        </button>
      </div>
      {open && (
        <nav className="border-t border-ink-800 px-6 py-4 md:hidden" aria-label="Mobile">
          <ul className="space-y-3">
            {links.map((l) => (
              <li key={l.k}>
                <Link href={l.href} onClick={() => setOpen(false)} className="block text-ink-100">
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="flex items-center gap-4">
              <LangSwitch lang={lang} rest={rest} label={site.ui.language} />
              <ThemeToggle />
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

function LangSwitch({ lang, rest, label }: { lang: Lang; rest: string; label: string }) {
  return (
    <span className="flex items-center gap-1 text-sm" aria-label={label}>
      {locales.map((l, i) => (
        <span key={l} className="flex items-center gap-1">
          {i > 0 && <span className="text-ink-600">/</span>}
          <Link
            href={`/${l}${rest}`}
            hrefLang={l}
            className={l === lang ? "font-bold text-accent" : "text-ink-300 hover:text-strong"}
          >
            {l.toUpperCase()}
          </Link>
        </span>
      ))}
    </span>
  );
}

function ThemeToggle() {
  const toggle = () => {
    const next = document.documentElement.dataset.theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
  };
  return (
    <button onClick={toggle} aria-label="Toggle light/dark mode" title="Light / dark" className="rounded p-1.5 text-ink-300 hover:text-accent">
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </svg>
    </button>
  );
}
