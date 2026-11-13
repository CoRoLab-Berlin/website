import { Markdown } from "./Markdown";

export function PageHeading({ title, intro }: { title: string; intro?: string }) {
  return (
    <header className="mx-auto max-w-3xl text-center">
      <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">{title}</h1>
      {intro && <Markdown className="mt-6 text-lg">{intro}</Markdown>}
    </header>
  );
}

export function NotTranslated({ text }: { text: string }) {
  return (
    <p className="mx-auto mt-4 max-w-3xl rounded border border-yellow-700 bg-yellow-700/10 px-3 py-2 text-center text-sm text-yellow-300">
      {text}
    </p>
  );
}
