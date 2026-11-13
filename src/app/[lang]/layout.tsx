import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getSite } from "@/lib/content";
import { isLang, locales } from "@/lib/i18n";

export const dynamicParams = false;
export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const site = getSite(lang);
  return (
    <>
      <Header lang={lang} site={site} />
      <main className="px-6 pt-16">{children}</main>
      <Footer lang={lang} site={site} />
    </>
  );
}
